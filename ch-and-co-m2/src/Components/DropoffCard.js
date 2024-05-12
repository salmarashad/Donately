import React, { useContext } from 'react';
import { DetailedContext } from "../App";

function DropoffCard(props){

    const { setIsDetailedView } = useContext(DetailedContext);
    const {key, title, quantity, isSet, dropoffdate, dropofftime} = props.data;


    return(
        <div className=' m-3'>
            {(isSet==="true")?
                <div className=" grid min-w-72 bg-white w-96 shadow-md rounded-md overflow-hidden p-6">
                    <div>{title}</div>
                    <hr className=" border-t-2 w-56 border-farahorange-400 my-1" />
                    <div className="text-xs pt-2">Quantity: {quantity}</div>
                    <div className="text-xs pt-2">Drop-off time: {dropoffdate} at {dropofftime} pm</div>
                </div>
            :
                
                <div className=" min-w-72 bg-white w-96 shadow-md rounded-md overflow-hidden p-6">
                    <div>{title}</div>
                    <hr className=" border-t-2 w-56 border-farahorange-400 my-1" />
                    <div className="text-xs pt-2">Quantity: {quantity}</div>
                    <button className="button2"
                        onClick={() => setIsDetailedView(true)}>
                        Choose dropoff time {">"}
                    </button>
                </div>
            }
        </div>
    );

}
export default DropoffCard;