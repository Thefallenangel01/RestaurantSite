import React from 'react';
import { useSelector } from 'react-redux';


// Simple Footer Component for Menu and other pages
export const NormalFooter = () => {
    const out=useSelector((state)=>state.footer.value)
    return (
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
            <p className="text-gray-300">
            &copy; {new Date().getFullYear()} {out.copyresName} - {out.place}. {out.rights}.
            </p>
        </div>
        </footer>
    );
};