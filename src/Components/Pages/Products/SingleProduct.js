import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleProduct = ({ singleProduct }) => {
    const { _id, productName, price, productImage, sellerInformation } = singleProduct;
    return (
        <Link to={`/product-details/${_id}`} className='bg-white hover:shadow-xl overflow-hidden transition-all duration-300'>
            <img className='w-96 h-80 hover:scale-105 transition-all duration-300' src={productImage} alt="productImage" />
            <div className='p-4 flex flex-col gap-y-1.5'>
                <h3 className='font-bold'>{productName}</h3>
                <p className=''>BDT {price}</p>
                <div>
                    <Rating
                        placeholderRating={5}
                        readonly={true}
                        emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
                        fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
                        placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
                    />
                    <span className='text-base ml-1.5'>(9)</span>
                </div>
            </div>
        </Link>
    );
};

export default SingleProduct;