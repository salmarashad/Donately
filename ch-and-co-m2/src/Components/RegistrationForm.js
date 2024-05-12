import { useState } from "react";
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import {ReactComponent as HeartSVG} from '../SVGs/tigerh-filled.svg';
import TeachDocForm from "./TeachDocForm";
import Dropdown from "./Dropdown";
import Maps from "./Maps";

function RegistrationForm(props) {
    const governorates = [
        { value: "Alexandria", label: "Alexandria" },
        { value: "Aswan", label: "Aswan" },
        { value: "Asyut", label: "Asyut" },
        { value: "Beheira", label: "Beheira" },
        { value: "Beni Suef", label: "Beni Suef" },
        { value: "Cairo", label: "Cairo" },
        { value: "Dakahlia", label: "Dakahlia" },
        { value: "Damietta", label: "Damietta" },
        { value: "Faiyum", label: "Faiyum" },
        { value: "Gharbia", label: "Gharbia" },
        { value: "Giza", label: "Giza" },
        { value: "Ismailia", label: "Ismailia" },
        { value: "Kafr El Sheikh", label: "Kafr El Sheikh" },
        { value: "Luxor", label: "Luxor" },
        { value: "Matrouh", label: "Matrouh" },
        { value: "Minya", label: "Minya" },
        { value: "Monufia", label: "Monufia" },
        { value: "New Valley", label: "New Valley" },
        { value: "North Sinai", label: "North Sinai" },
        { value: "Port Said", label: "Port Said" },
        { value: "Qalyubia", label: "Qalyubia" },
        { value: "Qena", label: "Qena" },
        { value: "Red Sea", label: "Red Sea" },
        { value: "Sharqia", label: "Sharqia" },
        { value: "Sohag", label: "Sohag" },
        { value: "South Sinai", label: "South Sinai" },
        { value: "Suez", label: "Suez" },
      ];
      const areas = [
        { value: "Alexandria_City", label: "Alexandria City" },
        { value: "Borg_El_Arab", label: "Borg El Arab" },
        { value: "Miami", label: "Miami" },
      
        { value: "Aswan_City", label: "Aswan City" },
        { value: "Kom_Ombo", label: "Kom Ombo" },
        { value: "Edfu", label: "Edfu" },
      
        { value: "Asyut_City", label: "Asyut City" },
        { value: "Dairut", label: "Dairut" },
        { value: "Abnub", label: "Abnub" },
      
        { value: "Damanhur", label: "Damanhur" },
        { value: "Kafr_El_Dawar", label: "Kafr El Dawar" },
        { value: "Rashid", label: "Rashid" },
      
        { value: "Beni_Suef_City", label: "Beni Suef City" },
        { value: "Al_Wasta", label: "Al Wasta" },
        { value: "Beba", label: "Beba" },
      
        { value: "Cairo_City", label: "Cairo City" },
        { value: "Heliopolis", label: "Heliopolis" },
        { value: "Nasr_City", label: "Nasr City" },
      
        { value: "Mansoura", label: "Mansoura" },
        { value: "Mit_Ghamr", label: "Mit Ghamr" },
        { value: "Talkha", label: "Talkha" },
      
        { value: "Damietta_City", label: "Damietta City" },
        { value: "Kafr_Saqr", label: "Kafr Saqr" },
        { value: "Ras_El_Barr", label: "Ras El Barr" },
      
        { value: "Faiyum_City", label: "Faiyum City" },
        { value: "Al_Fayyum", label: "Al Fayyum" },
        { value: "Tamiya", label: "Tamiya" },
      
        { value: "Tanta", label: "Tanta" },
        { value: "Kafr_El_Zayat", label: "Kafr El Zayat" },
        { value: "Mallawi", label: "Mallawi" },
      
        { value: "Giza_City", label: "Giza City" },
        { value: "6th_of_October_City", label: "6th of October City" },
        { value: "Sheikh_Zayed_City", label: "Sheikh Zayed City" },
      
        { value: "Ismailia_City", label: "Ismailia City" },
        { value: "Fayed", label: "Fayed" },
        { value: "Qantara", label: "Qantara" },
      
        { value: "Kafr_El_Sheikh_City", label: "Kafr El Sheikh City" },
        { value: "Ras_El_Bar", label: "Ras El Bar" },
        { value: "Desouk", label: "Desouk" },
      
        { value: "Luxor_City", label: "Luxor City" },
        { value: "Al_Uqsur", label: "Al Uqsur" },
        { value: "Armant", label: "Armant" },
      
        { value: "Marsa_Matrouh", label: "Marsa Matrouh" },
        { value: "Siwa", label: "Siwa" },
        { value: "Dabaa", label: "Dabaa" },
      
        { value: "Minya_City", label: "Minya City" },
        { value: "Maghagha", label: "Maghagha" },
        { value: "Abu_Qirqas", label: "Abu Qirqas" },
      
        { value: "Shebin_El_Kom", label: "Shebin El Kom" },
        { value: "Menouf", label: "Menouf" },
        { value: "Ashmun", label: "Ashmun" },
      
        { value: "Kharga", label: "Kharga" },
        { value: "Dakhla", label: "Dakhla" },
        { value: "Farafra", label: "Farafra" },
      
        { value: "Arish", label: "Arish" },
        { value: "Bir_Al_Abd", label: "Bir Al Abd" },
        { value: "Rafah", label: "Rafah" },
      
        { value: "Port_Said_City", label: "Port Said City" },
        { value: "Port_Fouad", label: "Port Fouad" },
        { value: "Al_Arish", label: "Al Arish" },
      
        { value: "Banha", label: "Banha" },
        { value: "Shubra_El_Kheima", label: "Shubra El Kheima" },
        { value: "Qaha", label: "Qaha" },
      
        { value: "Qena_City", label: "Qena City" },
        { value: "Dendera", label: "Dendera" },
        { value: "Nag_Hammadi", label: "Nag Hammadi" },
      
        { value: "Hurghada", label: "Hurghada" },
        { value: "El_Gouna", label: "El Gouna" },
        { value: "Safaga", label: "Safaga" },
      
        { value: "Zagazig", label: "Zagazig" },
        { value: "10th_of_Ramadan_City", label: "10th of Ramadan City" },
        { value: "Mansoura", label: "Mansoura" },
      
        { value: "Sohag_City", label: "Sohag City" },
        { value: "Akhmim", label: "Akhmim" },
        { value: "Gerga", label: "Gerga" },
      
        { value: "Sharm_El_Sheikh", label: "Sharm El Sheikh" },
        { value: "Dahab", label: "Dahab" },
        { value: "Nuweiba", label: "Nuweiba" },
      
        { value: "Suez_City", label: "Suez City" },
        { value: "Ismailia", label: "Ismailia" },
        { value: "Ain_Sokhna", label: "Ain Sokhna" },
      ];
      const orgTypes = [
        { value: "Church", label: "Church" },
        { value: "Hospital", label: "Hospital" },
        { value: "Mosque", label: "Mosque" },
        { value: "Non-profit", label: "Non-profit" },
        { value: "Orphanage", label: "Orphanage" },
        { value: "School", label: "School" },
      ];

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
                <hr className='border-t-2 my-4 border-farahorange-300' />
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
                <hr className='border-t-2 my-4 border-farahorange-300' />
                <h2 className="text-lg font-semibold mb-2">{props.type === "donor" ? "Location" : "Organization Details"}</h2>
                <div className="flex flex-col">
                    {props.type === "organization" && <label className='label'>Organization Name
                        <input type="text" value={formData.orgName} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("orgName", e.target.value)} />
                    </label>}
                    
                    {props.type === "organization" && <label className='label'>Organization Type
                        {/* {<input type="text" value={formData.orgType} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("orgType", e.target.value)} />} */}
                        <Dropdown multi={false} options={orgTypes} onChange={(val) => handleInputChange("orgType", val)} />
                    </label>}

                    <label className='label'>{props.type === "donor" ? "Address" : "Organization Address"}
                        <input type="text" value={formData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("address", e.target.value)} />
                    </label>

                    <div className="grid grid-cols-2 gap-x-4">
                        <label className='label'>Governorate
                            {/* <input type="text" value={formData.governorate} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleInputChange("governorate", e.target.value)} /> */}
                            <Dropdown multi={false} options={governorates} onChange={(val) => handleInputChange("governorate", val)} />
                        </label>

                        <label className='label'>Area
                            {/* <input type="text" value={formData.area} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleInputChange("area", e.target.value)} /> */}
                            <Dropdown multi={false} options={areas} onChange={(val) => handleInputChange("area", val)} />
                        </label>
                    </div>
                    <div className="flex flex-col">
                    {props.type === "organization" && <>
                        <label className='label'>Exact Location</label>
                        <div className="bg-farahgreen-300 w-full rounded-md overflow-hidden self-center mx-4 mb-4 mt-2">
                            <Maps isStaticMap={false} Location={"Set"} />
                        </div>
                    </>}
                    {props.type === "organization" && <>
                    <label className='label' htmlFor="pdf">Proof of identity
                        <input id="pdf" type="file" name="pdf" accept="application/pdf" className="block w-max cursor-pointer mt-1 mb-3" 
                        onChange={handleFileChange}/>
                    </label>
                    </>}
                </div>
                </div>
                <button
                    type="submit"
                    className='submit-btn self-center w-[82px] h-[32px]'
                    disabled={(props.type === "organization" && (Object.keys(formData).filter(key => !excludedOrg.includes(key)).map(key => formData[key]).includes("")
                                || file === undefined))
                                || (props.type === "donor" && Object.keys(formData).filter(key => !excludedDonor.includes(key)).map(key => formData[key]).includes(""))
                                || (Object.values(validity).includes(false))}
                    onClick={handleSubmit}>
                    {loading ? <SpinnerSVG className="w-full"/> : "Sign up"}
                </button>
            </form>

            : props.step === 1 && (formData.accountType === "teacher" || formData.accountType === "doctor") ?

            <div>
                <div className="bg-farahorange-400 rounded-md text-center py-2 w-full text-white mb-4">
                    <h3 className="font-semibold italic">Please fill the below form to get verified as a {formData.accountType}.</h3>
                </div>
                <TeachDocForm doctorData={doctorData} handleDoctorChange={handleDoctorChange} teacherData={teacherData}
                    handleTeacherChange={handleTeacherChange} form={formData.accountType} handleFileChange={handleFileChange}
                    file={file} profile={false} setStep={props.setStep} />

            </div>

            :
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-bold">Your account has successfully<br/>been created!</h2>
                <HeartSVG className="w-60" />
                {(formData.accountType === "teacher" || formData.accountType === "doctor") &&
                    <p className="font-medium">You may use the website as a regular donor until your request is verified. We'll get back to you in 1-2 weeks.</p>}
                {(props.type === "organization") &&
                    <p className="font-medium">You may log in and use the website as an organization once your details have been verified. We'll get back to you in 1-2 weeks.</p>}
                <p className="font-medium">Thank you for signing up to donate<span className="font-sans">لي</span></p>
                {props.type === "donor" &&
                    <p className="underline cursor-pointer -mt-4 italic ml-1" onClick={() => props.setPage("login")}>
                    Log in & continue browsing</p>}
                {props.type === "organization" &&
                <p className="underline cursor-pointer -mt-4 italic ml-1" onClick={() => props.setPage("login")}>
                Continue browsing</p>}
            </div>
            }
        </div>
    );
}
export default RegistrationForm;