import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleProduct = ({ singleProduct }) => {
    console.log(singleProduct);
    const { _id, productName, category, condition, originalPrice, price, productImage, usedFor, productDescription, addedDate, sellerInformation } = singleProduct;
    return (
        <Link className='bg-white hover:shadow-xl'>
            <img className='w-full h-48' src={productImage} alt="productImage" />
            <div className='p-4'>
                <h3 className='font-bold'>{productName}</h3>
                <p>$ {price}</p>
                <p><span className="leading-none align-baseline line-through text-red-600">$ {originalPrice}</span></p>
                <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <Rating
                        placeholderRating={5}
                        readonly={true}
                        emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
                        fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
                        placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
                    />
                </span>
            </div>
        </Link>
    );
};

export default SingleProduct;