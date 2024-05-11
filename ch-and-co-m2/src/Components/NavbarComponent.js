import NotificationComponent from "./NotificationComponent";
import { ReactComponent as ProfileSVG } from "../SVGs/profile.svg";
import { ReactComponent as LogoSVG } from "../SVGs/tiger-filled.svg";
import { useContext, useState } from "react";
import { UserTypeContext } from "../App";

function NavbarComponent({ page, setPage, isLoggedin, setIsLoggedin, edit, setEdit }) {
  const { userType, setUserType } = useContext(UserTypeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuClick = (selectedPage) => {
    setPage(selectedPage);
    setShowDropdown(false); // Hide the dropdown after selecting an option
  };

  function goToProfile() {
    if (isLoggedin) {
      setPage("profile");
      if(edit === true){
        setEdit(false);
      }
    } else {
      setPage("login");
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-16 bg-white fixed top-0 z-10">
      {/* flexbox to split the navbar into 3 sections */}
      <div className="flex max-w-7xl w-full items-center justify-between">
        {/* logo div */}
        <div className="w-[150px]">
          <LogoSVG className="w-24" />
        </div>
        {/* Donations, Volunteering, Organisations, also a flexbox */}
        {userType === "admin" ? (
          <div className="flex font-medium text-center gap-24">
            <button
              className={
                page === "organizations" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setPage("organizations")}
            >
              <h1>Organisations</h1>
            </button>
            <button
              className={
                page === "organizations" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setPage("organizations")}
            >
              <h1>Donors</h1>
            </button>
            <div className="relative">
              <button
                className={
                  page === "verification" || page === "docRequest" || page === "teacherRequests"
                    ? "nav-item-selected"
                    : "nav-item"
                }
                onClick={toggleDropdown}
              >
                <h1>Requests</h1>
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleMenuClick("verification")}
                  >
                    Organizations
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleMenuClick("docRequest")}
                  >
                    Doctors
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleMenuClick("teacherRequests")}
                  >
                    Teachers
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : userType === "organization" ? (
          <div className="flex font-medium text-center gap-24">
            <button
              className={
                page === "organizationPosts" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setPage("organizationPosts")}
            >
              <h1>Dashboard</h1>
            </button>
            <button
              className={
                page === "OrganizationDelivery"
                  ? "nav-item-selected"
                  : "nav-item"
              }
              onClick={() => setPage("OrganizationDelivery")}
            >
              <h1>Dropoffs</h1>
            </button>
          </div>
        ) : (
          <div className="flex font-medium text-center gap-24">
            <button
              className={
                page === "donations" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setPage("donations")}
            >
              <h1>Donations</h1>
            </button>
            <button
              className={
                page === "volunteering" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setPage("volunteering")}
            >
              <h1>Volunteering</h1>
            </button>

            <button
              className={
                page === "organizations" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setPage("organizations")}
            >
              <h1>Organizations</h1>
            </button>
          </div>
        )}
        {/* Notifications, Profile, Logout, also a flexbox */}
        <div className="flex font-medium items-center justify-end gap-4 w-[150px]">
          {isLoggedin && userType !== "admin" && (
            <NotificationComponent isLoggedin={isLoggedin} />
          )}
          {isLoggedin && (
            <ProfileSVG
              className="h-7 w-7 cursor-pointer"
              onClick={goToProfile}
            />
          )}
          {isLoggedin ? (
            <button
              onClick={() => {
                setIsLoggedin(false);
                setPage("donations");
                setUserType("");
              }}
            >
              <h1>Log Out</h1>
            </button>
          ) : (
            <button onClick={() => setPage("login")}>
              <h1>Log in</h1>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
