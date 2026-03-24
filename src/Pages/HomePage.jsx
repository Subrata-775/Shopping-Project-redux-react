import { useEffect, useState } from 'react'
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

                    (
                        <div className='flex justify-center items-center h-screen'>
                            <Spinner />
                        </div>) :
                    (posts.length === 0 ? (<div className='flex justify-center items-center'><p>No data Found</p></div>) : (
                        <div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10  space-x-5 min-h-[80vh]'>
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