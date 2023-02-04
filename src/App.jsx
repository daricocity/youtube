import './app.scss'
import themes from './themes';
import { useContext } from 'react';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Watch from './pages/watch/Watch';
import { useSelector } from 'react-redux';
import Register from './pages/auth/Register';
import { ThemeProvider } from '@mui/material/styles';
import { AuthContext } from './context/authContext/AuthContext';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';

const App = () => {
    const { user } = useContext(AuthContext);
    const customization = useSelector((state) => state.customization);
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <Router>
                        <Routes>
                            {user && (
                                <>
                                    <Route path='/watch' element={<Watch/>} />
                                    <Route path='/movies' element={<Home type='movies'/>}/>
                                    <Route path='/series' element={<Home type='series'/>}/>
                                </>
                            )}
                            <Route path='/login' element={!user ? <Login/>: <Navigate to='/'/>}/>
                            <Route path='/' element={user ? <Home/> : <Navigate to='/login' />} />
                            <Route path='/register' element={!user ? <Register/> : <Navigate to='/'/>}/>
                        </Routes>
                    </Router>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
};

export default App;
