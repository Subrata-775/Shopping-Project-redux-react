
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeItems } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';

function CartItem({ item }) {
    const dispatch = useDispatch();

    const itemRemove = () => {
        dispatch(removeItems(item.id))
        toast.error("Item Removed.")
    }

    return (
        <div className='flex gap-6 border-b py-6'>

            {/* IMAGE */}
            <div className='w-[120px] h-[120px]'>
                <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-contain'
                />
            </div>

            {/* DETAILS */}
            <div className='flex flex-col justify-between flex-1'>

                <div>
                    <h1 className='text-lg font-semibold'>{item.title}</h1>
                    <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
                        {item.description}
                    </p>
                </div>

                <div className='flex justify-between items-center mt-4'>

                    <p className='text-green-600 font-bold text-lg'>
                        ${item.price}
                    </p>

                    <button
                        onClick={itemRemove}
                        className='bg-red-100 p-2 rounded-full hover:bg-red-200 transition'
                    >
                        <MdDelete className='text-red-600 text-xl' />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default CartItem;