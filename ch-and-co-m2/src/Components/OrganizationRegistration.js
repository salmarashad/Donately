function OrganizationRegistration(props) { 
    return(
        <div>
            <header className= 'text-5xl text-center font-extrabold font-sans text-farahgreen-300 pb-12'>Organization Registration</header>
            <form className=' flex flex-col space-y-5 items-center h-96'> 
            {/*firstname*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                First name:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*lastname*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Last name:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*gender*/}
            <div className='w-96'>
                <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                    Gender:
                </label>
                <div className='flex gap-16 text-lg'>
                    <div>
                    <input type="radio" value="Female" name="gender" /> Female
                    </div>
                    <div>
                    <input type="radio" value="Male" name="gender"/> Male
                    </div>
                </div>
            </div>
            {/*email*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Email:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*password*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Password:
                <input type="password" name="name" className=" rounded-lg p-1 pr-10 w-96" />
            </label>
            {/*contact num*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Contact Number:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*org's name*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Organization Name:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*org's type*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Organization Type:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*org's address*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Organization Address:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*area*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Area:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*governorate*/}
            <label className='flex flex-col text-lg font-semibold font-sans text-farahgreen-300'>
                Governorate:
                <input type="text" name="name" className=" rounded-lg p-1 pr-10 my-2 w-96"/>
            </label>
            {/*submit and Redirect to login*/}
            <button className=' cursor-pointer bg-farahgray-200 hover:bg-farahgreen-200 text-lg font-semibold p-1 px-2 rounded-xl border-2 border-solid border-farahgreen-200' 
                        onClick={() => props.setPage("login")}>
                            submit
            </button>
            {/*Redirect to login*/}
            <p className='text-center text-green-600 text-lg underline pt-6 pb-16 cursor-pointer' 
                        onClick={() => props.setPage("login")}>
                            Returning user? log in here.
            </p>

            </form>

            
        </div>
    );
}
export default OrganizationRegistration;