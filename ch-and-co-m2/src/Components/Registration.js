import React, { useState } from 'react';
function Registration({setPage}) { 
    return(
        <div>
            {/*organization vs user registration */}
            <div>

                <div className='flex justify-center h-2/4'>
                <div>
                    <img src= {process.env.PUBLIC_URL + 'login.png'} className=' max-w-lg'/>
                </div>
                <div className=' flex flex-col h-50 justify-center '>
                    <p className='text-left text-5xl text-green-800 font-semibold font-sans '>
                        Welcome to our website!
                    </p>
                    <p className='text-center text-xl text-green-600 font-sans pt-5'>
                        Signing in for the first time? Let us get to know you!
                    </p>
                    
                    <div className='flex flex-row justify-around pt-16'>
                        {/*organization*/}
                        <button 
                            className=" bg-lime-800 hover:bg-lime-900 text-slate-100 text-2xl rounded-2xl flex-shrink-0 p-4 min-w-44"
                        >
                            Organization
                        </button>

                        {/*User*/}
                        <button 
                            className="bg-lime-800 hover:bg-lime-900 text-slate-100 text-2xl rounded-2xl flex-shrink-0 p-4 min-w-44"
                        >
                            User
                        </button>
                    </div>

                    {/*Redirect*/}
                    <p className='text-center text-green-600 text-lg underline pt-6 cursor-pointer' 
                    onClick={() => setPage("login")}>
                        Returning user? log in here.
                    </p>

                </div>
                </div>

            </div>
        </div>
    );
}
export default Registration;