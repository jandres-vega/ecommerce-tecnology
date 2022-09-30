import React from 'react';
import logo from './assets/logo-1.png';
import '../../styles/_global.scss';
import {Link} from 'react-router-dom';
import styleHeader from './header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';



let menuOptions = [
    {to: '/', a: 'Inicio'},
    {to: '/products', a: 'Productos'},
    {to: '/about-me', a: 'Sobre nosotros'},
    {to: 'Contact-me', a: 'Contactanos'}
]

const Header = () => {
    let cont = 0;
    return (
        <header className={styleHeader.containerHeader}>
            <div className={styleHeader.div_logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav className={styleHeader.navBar}>
                {
                    menuOptions.map (index => (
                        <Link to={index.to}
                            style={{textDecoration: 'none', color: 'white'}}
                              key={index.to}
                        >
                            <li>
                                <button>{index.a}</button>
                            </li>
                        </Link>
                    ))
                }
            < /nav>
            <div className={styleHeader.div_icon_header}>
                <FontAwesomeIcon className={styleHeader.icon} icon={faMagnifyingGlass}/>
                <FontAwesomeIcon className={styleHeader.icon} icon={faCartShopping}/>
                <FontAwesomeIcon className={styleHeader.icon} icon={faUser}/>
            </div>
        </header>
    );
};

export default Header;