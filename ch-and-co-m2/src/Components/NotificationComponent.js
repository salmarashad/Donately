import React, { useState } from "react";
import { ReactComponent as NotifSVG } from "../SVGs/notification.svg";
import { ReactComponent as DeleteIcon } from "../SVGs/delete.svg"; // Import the delete icon
import { UserTypeContext } from "../App";
import { useContext } from "react";

function NotificationComponent(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Driver Arrived!",
      time: "8:08pm",
      type: "donor",
      content:
        "Please meet the driver at the delivery location to give him your package.",
    },
    {
      id: 2,
      title: "Driver on His Way!",
      time: "6:49pm",
      type: "donor",
      content:
        "The delivery driver is on his way to you right now. ETA: 8:02pm",
    },
    {
      id: 3,
      title: "A Donation was Made!",
      time: "10:00am",
      type: "organization",
      content:
        "A donation was made for the donation post: Children Clothing",
    }
  ]);
  const { userType, setUserType } = useContext(UserTypeContext);

  const handleDeleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="relative">
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
          {userType === "donor" && (
            <div className="grid space-y-5">
              {notifications.map((notification) => (
                notification.type === "donor" && 
                <div
                  key={notification.id}
                  className="grid grid-cols-1 bg-white shadow-md rounded-lg overflow-hidden h-full pl-5 pb-6 pt-4 relative"
                >
                  <div className="grid grid-cols-3 space-x-5">
                    <div className="col-span-2">{notification.title}</div>
                    <div className="text-xs col-span-1 justify-end ">
                      {notification.time}
                    </div>
                  </div>
                  <hr className=" border-t-2 w-56" />
                  <div className="text-xs pt-2">{notification.content}</div>
                  <button
                    className="absolute bottom-1 right-1"
                    onClick={() => handleDeleteNotification(notification.id)}
                  >
                    <DeleteIcon className="w-4 h-4 text-red-500 ml-1 mb-1" />{" "}
                    {/* Adjust the margin-left and margin-bottom here */}
                  </button>
                </div>
              ))}
            </div>
          )}
          {userType === "organization" && (
            <div className="grid gap-y-5">
              {notifications.map((notification) => (
                notification.type === "organization" &&
                <div
                  key={notification.id}
                  className="grid grid-cols-1 bg-white shadow-md rounded-lg overflow-hidden h-full pl-5 pb-6 pt-4 relative"
                >
                  <div className="grid grid-cols-3 space-x-5">
                    <div className="col-span-2">{notification.title}</div>
                    <div className="text-xs col-span-1 justify-end ">
                      {notification.time}
                    </div>
                  </div>
                  <hr className=" border-t-2 w-56" />
                  <div className="text-xs pt-2">{notification.content}</div>
                  <button
                    className="absolute bottom-1 right-1"
                    onClick={() => handleDeleteNotification(notification.id)}
                  >
                    <DeleteIcon className="w-4 h-4 text-red-500 ml-1 mb-1" />{" "}
                    {/* Adjust the margin-left and margin-bottom here */}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default NotificationComponent;
