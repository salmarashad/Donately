import './App.css';
import { useState } from "react";
import NotificationComponent from './Components/NotificationComponent';
import {ReactComponent as ProfileSVG} from './SVGs/profile.svg';

function App() {
  const [page, setPage] = useState("donations");
  return (
		<div className="min-h-screen">
			{/* flexbox to center the navbar content horizontally and vertically */}
			<div className="flex justify-center items-center w-full h-16 shadow-md">
				{/* flexbox to split the navbar into 3 sections */}
				<div className="flex max-w-7xl w-full items-center justify-between">
					{/* logo div */}
					<div>
						{/* Temporary text, replace with real logo yara */}
						<h1 className="font-bold text-2xl">donately</h1>
					</div>
					{/* Donations, Volunteering, Organisations, also a flexbox */}
					<button
						className="hover:bg-slate-100 cursor-pointer"
						onClick={() => setPage("donations")}
					>
						<h1>Donations</h1>
					</button>

					<button
						className="hover:bg-slate-100 cursor-pointer"
						onClick={() => setPage("volunteering")}
					>
						<h1>Volunteering</h1>
					</button>

					<button
						className="hover:bg-slate-100 cursor-pointer"
						onClick={() => setPage("Organizations")}
					>
						<h1>Organizations</h1>
					</button>
					{/* Notifications, Profile, Logout, also a flexbox */}
					<div className="flex font-medium items-center justify-center gap-4">
						<NotificationComponent />
						<ProfileSVG className="h-7 w-7" />
						<h1>Logout</h1>
					</div>
				</div>
			</div>
			{/* rest of the body */}
			<div className="bg-gray-200 min-h-screen"></div>
		</div>
	);
}

export default App;
