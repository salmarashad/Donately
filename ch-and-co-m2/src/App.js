import './App.css';
import { useState } from "react";
import DonationsView from './Views/DonationsView';
import NavbarComponent from './Components/NavbarComponent';
import Registration from './Components/Registration';
import Profile from './Components/Profile.js';
import Login from './Components/Login'
import OrganizationRegistration from './Components/OrganizationRegistration';
import UserRegistration from './Components/UserRegistration';

function App() {
  const [page, setPage] = useState("donations");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userType, setUserType] = useState("donor");
  return (
		<div className="h-screen font-karla text-farahblack">
			<NavbarComponent setPage={setPage} isLoggedin = {isLoggedin} setIsLoggedin={setIsLoggedin} />
			{/* rest of the body */}
			<div className="bg-gray-200 min-h-full pb-8 pt-24">
				{page === "donations" && <DonationsView />}
				{page === "volunteering" && <h1>Volunteering</h1>}
				{page === "organizations" && <h1>Organizations</h1>}
				{page === "registration" && <Registration setPage={setPage} />}
				{page === "organizationRegistration" && <OrganizationRegistration setPage={setPage} />}
				{page === "userRegistration" && <UserRegistration setPage={setPage} />}
				{page === "profile" && <Profile userType={userType} />}
				{page == "login" && <Login setIsLoggedin={setIsLoggedin} setPage={setPage}/>}
			</div>
		</div>
	);
}

export default App;
