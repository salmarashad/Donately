import './App.css';
import { useState, createContext } from "react";
import DonationsView from './Views/DonationsView';
import NavbarComponent from './Components/NavbarComponent';
import Registration from './Components/Registration';
import Profile from './Components/Profile.js';
import Login from './Components/Login'
import OrganizationsView from './Views/OrganizationsView';
import VolunteeringView from './Views/VolunteeringView';
import DetailsView from './Components/DetailsView.js';

const DetailedContext = createContext();
const userContext = createContext();

function App() {
	const [page, setPage] = useState("donations");
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [isDetailedView, setIsDetailedView] = useState(false);
	const [userType, setUserType] = useState("");
  	return (
		<DetailedContext.Provider value={{ isDetailedView, setIsDetailedView }}>
			<userContext.Provider value={{userType, setUserType}}>
				<div className="h-screen font-karla text-farahgray-900">
					{page !== "login" && page !== "registration" &&
						<NavbarComponent setPage={setPage} isLoggedin = {isLoggedin} setIsLoggedin={setIsLoggedin} userType={userType} setUserType={setUserType} />}
					{/* rest of the body */}
					<div className="bg-farahgray-100 h-max pb-8 pt-24 min-h-full">
						{page === "donations" && <DonationsView />}
						{page === "volunteering" && <VolunteeringView />}
						{page === "organizations" && <OrganizationsView />}
						{page === "registration" && <Registration setPage={setPage} />}
						{page === "profile" && <Profile userType={userType} />}
						{page === "login" && <Login setIsLoggedin={setIsLoggedin} setPage={setPage} setUserType={setUserType}/>}
					</div>
					{isDetailedView && <DetailsView />}
				</div>
			</userContext.Provider>
		</DetailedContext.Provider>
	);
}

export {App, DetailedContext};
