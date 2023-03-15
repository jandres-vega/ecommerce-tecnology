import React from 'react';
import {ListIcon} from '../../molecules/ListIcon';
import {Imagen} from '../../atoms/imagenes/Imagen';
import {ListMenu} from '../../molecules/ListMenu';
import logo from './assets/logo-1.png';
import MenuIcon from '@mui/icons-material/Menu';
import styleHeader from './header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


import {
    AppBar, Avatar,
    Box,
    Container,
    Menu,
    Toolbar,
} from '@mui/material';

let menuOptions = [
    {to: '/', a: 'Inicio'},
    {to: '/products', a: 'Productos'},
    {to: '/about-me', a: 'Sobre nosotros'},
    {to: 'Contact-me', a: 'Contactanos'}
]
let options = ['Login', 'Shopping', 'search']

let listIcon = [
    <SearchIcon sx={{fontSize: 30, color: 'black'}}/>,
    <ShoppingCartRoundedIcon sx={{fontSize: 30, color: 'black'}}/>,
    <PersonRoundedIcon sx={{fontSize: 30, color: 'black'}}/>
]

const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElNav2, setAnchorElNav2] = React.useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenNavMenu2 = (e) => {
        setAnchorElNav2(e.currentTarget);
    };
    const handleCloseNavMenu2 = () => {
        setAnchorElNav2(null);
    };

    return (
        <header className={styleHeader.div_header}>
            <AppBar>
                <Container>
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <Box sx={{
                            width: 90, height: 90,
                            display: {xs: 'none', md: 'flex'}
                        }}>
                            <Imagen img={logo}/>
                        </Box>

                        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                            <ListIcon icons={[<MenuIcon/>]} handleOpen={handleOpenNavMenu}/>
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'}
                            }}
                        >
                            <ListMenu list={menuOptions} handleClose={handleCloseNavMenu}/>
                        </Menu>
                        <Box sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            justifyContent: 'center'
                        }}>
                            <Imagen img={logo}/>
                        </Box>
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <ListMenu list={menuOptions}/>
                        </Box>
                        <Box sx={{display: {md: 'flex', xs: 'none'}}}>
                            <ListIcon icons={listIcon}/>
                        </Box>
                        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                            <ListIcon icons={[<Avatar/>]} handleOpen={handleOpenNavMenu2}/>
                        </Box>
                        <Menu open={Boolean(anchorElNav2)} onClose={handleCloseNavMenu2}
                              id="menu-appbar"
                              anchorEl={anchorElNav2}
                              anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'left'
                              }}
                              keepMounted
                              transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'left'
                              }}
                        >
                            <Box>
                                <ListMenu list={options}/>
                            </Box>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
};

export default Header;








