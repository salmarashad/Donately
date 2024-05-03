import './App.css';
import { useState } from "react";
import NotificationComponent from './Components/NotificationComponent';
import DonationsView from './Views/DonationsView';
import {ReactComponent as ProfileSVG} from './SVGs/profile.svg';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  const [page, setPage] = useState("donations");
  return (
		<div className="min-h-screen">
			<NavbarComponent setPage={setPage} />
			{/* rest of the body */}
			<div className="bg-farahgray-200 min-h-screen pt-12">
				{page === "donations" && <DonationsView />}
				{page === "volunteering" && <h1>Volunteering</h1>}
				{page === "organizations" && <h1>Organizations</h1>}
			</div>
		</div>
	);
}

export default App;
