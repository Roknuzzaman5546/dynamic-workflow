import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Components/Hooks/AuthContext';
import bannerImag1 from '../../assets/Images/banner1.jpg'
import bannerImag2 from '../../assets/Images/banner2.jpg'
import bannerImag3 from '../../assets/Images/banner3.jpg'
import bannerImag4 from '../../assets/Images/banner4.jpg'
import bannerImag5 from '../../assets/Images/banner5.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const { user } = useAuth();
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: bannerImag1, title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: bannerImag5, title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: bannerImag2, title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: bannerImag3, title: "Escape 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: bannerImag4, title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", },];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <>
            <div className="w-full h-60 sm:h-96 md:h-[800px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                {
                    user ?
                    
                        <div className="drop-shadow-lg text-white text-center px-5">
                            <h1 className="text-xl lg:text-3xl font-semibold mb-3">Hey {user.name} Welcome in Workflow</h1>
                            <p className="text-sm md:text-base lg:text-lg">Go to dashboard and Start WorkProgress</p>
                            <Link to='/dashboard/admindash'>
                                <button className="text-xl mt-4 w-32 h-12 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">Dashboard</button>
                            </Link>
                        </div> :
                        <div className="drop-shadow-lg text-white text-center px-5">
                            <h1 className="text-xl lg:text-3xl font-semibold mb-3">Hey Welcome in Workflow</h1>
                            <p className="text-sm md:text-base lg:text-lg">Please log in or Register and Start your WorkProgress</p>
                            <Link to='/auth'>
                                <button className="text-xl mt-4 w-32 h-12 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">Log in</button>
                            </Link>
                        </div>
                }
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title} />
                ))}
            </div>
        </>
    )
};

export default Banner;