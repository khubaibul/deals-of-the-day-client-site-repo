import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import MyProduct from './MyProduct';

const MyProducts = () => {

    useDynamicTitle("MyProducts-Dashboard")
    const { user } = useContext(AuthContext);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["myProducts", user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/myProducts?email=${user?.email}`)
            .then(res => res.json())
    })


    if (isLoading) {
        return <div className='flex justify-center'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }


    const handleProductDelete = myProduct => {
        fetch(`${process.env.REACT_APP_API_URL}/delete-product/${myProduct?._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${myProduct.productName} Deleted Successfully...`);
                    refetch();
                }
            })
    }

    const handleProductAdvertise = _id => {
        console.log(_id);
        fetch(`${process.env.REACT_APP_API_URL}/feature-product`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("deals-of-the-day")}`
            },
            body: JSON.stringify({ _id })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`Added For Advertisement...`);
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <section>
            {
                myProducts?.length > 0 &&
                <table className="border-collapse w-full lg:mr-20 my-10">
                    <thead className='bg-yellow-500'>
                        <tr>
                            <th className="p-3 font-bold uppercase text-gray-700 border border-neutral hidden lg:table-cell">Image</th>
                            <th className="p-3 font-bold uppercase text-gray-700 border border-neutral hidden lg:table-cell">Product Name</th>
                            <th className="p-3 font-bold uppercase text-gray-700 border border-neutral hidden lg:table-cell">Price</th>
                            <th className="p-3 font-bold uppercase text-gray-700 border border-neutral hidden lg:table-cell">Sold Status</th>
                            <th className="p-3 font-bold uppercase text-gray-700 border border-neutral hidden lg:table-cell">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts?.map(myProduct =>
                                <MyProduct
                                    key={myProduct._id}
                                    myProduct={myProduct}
                                    handleProductDelete={handleProductDelete}
                                    handleProductAdvertise={handleProductAdvertise}
                                ></MyProduct>
                            )
                        }
                    </tbody>
                </table>
            }
            {
                myProducts.length < 1 &&
                <div className='flex justify-center items-center mt-56 ml-56'>
                    <h3 className='text-center text-lg w-full'>
                        You Haven't Any Products Added Yet. Please
                        <Link to="/dashboard/add-product" className='underline underline-offset-2 ml-1 text-info'>  Add Product...</Link>
                    </h3>
                </div>
            }
        </section>
    );
};

export default MyProducts;