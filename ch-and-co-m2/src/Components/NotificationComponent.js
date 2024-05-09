import React, { useState } from 'react';
import {ReactComponent as NotifSVG} from '../SVGs/notification.svg';
import { UserTypeContext } from "../App";
import { useContext } from 'react';

function NotificationComponent(props) { 
    const [isClicked, setIsClicked] = useState(false);
    const { userType, setUserType } = useContext(UserTypeContext);

    return(
        <div className='relative'>
            <div onClick={() => setIsClicked(!isClicked)}>
                <NotifSVG className="h-6 w-7 cursor-pointer" />
            </div>
            <div className={isClicked === false ? "hidden" : "block"}>
                {/* little triangle above the notif container */}
                <div className="absolute top-10 h-8 w-8 -right-0.5 bg-white shadow-lg rotate-45" />
                {/* actual notif container */}
                <div className="absolute top-12 h-80 w-72 z-20 -right-32 shadow-lg bg-white rounded-md p-4 space-y-2">
                    <h1 className="text-center">Notifications</h1>
                    <hr className="border-t-2" />
                    {/*notifications*/}
                    { userType==="donor" &&
                        <div className="grid space-y-5">
                            {/*order arrived*/}
                            <div className = " grid grid-cols-1 bg-white shadow-md rounded-lg overflow-hidden h-full pl-5 pb-6 pt-4">
                                <div className = " grid grid-cols-3 space-x-5">
                                    <div className="col-span-2">Driver Arrived!</div>
                                    <div className="text-xs col-span-1 justify-end ">8:08 pm</div>
                                </div>
                                <hr className=" border-t-2 w-56" />
                                <div className="text-xs pt-2">Please meet the driver at the delivery location to pickup the package.</div>
                            </div>
                            {/*order is shipped*/}
                            <div className = " grid grid-cols-1 bg-white shadow-md rounded-lg overflow-hidden h-full pl-5 pb-4 pt-4">
                                <div className = " grid grid-cols-3 space-x-5">
                                    <div className="col-span-2">Delivery On Its Way!</div>
                                    <div className="text-xs col-span-1 justify-end ">10:00 am</div>
                                </div>
                                <hr className=" border-t-2 w-56" />
                                <div className="text-xs pt-2">The order is on its way to you right now. ETA: 8:00 pm</div>
                            </div>
                            
                        </div>
                    }
                    { userType==="organization" &&
                        <div className="grid gap-y-5">
                            {/*donor fulfills request*/}
                            <div className = " grid grid-cols-1 bg-white shadow-md rounded-lg overflow-hidden h-full pl-5 pb-6 pt-4">
                                <div className = " grid grid-cols-3 space-x-5">
                                    <div className="col-span-2">Request Filled!</div>
                                    <div className="text-xs col-span-1 justify-end ">6:30 pm</div>
                                </div>
                                <hr className=" border-t-2 w-56" />
                                <div className="text-xs pt-2">A donation was made for the post "Child Clothing".</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default NotificationComponent;