import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Spinner from '../Components/Spinner';



function HomePage() {
    const API_URL = "https://fakestoreapi.com/products"
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    // async function call by useEffect for featching data from URL 
    async function fetchData() {
        setLoading(true)
        try {

            const result = await fetch(API_URL);
            const data = await result.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log("data fetch Error")
            setPosts([]);
            setLoading(true)
        }
        setLoading(false)

    };


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>

            {
                loading ?
                    (<Spinner />) :
                    (posts.length === 0 ? (<div><p>No data Found</p></div>) : (
                        <div>
                            {

                                posts.map((post) => (
                                    <Product key={post.id} post={post} />
                                ))
                            }
                        </div>
                    ))
            }

        </div>
    )
}


export default HomePage;