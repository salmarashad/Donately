import "./App.css";
import { useState, createContext } from "react";
import PostsView from "./Views/PostsView.js";
import NavbarComponent from "./Components/NavbarComponent";
import Registration from "./Views/Registration.js";
import Profile from "./Views/Profile.js";
import Login from "./Views/Login.js";
import OrganizationsView from "./Views/OrganizationsView";
import OrganizationDelivery from "./Views/OrganizationDelivery";
import DetailsView from "./Components/DetailsView.js";
import DonationForm from "./Views/DonationForm.js";
import VolunteeringForm from "./Views/VolunteeringForm.js";
import TeachDocPage from "./Views/TeachDocPage.js";
import Maps from "./Components/Maps.js";
import PostForm from "./Views/PostForm.js";
import VerificationView from "./Views/VerificationView";
import DoctorRequestsView from "./Views/DoctorRequestsView";
import TeacherRequestsView from "./Views/TeacherRequestsView";
import DonorsView from "./Views/DonorsView.js";

const DetailedContext = createContext();
const UserTypeContext = createContext();
const DataContext = createContext();

function App() {
	const [page, setPage] = useState("donations");
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [isDetailedView, setIsDetailedView] = useState(false);
	const [userType, setUserType] = useState("");
	const [data, setData] = useState({});
	const [edit, setEdit] = useState(false);
	const [isSet, setIsSet] = useState(false);

	return (
		<DataContext.Provider value={{ data, setData }}>
			<DetailedContext.Provider value={{ isDetailedView, setIsDetailedView }}>
				<UserTypeContext.Provider value={{ userType, setUserType }}>
					<div className="h-screen font-karla text-farahgray-900">
						{page !== "login" && page !== "registration" && (
							<NavbarComponent
								page={page}
								setPage={setPage}
								isLoggedin={isLoggedin}
								setIsLoggedin={setIsLoggedin}
								edit={edit}
								setEdit={setEdit}
							/>
						)}
						{/* rest of the body */}
						<div className="bg-farahgray-100 h-max pb-8 pt-24 min-h-full">
							{page === "donations" 				&& <PostsView page={page} />}
							{page === "volunteering" 			&& <PostsView page={page} />}
							{page === "organizationPosts" 		&& <PostsView page={page} setPage={setPage} />}
							{page === "OrganizationDelivery" 	&& <OrganizationDelivery setPage={setPage} isSet={isSet}/>}
							{page === "postForm" 				&& <PostForm setPage={setPage} />}
							{page === "organizations" 			&& <OrganizationsView userType={userType}/>}
							{page === "donors" 					&& <DonorsView/>}
							{page === "verification" 			&& <VerificationView />}
							{page === "docRequest" 				&& <DoctorRequestsView setPage={setPage} />}
							{page === "teacherRequests" 		&& <TeacherRequestsView setPage={setPage} />}
							{page === "registration" 			&& <Registration setPage={setPage} />}
							{page === "profile" 				&& <Profile setPage={setPage} edit={edit} setEdit={setEdit} />}
							{page === "teachdocform" 			&& <TeachDocPage setPage={setPage} />}
							{page === "login" 					&& <Login setIsLoggedin={setIsLoggedin} setPage={setPage} />}
							{page === "donationForm" 			&& <DonationForm setPage={setPage} />}
							{page === "volunteeringForm" 		&& <VolunteeringForm setPage={setPage} />}
						</div>
						{isDetailedView && (
							<DetailsView
								page={page}
								setPage={setPage}
								isLoggedin={isLoggedin}
								setIsSet={setIsSet}
							/>
						)}
					</div>
				</UserTypeContext.Provider>
			</DetailedContext.Provider>
		</DataContext.Provider>
	);
}

export { App, DetailedContext, UserTypeContext, DataContext };
