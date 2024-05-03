import './App.css';
import { useState } from "react";
import NotificationComponent from './Components/NotificationComponent';
import {ReactComponent as ProfileSVG} from './SVGs/profile.svg';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  const [page, setPage] = useState("donations");
  return (
		<div className="min-h-screen">
			<NavbarComponent setPage={setPage} />
			{/* rest of the body */}
			<div className="bg-gray-200 min-h-screen"></div>
		</div>
	);
}

export default App;
