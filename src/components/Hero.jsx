import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function Hero() {
    return (
        <div className="">
            <div className="text-center text-6xl mt-8 tracking-wide whitespace-nowrap">
                VReality build tools {""}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800  bg-clip-text text-transparent ">
                    for developers
                </span>
            </div>
            <div className="text-center mt-8 text-xl text-gray-400 text-balance">
                Empower your creativity and bring VR app ideas to life with our
                intutive development tools. Get started today and turn your
                imagination into immersive reality !
            </div>
            <div className="flex justify-center mt-8 gap-8">
                <a
                    href=""
                    className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-8"
                >
                    Start for free
                </a>
                <a href="" className="py-2 px-8 border rounded-md">
                    Documentation
                </a>
            </div>
            <div className="flex mt-8 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg mx-2 my-4 border border-orange-500 shadow-orange-300 w-[40rem]"
                >
                    <source src={video1} type="video/mp4" />
                    Video not supported
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg mx-2 my-4 border border-orange-500 shadow-orange-300 w-[40rem]"
                >
                    <source src={video2} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Hero;
