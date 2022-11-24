import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import SmallSpinner from '../../Shared/Button/SmallSpinner';

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const { _id, productName, category, condition, originalPrice, price, productImage, usedFor, productDescription, addedDate, sellerInformation } = selectedProduct;


    const handleBooking = e => {
        e.preventDefault();
        setLoading(true);

        const bookingProduct = {
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyerPhoneNumber: e.target.phone.value,
            meetingLocation: e.target.meetingLocation.value,
            productId: _id,
            productName,
            productImage,
            price
        }

        fetch(`${process.env.REACT_APP_API_URL}/store-booking-product`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${productName} Booked Successfully...`);
                    setLoading(false)
                    e.target.reset();
                    setSelectedProduct(null);
                }
            })

    }









    return (
        <div>
            < input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-neutral rounded">
                    <div>
                        <h3 className='text-2xl text-center font-bold text-yellow-500'>Product Booking Details</h3>
                    </div>
                    <form onSubmit={handleBooking}>
                        <input name='patientName' defaultValue={user?.displayName} readOnly type="text" placeholder='Full Name' className="input input-bordered w-full my-2" />
                        <input name='email' type="email" defaultValue={user?.email} readOnly placeholder='Email' className="input input-bordered w-full my-2" />
                        <input name='phone' type="phone" placeholder='Phone Number' required className="input input-bordered w-full my-2" />
                        <input name='productImage' type="text" placeholder='Product Name' readOnly defaultValue={productImage} className="input input-bordered w-full my-2" />
                        <input name='productName' type="text" placeholder='Product Name' readOnly defaultValue={productName} className="input input-bordered w-full my-2" />
                        <input name='price' type="number" placeholder='Product Price' readOnly defaultValue={price} className="input input-bordered w-full my-2" />
                        <input name='meetingLocation' type="text" placeholder='Meeting Location' required className="input input-bordered w-full my-2" />
                        {
                            loading && <SmallSpinner></SmallSpinner>
                        }
                        <input
                            type="submit" value="BOOK" className="input input-bordered w-full my-2 text-neutral font-bold bg-yellow-500" />
                    </form>
                    <div className="modal-action flex justify-center">
                        <label
                            htmlFor="bookingModal" className="btn btn-sm rounded-none bg-red-600 text-slate-100 hover:bg-red-600">CANCEL</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;