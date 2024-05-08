import {ReactComponent as ProfileSVG} from '../SVGs/profile.svg';
import {ReactComponent as MailSVG} from '../SVGs/mail.svg';
import {ReactComponent as PhoneSVG} from '../SVGs/phone.svg';
import {ReactComponent as LocationSVG} from '../SVGs/location.svg';
import {ReactComponent as EditSVG} from '../SVGs/edit.svg';
import { useContext } from 'react';
import { UserTypeContext } from "../App";

function Profile(props) {
    const { userType } = useContext(UserTypeContext);

    return (
        <div className="w-full h-screen flex justify-center items-center -mb-8 -mt-24">
            <div className="h-max-content w-[600px] bg-white rounded-md shadow-lg flex flex-col p-7 gap-4">
                <div className="flex gap-6">
                    <ProfileSVG className="h-32 w-32 -m-2" />
                    <div className="flex flex-col w-full">
                        <div className='flex justify-between'>
                            <h1 className="font-bold text-2xl">Farah Ahmad <span className="text-farahgray font-normal text-lg">(F)</span></h1>
                            <button>
                                <EditSVG className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <MailSVG className="h-5 w-5" />
                            <p>{userType}@gmail.com</p>
                        </div>
                        <div className="flex gap-2">
                            <PhoneSVG className="h-5 w-5" />
                            <p>+20 109 251 9019</p>
                        </div>
                        <div className="flex gap-2">
                            <LocationSVG className="h-6 w-6" />
                            <p>Mecca street, Nasr City, Cairo</p>
                        </div>
                    </div>
                </div>
                <hr className="border-t-2 w-11/12 mx-auto" />
                <div className="flex flex-col gap-4 items-center">
                    <div className="bg-farahgreen-200 rounded-md text-center py-2 w-full text-farahgreen-700">
                        <h3>You are registered as a {userType === "teacher" ? "teacher" :
                                                     userType === "doctor" ? "doctor" : 
                                                     userType === "admin" ? "admin" : 
                                                     userType === "organization" ? "organization" : "donor"}</h3>
                    </div>
                    {userType === "donor" && <div>
                        <p className='underline cursor-pointer w-max mx-auto italic ml-1'
                            onClick={() => props.setPage("teachdocform")}>
                            Get verified as a teacher/doctor
                        </p>
                    </div>}
                    {userType === "teacher" && <div>
                        <h3 className="text-center">You teach <span className="font-semibold italic">Computer Science</span>.
                        You can teach <span className="font-semibold italic">10</span> pro-bono classes per week.</h3>
                    </div>}
                    {userType === "doctor" && <div>
                        <h3 className="text-center">You specialise in <span className="font-semibold italic">dermatology</span>.
                        You can take <span className="font-semibold italic">5</span> pro-bono visits per week.</h3>
                    </div>}
                    {userType === "doctor" && <div>
                        <h3 className="text-center">Clinic location:</h3>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Profile;