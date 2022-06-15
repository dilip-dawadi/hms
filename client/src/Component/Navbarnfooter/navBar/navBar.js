import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { LOGOUT } from '../../redux/constants/actionTypes';

const pages = ['home', 'food', 'room', 'contact'];

const ResponsiveAppBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { AsingleUser } = useSelector((state) => state.Auth);
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
    const logout = () => {
        dispatch({ type: LOGOUT });
        navigate('/auth');
        setUser(null);
    };
    React.useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar position="fixed" style={{
            backgroundColor: 'transparent',
            // boxShadow: 'none',
            zIndex: '100',
        }}>
            <Container maxWidth="xl" sx={{
                margin: '0',
                padding: '0',
            }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: 'flex', mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Prabandak
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <NavLink to={`${page}`} textAlign="center" style={{
                                        textDecoration: 'none',
                                        margin: 'auto',
                                        color: 'black',
                                        fontWeight: 300,
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                    }}>{page}</NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{
                        paddingLeft: '7rem',
                    }}>
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu} style={{
                                marginRight: '4rem',
                            }}>
                                <NavLink to={`${page}`} textAlign="center" style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontWeight: 600,
                                    letterSpacing: '2px',
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                }}>{page}</NavLink>
                            </MenuItem>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {user ? <Tooltip title="Open Profile"><IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="A" src={`${user?.result?.selectedFile}`} style={{
                                backgroundColor: 'black',
                            }} />
                        </IconButton></Tooltip> : <Tooltip title="Login"><MenuItem key={'auth'} onClick={handleCloseUserMenu} style={{
                            backgroundColor: '#595775',
                            borderRadius: '10%',
                            marginRight: '3rem',
                            padding: '0.4rem 1.4rem',
                        }}>
                            <NavLink to='/auth' style={{
                                textDecoration: 'none',
                                color: 'White',
                                fontWeight: 600,
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                            }}>Sign</NavLink>
                        </MenuItem></Tooltip>}

                        {user &&
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key={'profile'} onClick={handleCloseUserMenu}>
                                    <NavLink to='profile' style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontWeight: 300,
                                        letterSpacing: '1px',
                                        textTransform: 'capitalize',
                                    }}>profile</NavLink>
                                </MenuItem>
                                <MenuItem key={'Logout'} onClick={handleCloseUserMenu}>
                                    <Button style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontWeight: 300,
                                        letterSpacing: '1px',
                                        textTransform: 'capitalize',
                                    }} onClick={logout}>Logout</Button>
                                </MenuItem>
                            </Menu>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
