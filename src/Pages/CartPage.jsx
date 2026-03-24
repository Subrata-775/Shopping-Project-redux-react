import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../Components/CartItem';
import { NavLink } from 'react-router-dom';

function CartPage() {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(
            cart.reduce((acc, curr) => acc + curr.price, 0)
        );
    }, [cart]);

    return (
        <div>
            {
                cart.length > 0 ? (
                    <>
                        <div>
                            {
                                cart.map((item, index) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        itemIndex={index}
                                    />
                                ))
                            }
                        </div>

                        <div>
                            <div>
                                <div>Your Cart</div>
                                <div>Summary</div>
                                <p>Total Items: {cart.length}</p>
                            </div>

                            <div>
                                <p>Total Amount: ${totalAmount}</p>
                                <button>CheckOut Now</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <h1>Cart Empty</h1>
                        <NavLink to="/">
                            <button>Shop Now</button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    );
}

export default CartPage;