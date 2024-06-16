import { Link, NavLink } from "react-router-dom";
import logo from "/Wizarding_World_Logo.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

function Header() {
    const { user, logOut } = useContext(AuthContext);

    const logOutUser = () =>{
        logOut()
    }

    const NavLinks = () => {
        return <>
            <li><NavLink className="bg-gray-100" to='/'>Home</NavLink></li>
            <li><NavLink className="bg-gray-100" to='/castle'>Castle</NavLink></li>
            <li><NavLink className="bg-gray-100" to='/about'>About</NavLink></li>
            <li><NavLink className="bg-gray-100" to='/contact-us'>Contact Us</NavLink></li>
        </>
    }

    return <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl w-32 h-fit"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <NavLinks></NavLinks>
                </ul>
            </div>
            {user ?
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Profile" src={user?.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="z-50 mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to='/settings'>Settings</Link></li>
                        <li onClick={logOutUser}><Link>Logout <span className="material-symbols-outlined">logout</span></Link></li>
                    </ul>
                </div>
                </div>
                :
                <div className="navbar-end">
                    <Link to="/login" className="btn">Login</Link>
                </div>
            }
        </div>
    </>
}

export default Header;