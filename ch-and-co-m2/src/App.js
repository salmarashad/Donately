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
  return (
		<div className="h-screen">
			<NavbarComponent setPage={setPage} />
			{/* rest of the body */}
			<div className="bg-gray-200 min-h-[93%] py-8">
				{page === "donations" && <DonationsView />}
				{page === "volunteering" && <h1>Volunteering</h1>}
				{page === "organizations" && <h1>Organizations</h1>}
				{page === "registration" && <Registration setPage={setPage} />}
				{page === "profile" && <Profile />}
				{page == "login" && <Login />}
			</div>
		</div>
	);
}

export default App;
