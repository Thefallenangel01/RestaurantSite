import React from "react";
import OtherPageNavBar from "./OtherPageNavBar";
import { useSelector } from "react-redux";

function Delivery() {
    const path="/"
    const output=useSelector((state)=>state.delivery.value)
    return (
        <>
            <OtherPageNavBar />
            <div className="h-screen bg-gradient-to-b from-gray-200 to-gray-400 flex flex-col justify-center items-center text-black">
                <div className="flex flex-col items-center mb-8 mt-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{output.options}</h1>
                    <p className="text-lg md:text-xl max-w-3xl text-center">
                        {output.deliveryOptions}:
                    </p>
                </div>
                <div className=" justify-center items-center mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40">
                    <div className="flex flex-col items-center">
                        <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
                            <a href="https://glovoapp.com/it/it/pontedera/la-felicita-ptd/" className="m-4">
                                <img src={`${path}glovo-icon.svg`} alt="Glovo" className="w-28 h-28" />
                            </a>
                            <p className="text-lg font-semibold text-center mt-2">Glovo</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
                            <a href="https://deliveroo.it/it/menu/pontedera/pontedera/la-felicita-pontedera" className="m-4">
                                <img src={`${path}deliveroo-icon.svg`} alt="Deliveroo" className="w-28 h-28" />
                            </a>
                            <p className="text-lg font-semibold text-center mt-2">Deliveroo</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
                            <a href="https://wa.me/3338695996" className="m-4">
                                <img src={`${path}restaurant-staff-icon.png`} alt="Restaurant Staff" className="w-28 h-28" />
                            </a>
                            <p className="text-lg font-semibold text-center mt-2">{output.our}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Delivery;
