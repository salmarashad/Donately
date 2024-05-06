import React, { useContext } from "react";
import { DataContext } from "../App";
import {ReactComponent as LogoSVG} from '../SVGs/tiger-filled.svg'
import {ReactComponent as GraphicSVG} from '../SVGs/sign-up-graphic.svg';

function DonationForm(props){
    const { data, setData } = useContext(DataContext);
    return(
        <div>
            {data.tags.type === "Blood donations"?
                <div className='flex flex-col justify-center items-center gap-4 h-screen -mb-8 -mt-24'>
                    <div className="w-[500px]">
                        <h1 className=" text-3xl font-semibold text-farahgreen-700 text-left mb-6">
                            Thank you for your generosity!
                        </h1>
                        <p  className=" text-xl font-semibold text-farahgreen-500 text-left mb-2">
                            Please find below more details about patient and the hospital where they are currently located
                        </p>
                    </div>
                    <div className="flex flex-col w-[500px] bg-white shadow-md rounded-lg gap-4 p-8">
                        <div className="flex flex-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                            className=" w-36 mr-10 rounded-full border-2 border-solid border-farahgreen-400"/>
                            <div className="flex flex-col gap-2 mt-8">
                            <p className="text-3xl text-center font-semibold">Farah Ahmad</p>
                            <p className="text-2xl text-gray-500">Blood type: AB </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-2xl text-left font-semibold">{data.subtitle}</p>
                                <p className="text-2xl text-left text-gray-500">{data.tags.Governorate}, {data.tags.Area}</p>
                                <hr className="h-px bg-farahgray-400 border-0 my-4" />
                            </div>
                            {/*Google marker here pls @reeka*/}
                            <div className=" bg-farahgreen-500 w-40 h-40 rounded-md"></div>
                        </div>
                    </div>
                </div>
            :
            <div className='h-max flex flex-col items-center pb-8'>
                <div className='flex flex-col items-start w-[500px] gap-2'>
                    <div className="shrink-0 w-[550px] -ml-8">
                        <GraphicSVG className="w-full" />
                    </div>
                    <h1 className=" text-3xl font-semibold text-farahgreen-700">
                        Thank you for your generosity!
                    </h1>
                    <div className="flex flex-col justify-center bg-white rounded-md w-full p-6 shadow-md gap-4">
                        <form className="flex flex-col w-full gap-5">
                            <label className="label">Available item count:  
                                <input type="number" className="pl-4"/>
                            </label>

                            <label className="label"> Needed transportation type</label>
                            <div className="flex flex-row gap-8 mb-2 justify-around">
                                    <div className="flex gap-1">
                                        <input type="radio" name="transportation" value="truck" className="accent-farahgreen-500"/> Truck
                                    </div>
                                    <div className="flex gap-1">
                                        <input type="radio" name="transportation" value="car" className="accent-farahgreen-500"/> Car
                                    </div>
                                    <div className="flex gap-1">
                                        <input type="radio" name="transportation" value="motorcycle" className="accent-farahgreen-500"/> Motorcycle
                                    </div>
                            </div>

                            <div className="flex flex-row justify-between gap-12">
                                <label className="label">On</label>
                                <input type="date"/>
                                <label className="label">At</label>
                                <input type="time"/>
                            </div>

                            <button type="submit"
                            className='submit-btn'>
                                Donate now !
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default DonationForm