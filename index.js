/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import pg from 'pg';
import cors from 'cors';
import session from 'express-session';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get(
  '/auth/google/dashboard',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to dashboard.
    res.redirect('http://localhost:5173/dashboard');
  }
);

app.post('/register', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const checkResult = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send('Email already exists. Try logging in.');
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const result = await db.query(
            'INSERT INTO users (email, password) VALUES ($1, $2)  RETURNING *',
            [email, hash]
          );
          const user = result.rows[0];
          console.log(user);
          req.login(user, (err) => {
            if (err) {
              console.log(err);
              res.redirect('/dashboard');
            }
          });
          res.status(201).json(result.rows[0]);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post('/login', async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPasword = user.password;
      if (password === storedPasword) {
        res.status(200).json(user);
        console.log(user);
      } else {
        res.send('Incorrect password');
      }
    } else {
      res.send('User not Found');
    }
  } catch (error) {
    console.log(err);
  }
});

app.get('/dashboard', (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.json({ message: 'Welcome to the dashboard', user: req.session.user });
  } else {
    res.redirect('/login');
    return res.status(401).json({ message: 'Not authenticated' });
  }
});

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/dashboard',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(profile._json.email);

        const result = await db.query('SELECT * FROM users WHERE email = $1', [
          profile._json.email,
        ]);
        if (result.rows.length === 0) {
          const newUser = await db.query(
            'INSERT INTO users (email, password) VALUES($1 , $2)',
            [profile._json.email, 'google']
          );
          cb(null, newUser.rows[0]);
        } else {
          cb(null, result.rows[0]);
        }
      } catch {
        cb('error');
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
