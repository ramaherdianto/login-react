import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import WelcomePage from './pages/welcome.jsx';
import { ProfilePage } from './pages/profile.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/welcome' element={<WelcomePage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
};

export default App;
