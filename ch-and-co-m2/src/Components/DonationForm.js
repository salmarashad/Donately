import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import Counter from "./Counter";
import {ReactComponent as ProfileSVG} from '../SVGs/profile.svg';
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import {ReactComponent as HeartSVG} from '../SVGs/tigerh-filled.svg';
import Maps from "./Maps";

function DonationForm(props){
    const { data } = useContext(DataContext);
    const [details, setDetails] = useState({
        count: 0,
        transportation: "",
        date: "",
        time: ""
    });

    const handleDetailsChange = (fieldName, value) => {
        setDetails(prevDetails => ({
            ...prevDetails,
            [fieldName]: value
        }));
    };

    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState("");

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleConfirmNormal = async (e) => {
        e.preventDefault();
        if (!loading) {
            setLoading(true);
            await timeout(2000);
            setLoading(false);
            setConfirm("normal");
        }
    }
    const handleConfirmBlood = async (e) => {
        e.preventDefault();
        if (!loading) {
            setLoading(true);
            await timeout(2000);
            setLoading(false);
            setConfirm("blood");
        }
    }

    return(
        <div className="-mt-24 -mb-8 h-screen flex justify-center items-center">
            {data.tags.type === "Blood donations"  && confirm === "" ?
                <div className='flex flex-col justify-center items-center gap-4 h-screen'>
                    <div className="w-[500px]">
                        <h1 className="text-xl mb-2 text-center w-full font-semibold">
                            Patient & Hospital Details
                        </h1>
                    </div>
                    <div className="flex flex-col w-[500px] bg-white shadow-md rounded-md gap-4 p-7">
                        <div className="flex flex-row gap-4">
                            <ProfileSVG className="h-32 w-32 -m-2 shrink-0" />
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-3 shrink-0">
                                    <div>
                                        <h3 className="font-semibold">Patient name</h3>
                                        <p>John Doe</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Blood type</h3>
                                        <p>AB+</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <h3 className="font-semibold">Hospital name</h3>
                                        <p>{data.subtitle}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Governorate & area</h3>
                                        <p>{data.tags.Governorate}, {data.tags.Area}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t-2" />
                        <div className="flex flex-col gap-2 items-center">
                            <p>we need to add an address to the data</p>
                            <div className="bg-farahgreen-300 w-96 h-96 rounded-md">
                                <Maps/>
                            </div>
                        </div>
                        <button
                            className='submit-btn self-center w-[84px] h-[32px]'
                            onClick={handleConfirmBlood}>
                            {loading ? <SpinnerSVG className="w-full"/> : "Confirm"}
                        </button>
                    </div>
                </div>
            : confirm === "" ?
            <div className='h-max flex flex-col items-center pb-8'>
                <div className='flex flex-col items-start w-[500px] gap-2'>
                    <div className="flex flex-col justify-center bg-white rounded-md w-full p-6 shadow-md gap-4">
                        <form className="flex flex-col w-full gap-6">
                            <div className="flex flex-col gap-3">
                                <label className="label">Available item count
                                    <div className="w-full flex justify-center">
                                        <Counter val={details.count} setter={handleDetailsChange} valName="count" />
                                    </div>
                                </label>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="label">Needed transportation type</label>
                                <div className="flex mb-2 justify-center gap-10">
                                    <div className="flex gap-1">
                                        <input type="radio" name="transportation" value="truck" id="truck"
                                        className="accent-farahgreen-500"
                                        checked={details.transportation === "truck"}
                                        onChange={(e) => handleDetailsChange("transportation", e.target.value)}/>
                                        <label htmlFor="truck">Truck</label>
                                    </div>
                                    <div className="flex gap-1">
                                        <input type="radio" name="transportation" value="car" id="car"
                                        className="accent-farahgreen-500"
                                        checked={details.transportation === "car"}
                                        onChange={(e) => handleDetailsChange("transportation", e.target.value)}/>
                                        <label htmlFor="car">Car</label>
                                    </div>
                                    <div className="flex gap-1">
                                        <input type="radio" name="transportation" value="motorcycle" id="motorcycle"
                                        className="accent-farahgreen-500"
                                        checked={details.transportation === "motorcycle"}
                                        onChange={(e) => handleDetailsChange("transportation", e.target.value)}/>
                                        <label htmlFor="motorcycle">Motorcycle</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="label">Pickup details</label>
                                <div className="flex flex-row justify-center gap-10">
                                    <div>
                                        <label className="label">Date
                                            <input type="date" className="ml-3 cursor-pointer"
                                                value={details.date} 
                                                onChange={(e) => handleDetailsChange("date", e.target.value)}/>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="label">Time
                                            <input type="time" className="ml-3 cursor-pointer"
                                                value={details.time} 
                                                onChange={(e) => handleDetailsChange("time", e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className='submit-btn self-center w-[84px] h-[32px]'
                                disabled={(Object.values(details).includes("") || details.count === 0)}
                                onClick={handleConfirmNormal}>
                                {loading ? <SpinnerSVG className="w-full"/> : "Confirm"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            :
            <div className="flex flex-col w-[500px] bg-white shadow-md rounded-md gap-4 p-7">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-2xl font-bold">Your request has successfully<br/>been submitted!</h2>
                    <HeartSVG className="w-60" />
                    {confirm === "normal" && <p className="font-medium">We'll let you know when your delivery driver is on the way</p>}
                    {confirm === "blood" && <p className="font-medium">We'll notify the hospital that you'll be on your way</p>}
                    <p className="font-medium">Thank you for using donate<span className="font-sans">لي</span></p>
                    <p className="underline cursor-pointer -mt-4 italic ml-1" onClick={() => props.setPage("donations")}>
                        Continue browsing
                    </p>
                </div>
            </div>}
        </div>
    )
}
export default DonationForm