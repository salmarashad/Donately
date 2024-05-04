import React, { useState } from 'react';
function Login( props) { 
    return(
        <div className='h-screen -mt-12 -mb-8 grid items-center justify-center'>
            <header className= 'text-5xl text-center font-extrabold font-sans text-farahgreen-300 pb-12'>Welcome Back!</header>
            <form className=' flex flex-col space-y-5 items-center justify-center h-96  content-center bg-farahgreen-200 p-8 rounded-xl mb-16'> 
                    <label className='flex flex-col text-lg font-semibold text-farahgreen-300'>
                        Userame:
                        <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2"/>
                    </label>
                    <label className='flex flex-col text-lg font-semibold text-farahgreen-300'>
                        Password:
                        <input type="password" name="name" className=" rounded-lg p-1 pr-10 my-2" />
                    </label>
                    <input type="submit" value="Submit" 
                    className=' cursor-pointer bg-farahgray hover:bg-farahgreen-300 text-lg text-slate-200 font-semibold p-1 px-2 rounded-xl border-2 border-solid border-farahgreen-200' />
                    
                    {/*Redirect*/}
                    <p className='text-center text-farahgreen-300 text-lg underline cursor-pointer' 
                                onClick={() => props.setPage("registration")}>
                                    New user? Create an account 
                                </p>

            </form>

            
        </div>
        
    )
}
export default Login;