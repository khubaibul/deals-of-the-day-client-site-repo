import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import SmallSpinner from '../../Shared/Button/SmallSpinner';

const AddProducts = () => {
    const [loading, setLoading] = useState(false);
    const [productCategory, setProductCategory] = useState("Computer & Accessories");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useDynamicTitle("Add Food-Dashboard");

    // Add Product
    const handleAddFood = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const category = form.category.value;
        const productBrand = form.productBrand.value;
        const productName = form.productName.value;
        const availability = form.availability.value;
        const price = parseInt(form.price.value);
        const warranty = form.warranty.value;
        const deliveryTime = form.deliveryTime.value;
        const image = form.image.files[0];
        const productDescription = form.description.value;

        const sellerInformation = {
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            sellerImage: user?.photoURL
        }


        let productDetails = {};


        if (productCategory === "Computer & Accessories") {
            const cpu = form.computercpu.value;
            const ram = form.computerram.value;
            const ssd = form.computerssd.value;
            const gpu = form.computergpu.value;
            const casing = form.casing.value;
            const pcFormFactor = form.pcFormFactor.value;
            productDetails = {
                cpu, ram, ssd, gpu, casing, pcFormFactor
            }
        }
        else if (productCategory === "Smartphone & Tablet") {
            const phoneDisplaySize = form.phoneDisplaySize.value;
            const phoneDisplayQuality = form.phoneDisplayQuality.value;
            const phoneMainCamera = form.phoneMainCamera.value;
            const phoneFrontCamera = form.phoneFrontCamera.value;
            const phoneram = form.phoneram.value;
            const phonerom = form.phonerom.value;
            const phoneBattery = form.phoneBattery.value;
            const phoneProcessor = form.phoneProcessor.value;
            const phoneOS = form.phoneOS.value;
            const phoneSensor = form.phoneSensor.value;
            productDetails = {
                phoneDisplaySize, phoneDisplayQuality, phoneMainCamera, phoneFrontCamera, phoneram, phonerom, phoneBattery, phoneProcessor, phoneOS, phoneSensor
            }
        }

        else if (productCategory === "TV & Video") {
            const displayPanel = form.displayPanel.value;
            const displayQuality = form.displayQuality.value;
            const displaySize = form.displaySize.value;
            const powerConsumption = form.powerConsumption.value;
            productDetails = {
                displayPanel, displayQuality, displaySize, powerConsumption
            }
        }

        else if (productCategory === "Camera & Drone") {
            const cameraFormFactor = form.cameraFormFactor.value;
            const cameraResolution = form.cameraResolution.value;
            const cameraScreenSize = form.cameraScreenSize.value;
            const cameraSensorSize = form.cameraSensorSize.value;
            const videoQuality = form.videoQuality.value;
            const stabilization = form.stabilization.value;
            productDetails = {
                cameraFormFactor, cameraResolution, cameraScreenSize, cameraSensorSize, videoQuality, stabilization
            }

        }

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

                const product = {
                    category,
                    productBrand,
                    productName,
                    productImage: data.data.display_url,
                    availability,
                    price,
                    warranty,
                    deliveryTime,
                    productDescription,
                    productDetails,
                    sellerInformation

                }
                console.log(product);
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
                            navigate("/dashboard/my-products")
                        }
                    })

            })
    }

    return (
        <section className="bg-yellow-400 p-16 py-8 my-10">
            <h1 h1 className='text-center font-bold text-4xl mb-4' > Add Your Product</h1 >
            <form onSubmit={handleAddFood}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="category" className="block text-sm  text-gray-800 font-bold">Product Category</label>
                        <select
                            onChange={(e) => setProductCategory(e.target.value)}
                            name="category"
                            required className="select w-full rounded-sm bg-gray-200"
                        >
                            <option selected value={"Computer & Accessories"}>Computer & Accessories</option>
                            <option value={"Smartphone & Tablet"}>Smartphone & Tablet</option>
                            <option value={"TV & Video"}>TV & Video</option>
                            <option value={"Camera & Drone"}>Camera & Drone</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="productBrand" className="block text-sm  text-gray-800 font-bold">Product Brand</label>
                        <input type="text" name="productBrand" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="Asus" required />
                    </div>
                    <div>
                        <label htmlFor="productName" className="block text-sm  text-gray-800 font-bold">Product Name</label>
                        <input type="text" name="productName" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="Asus Gaming PC" required />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm  text-gray-800 font-bold">Product Image</label>
                        <input
                            className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-1.5"
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="availability" className="block text-sm  text-gray-800 font-bold">Availability</label>
                        <input type="number" name="availability" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2" placeholder="21" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm  text-gray-800 font-bold">Price</label>
                        <input type="number" name="price" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2" placeholder="BDT 9999" required />
                    </div>
                    <div>
                        <label htmlFor="warranty" className="block text-sm  text-gray-800 font-bold">Warranty</label>
                        <input type="number" name="warranty" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2" placeholder="2 Year" required />
                    </div>
                    <div>
                        <label htmlFor="deliveryTime" className="block text-sm  text-gray-800 font-bold">Delivery Time</label>
                        <input type="text" name="deliveryTime" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2" placeholder="5-7 days" required />
                    </div>
                </div>


                {/* Dynamic Product Information Field */}


                {/* Computer And Accessories Start */}
                {
                    productCategory === "Computer & Accessories" &&
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                        <div>
                            <label htmlFor="computercpu" className="block text-sm  text-gray-800 font-bold">CPU</label>
                            <input type="text" name="computercpu" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="i5 13900K" required />
                        </div>
                        <div>
                            <label htmlFor="computerram" className="block text-sm  text-gray-800 font-bold">RAM</label>
                            <input type="number" name="computerram" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="8 GB" required />
                        </div>
                        <div>
                            <label htmlFor="computerssd" className="block text-sm  text-gray-800 font-bold">SSD</label>
                            <input type="number" name="computerssd" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="512 GB" required />
                        </div>
                        <div>
                            <label htmlFor="computergpu" className="block text-sm  text-gray-800 font-bold">Graphics Card</label>
                            <input type="text" name="computergpu" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="RTX 2070ti" required />
                        </div>
                        <div>
                            <label htmlFor="casing" className="block text-sm  text-gray-800 font-bold">Casing</label>
                            <input type="text" name="casing" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="NZXT H510" required />
                        </div>
                        <div>
                            <label htmlFor="pcFormFactor" className="block text-sm  text-gray-800 font-bold">Form Factor</label>
                            <select name="pcFormFactor" required className="select w-full rounded-sm bg-gray-200">
                                <option selected value={"ATX"}>ATX</option>
                                <option value={"Micro-ATX"}>Micro-ATX</option>
                                <option value={"Mini-ITX"}>Mini-ITX</option>
                                <option value={"E-ATX"}></option>
                            </select>
                        </div>
                    </div>
                }
                {/* Computer And Accessories End */}

                {/* SmartPhone And Tablets Start */}
                {
                    productCategory === "Smartphone & Tablet" &&
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                        <div>
                            <label htmlFor="phoneDisplaySize" className="block text-sm  text-gray-800 font-bold">Display Size</label>
                            <input type="text" name="phoneDisplaySize" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="6.5 inch" required />
                        </div>
                        <div>
                            <label htmlFor="phoneDisplayQuality" className="block text-sm  text-gray-800 font-bold">Display Quality</label>
                            <select name="phoneDisplayQuality" required className="select w-full rounded-sm bg-gray-200">
                                <option value={"720p"}>720p</option>
                                <option selected value={"1080p"}>1080p</option>
                                <option value={"2k"}>2K</option>
                                <option value={"4K"}>4K</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phoneMainCamera" className="block text-sm  text-gray-800 font-bold">Main Camera</label>
                            <input type="number" name="phoneMainCamera" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="48M px" required />
                        </div>
                        <div>
                            <label htmlFor="phoneFrontCamera" className="block text-sm  text-gray-800 font-bold">Front Camera</label>
                            <input type="number" name="phoneFrontCamera" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="12M px" required />
                        </div>
                        <div>
                            <label htmlFor="phoneram" className="block text-sm  text-gray-800 font-bold">RAM</label>
                            <input type="number" name="phoneram" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="4 GB" required />
                        </div>
                        <div>
                            <label htmlFor="phonerom" className="block text-sm  text-gray-800 font-bold">ROM</label>
                            <input type="number" name="phonerom" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="64 GB" required />
                        </div>
                        <div>
                            <label htmlFor="phoneBattery" className="block text-sm  text-gray-800 font-bold">Battery</label>
                            <input type="number" name="phoneBattery" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="5000 mAH" required />
                        </div>
                        <div>
                            <label htmlFor="phoneProcessor" className="block text-sm  text-gray-800 font-bold">Processor</label>
                            <input type="text" name="phoneProcessor" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="Qualcomm Snapdragon" required />
                        </div>
                        <div>
                            <label htmlFor="phoneOS" className="block text-sm  text-gray-800 font-bold">Operating System</label>
                            <input type="text" name="phoneOS" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="Android 13" required />
                        </div>
                        <div>
                            <label htmlFor="phoneSensor" className="block text-sm  text-gray-800 font-bold">Sensor</label>
                            <input type="text" name="phoneSensor" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="Fingerprint, Face ID, Accelerometer etc..." required />
                        </div>
                    </div>
                }
                {/* SmartPhone And Tablets End */}


                {/* TV And Video Start */}
                {
                    productCategory === "TV & Video" &&
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                        <div>
                            <label htmlFor="displayPanel" className="block text-sm  text-gray-800 font-bold">Display Panel</label>
                            <select name="displayPanel" required className="select w-full rounded-sm bg-gray-200">
                                <option selected value={"LCD"}>LCD</option>
                                <option value={"OLED"}>OLED</option>
                                <option value={"QLED"}>QLED</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="displayQuality" className="block text-sm  text-gray-800 font-bold">Display Quality</label>
                            <select name="displayQuality" required className="select w-full rounded-sm bg-gray-200">
                                <option value={"720p"}>720p</option>
                                <option selected value={"1080p"}>1080p</option>
                                <option value={"2k"}>2K</option>
                                <option value={"4K"}>4K</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="displaySize" className="block text-sm  text-gray-800 font-bold">Display Size</label>
                            <input type="number" name="displaySize" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="32 inch" required />
                        </div>
                        <div>
                            <label htmlFor="powerConsumption" className="block text-sm  text-gray-800 font-bold">Power Consumption</label>
                            <input type="number" name="powerConsumption" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="55W" required />
                        </div>
                    </div>
                }
                {/* TV And Video End */}

                {/* Camera And Drone Start */}
                {
                    productCategory === "Camera & Drone" &&
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                        <div>
                            <label htmlFor="cameraFormFactor" className="block text-sm  text-gray-800 font-bold">Form Factor</label>
                            <input type="text" name="cameraFormFactor" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="DSLR" required />
                        </div>
                        <div>
                            <label htmlFor="cameraResolution" className="block text-sm  text-gray-800 font-bold">Camera Resolution</label>
                            <input type="number" name="cameraResolution" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="24MP" required />
                        </div>
                        <div>
                            <label htmlFor="cameraScreenSize" className="block text-sm  text-gray-800 font-bold">Screen Size</label>
                            <input type="number" name="cameraScreenSize" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="3 inch" required />
                        </div>
                        <div>
                            <label htmlFor="cameraSensorSize" className="block text-sm  text-gray-800 font-bold">Sensor Size</label>
                            <input type="number" name="cameraSensorSize" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2.5" placeholder="1 inch" required />
                        </div>
                        <div>
                            <label htmlFor="videoQuality" className="block text-sm  text-gray-800 font-bold">Video Quality</label>
                            <select name="videoQuality" required className="select w-full rounded-sm bg-gray-200">
                                <option value={"2k"}>2K</option>
                                <option selected value={"4K"}>4K</option>
                                <option value={"8K"}>8K</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="stabilization" className="block text-sm  text-gray-800 font-bold">Stabilization</label>
                            <select name="stabilization" required className="select w-full rounded-sm bg-gray-200">
                                <option selected value={"EIS"}>EIS</option>
                                <option value={"OIS"}>OIS</option>
                            </select>
                        </div>
                    </div>
                }
                {/* Camera And Drone End */}


                <div className='mt-4'>
                    <label htmlFor="description" className="block text-sm  text-gray-800 font-bold">Product Description</label>
                    <textarea type="text" name="description" className="bg-gray-200 border border-gray-300 rounded-sm focus:ring-neutral focus:border-neutral block w-full p-2" placeholder='Seamlessly streamline optimal collaboration and idea-sharing.' required />
                </div>


                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5 mt-4">
                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        <label htmlFor="remember" className="ml-2 text-sm  text-gray-800 font-bold">Every Information Are Given</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-neutral hover:bg-[#183689] py-2 rounded-sm text-gray-300 w-full ">
                    {
                        loading ? <SmallSpinner></SmallSpinner>
                            : "Add Product"
                    }
                </button>
            </form>
        </ section>
    );
};

export default AddProducts;