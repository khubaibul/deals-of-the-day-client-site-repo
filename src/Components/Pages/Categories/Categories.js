import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import Category from './Category';

const Categories = () => {
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ["/all-category"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-category`)
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
    return (
        <div className='my-32 flex justify-center'>
            <div>
                <h1 className="mb-5 text-3xl font-bold text-neutral text-center">CATEGORIES</h1>
                <div className='grid lg:grid-cols-4 gap-2 w-full'>
                    {
                        categories.map((category, i) => <Category category={category} _id={i} key={i}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;