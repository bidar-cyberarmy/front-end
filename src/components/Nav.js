import React from 'react';
import logo from '../img/logo-bdca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
const Nav = (props) => {
    const location = useLocation();

    let activeClassName = "border-blue-500 border-b-2  rounded-none";
    let notActive = "border-b-2 border-gray-200 rounded-none"
    let notActivenonMobile = ""
    return (

        <div className="flex justify-between items-center py-3 px-5 ">
            <NavLink to={'/'}>
                <img src={logo} alt="" className='w-32' />
            </NavLink>
            <div className="dropdown dropdown-end block sm:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <FontAwesomeIcon icon={faBars} color={location.pathname === '/member' ? 'black' : 'white'} />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 border-gray-200 border w-52 rounded-box">
                    <li className='mb-3'>
                        <NavLink
                            style={{ borderRadius: '0px' }}

                            className={({ isActive }) =>
                                isActive ? activeClassName : notActive
                            }
                            to={'/'} end
                        >Home</NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink
                            style={{ borderRadius: '0px' }}
                            to={'/member'}
                            className={({ isActive }) =>
                                isActive ? activeClassName : notActive
                            }
                        >Anggota</NavLink>
                    </li>



                </ul>
            </div>
            <ul id="menuList" className={`space-x-7 font-semibold text-lg ${location.pathname === '/member' ?
                'text-black' : 'text-white'
                } hidden sm:flex`}>

                <li >
                    <NavLink
                        style={{ borderRadius: '0px' }}

                        className={({ isActive }) =>
                            isActive ? activeClassName : notActivenonMobile
                        }
                        to={'/'} end
                    >Home</NavLink>
                </li>

                <li >
                    <NavLink
                        style={{ borderRadius: '0px' }}

                        className={({ isActive }) =>
                            isActive ? activeClassName : notActivenonMobile
                        }
                        to={'/member'} end
                    >member</NavLink>
                </li>
            </ul>

        </div>

    );
}

export default Nav;
