import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import SingleProduct from './SingleProduct';

const Products = () => {

    const { data: allProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["all-products"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-products`)
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

    const availableProducts = allProducts.filter(product => !product.paid)


    return (
        <div className='lg:w-[75%] mx-auto my-10'>
            <h3 className='text-2xl font-bold'>Just For You</h3>
            <div className='lg:grid grid-cols-4 gap-6'>
                {
                    availableProducts.map(singleProduct =>
                        <SingleProduct
                            key={singleProduct._id}
                            singleProduct={singleProduct}
                        ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;