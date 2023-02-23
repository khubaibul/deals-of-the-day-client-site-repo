import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import ReactImageMagnify from 'react-image-magnify';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import SmallSpinner from '../../Shared/Button/SmallSpinner';

const ProductDetails = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const { user } = useContext(AuthContext);
    const product = useLoaderData();

    const { _id, category, price, productDescription, productImage, productName, productBrand, sellerInformation, warranty, deliveryTime, availability } = product;
    const { sellerName, sellerEmail } = sellerInformation;



    const stock = parseInt(availability) - product?.sell;
    console.log(stock);
    // Handle Add To Cart
    const handleAddToCart = product => {
        setLoading1(true);

        const addToCartProduct = {
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            productId: product._id,
            product
        }

        fetch(`${process.env.REACT_APP_API_URL}/add-to-cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`${productName} Booked Successfully...`);
                    setLoading1(false);
                }
                else {
                    toast.error(data.message);
                    setLoading1(false);
                }
            })

    }





    // Handle WishList
    const handleWishList = product => {
        setLoading2(true);
        const wishlistProduct = {
            productId: product._id,
            buyerEmail: user?.email,
            buyerName: user?.displayName,
            product

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
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`${product.productName} Added Successfully To Your Wishlist...`);
                    setLoading2(false);
                }
                else {
                    toast.error(`${data.message}`);
                    setLoading2(false);
                }
            })
    }



    return (
        <section className='lg:flex md:flex lg:flex-row md:flex-row flex-col lg:px-20 md:px-12 px-4 my-10 gap-x-10'>
            <div className='flex flex-col gap-y-8 lg:w-[40%] md:w-[40%]'>
                {/* <img src={productImage} className="lg:w-[500px] md:w-72 w-96" alt="" /> */}
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Product',
                        isFluidWidth: true,
                        src: productImage
                    },
                    largeImage: {
                        alt: 'Product',
                        src: productImage,
                        width: 900,
                        height: 600
                    }
                }} />
            </div>
            <div className='lg:w-[30%] md:w-[60%] flex flex-col gap-y-5 mt-8 md:mt-0 lg:mt-0'>
                <div>
                    <h3 className="font-semibold text-2xl tracking-wide text-neutral">{productName}</h3>
                    <div className='flex gap-x-4'>
                        <span className='bg-slate-200 px-2 py-0.5 rounded-lg'>Brand: {productBrand}</span>
                        <span className='bg-slate-200 px-2 py-0.5 rounded-lg'>Availability:
                            {
                                parseInt(availability) > 0 ? " In stock" : "Out of stock"
                            }
                        </span>
                    </div>
                    <p className='text-sm font-sans mt-1.5 text-justify'>{productDescription}</p>
                </div>
                {/* Dynamic ProductDetails Start */}
                <div>
                    <h3 className="font-semibold text-xl tracking-wide">Specification</h3>
                    {
                        category === "Computer & Accessories" &&
                        <div className='flex flex-col gap-y-1 mt-1.5'>
                            <h5>Category - {category}</h5>
                            <h5>CPU - {product?.productDetails?.cpu}</h5>
                            <h5>RAM - {product?.productDetails?.ram}GB</h5>
                            <h5>Storage - {product?.productDetails?.ssd}GB</h5>
                            <h5>GPU - {product?.productDetails?.gpu}</h5>
                            <h5>Casing - {product?.productDetails?.casing}</h5>
                            <h5>Form Factor - {product?.productDetails?.pcFormFactor}</h5>
                        </div>
                    }
                    {
                        category === "Smartphone & Tablet" &&
                        <div className='flex flex-col gap-y-1 mt-1.5'>
                            <h5>Category - {category}</h5>
                            <h5>Processor - {product?.productDetails?.phoneProcessor}</h5>
                            <h5>RAM - {product?.productDetails?.phoneram}GB</h5>
                            <h5>ROM - {product?.productDetails?.phonerom}GB</h5>
                            <h5>Main Camera - {product?.productDetails?.phoneMainCamera}MP</h5>
                            <h5>FrontCamera - {product?.productDetails?.phoneFrontCamera}MP</h5>
                            <h5>Display Size - {product?.productDetails?.phoneDisplaySize}inch</h5>
                            <h5>Display Resolution - {product?.productDetails?.phoneDisplayQuality}</h5>
                            <h5>Battery - {product?.productDetails?.phoneBattery}mAH</h5>
                            <h5>Operating System - {product?.productDetails?.phoneOS}</h5>
                            <h5>Sensors - {product?.productDetails?.phoneSensor}</h5>
                        </div>
                    }
                    {
                        category === "Camera & Drone" &&
                        <div className='flex flex-col gap-y-1 mt-1.5'>
                            <h5>Category - {category}</h5>
                            <h5>Form Factor - {product?.productDetails?.cameraFormFactor}</h5>
                            <h5>Resolution - {product?.productDetails?.cameraResolution}MP</h5>
                            <h5>Max Video Quality - {product?.productDetails?.videoQuality}</h5>
                            <h5>Stabilization - {product?.productDetails?.stabilization}</h5>
                            <h5>Screen Size - {product?.productDetails?.cameraScreenSize}inch</h5>
                            <h5>Sensor Size - {product?.productDetails?.cameraSensorSize}inch</h5>
                        </div>
                    }
                    {
                        category === "TV & Video" &&
                        <div className='flex flex-col gap-y-1 mt-1.5'>
                            <h5>Category - {category}</h5>
                            <h5>Size - {product?.productDetails?.displaySize}inch</h5>
                            <h5>Panel - {product?.productDetails?.displayPanel}</h5>
                            <h5>Screen Resolution - {product?.productDetails?.displayQuality}</h5>
                            <h5>PowerConsumption - {product?.productDetails?.powerConsumption}W</h5>
                        </div>
                    }
                </div>
                {/* Dynamic ProductDetails End */}
                <div className='flex'>
                    {
                        [...Array(5)].map((rating, i) =>
                            <svg key={i} className="w-6 h-6 text-[#183661]" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>)
                    }
                    <span className='ml-1'>(9)</span>
                </div>
            </div>
            <div className='flex flex-col gap-y-7'>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex gap-x-8'>
                        <h3 className="font-semibold text-xl tracking-wide">Seller Information</h3>
                        {/* {
                            verification && <span className="bg-blue-100 text-blue-800 px-2 text-xs flex justify-center items-center font-semibold rounded dark:bg-blue-200 dark:text-blue-800">{verification}</span>
                        } */}
                    </div>
                    <h5>{sellerName}</h5>
                    <h5 className='flex items-center gap-x-1'>
                        <HiOutlineMail />
                        {sellerEmail}
                    </h5>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center gap-x-2'>
                        <img src="https://img.icons8.com/ios/50/null/security-checked--v1.png" className='w-4' alt='warranty' />
                        <p>Warranty {warranty} years</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src="https://img.icons8.com/ios/50/null/in-transit--v1.png" className='w-4' alt='shipping' />
                        <p>Shipping within {deliveryTime} days</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src="https://img.icons8.com/ios-filled/50/null/u-turn-to-left.png" className='w-4' alt='return' />
                        <p>Easy Return</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>Original Price</h5>
                        <h5><span className='text-red-600 font-bold mr-1'>&#x2715;</span> BDT {price + 1000}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>Discount</h5>
                        <h5>BDT {1000}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>Special Price</h5>
                        <h5><span className='text-blue-600 font-bold mr-1'>&#10003;</span>BDT {price}</h5>
                    </div>
                    <div>
                        <span className='text-sm bg-yellow-100 px-1.5 py-0.5 rounded'>Only {stock} items in stock</span>
                    </div>
                </div>
                <div className='flex justify-between gap-x-6'>
                    <button
                        disabled={stock < 1}
                        onClick={() => handleAddToCart(product)}
                        className={`bg-yellow-500 text-white hover:bg-yellow-600 font-medium px-5 py-1 text-center w-36 cursor-pointer ${stock < 1 && "opacity-25"}`}>
                        {
                            loading1 ? <SmallSpinner /> : "Add To Cart"
                        }
                    </button>
                    <button
                        disabled={stock < 1}
                        onClick={() => handleWishList(product)}
                        className={`bg-[#183661] hover:bg-[#183699] text-white font-medium px-5 py-1 text-center w-36 ${stock < 1 && "opacity-25"}`}>
                        {
                            loading2 ? <SmallSpinner /> : "Add To Wishlist"
                        }
                    </button>
                </div>
            </div>
            {/* <div>
                {
                    selectedProduct && <BookingModal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></BookingModal>
                }
            </div> */}
        </section >
    );
};

export default ProductDetails;