import React from 'react';
import deliveryImg from "../../../../Assets/Images/delivery-truck.png";
import onlinePayment from "../../../../Assets/Images/cashless-payment.png";
import easyReturn from "../../../../Assets/Images/product-return.png";

const HomeBottomBanner = () => {
    return (
        <div className='lg:mb-20 lg:px-10 px-5'>
            <div className="mx-auto text-center">
                <h1 className="mb-5 text-3xl font-bold text-neutral">Why You Should Buy From Us</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-2'>
                <div className='flex flex-col items-center gap-y-4 border rounded-md p-4 bg-slate-50 hover:bg-slate-100 transition-all duration-150'>
                    <div className='p-3 rounded-full bg-white shadow-md flex justify-center items-center'>
                        <img src={deliveryImg} className="w-20" alt="" />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h2 className='font-semibold text-2xl text-center text-neutral'>Fastest Delivery</h2>
                        <p className='text-center opacity-70'>Our delivery system is to fast. We commit delivery in three working days.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-y-4 border rounded-md p-4 bg-slate-50 hover:bg-slate-100 transition-all duration-150'>
                    <div className='p-3 rounded-full bg-white shadow-md flex justify-center items-center'>
                        <img src={onlinePayment} className="w-20" alt="" />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h2 className='font-semibold text-2xl text-center text-neutral'>Online Payment</h2>
                        <p className='text-center opacity-70'>You can pay using all online payment system.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-y-4 border rounded-md p-4 bg-slate-50 hover:bg-slate-100 transition-all duration-150'>
                    <div className='p-3 rounded-full bg-white shadow-md flex justify-center items-center'>
                        <img src={easyReturn} className="w-20" alt="" />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h2 className='font-semibold text-2xl text-center text-neutral'>Easy Return</h2>
                        <p className='text-center opacity-70'>Easy return with 100% refund. Please visit refund policy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBottomBanner;