import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import {ReactComponent as LogoSVG} from '../SVGs/tiger-filled.svg';

function Registration(props) { 
    const [form, setForm] = useState("donor");
    const [confirm, setConfirm] = useState(false);

    return(
        <div className='h-max flex flex-col items-center -mt-12 pb-8'>
            <LogoSVG className="w-48 mb-6 cursor-pointer" onClick={() => props.setPage("donations")} />
            <div className='flex flex-col items-start w-[500px] gap-2'>
                {!confirm && <div className="w-full flex gap-2 text-farahgreen-700">
                    <button 
                        className={form === "donor" ? "text-base rounded-md border-2 w-1/2 py-1 font-semibold border-farahgreen-400 bg-farahgreen-300"
                                                    : "text-base rounded-md border-2 w-1/2 py-1 font-semibold border-farahgreen-300 bg-farahgray-100 hover:bg-farahgreen-200"}
                        onClick={() => setForm("donor")}>
                        Donor
                    </button>
                    <button 
                        className={form === "organization" ? "text-base rounded-md border-2 w-1/2 py-1 font-semibold border-farahgreen-400 bg-farahgreen-300"
                                                           : "text-base rounded-md border-2 w-1/2 py-1 font-semibold bg-farahgray-100 border-farahgreen-300 hover:bg-farahgreen-200"}
                        onClick={() => setForm("organization")}>
                        Organization
                    </button>
                </div>}
                <div className="flex flex-col justify-center bg-white rounded-md w-full p-6 shadow-md gap-4">
                    <RegistrationForm type={form} setPage={props.setPage} confirm={confirm} setConfirm={setConfirm} />
                    {/*Redirect to login*/}
                    {!confirm && <div className='text-center text-sm'>
                        <p>Returning user?
                            <span className='underline cursor-pointer w-max mx-auto italic ml-1' 
                                onClick={() => props.setPage("login")}>
                                Log in here 
                            </span>
                        </p>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default Registration;