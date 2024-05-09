import { useContext, useState } from 'react';
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import { UserTypeContext } from "../App";
import Counter from './Counter';
import Maps from './Maps';

function EditProfile(props) {
    const { userType } = useContext(UserTypeContext);
    
    const [validity, setValidity] = useState({
        email: true,
        password: true,
        contact: true
    });
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValidPhone = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

    const handleInputChange = (fieldName, value) => {
        props.setFormData(prevFormData => ({
          ...prevFormData,
          [fieldName]: value
        }));
    };

    function checkPass() {
        if(props.formData.password.length < 5) {
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
        if(!props.formData.email.match(isValidEmail)) {
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
        if(!props.formData.contact.match(isValidPhone)) {
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
    
    const handleTeacherChange = (fieldName, value) => {
        props.setTeacherData(prevTeacherData => ({
            ...prevTeacherData,
            [fieldName]: value
        }));
    };
    const handleDoctorChange = (fieldName, value) => {
        props.setDoctorData(prevDoctorData => ({
            ...prevDoctorData,
            [fieldName]: value
        }));
    };

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
            props.setEdit("false");
        }
    }

    return (
        <div className='bg-white rounded-md p-6 shadow-md gap-4 w-[500px]'>
            <form className='flex flex-col w-full'>
                <h2 className="text-lg font-semibold mb-2">Account Details</h2>
                <div className="flex flex-col">
                    <label className='label'>Email
                        <input type="text" value={props.formData.email} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("email", e.target.value)} onBlur={checkMail} />
                    </label>
                    {!validity.email && <p className='error text-left -mt-2'>Please type a valid email address</p>}

                    <label className='label'>Password
                        <input type="password" value={props.formData.password} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("password", e.target.value)} onBlur={checkPass} />
                    </label>
                    {!validity.password && <p className='error text-left -mt-2'>Password length must be at least 5 characters</p>}

                    <label className='label'>Contact Number
                        <input type="text" value={props.formData.contact} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("contact", e.target.value)} onBlur={checkContact} />
                    </label>
                    {!validity.contact && <p className='error text-left -mt-2'>Please type a valid phone number</p>}
                </div>
                <hr className='border-t-2 my-4' />
                <h2 className="text-lg font-semibold mb-2">{userType === "organization" ? "Organization Details" : "Location"}</h2>
                <div className="flex flex-col">
                    <label className='label'>{userType === "organization" ? "Organization Address" : "Address"}
                        <input type="text" value={props.formData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("address", e.target.value)} />
                    </label>

                    <div className="grid grid-cols-2 gap-x-4">
                        <label className='label'>Governorate
                            <input type="text" value={props.formData.governorate} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleInputChange("governorate", e.target.value)} />
                        </label>

                        <label className='label'>Area
                            <input type="text" value={props.formData.area} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleInputChange("area", e.target.value)} />
                        </label>
                    </div>

                </div>

                {userType === "teacher" &&
                <div>
                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                    <label className='label'>Subject
                        <input type="text" value={props.teacherData.subject} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleTeacherChange("subject", e.target.value)} />
                    </label>
                    <label className='label'>Number of pro-bono classes you can teach a month
                        <Counter val={props.teacherData.numCases} setter={handleTeacherChange} valName="numCases" />
                    </label>

                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Teaching Post Location</h2>
                    <label className='label'>Address
                        <input type="text" value={props.teacherData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleTeacherChange("address", e.target.value)} />
                    </label>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex flex-row gap-x-4'>
                            <label className='label'>Area
                                <input type="text" value={props.teacherData.area} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleTeacherChange("area", e.target.value)} />
                            </label>
                            <label className='label'>Governorate
                                <input type="text" value={props.teacherData.governorate} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleTeacherChange("governorate", e.target.value)} />
                            </label>
                        </div>
                    </div>
                    
                </div>
                }

                {userType === "doctor" &&
                <div>
                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                    <label className='label'>Specialty
                        <input type="text" value={props.doctorData.specialty} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleDoctorChange("specialty", e.target.value)} />
                    </label>
                    <label className='label'>Number of pro-bono cases you can take a month
                        <Counter val={props.doctorData.numCases} setter={handleDoctorChange} valName="numCases" />
                    </label>

                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Clinic Location</h2>
                    <label className='label'>Address
                        <input type="text" value={props.doctorData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleDoctorChange("address", e.target.value)} />
                    </label>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex flex-row gap-x-4'>
                            <label className='label'>Area
                                <input type="text" value={props.doctorData.area} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleDoctorChange("area", e.target.value)} />
                            </label>
                            <label className='label'>Governorate
                                <input type="text" value={props.doctorData.governorate} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleDoctorChange("governorate", e.target.value)} />
                            </label>
                        </div>
                        <label className="label"> Exact Location
                            <div className=' w-full h-96'>
                                <Maps isStaticMap={false} Location={"Change"}/>
                            </div>
                        </label>
                    </div>
                </div>
                }

                {(userType === "doctor" || userType === "teacher" || userType === "organization") &&
                    <>
                        <hr className='border-t-2 my-4' />
                        <h2 className="text-lg font-semibold mb-1">{userType === "organization" ? "Documents" : "Qualifications"}</h2>
                        <label className='label' htmlFor="pdf">{userType === "organization" ? "Proof of Identity" : "CV"}
                        <input id="pdf" type="file" name="pdf" accept="application/pdf" className="block w-max cursor-pointer mt-1 mb-3" 
                        onChange={props.handleFileChange}/>
                        </label>
                    </>
                }

                <button
                    type="submit"
                    className='submit-btn self-center w-[127px] h-[32px]'
                    disabled={(Object.values(props.formData).includes(""))
                                || Object.values(validity).includes(false)}
                    onClick={handleSubmit}>
                    {loading ? <SpinnerSVG className="w-full"/> : "Save changes"}
                </button>
            </form>
        </div>
    );
}

export default EditProfile;