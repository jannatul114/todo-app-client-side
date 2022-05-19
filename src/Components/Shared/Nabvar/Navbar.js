import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to={'/'}>Home</Link></li>
                        <li> <Link to={'/todo'}>Todo</Link></li>
                        <li> <Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ToDo app</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    <li> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/todo'}>Todo</Link></li>
                    {
                        !user ? <button className=' mx-2'><li><Link to={'/login'}>Login</Link></li></button> : <button onClick={handleSignOut} className=' mx-2 btn bg-purple-400 hover:bg-purple-500'>Signout</button>
                    }
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            {
                                user && <img src={'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} />
                            }

                        </div>
                    </div>
                </ul>
            </div>

        </div>

    );
};

export default Navbar;