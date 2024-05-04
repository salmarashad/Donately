import {ReactComponent as ProfileSVG} from '../SVGs/profile.svg';
import {ReactComponent as MailSVG} from '../SVGs/mail.svg';
import {ReactComponent as PhoneSVG} from '../SVGs/phone.svg';
import {ReactComponent as LocationSVG} from '../SVGs/location.svg';

function Profile(props) {
    return (
        <div className="w-full h-screen flex justify-center items-center -mb-8 -mt-24">
            <div className="h-max-content w-[600px] bg-white rounded-md shadow-lg flex flex-col p-7 gap-4">
                <div className="flex gap-6">
                    <ProfileSVG className="h-32 w-32 -m-2" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">Farah Ahmad <span className="text-farahgray font-normal text-lg">(F)</span></h1>
                        <div className="flex gap-2">
                            <MailSVG className="h-5 w-5" />
                            <p>farahahmad065@gmail.com</p>
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
                    <div className="bg-slate-200 rounded-md text-center py-2 w-full">
                        <h3>You are registered as a {props.userType === "teacher" ? "teacher" :
                                                     props.userType === "doctor" ? "doctor" : "donor"}</h3>
                    </div>
                    {props.userType === "teacher" && <div>
                        <h3 className="text-center">You teach <span className="font-semibold italic">Computer Science</span>.
                        You can privately tutor <span className="font-semibold italic">10</span> students.</h3>
                    </div>}
                    {props.userType === "doctor" && <div>
                        <h3 className="text-center">You specialise in <span className="font-semibold italic">dermatology</span>.
                        You can take <span className="font-semibold italic">5</span> pro-bono visits per week.</h3>
                    </div>}
                    {props.userType === "doctor" && <div>
                        <h3 className="text-center">Clinic location:</h3>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Profile;