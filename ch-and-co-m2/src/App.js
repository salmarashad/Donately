import './App.css';
import { useState } from "react";
import NotificationComponent from './Components/NotificationComponent';
import DonationsView from './Views/DonationsView';
import {ReactComponent as ProfileSVG} from './SVGs/profile.svg';
import NavbarComponent from './Components/NavbarComponent';
import Registration from './Components/Registration';
import OrganizationRegistration from './Components/OrganizationRegistration';
import UserRegistration from './Components/UserRegistration';

function App() {
  const [page, setPage] = useState("donations");
  return (
		<div className="min-h-screen">
			<NavbarComponent setPage={setPage} />
			{/* rest of the body */}
			<div className="bg-gray-200 min-h-screen">
				{page === "donations" && <DonationsView />}
				{page === "volunteering" && <h1>Volunteering</h1>}
				{page === "organizations" && <h1>Organizations</h1>}
				{page === "registration" && <Registration />}
				
			</div>
		</div>
	);
}

export default App;
