function Registration(props) { 
    return(
        <div className='h-screen -mt-12 -mb-8 grid items-center justify-center'>
            <header className= 'text-5xl text-center font-extrabold font-sans text-farahgreen-300 pb-12'>Welcome Back!</header>
            <div className='flex justify-center gap-10'>
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
                    <p className='text-center text-green-600 text-lg underline cursor-pointer' 
                    onClick={() => props.setPage("login")}>
                        Returning user? log in here.
                    </p>
        </div>
    )
}
export default Registration;