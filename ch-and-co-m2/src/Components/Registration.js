import React, { useState } from 'react';
function Registration(props) { 
    return(
        <div className='grid items-center justify-center'>
            {/*organization vs user registration */}
                <div className='flex justify-center'>
                    <div>
                        <img src= {process.env.PUBLIC_URL + 'login.png'} className=' max-w-lg'/>
                    </div>
                    <div className=' flex flex-col h-50 justify-center bg-white border-2 border-dotted border-farahgreen-200 rounded-2xl p-8'>
                        <p className='text-left text-5xl text-farahgreen-300 font-semibold font-sans '>
                            Welcome to our website!
                        </p>
                        <p className='text-center text-xl text-farahgreen-300 font-sans pt-5'>
                            Signing in for the first time? Let us get to know you :]
                        </p>
                        
                        <div className='flex flex-row justify-center space-x-10 pt-16'>
                            {/*organization*/}
                            <button 
                                className=" bg-farahgray-200 hover:bg-farahgreen-200 text-slate-600 text-2xl rounded-2xl flex-shrink-0 p-4 min-w-44"
                                onClick={() => props.setPage("organizationRegistration")}
                            >
                                Organization
                            </button>

                            {/*User*/}
                            <button 
                                className=" bg-farahgray-200 hover:bg-farahgreen-200 text-slate-600 text-2xl rounded-2xl flex-shrink-0 p-4 min-w-44"
                                onClick={() => props.setPage("userRegistration")}
                            >
                                User
                            </button>
                        </div>

                        {/*Redirect*/}
                        <p className='text-center text-green-600 text-lg underline pt-6 cursor-pointer' 
                        onClick={() => props.setPage("login")}>
                            Returning user? log in here.
                        </p>
                    </div>
                </div>
        </div>
    );
}
export default Registration;