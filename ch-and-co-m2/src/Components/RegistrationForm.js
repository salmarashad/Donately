import { useState } from "react";

function RegistrationForm(props) {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        gender: "",
        email: "",
        password: "",
        contact: "",
        address: "",
        governorate: "",
        area: "",
        orgName: "",
        orgType: ""
    });
    const excludedKeys = ['orgName', 'orgType'];

    const [validity, setValidity] = useState({
        email: true,
        password: true,
        contact: true
    });
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValidPhone = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

    const handleInputChange = (fieldName, value) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [fieldName]: value
        }));
    };

    function checkPass() {
        if(formData.password.length < 8) {
            setValidity(prevValidity => ({
                ...prevValidity,
                password: false
            }));
        }
        else {
            setValidity(prevValidity => ({
                ...prevValidity,
                password: true
            }));
        }
    }

    function checkMail() {
        if(!formData.email.match(isValidEmail)) {
            setValidity(prevValidity => ({
                ...prevValidity,
                email: false
            }));
        }
        else {
            setValidity(prevValidity => ({
                ...prevValidity,
                email: true
            }));
        }
    }

    function checkContact() {
        if(!formData.contact.match(isValidPhone)) {
            setValidity(prevValidity => ({
                ...prevValidity,
                contact: false
            }));
        }
        else {
            setValidity(prevValidity => ({
                ...prevValidity,
                contact: true
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        checkPass();
        checkMail();
        checkContact();
        if(!(formData.password.length < 8 || !formData.email.match(isValidEmail) || !formData.contact.match(isValidPhone))){
            props.setPage("login");
        }
    }

    return(
        <form className='flex flex-col w-full'>
            <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
            <div className="grid grid-cols-2 gap-x-4">
                <label className='label'>First name
                    <input type="text" value={formData.fName} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("fName", e.target.value)} />
                </label>

                <label className='label'>Last name
                    <input type="text" value={formData.lName} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("lName", e.target.value)} />
                </label>

                <label className='label'>Gender
                    <div className="flex gap-8 mb-2">
                        <div className="flex gap-1">
                            <input type="radio" value="male" checked={formData.gender === "male"} name="gender"
                            className="accent-farahgreen-500"
                            onChange={(e) => handleInputChange("gender", e.target.value)} /> Male
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" value="female" checked={formData.gender === "female"} name="gender"
                            className="accent-farahgreen-500"
                            onChange={(e) => handleInputChange("gender", e.target.value)} /> Female
                        </div>
                    </div>
                </label>
            </div>
            <hr className='border-t-2 my-4' />
            <h2 className="text-lg font-semibold mb-2">Account Details</h2>
            <div className="flex flex-col">
                <label className='label'>Email
                    <input type="text" value={formData.email} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("email", e.target.value)} onBlur={checkMail} />
                </label>
                {!validity.email && <p className='error text-left -mt-2'>Please type a valid email address</p>}

                <label className='label'>Password
                    <input type="password" value={formData.password} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("password", e.target.value)} onBlur={checkPass} />
                </label>
                {!validity.password && <p className='error text-left -mt-2'>Password length must be at least 8 characters</p>}

                <label className='label'>Contact Number
                    <input type="text" value={formData.contact} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("contact", e.target.value)} onBlur={checkContact} />
                </label>
                {!validity.contact && <p className='error text-left -mt-2'>Please type a valid phone number</p>}
            </div>
            <hr className='border-t-2 my-4' />
            <h2 className="text-lg font-semibold mb-2">{props.type === "donor" ? "Location" : "Organization details"}</h2>
            <div className="flex flex-col">
                {props.type === "organization" && <label className='label'>Organization Name
                    <input type="text" value={formData.orgName} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("orgName", e.target.value)} />
                </label>}
                
                {props.type === "organization" && <label className='label'>
                    Organization Type
                    <input type="text" value={formData.orgType} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("orgType", e.target.value)} />
                </label>}

                <label className='label'>{props.type === "donor" ? "Address" : "Organization Address"}
                    <input type="text" value={formData.address} placeholder="Type here..." className="text-input"
                    onChange={(e) => handleInputChange("address", e.target.value)} />
                </label>

                <div className="grid grid-cols-2 gap-x-4">
                    <label className='label'>Governorate
                        <input type="text" value={formData.governorate} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("governorate", e.target.value)} />
                    </label>

                    <label className='label'>Area
                        <input type="text" value={formData.area} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("area", e.target.value)} />
                    </label>
                </div>
            </div>

            {/*submit and Redirect to login*/}
            <button
                type="submit"
                className='submit-btn self-center'
                disabled={(props.type === "organization" && Object.values(formData).includes(""))
                            || props.type === "donor" && Object.keys(formData).filter(key => !excludedKeys.includes(key)).map(key => formData[key]).includes("")}
                onClick={handleSubmit}>
                Sign up
            </button>
        </form>
    );
}
export default RegistrationForm;