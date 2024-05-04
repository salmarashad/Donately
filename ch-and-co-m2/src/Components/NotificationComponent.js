import React, { useState } from 'react';
import {ReactComponent as NotifSVG} from '../SVGs/notification.svg';

function NotificationComponent(props) { 
    const [isClicked, setIsClicked] = useState(false);
    return(
        <div className='relative'>
            <div onClick={() => setIsClicked(!isClicked)}>
                <NotifSVG className="h-6 w-7 cursor-pointer" />
            </div>
            <div className={isClicked === false ? "hidden" : "block"}>
                {/* little triangle above the notif container */}
                <div className="absolute top-10 h-8 w-8 -right-0.5 bg-white shadow-lg rotate-45" />
                {/* actual notif container */}
                <div className="absolute top-12 h-72 w-72 -right-32 shadow-lg bg-white rounded-md p-4">
                    <h1 className='text-center'>Notifications</h1>
                    <hr className='border-t-2' />
                    {!props.isLoggedin && <div className='h-full flex text-center items-center justify-center text-farahgray'>
                        <p>Log in or sign up to receive notifications</p>
                    </div>}
                </div>
            </div>
        </div>
    );
}
export default NotificationComponent;