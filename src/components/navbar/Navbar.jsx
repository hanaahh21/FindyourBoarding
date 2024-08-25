import { useState } from 'react';
import "./navbar.scss"
import { Link } from 'react-router-dom';

function Navbar() {
    const [open,setOpen] = useState(false);
    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/favicon.png" alt="" />
                    <span>FindyourBoarding</span>
                    </a>
                    <a href="/">Home</a>
                    <a href="/about">About</a> 
                    <a href="/contact">Contact</a>
                    <a href="/renters">Renters</a>
                    </div>
            <div className="right">
                {user ? (<div className='user'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" alt="" />
                    <span>John Doe</span>
                    <Link to="/profile" className='profile'> 
                    <div className="notification">3</div> 
                    <span>Profile</span>
                    </Link>
                </div>) : (<>
                <a href="/login">Login</a>
                <a href="/register" className="register">
                Register
                </a>
                </>
                )}
                <div className="menuIcon">
                    <img 
                        src="/menu.png"
                         alt=""
                          onClick={()=>setOpen((prev) => !prev)}
                     />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/about">About</a> 
                    <a href="/contact">Contact</a>
                    <a href="/renters">Renters</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;