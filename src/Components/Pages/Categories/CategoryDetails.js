import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const CategoryDetails = () => {

    const categoryProducts = useLoaderData();
    const { category_name } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { user } = useContext(AuthContext);



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


    return (
        <div className='h-screen mt-10'>
            <h2 className="mb-5 text-3xl text-center font-bold text-yellow-500">Product Under {category_name}</h2>
            {
                categoryProducts.length < 1 && <h2 className="mb-5 text-xl text-center font-bold text-red-500">No Product Available Now. Stay With Us. Or Try Another Category.</h2>
            }
            <div>
                {
                    categoryProducts.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                        handleWishList={handleWishList}
                    >
                    </Product>)
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

export default CategoryDetails;