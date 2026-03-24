import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";

function NavBar() {
    return (
        <div className='flex justify-around items-center max-h-[100px] w-screen bg-blue-700 text-white'>

            <NavLink to='/'>
                <img
                    height="80px"
                    width="80px"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqTQJX9FG_WvQ8dkblbtqNQWOOTZUlO94iQ&s'
                    alt="logo"
                />
            </NavLink>

            <div className='flex gap-6 items-center'>
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>

                <NavLink to='/cart'>
                    <TiShoppingCart size={28} />
                </NavLink>
            </div>

        </div>
    )
}

export default NavBar;