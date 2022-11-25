import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["myProducts", user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/myProducts?email=${user?.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <div className='flex justify-center mt-10'>
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




    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
            <thead className='bg-yellow-500'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Product Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    myProducts.length < 1 && <h3 className='text-center text-lg h-screen w-full flex justify-center items-center'>
                        You Haven't Any Products Added Yet. Please
                        <Link to="/add-product" className='underline underline-offset-2 ml-1'>  Add Product...</Link></h3>
                }
                {
                    myProducts?.map(myProduct =>
                        <MyProduct
                            key={myProduct._id}
                            myProduct={myProduct}
                            handleProductDelete={handleProductDelete}
                        ></MyProduct>
                    )
                }
            </tbody>
        </table>
    );
};

export default MyProducts;