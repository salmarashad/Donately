import { useState, useContext } from "react";
import CardRenderer from "../Components/CardRenderer";
import Filter from "../Components/Filter";
import donationsData from "../DummyData/donationsData";
import volunteeringData from "../DummyData/volunteeringData";
import organizationPostData from "../DummyData/organizationPostData";
import { DataContext } from "../App";

function PostsView(props) {
	const { setData } = useContext(DataContext);
	const [currentCardSet, setCurrentCardSet] = useState([]);

	const type = props.page === "organizationPosts" ? "organization" : "donor";

	function handleClick() {
		setData(Object.fromEntries(Object.keys(props).map((key) => [key, ""])));
		props.setPage("postForm");
	}

	let currentData;

	if (props.page==="donations") {
	currentData = donationsData
	}
	else if (props.page === "volunteering"){
		currentData = volunteeringData
	}

	else if (props.page === "organizationPosts"){
		currentData = organizationPostData
	}
	
	return (
		<div>
			<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
				<div className="col-span-1 justify-self-start">
					<div className="flex flex-col items-center justify-center gap-4 sticky top-24">
						<Filter data={currentData} setCurrentCardSet={setCurrentCardSet} />
					</div>
				</div>
				<div className="col-span-2">
					<div className="flex flex-col items-center justify-center gap-4">
						<CardRenderer type={type} currentCardSet={currentCardSet} setCurrentCardSet={setCurrentCardSet}/>
					</div>
				</div>
				<div className="col-span-1 justify-self-end">
					{props.page === "organizationPosts" && (
						<div
							className="sticky top-24 -mb-8 rounded-md filter-scrollbar overflow-y-auto"
							style={{ maxHeight: "calc(100vh - 11.1rem)" }}
						>
							<button
								className="mb-2 px-3 py-2 w-64 rounded-md border-2 font-semibold border-farahorange-300 bg-farahorange-200 hover:bg-farahorange-100 cursor-pointer"
								onClick={handleClick}
							>
								<h3 className="text-lg font-semibold  text-farahorange-600  text-center on">
									New Post
								</h3>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default PostsView;