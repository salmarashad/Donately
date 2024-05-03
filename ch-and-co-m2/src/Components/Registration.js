function Registration() { 
    return(
        <div>
            {/*organization vs user registration */}
            <div>

                {/*organization*/}
                <button 
                    className="bg-farahgreen-200 hover:bg-farahgreen-300 text-black-300 rounded-md "
                >
                    Organization
                </button>

                {/*User*/}
                <button 
                    className="bg-farahgreen-200 hover:bg-farahgreen-300 text-black-300 rounded-md "
                >
                    User
                </button>

            </div>
        </div>
    );
}
export default Registration;