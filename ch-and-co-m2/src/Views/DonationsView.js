import { useEffect, useState } from "react";
import DonationCard from "../Components/DonationCard";

function DonationsView() {
	const [currentCardSet, setCurrentCardSet] = useState([]);
	const [filteringOptions, setFilteringOptions] = useState([]);
	let currentData = 
			[{title: "Clothing", 
			  subtitle: "Tamer", 
			  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
			  tags: ["clothing", "Hosny"]}, 

			  {title: "Toys", 
			  subtitle: "Tamer", 
			  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
			  tags: ["toys", "Hosny"]}, 
			  
			  {title: "Food", 
			  subtitle: "Tamer", 
			  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
			  tags: ["blood", "Hosny"]}];
	useEffect(() => {
		if (filteringOptions.length === 0) {
			setCurrentCardSet(currentData);
		  } else {
			const filteredData = currentData.filter(item =>
			  item.tags.some(tag => filteringOptions.includes(tag))
			);
			setCurrentCardSet(filteredData);
		  }
		}, [filteringOptions]);
	const renderCards = (currentCardSet) => {
		return currentCardSet.map((card) => {
			return (
				<DonationCard
					title={card.title}
					subtitle={card.subtitle}
					description={card.description}
					tags={card.tags}
				/>
			);
		});
	};
	const handleFilterChange = (e) => {
		const { value, checked } = e.target;
		setFilteringOptions(prevOptions => {
			if (checked) {
				return [...prevOptions, value];
			} else {
				return prevOptions.filter(option => option !== value);
			}
		});
	};

  return (
		<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
			<div className="col-span-1 justify-self-start">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1>Filters</h1>
					<div className="flex flex-col gap-4">
						<div>
							<input type="checkbox" id="clothing" name="clothing" value="clothing" onChange={handleFilterChange} className="accent-gray-700"/>
							<h1 className="text-gray-500 mx-4 rounded-lg inline">
								Clothing
							</h1>
						</div>
						<div>
							<input type="checkbox" id="toys" name="toys" value="toys" onClick={handleFilterChange} className="accent-gray-700"/>
							<h1 className="text-gray-500 mx-4 rounded-lg inline">
								Toys
							</h1>
						</div>
						<div>
							<input type="checkbox" id="food" name="food" value="food" onClick={handleFilterChange} className="accent-gray-700"/>
							<h1 className="text-gray-500 mx-4 rounded-lg inline">
								Food
							</h1>
						</div>
						<div>
							<input type="checkbox" id="medical" name="medical" value="medical" onClick={handleFilterChange} className="accent-gray-700"/>
							<h1 className="text-gray-500 mx-4 rounded-lg inline">
								Medical Supplies
							</h1>
						</div>
						<div>
							<input type="checkbox" id="school" name="school" value="school" onClick={handleFilterChange} className="accent-gray-700"/>
							<h1 className="text-gray-500 mx-4 rounded-lg inline">
								School Supplies
							</h1>
						</div>
						<div>
							<input type="checkbox" id="blood" name="blood" value="blood" onClick={handleFilterChange} className="accent-gray-700"/>
							<h1 className="text-gray-500 mx-4 rounded-lg inline">
								Blood Donations
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-2">
				<div className="flex flex-col items-center justify-center gap-4">
					{renderCards(currentCardSet)}
				</div>
			</div>
			<div className="col-span-1"></div>
		</div>
	);
}

export default DonationsView;