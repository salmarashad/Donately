import React, { useContext, useState, useEffect } from "react";
import { DetailedContext, DataContext } from "../App";
import DeleteButton from "../Components/DeleteButton.js";

function renderTags(tags, viewportWidth) {
	const TAG_WIDTH = 100;
	// viewportWidth = 1920;
	let maxCharacters = 46;
	tags = Object.values(tags);
	tags = tags.filter((tag) => tag !== "");

	let renderedTags = [];
	let totalCharacters = 0;

	for (const tag of tags) {
		if (totalCharacters + 10 + tag.length <= maxCharacters) {
			renderedTags.push(tag);
			totalCharacters += tag.length + 10;
		} else {
			break;
		}
	}

	return renderedTags.map((tag, index) => (
		<>
			{tag !== "isFulfilled" && (
				<span
					className="inline-block text-sm bg-farahgreen-300 text-farahgreen-700 px-3 py-1 rounded-xl font-bold whitespace-nowrap"
					key={index}
				>
					{tag}
				</span>
			)}
			{index === renderedTags.length - 1 &&
				renderedTags.length < tags.length && (
					<span className="inline-block text-sm border-2 border-farahgreen-600 text-farahgreen-700 px-3 py-1 rounded-xl font-bold">
						...
					</span>
				)}
		</>
	));
}

function DonationCard({ currentCardSet, setCurrentCardSet, ...props }) {
	const { setIsDetailedView } = useContext(DetailedContext);
	const { setData } = useContext(DataContext);
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await fetch("https://source.unsplash.com/random");
				setImageUrl(response.url);
			} catch (error) {
				console.error("Error fetching image:", error);
			}
		};

		fetchImage();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleClick = () => {
		setData({ ...props, imgURL: imageUrl });
		setIsDetailedView(true);
	};

	const handleDelete = () => {
		setCurrentCardSet(
			currentCardSet.filter((card) => card.title !== props.title)
		);
	};

	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	return (
		<div className="group/card w-full min-w-72 bg-white shadow-md rounded-md overflow-hidden p-6 relative">
			<div className="flex gap-5">
				{/*Image*/}
				<div className="flex items-start justify-center w-40">
					<img
						src={imageUrl}
						alt="Donation"
						className="w-full object-cover rounded-md aspect-square"
					/>
				</div>

				{/*Text*/}
				<div className="w-2/3">
					<div>
						<div className="flex justify-between items-start">
							<h2 className="text-xl font-semibold">{props.title}</h2>
							{/* Delete Button */}
							{props.type !== "donor" && (
								<DeleteButton function={handleDelete} group={"card"} />
							)}
						</div>
						<h2 className="text-l font-semibold text-farahgray-500 mb-2">
							{props.subtitle}
						</h2>
					</div>
					<p className="text-sm text-farahgray-700">{props.description}</p>

					<div className="flex flex-col md:flex-row justify-between items-center mt-4 h-auto">
						{/*Tags*/}
						<div className="flex items-center gap-2 mr-2">
							{renderTags(props.tags, viewportWidth)}
						</div>

						{/*Button*/}
						{props.tags.isFulfilled === "true" ? (
							<div
								className="button2 hover:bg-transparent"
							>
								Fulfilled!
							</div>
						) : (
							<button
								className=" button"
								onClick={() => handleClick()}
							>
								{props.type === "donor" ? "View Details >" : "Edit Details >"}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonationCard;
