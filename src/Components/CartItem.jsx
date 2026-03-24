import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeItems } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';

function CartItem({ item, itemIndex }) {
    const dispatch = useDispatch();

    const itemRemove = () => {
        dispatch(removeItems(item.id))
        toast.success("Item Removed.")
    }
    return (
        <div className='flex justify-between items-center'>
            {/* 1st */}
            <div>
                <img src={item.image} />
            </div>
            {/* 2nd */}
            <div className='flex flex-col justify-between items-center'>
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>{item.price}</div>
                    <div onClick={itemRemove}><MdDelete /></div>
                </div>

            </div>
        </div>
    )
}

export default CartItem