import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import SmallSpinner from '../../Shared/Button/SmallSpinner';
// import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const AddProducts = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext)

    // useDynamicTitle("Add Food - Admin Dashboard")

    const handleAddFood = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const originalPrice = parseInt(form.originalPrice.value);
        const price = parseInt(form.price.value);
        const usedFor = parseInt(form.usedFor.value);
        const image = form.image.files[0];
        console.log(image);
        const sellerInformation = {
            sellerName: form.sellerName.value,
            sellerLocation: form.sellerLocation.value,
            sellerPhoneNumber: form.sellerPhoneNumber.value
        }
        const productDescription = form.description.value;


        const fullDate = new Date();
        const addedDate = fullDate.getDate() + "/" + (fullDate.getMonth() + 1) + "/" + fullDate.getFullYear();






        // Upload To Imgbb
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_apikey}`;
        console.log(url);
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const product = {
                    productName,
                    category,
                    condition,
                    originalPrice,
                    price,
                    usedFor,
                    productImage: data.data.display_url,
                    sellerInformation,
                    productDescription,
                    addedDate
                };

                fetch(`${process.env.REACT_APP_API_URL}/add-product`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success(`${productName} Added Successfully...`);
                            setLoading(false)
                            form.reset();
                        }
                    })

            })

    }

    return (
        <div className="bg-yellow-400 p-16 py-8 my-10">
            <h1 h1 className='text-center font-bold text-4xl mb-4' > Add Your Product</h1 >
            <form onSubmit={handleAddFood}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="productName" className="block mb-2 text-sm  text-gray-800 font-bold">Product Name</label>
                        <input type="text" name="productName" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coyote Abenkai" required />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm  text-gray-800 font-bold">Product Category</label>
                        <select name="category" required className="select select-bordered w-full bg-gray-700 text-gray-400">
                            <option selected value={"ROAD BIKE"}>ROAD BIKE</option>
                            <option value={"MTB"}>MTB</option>
                            <option value={"BMX"}>BMX</option>
                            <option value={"BMX"}>UTILITY BIKE</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="condition" className="block mb-2 text-sm  text-gray-800 font-bold">Product Condition</label>
                        <select name="condition" required className="select select-bordered w-full bg-gray-700 text-gray-400">
                            <option value={"Excellent"}>Excellent</option>
                            <option value={"Good"}>Good</option>
                            <option value={"Fair"}>Fair</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm  text-gray-800 font-bold">Product Image</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="originalPrice" className="block mb-2 text-sm  text-gray-800 font-bold">Original Price</label>
                        <input type="number" name="originalPrice" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BDT 9999" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm  text-gray-800 font-bold">Selling Price</label>
                        <input type="number" name="price" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BDT 9999" required />
                    </div>
                    <div>
                        <label htmlFor="usedFor" className="block mb-2 text-sm  text-gray-800 font-bold">Used For (Months)</label>
                        <input type="number" name="usedFor" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='10 Months' required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="Seller Information" className="block mb-2 text-sm  text-gray-800 font-bold">Your Information</label>
                    <div className='grid grid-cols-2 gap-2'>
                        <input type="text" name='sellerName' defaultValue={user?.displayName} readOnly className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" />
                        <input type="text" name='sellerLocation' required className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Location" />
                        <input type="tel" name='sellerPhoneNumber' required className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone Number" />
                    </div>
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm  text-gray-800 font-bold">Product Description</label>
                    <input type="text" name="description" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Seamlessly streamline optimal collaboration and idea-sharing.' required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        <label htmlFor="password" className="ml-2 text-sm  text-gray-800 font-bold">Every Information Are Given</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-sm hover:bg-gray-800 text-sm text-gray-300 hover:text-gray-400 rounded-none">
                    {
                        loading ? <SmallSpinner></SmallSpinner>
                            : "Add Product"
                    }
                </button>
            </form>
        </div >
    );
};

export default AddProducts;