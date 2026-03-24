import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';

function NavBar({ item }) {
    const cart = useSelector((state) => state.Cart?.cart) || [];
    return (
        <nav className='flex  mx-auto justify-between items-center h-20 max-w-6xl  text-white'>

            <NavLink to='/'>
                <img className='h-14 ml-5'

                    src='../logo192.png'
                    alt="logo"

                />
            </NavLink>

            <div className='flex  font-medium text-slate-100 items-center mr-5 space-x-6'>
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>

                <NavLink to='/cart' className='relative'>
                    <TiShoppingCart size={28} />
                    {
                        cart.length > 0 &&

                        <span className='absolute -top-1 -right-2 bg-green-600
                        text-xs w-5 h-5 flex justify-center items-center 
                        animate-bounce rounded-full text-white'>{cart.length}</span>
                    }

                </NavLink>
            </div>

        </nav>
    )
}

export default NavBar;