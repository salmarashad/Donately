import React, { useContext} from "react";
import { DetailedContext, DataContext } from "../App";
import DeleteButton from "../Components/DeleteButton.js";

function OrganizationCard({ currentCardSet, setCurrentCardSet, ...props }) {
	const { setIsDetailedView } = useContext(DetailedContext);
	const { setData } = useContext(DataContext);

	const handleClick = () => {
		setData({
			title: props.title,
			subtitle: props.subtitle,
			description: props.description,
			imgURL: props.imgURL,
			tags: props.tags,
			email: props.email,
			number: props.number,
		});
		setIsDetailedView(true);
	};

  const handleDelete = () => {
		setCurrentCardSet(
			currentCardSet.filter((card) => card.title !== props.title)
		);
	};

	return (
		<div className="group/card organization-card bg-white shadow-md rounded-md overflow-hidden flex flex-col justify-between h-full p-5 m-1 relative">
			<div className="flex flex-col items-center min-w-36 h-full justify-between">
				<div className="flex flex-col items-center gap-0.5">
					{props.userType === 'admin' && <div className="bg-farahgray-100 rounded-lg absolute top-0 right-0 mt-2 mr-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
						<DeleteButton function={handleDelete} group={"card"} />
					</div>}
					{props.imgURL && (
						<img
							src={props.imgURL}
							alt={props.title}
							className="w-full aspect-square object-cover rounded-md border mb-1"
						/>
					)}
					<p className="text-center font-semibold leading-[18px]">
						{props.title}
					</p>
					<p className="text-sm text-gray-500">{props.subtitle}</p>
				</div>
				<div>
					<button
						className="button"
						onClick={() => handleClick()}
					>
						View Details {">"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrganizationCard;
