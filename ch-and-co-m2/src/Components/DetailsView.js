import React, { useContext } from "react";
import { DetailedContext } from "../App";

function DetailsView(props) {
    const { isDetailedView, setIsDetailedView } = useContext(DetailedContext);
    return (
        <div className="h-screen w-screen fixed top-0  z-10 bg-black bg-opacity-50 grid items-center justify-center">
            <div className="bg-white w-[600px] h-max rounded-lg p-6">
                <h1>Details</h1>
                <button onClick={() => setIsDetailedView(false)}>Close</button>
            </div>
        </div>
    );
}
export default DetailsView;