import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import Category from './Category';
import pc from "../../../Assets/Images/pc.png";
import phone from "../../../Assets/Images/phone.png";
import tv from "../../../Assets/Images/tv.png";
import camera from "../../../Assets/Images/camera.png";

const Categories = () => {


    const category = [
        {
            id: 1,
            name: "Computer & Accessories",
            img: pc
        },
        {
            id: 2,
            name: "Smartphone & Tablet",
            img: phone
        },
        {
            id: 3,
            name: "TV & Video",
            img: tv
        },
        {
            id: 4,
            name: "Camera & Drone",
            img: camera
        }
    ];


    return (
        <section className='lg:my-20 md:my-24 my-10 flex justify-center px-5 lg:px-10'>
            <div>
                <h1 className="mb-5 text-3xl font-bold text-neutral text-center">Our Product Categories</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-full'>
                    {
                        category.map((item, i) => <Category item={item} key={i} index={i}></Category>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;