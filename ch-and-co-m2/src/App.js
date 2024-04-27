import './App.css';

function App() {
  const Bell = () => {
    return (
      <div className="mx-auto">
        <svg fill="#333333" height="27px" width="27px" viewBox="0 0 448 512">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M222.987,510c31.418,0,57.529-22.646,62.949-52.5H160.038C165.458,487.354,191.569,510,222.987,510z"/>
              <path d="M432.871,352.059c-22.25-22.25-49.884-32.941-49.884-141.059c0-79.394-57.831-145.269-133.663-157.83h-4.141 c4.833-5.322,7.779-12.389,7.779-20.145c0-16.555-13.42-29.975-29.975-29.975s-29.975,13.42-29.975,29.975 c0,7.755,2.946,14.823,7.779,20.145h-4.141C120.818,65.731,62.987,131.606,62.987,211c0,108.118-27.643,118.809-49.893,141.059 C-17.055,382.208,4.312,434,47.035,434H398.93C441.568,434,463.081,382.269,432.871,352.059z"/>
            </g>
          </g>
        </svg>
      </div>
    );
  };
  
  const Profile = () => {
    return (
      <div className="mx-auto">
        <svg viewBox="0 0 24.00 24.00" height="32px" width="32px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9999 6C9.79077 6 7.99991 7.79086 7.99991 10C7.99991 12.2091 9.79077 14 11.9999 14C14.209 14 15.9999 12.2091 15.9999 10C15.9999 7.79086 14.209 6 11.9999 6ZM17.1115 15.9974C17.8693 16.4854 17.8323 17.5491 17.1422 18.1288C15.7517 19.2966 13.9581 20 12.0001 20C10.0551 20 8.27215 19.3059 6.88556 18.1518C6.18931 17.5723 6.15242 16.5032 6.91351 16.012C7.15044 15.8591 7.40846 15.7251 7.68849 15.6097C8.81516 15.1452 10.2542 15 12 15C13.7546 15 15.2018 15.1359 16.3314 15.5954C16.6136 15.7102 16.8734 15.8441 17.1115 15.9974Z" fill="#333333"></path>
          </g>
        </svg>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen">
      {/* grid splits child divs into a grid of size 3 */}
      <div className="grid grid-cols-3 mx-64 items-center h-16">
        {/* logo div */}
        <div>
          {/* Temporary text, replace with real logo yara */}
          <h1 className="font-bold text-2xl">donately</h1> 
        </div>
        {/* Donations, Volunteering, Organisations, also a grid of 3 */}
        <div className="grid grid-cols-3 font-medium text-center">
          <h1>Donations</h1>
          <h1>Volunteering</h1>
          <h1>Organisations</h1>
        </div>
        {/* Notifications, Profile, Logout, also a grid of three */}
        <div className="grid grid-cols-3 font-medium text-right ml-64 items-center justify-center">
          <Bell></Bell>
          <Profile></Profile>
          <h1>Logout</h1>
        </div>
      </div>
      {/* rest of the body */}
      <div className="bg-gray-200 min-h-screen">
        
      </div>
    </div>
  );
}

export default App;
