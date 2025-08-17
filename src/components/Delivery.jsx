import React from "react";
import OtherPageNavBar from "./OtherPageNavBar";
import { useSelector } from "react-redux";
import { NormalFooter } from "./Footer";

function Delivery() {
    const path = "/"
    const output = useSelector((state) => state.delivery.value)
    
    const deliveryServices = [
        { 
            name: "Glovo",
            icon: "glovo-icon.svg",
            url: "https://glovoapp.com/it/it/pontedera/la-felicita-ptd/",
            deliveryFee: output.deliveryFeeDesc,
            color: "hover:bg-orange-50 hover:border-orange-200"
        },
        {
            name: "Deliveroo",
            icon: "deliveroo-icon.svg", 
            url: "https://deliveroo.it/it/menu/pontedera/pontedera/la-felicita-pontedera",
            deliveryFee: output.deliveryFeeDesc,
            color: "hover:bg-teal-50 hover:border-teal-200"
        },
        {
            name: output.our,
            icon: "restaurant-staff-icon.svg",
            url: "https://wa.me/3338695996",
            deliveryFee: output.ourDelivery,
            color: "hover:bg-green-50 hover:border-green-200"
        }
    ];

    return (
        <>
            <OtherPageNavBar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-4 py-16 pt-32">
                
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Dancing Script" }}>
                        🚚 {output.options}
                    </h1>
                </div>

                {/* Delivery Info Banner */}
                <div className="bg-gray-50/95 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 p-8 mb-12 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <span className="text-3xl">🕐</span>
                            <div>
                                <p className="font-semibold text-gray-900 text-lg mb-1">{output.deliveryHours}</p>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">{output.deliveryTime}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <span className="text-3xl">📍</span>
                            <div>
                                <p className="font-semibold text-gray-900 text-lg mb-1">{output.deliveryArea}</p>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">{output.deliveryPlaces}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <span className="text-3xl">💰</span>
                            <div>
                                <p className="font-semibold text-gray-900 text-lg mb-1">{output.deliveryFee}</p>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">{output.deliverydep}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {deliveryServices.map((service, index) => (
                        <a 
                            key={service.name}
                            href={service.url}
                            className={`flex flex-col bg-gray-50/95 backdrop-blur-sm rounded-xl border-2 border-white/20 p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${service.color}`}
                        >
                            {/* Service Icon and Info - This will grow to fill space */}
                            <div className="text-center mb-6 flex-grow">
                                <div className="inline-block p-4 bg-gray-50 rounded-2xl mb-4">
                                    <img 
                                        src={`${path}${service.icon}`} 
                                        alt={service.name} 
                                        className="w-16 h-16 mx-auto" 
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {service.name}
                                </h3>
                                <div className="min-h-[3rem] flex flex-col justify-center">
                                    
                                    <p className="text-gray-700 text-xs font-medium">
                                        {service.deliveryFee}
                                    </p>
                                </div>
                            </div>

                            {/* Order Button - This will always be at the bottom */}
                            <div className="text-center mt-auto">
                                <div className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                    {output.orderNow} →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Additional Note */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        {output.chooseService}
                    </p>
                </div>
                </div>
            </div>
            <NormalFooter />
        </>
    );
}

export default Delivery;