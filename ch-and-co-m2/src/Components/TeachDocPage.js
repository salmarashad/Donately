import { useState } from "react";
import TeachDocForm from "./TeachDocForm";

function TeachDocPage(props) {
    const [form, setForm] = useState("teacher");
    const [confirm, setConfirm] = useState(false);

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

    return(
        <div className='h-max flex flex-col items-center'>
            <div className='flex flex-col items-start w-[500px] gap-2'>
                {!confirm && <div className="w-full flex gap-2 text-farahgreen-700">
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
                </div>}
                <div className="flex flex-col justify-center bg-white rounded-md w-full p-6 shadow-md gap-4">
                    <form className='flex flex-col w-full'>
                        <TeachDocForm doctorData={doctorData} handleDoctorChange={handleDoctorChange} teacherData={teacherData}
                        handleTeacherChange={handleTeacherChange} form={form} handleFileChange={handleFileChange} file={file}
                        profile={true} setPage={props.setPage} confirm={confirm} setConfirm={setConfirm} />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default TeachDocPage;