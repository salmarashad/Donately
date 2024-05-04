import {ReactComponent as ProfileSVG} from '../SVGs/profile.svg';
import {ReactComponent as MailSVG} from '../SVGs/mail.svg';
import {ReactComponent as PhoneSVG} from '../SVGs/phone.svg';
import {ReactComponent as LocationSVG} from '../SVGs/location.svg';

function Profile() {
    return (
        <div className="w-full h-screen flex justify-center items-center -mb-8">
            <div className="h-max-content w-[600px] bg-white rounded-md shadow-lg flex flex-col p-4">
                <div className="flex gap-2">
                    <ProfileSVG className="h-32 w-32" />
                    <div className="flex flex-col pt-2">
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
                <div>

                </div>
            </div>
        </div>
    )
}

export default Profile;