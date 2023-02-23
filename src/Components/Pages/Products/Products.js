import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import fourGrid from "../../../Assets/Images/grid-four.png";
import threeGrid from "../../../Assets/Images/grid-three.png";
import twoGrid from "../../../Assets/Images/grid-two.png";
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productFilter, setProductFilter] = useState("All");
    const { user } = useContext(AuthContext);
    useDynamicTitle("Products")

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

    // const availableProducts = allProducts.filter(product => !product.paid)
    let filteredProduct = [];
    if (productFilter === "All") {
        filteredProduct = allProducts;
    }
    else {
        filteredProduct = allProducts?.filter(product => product.category == productFilter);
    }

    return (
        <div className='lg:px-10 px-4 mt-5'>
            <div className='my-8 flex justify-end'>
                <select
                    name="category"
                    onChange={(e) => setProductFilter(e.target.value)}
                    required className="p-2 border border-neutral focus:outline-neutral">
                    <option selected value={"All"}>All</option>
                    <option value={"Computer & Accessories"}>Computer & Accessories</option>
                    <option value={"Smartphone & Tablet"}>Smartphone & Tablet</option>
                    <option value={"TV & Video"}>TV & Video</option>
                    <option value={"Camera & Drone"}>Camera & Drone</option>
                </select>
            </div>
            <div className=''>
                {/* <h3 className='text-3xl font-bold text-center pt-5'>Just For You</h3> */}
                <div className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5`}>
                    {
                        filteredProduct?.map(singleProduct =>
                            <SingleProduct
                                key={singleProduct._id}
                                singleProduct={singleProduct}
                            ></SingleProduct>)
                    }
                </div>
                {/* <div className='grid grid-cols-2 gap-5'>
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
                </div> */}
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