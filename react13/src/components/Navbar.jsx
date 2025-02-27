import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <h2>sheryians</h2>
                <input type="text" placeholder='Search here' />
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/product'>Product</Link>


                </div>
            </div>
        </div>
    )
}

export default Navbar