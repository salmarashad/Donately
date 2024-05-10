import { useContext, useState } from 'react';
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import { UserTypeContext } from "../App";
import Counter from './Counter';
import Maps from './Maps';

function EditProfile(props) {
    const { userType } = useContext(UserTypeContext);

    const [formDataTmp, setFormDataTmp] = useState(props.formData);
    
    const [teacherDataTmp, setTeacherDataTmp] = useState(props.teacherData);
    const [doctorDataTmp, setDoctorDataTmp] = useState(props.doctorData);
    const [orgDataTmp, setOrgDataTmp] = useState(props.orgData)
    
    const [validity, setValidity] = useState({
        email: true,
        password: true,
        contact: true
    });
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValidPhone = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

    const handleInputChange = (fieldName, value) => {
        setFormDataTmp(prevFormDataTmp => ({
          ...prevFormDataTmp,
          [fieldName]: value
        }));
    };

    function checkPass() {
        if(formDataTmp.password.length < 5) {
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
        if(!formDataTmp.email.match(isValidEmail)) {
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
        if(!formDataTmp.contact.match(isValidPhone)) {
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
        setTeacherDataTmp(prevTeacherDataTmp => ({
            ...prevTeacherDataTmp,
            [fieldName]: value
        }));
    };
    const handleDoctorChange = (fieldName, value) => {
        setDoctorDataTmp(prevDoctorDataTmp => ({
            ...prevDoctorDataTmp,
            [fieldName]: value
        }));
    };
    const handleOrgChange = (fieldName, value) => {
        setOrgDataTmp(prevOrgData => ({
            ...prevOrgData,
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
            props.setFormData(formDataTmp);
            props.setTeacherData(teacherDataTmp);
            props.setDoctorData(doctorDataTmp);
            props.setOrgData(orgDataTmp);
            props.setEdit("false");
        }
    }

    return (
        <div className='bg-white rounded-md p-6 shadow-md gap-4 w-[500px]'>
            <form className='flex flex-col w-full'>
                <h2 className="text-lg font-semibold mb-2">Account Details</h2>
                <div className="flex flex-col">
                    <label className='label'>Email
                        <input type="text" value={formDataTmp.email} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("email", e.target.value)} onBlur={checkMail} />
                    </label>
                    {!validity.email && <p className='error text-left -mt-2'>Please type a valid email address</p>}

                    <label className='label'>Password
                        <input type="password" value={formDataTmp.password} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("password", e.target.value)} onBlur={checkPass} />
                    </label>
                    {!validity.password && <p className='error text-left -mt-2'>Password length must be at least 5 characters</p>}

                    <label className='label'>Contact Number
                        <input type="text" value={formDataTmp.contact} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleInputChange("contact", e.target.value)} onBlur={checkContact} />
                    </label>
                    {!validity.contact && <p className='error text-left -mt-2'>Please type a valid phone number</p>}
                </div>
                {userType !== "admin" && <>
                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-2">{userType === "organization" ? "Organization Details" : "Location"}</h2>
                    <div className="flex flex-col">
                        <label className='label'>{userType === "organization" ? "Organization Address" : "Address"}
                            {userType === "organization" ? 
                                <input type="text" value={orgDataTmp.address} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleOrgChange("address", e.target.value)} />
                            :
                                <input type="text" value={formDataTmp.address} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleInputChange("address", e.target.value)} />
                            }
                        </label>

                        <div className="grid grid-cols-2 gap-x-4">
                            <label className='label'>Governorate
                                {userType === "organization" ? 
                                    <input type="text" value={orgDataTmp.governorate} placeholder="Type here..." className="text-input"
                                    onChange={(e) => handleOrgChange("governorate", e.target.value)} />
                                :
                                    <input type="text" value={formDataTmp.governorate} placeholder="Type here..." className="text-input"
                                    onChange={(e) => handleInputChange("governorate", e.target.value)} />
                                }
                            </label>

                            <label className='label'>Area
                                {userType === "organization" ? 
                                    <input type="text" value={orgDataTmp.area} placeholder="Type here..." className="text-input"
                                    onChange={(e) => handleOrgChange("area", e.target.value)} />
                                :
                                    <input type="text" value={formDataTmp.area} placeholder="Type here..." className="text-input"
                                    onChange={(e) => handleInputChange("area", e.target.value)} />
                                }
                            </label>
                        </div>
                    {userType === "organization" && 
                        <div className='w-full my-4 rounded-md overflow-hidden'>
                            <Maps isStaticMap={false} Location={"Change"}/>
                        </div>
                    }
                    </div>
                </>}

                {userType === "teacher" &&
                <div>
                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                    <label className='label'>Subject
                        <input type="text" value={teacherDataTmp.subject} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleTeacherChange("subject", e.target.value)} />
                    </label>
                    <label className='label'>Number of pro-bono classes you can teach a month
                        <Counter val={teacherDataTmp.numCases} setter={handleTeacherChange} valName="numCases" />
                    </label>

                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Teaching Post Location</h2>
                    <label className='label'>Address
                        <input type="text" value={teacherDataTmp.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleTeacherChange("address", e.target.value)} />
                    </label>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex flex-row gap-x-4'>
                            <label className='label'>Area
                                <input type="text" value={teacherDataTmp.area} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleTeacherChange("area", e.target.value)} />
                            </label>
                            <label className='label'>Governorate
                                <input type="text" value={teacherDataTmp.governorate} placeholder="Type here..." className="text-input"
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
                        <input type="text" value={doctorDataTmp.specialty} placeholder="Type here..." className="text-input"
                            onChange={(e) => handleDoctorChange("specialty", e.target.value)} />
                    </label>
                    <label className='label'>Number of pro-bono cases you can take a month
                        <Counter val={doctorDataTmp.numCases} setter={handleDoctorChange} valName="numCases" />
                    </label>

                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Clinic Location</h2>
                    <label className='label'>Address
                        <input type="text" value={doctorDataTmp.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => handleDoctorChange("address", e.target.value)} />
                    </label>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex flex-row gap-x-4'>
                            <label className='label'>Area
                                <input type="text" value={doctorDataTmp.area} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleDoctorChange("area", e.target.value)} />
                            </label>
                            <label className='label'>Governorate
                                <input type="text" value={doctorDataTmp.governorate} placeholder="Type here..." className="text-input"
                                onChange={(e) => handleDoctorChange("governorate", e.target.value)} />
                            </label>
                        </div>
                        <label className="label"> Exact Location
                            <div className='w-full rounded-md overflow-hidden'>
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
                    disabled={(Object.values(formDataTmp).includes(""))
                                || Object.values(validity).includes(false)}
                    onClick={handleSubmit}>
                    {loading ? <SpinnerSVG className="w-full"/> : "Save changes"}
                </button>
            </form>
        </div>
    );
}

export default EditProfile;