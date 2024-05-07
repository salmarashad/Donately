import { useState } from "react";
import Counter from "./Counter";

function TeachDocForm(props) {
    const [form, setForm] = useState("teacher");

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
    
    const handleFormChange = () => {
        setTeacherData({subject: "", numCases: 0});
        setDoctorData({address: "", area: "", governorate: "", specialty: "", numCases: 0});
        form === "teacher" ? setForm("doctor") : setForm("teacher");
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        props.setPage("donations");
    }

    return(
        <div className='h-max flex flex-col items-center'>
            <div className='flex flex-col items-start w-[500px] gap-2'>
                <div className="w-full flex gap-2 text-farahgreen-700">
                    <button 
                        className={form === "teacher" ? "text-base rounded-md border-2 w-1/2 py-1 font-semibold border-farahgreen-400 bg-farahgreen-300"
                                                    : "text-base rounded-md border-2 w-1/2 py-1 font-semibold border-farahgreen-300 bg-farahgray-100 hover:bg-farahgreen-200"}
                        onClick={handleFormChange}>
                        Teacher
                    </button>
                    <button 
                        className={form === "doctor" ? "text-base rounded-md border-2 w-1/2 py-1 font-semibold border-farahgreen-400 bg-farahgreen-300"
                                                           : "text-base rounded-md border-2 w-1/2 py-1 font-semibold bg-farahgray-100 border-farahgreen-300 hover:bg-farahgreen-200"}
                        onClick={handleFormChange}>
                        Doctor
                    </button>
                </div>
                <div className="flex flex-col justify-center bg-white rounded-md w-full p-6 shadow-md gap-4">
                    <form className='flex flex-col w-full'>
                        {form === "teacher" &&
                            <div>
                                <h2 className="text-xl text-center font-semibold mb-2">Teacher Verification Form</h2>
                                <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                                <label className='label'>Subject
                                    <input type="text" value={teacherData.subject} placeholder="Type here..." className="text-input"
                                        onChange={(e) => handleTeacherChange("subject", e.target.value)} />
                                </label>
                                <label className='label'>Number of pro-bono classes you can teach a month
                                    <Counter val={teacherData.numCases} setter={handleTeacherChange} valName="numCases" />
                                </label>
                            </div>
                        }

                        {form === "doctor" &&
                            <div>
                                <h2 className="text-xl text-center font-semibold mb-2">Doctor Verification Form</h2>
                                <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                                <label className='label'>Specialty
                                    <input type="text" value={doctorData.specialty} placeholder="Type here..." className="text-input"
                                        onChange={(e) => handleDoctorChange("specialty", e.target.value)} />
                                </label>
                                <label className='label'>Number of pro-bono cases you can take a month
                                    <Counter val={doctorData.numCases} setter={handleDoctorChange} valName="numCases" />
                                </label>

                                <hr className='border-t-2 my-4' />
                                <h2 className="text-lg font-semibold mb-1">Clinic Location</h2>
                                <label className='label'>Address
                                    <input type="text" value={doctorData.address} placeholder="Type here..." className="text-input"
                                    onChange={(e) => handleDoctorChange("address", e.target.value)} />
                                </label>
                                <div className="grid grid-cols-2 gap-x-4">
                                    <label className='label'>Area
                                        <input type="text" value={doctorData.area} placeholder="Type here..." className="text-input"
                                        onChange={(e) => handleDoctorChange("area", e.target.value)} />
                                    </label>
                                    <label className='label'>Governorate
                                        <input type="text" value={doctorData.governorate} placeholder="Type here..." className="text-input"
                                        onChange={(e) => handleDoctorChange("governorate", e.target.value)} />
                                    </label>
                                </div>
                            </div>
                        }
                        <hr className='border-t-2 my-4' />
                        <h2 className="text-lg font-semibold mb-1">Qualifications</h2>
                        <label className='label' htmlFor="pdf">CV
                            <input id="pdf" type="file" name="pdf" accept="application/pdf" className="block w-max cursor-pointer mt-1 mb-3" 
                            onChange={handleFileChange}/>
                        </label>

                        <button
                            type="submit"
                            className='submit-btn self-center'
                            onClick={handleSubmit}
                            disabled={(form === "teacher" && (Object.values(teacherData).includes("") || teacherData.numCases === 0))
                                        || (form === "doctor" && (Object.values(doctorData).includes("") || doctorData.numCases === 0))
                                        || file === undefined}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default TeachDocForm;