import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function Hero() {
    return (
        <div className="">
         
            <div className="text-center text-4xl sm:text-5xl md:text-6xl mt-8 tracking-wide">
                VReality build tools{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                    for<span className="whitespace-nowrap"> developers</span>
                </span>
            </div>

            <div className="text-center mt-6 text-base sm:text-lg md:text-xl text-gray-400 px-4 sm:px-8 max-w-4xl mx-auto">
                Empower your creativity and bring VR app ideas to life with our
                intuitive development tools. Get started today and turn your
                imagination into immersive reality!
            </div>

         
            <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4 sm:gap-8">
                <a
                    href=""
                    className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-8 text-white text-center"
                >
                    Start for free
                </a>
                <a
                    href=""
                    className="py-2 px-8 border rounded-md text-center border-orange-500"
                >
                    Documentation
                </a>
            </div>

    
            <div className="flex flex-col lg:flex-row mt-8 justify-center items-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg m-4 border border-orange-500 shadow-orange-300 w-full sm:w-[28rem] lg:w-[40rem]"
                >
                    <source src={video1} type="video/mp4" />
                    Video not supported
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg m-4 border border-orange-500 shadow-orange-300 w-full sm:w-[28rem] lg:w-[40rem]"
                >
                    <source src={video2} type="video/mp4" />
                    Video not supported
                </video>
            </div>
        </div>
    );
}

export default Hero;
