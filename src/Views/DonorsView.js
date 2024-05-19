import { useState, useEffect } from "react";
import Filter from "../Components/Filter";
import donorsData from "../DummyData/donorsData.js";
import DonorCardRenderer from "../Components/DonorCardRenderer.js";

function DonorsView(props) {
	const [currentCardSet, setCurrentCardSet] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	
	useEffect(() => {
        const filteredData = donorsData.filter(donor =>
            donor.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCurrentCardSet(filteredData);
    }, [searchQuery]);


	return (
		<div>
			<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
				<div className="col-span-1 justify-self-start">
					<div className="flex-col items-center justify-center gap-4 sticky top-24">
					<input
						type="text"
						placeholder="Search..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="mb-2 px-3 py-2 w-64 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-farahgreen-400"
					/>
					</div>
				</div>
				<div className="col-span-2">
					<div className="flex flex-col items-center justify-center gap-4">
						{currentCardSet.length === 0 && (
							<p className="mt-56 text-center italic text-lg text-farahgray-700">
								No donors :{"("}
							</p>
						)}
						<DonorCardRenderer
							currentCardSet={currentCardSet}
							setCurrentCardSet={setCurrentCardSet}
						/>
					</div>
				</div>
				<div className="col-span-1 justify-self-end"></div>
			</div>
		</div>
	);
}

export default DonorsView;
