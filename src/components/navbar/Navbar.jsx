import './navbar.scss';
import { Grid } from '@mui/material';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../context/authContext/apiCall';
import { AuthContext } from '../../context/authContext/AuthContext';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    const handleLogout = () => {
        logout(dispatch);
        navigate('/login', { replace: true });
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <Grid>
                <div className="container">
                    <div className="left">
                        <img
                            src="img/logo.png"
                            alt=""
                        />
                        <Link to='/' className='link'>
                            <span>Home</span>
                        </Link>
                        <Link to='/series' className='link'>
                            <span className='navbarmainLinks'>Series</span>
                        </Link>
                        <Link to='/movies' className='link'>
                            <span className='navbarmainLinks'>Movies</span>
                        </Link>
                        <span>New and Popular</span>
                        <span>My List</span>
                    </div>
                    <div className="right">
                        <Search className='icon'/>
                        <span>KID</span>
                        <Notifications className='icon'/>
                        <img
                            src="img/pro.webp"
                            alt=""
                        />
                        <div className="profile">
                            <ArrowDropDown className='icon'/>
                            <div className="options">
                                <span>Settings</span>
                                <span onClick={handleLogout}>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    ) 
}

export default Navbar
