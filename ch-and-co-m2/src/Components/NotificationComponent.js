import React, { useState } from 'react';
import {ReactComponent as NotifSVG} from '../SVGs/notification.svg';

function NotificationComponent() { 
    const [isClicked, setIsClicked] = useState(false);
    return(
        <div className='relative'>
            <div onClick={() => setIsClicked(!isClicked)}>
                <NotifSVG className="h-6 w-7" />
            </div>
            <div className={isClicked === false ? "hidden" : "absolute top-12 h-72 w-72 -right-20 shadow-lg bg-white rounded-md"}>
                <div className='text-center items-center'>
                    <h1 className='mt-2'>Notifications</h1>
                </div>
                
            </div>
        </div>
    );
}
export default NotificationComponent;