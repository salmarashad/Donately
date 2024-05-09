import { useState } from "react";
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import {ReactComponent as HeartSVG} from '../SVGs/tigerh-filled.svg';
import TeachDocForm from "./TeachDocForm";
import Maps from "./Maps";

function RegistrationForm(props) {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        gender: "",
        email: "",
        password: "",
        contact: "",
        accountType: "",
        address: "",
        governorate: "",
        area: "",
        orgName: "",
        orgType: ""
    });
    const excludedDonor = ['orgName', 'orgType'];
    const excludedOrg = ['accountType'];

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
        if(formData.password.length < 5) {
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

    const [loading, setLoading] = useState(false);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!loading) {
            setLoading(true);
            await timeout(2000);
            setLoading(false);
            if(props.type !== "donor"){
                handleInputChange("accountType", "");
            }
            props.setStep(1);
        }
    }

    const [teacherData, setTeacherData] = useState({
        subject: "",
        numCases: 0
    });
    const [doctorData, setDoctorData] = useState({
        address: "",
        area: "",
        governorate: "",
        specialty: "",
        numCases: 0
    });
    
    const handleTeacherChange = (fieldName, value) => {
        setTeacherData(prevTeacherData => ({
            ...prevTeacherData,
            [fieldName]: value
        }));
    };
    const handleDoctorChange = (fieldName, value) => {
        setDoctorData(prevDoctorData => ({
            ...prevDoctorData,
            [fieldName]: value
        }));
    };

    const [file, setFile] = useState(undefined);
    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    return(
        <div>
            {props.step === 0 ? <form className='flex flex-col w-full'>
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
                        <div className="flex gap-8 mb-2 mt-1">
                            <div className="flex gap-1">
                                <input type="radio" value="male" checked={formData.gender === "male"} name="gender" id="male"
                                className="accent-farahgreen-500"
                                onChange={(e) => handleInputChange("gender", e.target.value)} />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="radio" value="female" checked={formData.gender === "female"} name="gender" id="female"
                                className="accent-farahgreen-500"
                                onChange={(e) => handleInputChange("gender", e.target.value)} />
                                <label htmlFor="female">Female</label>
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
                    {!validity.password && <p className='error text-left -mt-2'>Password length must be at least 5 characters</p>}

                    <label className='label'>Contact Number
                        <input type="text" value={formData.contact} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("contact", e.target.value)} onBlur={checkContact} />
                    </label>
                    {!validity.contact && <p className='error text-left -mt-2'>Please type a valid phone number</p>}
                    {props.type === "donor" && <label className='label'>Account Type
                        <div className="flex gap-8 mb-2 mt-1">
                            <div className="flex gap-1">
                                <input type="radio" value="regular" checked={formData.accountType === "regular"} name="type" id="regular"
                                className="accent-farahgreen-500"
                                onChange={(e) => handleInputChange("accountType", e.target.value)} />
                                <label htmlFor="regular">Donor (regular)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="radio" value="teacher" checked={formData.accountType === "teacher"} name="type" id="teacher"
                                className="accent-farahgreen-500"
                                onChange={(e) => handleInputChange("accountType", e.target.value)} />
                                <label htmlFor="teacher">Teacher</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="radio" value="doctor" checked={formData.accountType === "doctor"} name="type" id="doctor"
                                className="accent-farahgreen-500"
                                onChange={(e) => handleInputChange("accountType", e.target.value)} />
                                <label htmlFor="doctor">Doctor</label>
                            </div>
                        </div>
                    </label>}
                </div>
                <hr className='border-t-2 my-4' />
                <h2 className="text-lg font-semibold mb-2">{props.type === "donor" ? "Location" : "Organization Details"}</h2>
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
                <button
                    type="submit"
                    className='submit-btn self-center w-[82px] h-[32px]'
                    disabled={(props.type === "organization" && Object.keys(formData).filter(key => !excludedOrg.includes(key)).map(key => formData[key]).includes(""))
                                || props.type === "donor" && Object.keys(formData).filter(key => !excludedDonor.includes(key)).map(key => formData[key]).includes("")
                                || Object.values(validity).includes(false)}
                    onClick={handleSubmit}>
                    {loading ? <SpinnerSVG className="w-full"/> : "Sign up"}
                </button>
            </form>

            : props.step === 1 && (formData.accountType === "teacher" || formData.accountType === "doctor") ?

            <div>
                <div className="bg-farahgreen-200 rounded-md text-center py-2 w-full text-farahgreen-700 mb-4">
                    <h3 className="font-semibold italic">Please fill the below form to get verified as a {formData.accountType}.</h3>
                </div>
                <TeachDocForm doctorData={doctorData} handleDoctorChange={handleDoctorChange} teacherData={teacherData}
                    handleTeacherChange={handleTeacherChange} form={formData.accountType} handleFileChange={handleFileChange}
                    file={file} profile={false} setStep={props.setStep} />

                <div className="flex flex-col">
                    <p className='label'>Choose exact location on the map </p>
                    <div className="bg-farahgreen-300 w-96 h-96 rounded-md self-center m-4">
                       <Maps isStaticMap={false} />
                    </div>
                </div>
            </div>

            :
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-bold">Your account has successfully<br/>been created!</h2>
                <HeartSVG className="w-60" />
                {(formData.accountType === "teacher" || formData.accountType === "doctor") &&
                    <p className="font-medium">You may use the website as a regular donor until your request is verified. We'll get back to you in 1-2 weeks.</p>}
                <p className="font-medium">Thank you for signing up to donate<span className="font-sans">لي</span></p>
                <p className="underline cursor-pointer -mt-4 italic ml-1" onClick={() => props.setPage("login")}>
                    Log in & continue browsing
                </p>
            </div>
            }
        </div>
    );
}
export default RegistrationForm;