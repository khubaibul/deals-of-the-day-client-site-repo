import React from 'react';
import people1 from "../../../../Assets/Images/man.png";
import people2 from "../../../../Assets/Images/man.png";
import people3 from "../../../../Assets/Images/man.png"
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'David Solomon',
            img: people1,
            review: 'Continually fabricate quality systems whereas out-of-the-box innovation. Compellingly evolve team driven systems with holistic content. Credibly streamline go forward models through interdependent manufactured products.',
            location: "Cox's Bazar",
            ratings: 5
        },
        {
            _id: 2,
            name: 'Samiha Adil',
            img: people2,
            review: 'Quickly foster orthogonal solutions whereas exceptional benefits. Collaboratively aggregate multidisciplinary expertise rather than corporate collaboration and idea-sharing.',
            location: 'Mymensingh',
            ratings: 5
        },
        {
            _id: 3,
            name: 'GradMaa',
            img: people3,
            review: 'Monotonectally deliver cross-platform initiatives whereas team driven core competencies. Credibly reconceptualize cross-media services via corporate experiences. Uniquely implement sustainable solutions via professional supply chains. Dynamically.',
            location: "Gradpaa's House",
            ratings: 4
        },
        {
            _id: 4,
            name: 'MKB HD',
            img: people3,
            review: 'Compellingly strategize future-proof outsourcing whereas end-to-end convergence. Efficiently recaptiualize leading-edge relationships and progressive scenarios. Continually reintermediate high-quality results through user friendly processes.',
            location: "MKB Studio",
            ratings: 5
        },
    ]

    return (
        <div className='lg:px-10 px-5 my-40'>
            <div>
                <div>
                    <h2 className='text-center text-3xl font-bold text-neutral mb-10'>Our Customers Review</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        reviews.map((patientReview, idx) => <Review key={idx} patientReview={patientReview}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;