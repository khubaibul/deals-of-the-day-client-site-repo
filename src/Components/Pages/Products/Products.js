import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { user } = useContext(AuthContext);

    const { data: allProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["all-products"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-products`)
            .then(res => res.json())
    })

    const handleWishList = product => {

        const wishlistProduct = {
            productId: product._id,
            productName: product.productName,
            buyerEmail: user.email
        }

        fetch(`${process.env.REACT_APP_API_URL}/add-to-wishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(wishlistProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${product.productName} Added Successfully To Your Wishlist...`);
                }
                else {
                    toast.error(`${data.message}`)
                }
            })
    }

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
        <div>
            <div className='bg-yellow-300'>
                <h3 className='text-3xl font-bold text-center pt-5'>Just For You</h3>
                {/* {
                    availableProducts.map(singleProduct =>
                        <SingleProduct
                            key={singleProduct._id}
                            singleProduct={singleProduct}
                        ></SingleProduct>)
                } */}
                {
                    availableProducts?.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                            setSelectedProduct={setSelectedProduct}
                            handleWishList={handleWishList}
                        />
                    )
                }
            </div>
            <div>
                {
                    selectedProduct && <BookingModal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></BookingModal>
                }
            </div>
        </div>
    );
};

export default Products;