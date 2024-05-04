import { useEffect, useState } from "react";
import DonationCard from "../Components/DonationCard";
import CardRenderer from "../Components/CardRenderer";
import Filter from "../Components/Filter";

function VolunteeringView() {
	const [currentCardSet, setCurrentCardSet] = useState([]);
	const [filteringOptions, setFilteringOptions] = useState([]);
	
	let currentData = 
			[{title: "Clothing", 
			  subtitle: "Tamer", 
			  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
			  tags: ["clothing", "Hosny"],
			  imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggDQ7mmUtoTk1dCz8WaEAOMQOyah08T2JdAqwU0eJzg&s"}, 

			  {title: "Toys", 
			  subtitle: "Tamer", 
			  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
			  tags: ["toys", "Hosny"],
			  imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggDQ7mmUtoTk1dCz8WaEAOMQOyah08T2JdAqwU0eJzg&s"}, 
			  
			  {title: "Food", 
			  subtitle: "Tamer", 
			  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
			  tags: ["blood", "Hosny"],
			  imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggDQ7mmUtoTk1dCz8WaEAOMQOyah08T2JdAqwU0eJzg&s"}];
  return (
		<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
			<div className="col-span-1 justify-self-start">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1>Filters</h1>
					<Filter filteringOptions={filteringOptions} setFilteringOptions={setFilteringOptions} currentData={currentData} setCurrentCardSet={setCurrentCardSet} />
				</div>
			</div>
			<div className="col-span-2">
				<div className="flex flex-col items-center justify-center gap-4">
					<CardRenderer currentCardSet = {currentCardSet} />
				</div>
			</div>
			<div className="col-span-1"></div>
		</div>
	);
}

export default VolunteeringView;