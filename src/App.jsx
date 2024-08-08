import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserDashboard from './pages/UserDashboard/UserDashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
