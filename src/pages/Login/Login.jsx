import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import axios from 'axios';
import { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
      console.log('User logged in:', response.data);
    } catch (error) {
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <h1>Login</h1>

        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className={styles.navButton}>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <a
                  className="btn btn-block"
                  onClick={handleGoogleSignIn}
                  role="button"
                >
                  <i className="fab fa-google mx-3"></i>
                  Sign In with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
