import './App.css';
import NotificationComponent from './Components/NotificationComponent';
import {ReactComponent as ProfileSVG} from './SVGs/profile.svg';

function App() {
  
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
          <div className="flex font-medium text-center gap-20">
            <h1>Donations</h1>
            <h1>Volunteering</h1>
            <h1>Organisations</h1>
          </div>
          {/* Notifications, Profile, Logout, also a flexbox */}
          <div className="flex font-medium items-center justify-center gap-4">
            <NotificationComponent/>
            <ProfileSVG className="h-7 w-7" />
            <h1>Logout</h1>
          </div>
        </div>
      </div>
      {/* rest of the body */}
      <div className="bg-gray-200 min-h-screen">

      </div>
    </div>
  );
}

export default App;
