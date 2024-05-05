import React, { useContext } from "react";
import { DetailedContext } from "../App";
function DonationCard(props) {
	const { isDetailedView, setIsDetailedView } = useContext(DetailedContext);
    return (
			<div className="w-full bg-white shadow-md rounded-md overflow-hidden p-6">
				<div className="flex gap-5">
					{/*Image*/}
					<div className="flex items-start justify-center w-40">
						<img
							src={props.imgURL}
							alt="Donation"
							className="w-full object-cover rounded-md aspect-square"
						/>
					</div>

					{/*Text*/}
					<div className="w-2/3">
						<div className="flex items-center gap-2">
							<h2 className="text-xl font-semibold mb-2">{props.title}</h2>
							<h2 className="text-l font-semibold text-farahgray-400 mb-2">|</h2>
							<h2 className="text-l font-semibold text-farahgray-400 mb-2">{props.subtitle}</h2>
						</div>
						<p className="text-sm text-farahgray-700">
							{props.description}
						</p>

						<div className="flex justify-between items-center mt-4 h-auto">
							{/*Tags*/}
							<div className="flex items-center gap-2">
								{Object.values(props.tags).map((tag, index) => (
									tag !== "" && 
									<span className="inline-block text-sm bg-farahgreen-300 text-farahgreen-700 px-3 py-1 rounded-xl font-bold" key={index}>
										{tag}
									</span>
								))}
							</div>

							{/*Button*/}
							<button 
							className="text-sm italic border-2 border-farahgreen-600 text-farahgreen-600 px-4 py-1 rounded-xl font-semibold"
							onClick={() => setIsDetailedView(true)}
							>
								View Details {">"}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default DonationCard;