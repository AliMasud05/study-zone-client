import React from 'react';
import { useContext } from 'react';

import { Link} from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut, handleTheme }=useContext(AuthContext);
    console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div className="sticky top-0  z-50 navbar bg-base-100 lg:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>HOME</Link></li>
                        <li><Link>COURSES</Link></li>

                        <li><Link>FAQ</Link></li>
                        <li><Link>BLOG</Link></li>
                        <li><Link to='register'>REGISTER</Link></li>
                        <li><Link to='/login'>LOGIN</Link></li>
                        <input type="checkbox" className="toggle toggle-md" checked />
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>HOME</Link></li>
                    <li><Link to='/courses'>COURSES</Link></li>
                    
                    <li><Link>FAQ</Link></li>
                    <li><Link to='/blog'>BLOG</Link></li>

                        <button onClick={handleLogOut}>LOGOUT</button>
                    <li><Link to='/register'>REGISTER</Link></li>
                    <li><Link to='/login'>LOGIN</Link></li>
                    
                    <li><Link to='/checkout'>CHECKOUT</Link></li>
                    <li onClick={handleTheme}><p>theme</p></li>
                </ul>
            </div>
            <div className="navbar-end">
                <span>{user?.displayName}</span>
                <img className='rounded-lg w-12 h-12' src={user?.photoUrl} alt="" />
            </div>
        </div>
    );
};

export default Header;