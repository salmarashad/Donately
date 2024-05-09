import {ReactComponent as ProfileSVG} from '../SVGs/profile.svg';
import {ReactComponent as MailSVG} from '../SVGs/mail.svg';
import {ReactComponent as PhoneSVG} from '../SVGs/phone.svg';
import {ReactComponent as LocationSVG} from '../SVGs/location.svg';
import {ReactComponent as EditSVG} from '../SVGs/edit.svg';
import { useContext, useState } from 'react';
import { UserTypeContext } from "../App";
import EditProfile from './EditProfile';
import cv from '../PDFs/cv.pdf';
import Maps from './Maps';

function Profile(props) {
    const { userType } = useContext(UserTypeContext);
    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        email: userType + "@gmail.com",
        password: userType,
        contact: "+20 109 251 9019",
        address: "Buidling 6, Mecca Street",
        governorate: "Cairo",
        area: "Nasr City",
    });
    
    const [teacherData, setTeacherData] = useState({
        subject: "Computer Science",
        numCases: 10,
        address: "Building 12, Street 35",
        area: "5th Settlement",
        governorate: "Cairo"
    });
    const [doctorData, setDoctorData] = useState({
        address: "Building 12, Street 35",
        area: "5th Settlement",
        governorate: "Cairo",
        specialty: "dermatology",
        numCases: 5
    });
    const [orgData, setOrgData] = useState({
        address: "Building 12, Street 35",
        area: "5th Settlement",
        governorate: "Cairo",
    })

    const [file, setFile] = useState(undefined);

    const downloadCv = (e) => {
        e.preventDefault();
        const pdfUrl = cv;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Farah Ahmad - CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            {(edit === true && (userType !== "admin")) ?
                <div className='w-full flex justify-center'>
                    <EditProfile formData={formData} setFormData={setFormData}
                        teacherData={teacherData} setTeacherData={setTeacherData}
                        doctorData={doctorData} setDoctorData={setDoctorData}
                        orgData={orgData} setOrgData={setOrgData}
                        file={file} setFile={setFile} setEdit={setEdit} />
                </div>
            :
            <div className="w-full h-screen flex justify-center items-center -mb-8 -mt-24">
                <div className="h-max-content w-[600px] bg-white rounded-md shadow-lg flex flex-col p-7 gap-4">
                    <div className="flex gap-6">
                        <ProfileSVG className="h-32 w-32 -m-2 shrink-0" />
                        <div className="flex flex-col w-full">
                            <div className='flex justify-between'>
                                {userType === "organization" ?
                                    <h1 className="font-bold text-2xl">Resala <span className="text-farahgray font-normal text-lg">(non-profit)</span></h1>
                                    :
                                    <h1 className="font-bold text-2xl">Farah Ahmad <span className="text-farahgray font-normal text-lg">(F)</span></h1>
                                }
                                <button onClick={() => setEdit(true)}>
                                    <EditSVG className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <MailSVG className="h-5 w-5" />
                                <p>{formData.email}</p>
                            </div>
                            <div className="flex gap-2">
                                <PhoneSVG className="h-5 w-5" />
                                <p>{formData.contact}</p>
                            </div>
                            <div className="flex gap-2">
                                <LocationSVG className="h-6 w-6" />
                                <p>{formData.address}, {formData.area}, {formData.governorate}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-t-2 w-full mx-auto" />
                    <div className="flex flex-col gap-4 items-center">
                        <div className="bg-farahgreen-200 rounded-md text-center py-2 w-full text-farahgreen-700">
                            <h3>You are registered as {userType === "teacher" ? "a teacher - " :
                                                       userType === "doctor" ? "a doctor - " : 
                                                       userType === "organization" ? "an organization - " : 
                                                       userType==="donor" ? "a donor": "an admin"}
                                {(userType === "doctor" || userType === "teacher" || userType === "organization") &&
                                <button className="underline cursor-pointer mx-auto italic" onClick={downloadCv}>
                                    {(userType === "doctor" || userType === "teacher") ? "view your CV" : "view your proof of identity"}
                                </button>}
                            </h3>
                        </div>
                        {userType === "donor" &&
                            <div>
                                <p className='underline cursor-pointer w-max mx-auto italic'
                                    onClick={() => props.setPage("teachdocform")}>
                                    Get verified as a teacher/doctor
                                </p>
                            </div>
                        }
                        {userType === "teacher" &&
                            <div>
                                <h3 className="text-center">You teach <span className="font-semibold italic">{teacherData.subject}</span>.
                                You can teach <span className="font-semibold italic">{teacherData.numCases}</span> pro-bono classes per week.</h3>
                            </div>
                        }
                        {userType === "doctor" &&
                            <div>
                                <h3 className="text-center">You specialise in <span className="font-semibold italic">{doctorData.specialty}</span>.
                                You can take <span className="font-semibold italic">{doctorData.numCases}</span> pro-bono visits per week.</h3>
                            </div>
                        }
                        {userType === "doctor" &&
                            <div>
                                <h3 className="text-center -mb-2">Clinic location: {doctorData.address}, {doctorData.area}, {doctorData.governorate}</h3>
                            </div>
                        }
                        {userType === "organization" &&
                            <div>
                                <h3 className="text-center -mb-2">Organization location:</h3>
                            </div>
                        }
                        {(userType === "doctor" || userType === "organization") &&
                            <div className='w-96 h-96 bg-farahgreen-400 rounded-md flex justify-center items-center'>
                                <Maps isStaticMap={true} Location={userType === "doctor"? "Clinic" : "Organization"}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Profile;