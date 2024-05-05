function RegistrationForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.setPage("login");
    }

    return(
        <form className='flex flex-col w-full'>
            <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
            <div className="grid grid-cols-2 gap-x-4">
                <label className='label'>First name
                    <input type="text" name="first-name" placeholder="Type here..." className="text-input"/>
                </label>

                <label className='label'>Last name
                    <input type="text" name="last-name" placeholder="Type here..." className="text-input"/>
                </label>

                <label className='label'>Gender
                    <div className="flex gap-8 mb-2">
                        <div className="flex gap-1">
                            <input type="radio" value="Male" name="gender" /> Male
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" value="Female" name="gender"/> Female
                        </div>
                    </div>
                </label>
            </div>
            <hr className='border-t-2 my-4' />
            <h2 className="text-lg font-semibold mb-2">Account Details</h2>
            <div className="flex flex-col">
                <label className='label'>Email
                    <input type="text" name="name" placeholder="Type here..." className="text-input"/>
                </label>

                <label className='label'>Password
                    <input type="password" name="name" placeholder="Type here..." className="text-input" />
                </label>

                <label className='label'>Contact Number
                    <input type="text" name="name" placeholder="Type here..." className="text-input"/>
                </label>
            </div>
            <hr className='border-t-2 my-4' />
            <h2 className="text-lg font-semibold mb-2">{props.type === "donor" ? "Location" : "Organization details"}</h2>
            <div className="flex flex-col">
                {props.type === "organization" && <label className='label'>Organization Name
                    <input type="text" name="name" placeholder="Type here..." className="text-input" />
                </label>}
                
                {props.type === "organization" && <label className='label'>
                    Organization Type
                    <input type="text" name="name" placeholder="Type here..." className="text-input" />
                </label>}

                <label className='label'>{props.type === "donor" ? "Address" : "Organization Address"}
                    <input type="text" name="name" placeholder="Type here..." className="text-input"/>
                </label>

                <label className='label'>Governorate
                    <input type="text" name="name" placeholder="Type here..." className="text-input"/>
                </label>

                <label className='label'>Area
                    <input type="text" name="name" placeholder="Type here..." className="text-input"/>
                </label>
            </div>

            {/*submit and Redirect to login*/}
            <button className='submit-btn' 
                    onClick={handleSubmit}>
                submit
            </button>
        </form>
    );
}
export default RegistrationForm;