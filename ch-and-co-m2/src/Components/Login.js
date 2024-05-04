import React, { useState } from 'react';
function Login( props) { 
    return(
        <div>
            <form className=' flex flex-col space-y-5 items-center justify-center h-96'> 
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Userame:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2"/>
            </label>
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Password:
                <input type="password" name="name" className=" rounded-lg p-1 pr-10" />
            </label>
            <input type="submit" value="Submit" className=' cursor-pointer bg-farahgray-200 hover:bg-farahgreen-200 text-lg font-semibold p-1 px-2 rounded-xl border-2 border-solid border-farahgreen-200' />
            
            {/*Redirect*/}
            <p className='text-center text-green-600 text-lg underline cursor-pointer' 
                        onClick={() => props.setPage("registration")}>
                            New user? Create an account 
                        </p>

            </form>

            
        </div>
        
    )
}
export default Login;