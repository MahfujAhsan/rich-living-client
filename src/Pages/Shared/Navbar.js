import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Group 33069.png"
import auth from '../../firebase.int';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li className='mx-3 font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='mx-3 my-3 lg:my-0 font-bold'><NavLink to="/admin">Admin</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 lg:px-12">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img style={{ maxWidth: 100 }} src={logo} alt="" />
                </Link>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 mx-auto">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOut} className="btn font-bold text-white">SignOut</button> : <Link to="/login" className="btn font-bold text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;