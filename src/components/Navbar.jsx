import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu,X } from "lucide-react";

function Navbar() {
    const [DrawerOpen , setDrawerOpen]=useState(false);

    const toggleNav=()=>{
        setDrawerOpen(!DrawerOpen)
    };
    return (
        <>
            <div className="sticky z-50 top-0 backdrop-blur-lg border-b border-neutral-700/80  ">
                <div className="flex justify-between items-center px-10 py-6">
                    <div className=" flex items-center gap-2">
                        <img
                            className="h-12 w-10 ml-4 rounded-full "
                            src={logo}
                        />
                        <span className="mt-4 text-xl tracking-tight">
                            VReality
                        </span>
                    </div>
                    <div className="flex items-center gap-10 ">
                            <div href="#">Features</div>

                            <div href="#">Workflow</div>

                            <div href="#">Pricing</div>

                            <div href="#">Testimonals</div>

                    </div>
                    <div className="flex items-center gap-8 ">
                        <a href="#" className="py-2 px-8 border rounded-md">
                            Sign In
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-8 rounded-md"
                        >
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNav}>
                            {DrawerOpen ? <X/> : <Menu/>}
                        </button>

                     </div>

                     
                </div>
            </div>
        </>
    );
}

export default Navbar;
