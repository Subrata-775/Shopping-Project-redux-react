import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify"
import { addItems } from '../Redux/Slices/CartSlice';
import { removeItems } from '../Redux/Slices/CartSlice';


function Product({ post }) {
    // access cart 
    const cart = useSelector((state) => state.Cart?.cart) || [];
    // calling fun in redux
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(removeItems(post.id))
        toast.error("Item Remove From Cart")
    }
    const addToCart = () => {
        dispatch(addItems(post))
        toast.success("Item Add To Cart")
    }

    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            {
                // some() checks "does at least one item match?"
                cart.some((p) => p.id == post.id) ?
                    (<button onClick={removeFromCart}>Remove Item</button>) :
                    (<button onClick={addToCart}> Add to Cart</button>)
            }


        </div>
    )
}

export default Product