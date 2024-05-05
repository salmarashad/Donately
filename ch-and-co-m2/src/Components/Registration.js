import { useState } from "react";

function Registration(props) { 
    const [form, setForm] = useState("donor");

    return(
        <div className='h-screen -mt-12 -mb-8 grid items-center justify-center'>
            <div className='flex justify-center items-start bg-white rounded-md h-96 w-[750px]'>
                {/* donor */}
                <button 
                    className="text-base rounded-md border-2 border-farahgreen-400 w-1/2 py-1 font-semibold"
                    onClick={() => props.setForm("donor")}
                >
                    Donor
                </button>
                {/* organization */}
                <button 
                    className="text-base rounded-md border-2 border-farahgreen-400 w-1/2 py-1 font-semibold"
                    onClick={() => props.setForm("organisation")}
                >
                    Organization
                </button>
            </div>

            {/*Redirect*/}
            <p className='text-center text-green-600 text-lg underline cursor-pointer' 
            onClick={() => props.setPage("login")}>
                Returning user? log in here.
            </p>
        </div>
    )
}
export default Registration;