 import React, { useState } from 'react';
import NotificationComponent from './NotificationComponent';
import { ReactComponent as ProfileSVG } from '../SVGs/profile.svg';

function NavbarComponent( {setPage, isLoggedin, setIsLoggedin} ) {   
    return( 
		<div className="flex justify-center items-center w-full h-[7%] bg-white sticky top-0">
			{/* flexbox to split the navbar into 3 sections */}
			<div className="flex max-w-7xl w-full items-center justify-between">
				{/* logo div */}
				<div className="w-[150px]">
					{/* Temporary text, replace with real logo yara */}
					<h1 className="font-bold text-2xl">donately</h1>
				</div>
				{/* Donations, Volunteering, Organisations, also a flexbox */}
				<div className="flex font-medium text-center gap-24">
					<button
						className="cursor-pointer nav-item"
						onClick={() => setPage("donations")}
					>
						<h1>Donations</h1>
					</button>
					<button
						className="cursor-pointer nav-item"
						onClick={() => setPage("volunteering")}
					>
						<h1>Volunteering</h1>
					</button>

					<button
						className="cursor-pointer nav-item"
						onClick={() => setPage("organizations")}
					>
						<h1>Organizations</h1>
					</button>
					{/* Notifications, Profile, Logout, also a flexbox */}
				</div>
				<div className="flex font-medium items-center justify-center gap-4">
						<NotificationComponent />
						<ProfileSVG className="h-7 w-7" />
						{isLoggedin ? 
							<button 
							className="cursor-pointer nav-item"
							onClick={() => setIsLoggedin(false)}>
								<h1>Log Out</h1>
							</button>
						: 
							<button 
							className="cursor-pointer nav-item"
							onClick={() => setPage("login")}>
								<h1>Log in</h1>
							</button>
						}
					</div>
			</div>
		</div>
    );
}
export default NavbarComponent;