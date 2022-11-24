import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const CategoryDetails = () => {
    const categoryProducts = useLoaderData();
    const { category_name } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    return (
        <div className='h-screen mt-10'>
            <h2 className="mb-5 text-3xl text-center font-bold text-yellow-500">Product Under {category_name}</h2>
            <div>
                {
                    categoryProducts.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
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