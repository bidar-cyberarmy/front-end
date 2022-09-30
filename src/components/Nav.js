import React from 'react';
import logo from '../img/logo-bdca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
const Nav = (props) => {
    const location = useLocation();

    return (

        <div className="flex justify-between items-center py-3 px-5 ">
            <NavLink to={'/'}>
                <img src={logo} alt="" className='w-32' />
            </NavLink>
            <FontAwesomeIcon icon={faBars} className="block sm:hidden" size='xl' color={location.pathname === '/member' ? 'black' : 'white'} />
            <ul id="menuList" className={`space-x-7 font-semibold text-lg ${location.pathname === '/member' ?
                'text-black' : 'text-white'
                } hidden sm:flex`}>
                <li><a>Tentang Kami</a></li>
                <li><a>Galeri</a></li>
                <li>
                    <NavLink to={'/member'}>Anggota</NavLink>
                </li>
            </ul>

        </div>

    );
}

export default Nav;
