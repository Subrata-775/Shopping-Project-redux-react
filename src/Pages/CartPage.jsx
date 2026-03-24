import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../Components/CartItem';
import { NavLink } from 'react-router-dom';

function CartPage() {
    const cart = useSelector((state) => state.Cart?.cart) || [];
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(
            cart.reduce((acc, curr) => acc + curr.price, 0)
        );
    }, [cart]);

    return (
        <div className="max-w-4xl mx-auto p-10">

            {
                cart.length > 0 ? (
                    <div className="flex flex-col md:flex-row gap-4">

                        {/* LEFT - CART ITEMS */}
                        <div className="flex-1">
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

                        {/* RIGHT - SUMMARY */}
                        <div className="w-full h-fit  md:w-[300px] bg-white shadow-lg rounded-xl p-6  sticky top-10">

                            <div className="mb-6">
                                <p className="text-gray-500 text-sm">YOUR CART</p>
                                <h2 className="text-2xl font-bold text-green-600">SUMMARY</h2>
                                <p className="mt-2 text-gray-600">
                                    Total Items: <span className="font-semibold">{cart.length}</span>
                                </p>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-lg font-semibold mb-4">
                                    Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span>
                                </p>

                                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                                    <NavLink to='/'>

                                        Checkout Now
                                    </NavLink>

                                </button>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                        <h1 className="text-2xl font-semibold">Cart Empty</h1>
                        <NavLink to="/">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                )
            }

        </div>
    );
}

export default CartPage;