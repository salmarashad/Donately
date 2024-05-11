import React, { useContext } from 'react';
import { DetailedContext } from "../App";
function OrganizationDelivery() { 
    const { setIsDetailedView } = useContext(DetailedContext);
    return(
        <div className="flex flex-col items-center justify-center gap-4 sticky top-24">
            <div className=" min-w-72 bg-white w-96 shadow-md rounded-md overflow-hidden p-6">
                <div>Child Clothing by Farah</div>
                <hr className=" border-t-2 w-56" />
                <div className="text-xs pt-2">Quantity: 2</div>
                <button className="text-sm italic border border-farahgreen-600 text-farahgreen-600 px-3 py-1 mt-4 rounded-xl self-center"
                    onClick={() => setIsDetailedView(true)}>
                    Choose dropoff time {">"}
                </button>
            </div>
            <div className=" grid min-w-72 bg-white w-96 shadow-md rounded-md overflow-hidden p-6">
                <div>Toys by Jana</div>
                <hr className=" border-t-2 w-56" />
                <div className="text-xs pt-2">Quantity: 5</div>
                <div className="text-xs pt-2">Drop-off time: 10/5/2024 at 8:00 pm</div>
            </div>
        </div>
    );
}
export default OrganizationDelivery;