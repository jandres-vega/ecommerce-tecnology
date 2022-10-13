import React from 'react';
import { getProductByName } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import logo from './assets/logo-1.png';
import { Link } from 'react-router-dom';
import styleHeader from './header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuIcon from '@mui/icons-material/Menu';

import {
    AppBar, Avatar,
    Box, Button,
    Container, IconButton,
    Menu, MenuItem,
    TextField, Toolbar,
    Typography
} from '@mui/material';


let menuOptions = [
    { to : '/', a : 'Inicio' },
    { to : '/products', a : 'Productos' },
    { to : '/about-me', a : 'Sobre nosotros' },
    { to : 'Contact-me', a : 'Contactanos' }
]
let options = [ 'Login', 'Shopping', 'search' ]

const Header = () => {
    
    
    const dispatch = useDispatch();
    
    const [ anchorElNav, setAnchorElNav ] = React.useState( null );
    const [ anchorElNav2, setAnchorElNav2 ] = React.useState( null );
    const [ input, setInput ] = React.useState( null );
    
    
    const handleOpenNavMenu = ( e ) => {
        setAnchorElNav( e.currentTarget );
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav( null );
    };
    const handleOpenNavMenu2 = ( e ) => {
        setAnchorElNav2( e.currentTarget );
    };
    const handleCloseNavMenu2 = () => {
        setAnchorElNav2( null );
    };
    
    const handleInputSearch = ( e ) => {
        dispatch( getProductByName( e.target.value ) )
    }
    
    const inputSearch = () => {
        if( input === null ) setInput( true )
        else setInput( null )
    }
    
    return (
        <header>
            <AppBar>
                <Container>
                    <Toolbar sx={{ justifyContent : 'space-between' }}>
                        <Box sx={{ width: 90, height: 90,
                            display : { xs : 'none', md : 'flex' }
                        }}>
                            <img className={styleHeader.logo_img} src={logo} alt="logo-img"/>
                        </Box>
                        <Box sx={{ display : { xs : 'flex', md : 'none' } }}>
                            <IconButton color="inherit" onClick={handleOpenNavMenu}>
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                        
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical : 'bottom',
                                horizontal : 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical : 'top',
                                horizontal : 'left'
                            }}
                            open={Boolean( anchorElNav )}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display : { xs : 'block', md : 'none' }
                            }}
                        >
                            {
                                menuOptions.map( item => (
                                    <MenuItem key={item.to} onClick={handleCloseNavMenu}>
                                        <Link to={item.to}
                                              style={{ textDecoration : 'none', color : 'black' }}
                                        >
                                            <Typography textAlign="center">{item.a}</Typography>
                                        </Link>
                                    </MenuItem>
                                ) )
                            }
                        </Menu>
                        
                        <Box sx={{
                            mr : 2,
                            display : { xs : 'flex', md : 'none' },
                            flexGrow : 1,
                            justifyContent : 'center'
                        }}>
                            <img className={styleHeader.logo_img} src={logo} alt="logo-img"/>
                        </Box>
                        <Box sx={{ display : { xs : 'none', md : 'flex' } }}>
                            {
                                menuOptions.map( item => (
                                    <Link to={item.to}
                                          style={{ textDecoration : 'none', color : 'white' }}
                                          key={item.to}
                                    >
                                        <Button  key={item} sx={{
                                            my : 2,
                                            color : 'white',
                                            display : 'block',
                                            mr : 5,
                                            alignItems : 'center'
                                        }}>
                                            {item.a}
                                        </Button>
                                    </Link>
                                ) )
                            }
                        </Box>
                        {
                            input ? <TextField sx={{width: 200}}  onChange={( e ) => handleInputSearch( e )} id="standard-basic"
                                               label="Standard" variant="standard" /> : null
                        }
                        <Box sx={{ display : { md : 'flex', xs : 'none' } }}>
                            <IconButton onClick={inputSearch}>
                                <SearchIcon sx={{ color : 'black', m : 1 }} size="string" color="black"
                                            fontSize={'large'}/>
                            </IconButton>
                            <IconButton>
                                <ShoppingCartRoundedIcon sx={{ color : 'black', m : 1 }} size="string" color="black"
                                                         fontSize={'large'}/>
                            </IconButton>
                            <IconButton>
                                <PersonRoundedIcon sx={{ color : 'black', m : 1 }} size="string" color="black"
                                                   fontSize={'large'}/>
                            </IconButton>
                        </Box>
                        <Box sx={{ display : { xs : 'flex', md : 'none' } }}>
                            <IconButton color="inherit" onClick={handleOpenNavMenu2}>
                                <Avatar/>
                            </IconButton>
                        </Box>
                        
                        <Menu open={Boolean( anchorElNav2 )} onClose={handleCloseNavMenu2}
                              id="menu-appbar"
                              anchorEl={anchorElNav2}
                              anchorOrigin={{
                                  vertical : 'bottom',
                                  horizontal : 'left'
                              }}
                              keepMounted
                              transformOrigin={{
                                  vertical : 'top',
                                  horizontal : 'left'
                              }}
                        >
                            {
                                options.map( item => (
                                    <MenuItem key={item}>
                                        <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                ) )
                            }
                        </Menu>
                    
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
};

export default Header;

