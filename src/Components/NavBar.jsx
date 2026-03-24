import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";

function NavBar() {
    return (
        <div className='flex flex-row justify-around items-center max-h-[100px] w-screen bg-blue-700'>
            <NavLink to='/'>
                <div>
                    <img height="100px" width='100px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqTQJX9FG_WvQ8dkblbtqNQWOOTZUlO94iQ&s' />
                </div>
            </NavLink>
            <div className='flex flex-row justify-around items-center'>
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/cart'>
                    <TiShoppingCart />
                </NavLink>
            </div>

        </div>
    )
}

export default NavBar