import React, { useContext } from "react";
import { DetailedContext, DataContext } from "../App";
import { ReactComponent as CloseSVG } from "../SVGs/close.svg";
import { useState, useEffect } from "react";
import Maps from "./Maps";

function DetailsView(props) {
	const { setIsDetailedView } = useContext(DetailedContext);
	const { data } = useContext(DataContext);

	const [percentage, setPercentage] = useState(Math.floor(Math.random() * 101)); 
	const [isThanked, setIsThanked] = useState(false);

	const calculateStrokeDashoffset = (percentage) => {
	  return `calc(251.2 - (251.2 * ${percentage}) / 100)`;
	};

	const [submition, setSubmition] = useState(false);

	useEffect(() => {
		console.log(data);
		if (data.isFulfilled === "true") {
			setPercentage(100);
		}
		else {
			setPercentage(Math.floor(Math.random() * 101)); 	
		}
	}, []);
	
	function handleDonate(e) {
		e.preventDefault();
		setIsDetailedView(false);
		if(props.isLoggedin === true) {
			if(props.page === "donations") {
        		props.setPage("donationForm");
			}
			else {
				props.setPage("volunteeringForm");
			}
		}
		else {
			props.setPage("login");
		}
    }

	function handleEdit(e) {
		e.preventDefault();
		setIsDetailedView(false);
		props.setPage("postForm");
	}

	return (
		<div className="h-screen w-screen fixed top-0 z-10 bg-farahgray-900 bg-opacity-50 grid items-center justify-center">
			<div className="flex flex-col bg-farahgray-100 w-[600px] h-max rounded-md p-6 relative">
					
				{props.page === "OrganizationDelivery"?
					<div className="flex">
						{/*Close Button*/}
						<button className="absolute top-0 right-0 m-6">
								<CloseSVG
									className="h-5 w-5 cursor-pointer text-farahgray-600"
									onClick={() => setIsDetailedView(false)}
								/>
						</button>
						<div className="flex flex-col justify-center p-5 w-11/12  rounded-md gap-3">
							<label className="label font-bold">Dropoff details</label>
							<hr className=" border-t-2 w-full border-farahgray-600 pb-2" />
							{submition === false?
								<>
								<div className="flex flex-row justify-center gap-10">
									<div>
										<label className="label">
											Date:
											<input type="date" className="ml-3 bg-farahgray-100 border-2 border-solid border-farahgray-600 rounded-md px-2 cursor-pointer"/>
										</label>
									</div>
									<div>
										<label className="label ">
											Time:
											<input type="time" className="ml-3 bg-farahgray-100 border-2 border-solid border-farahgray-600 rounded-md px-2 cursor-pointer"/>
										</label>
									</div>
								</div>
								<button className="text-sm italic border border-farahgreen-600 text-farahgreen-600 ml-8 px-3 py-1 mt-4 rounded-xl self-center"
									onClick={() => setSubmition(true)}>
										Submit
								</button>
								</>
							:
								<div>Dropoff time successfully Chosen!</div>
							}
						</div>
					</div>
				:
					<div>
						{/*Top segment*/}
						<div className="flex">
							{/*Image*/}
							<div className="flex items-start justify-center w-40">
								{data.imgURL && (
									<img
										src={data.imgURL}
										alt="Donation"
										className="w-full object-cover rounded-md aspect-square"
									/>
								)}
							</div>

							{/*Text*/}
							<div className="w-2/3">
								<div className="flex flex-col items-left w-full mx-6 gap-1">
									<h2 className="text-xl font-semibold max-w-[330px] w-full">
										{data.title}
									</h2>
									<h2 className="text-l font-semibold text-farahgray-400">
										{data.subtitle}
									</h2>
									{props.page !== "organizations" &&
									<p className="text-sm text-farahgray-700">25/04/2024, 6:30pm</p>}
									<p className="text-sm">{data.description}</p>
								</div>
							</div>

							{/*Close Button*/}
							<button className="absolute top-0 right-0 m-6">
								<CloseSVG
									className="h-5 w-5 cursor-pointer text-farahgray-600"
									onClick={() => setIsDetailedView(false)}
								/>
							</button>
						</div>

						{/*Bottom segment*/}
						<div className="flex flex-col">
							<hr className="h-px bg-farahgray-400 border-0 my-8" />

								
							{/*Information segment*/}
							{props.page ==="organizations"?
								<div className="flex flex-col items-center">
									<div className="flex flex-row gap-x-16 mb-4">
										<label className=""> <span className=" font-semibold">Email: </span>
											<p>{data.email}</p>
										</label>
										<label className=""><span className=" font-semibold">Phone Number: </span>
											<p>{data.number}</p>
										</label>
									</div>
									{/*Google map for Org*/}
									<div className="w-96 mb-4 overflow-hidden rounded-md">
										<Maps isStaticMap={true} Location={"Organization"} />
									</div>
								</div>
							:
								<div className="grid grid-cols-3 w-full">
									{/*Tags column 1*/}

									{!data.tags.isFulfilled && 
										<div className="grid grid-rows-3 grid-cols-2 gap-2 col-span-2 grid-flow-row">
										{Object.entries(data.tags).map(
											([tag, value], index) =>
												tag !== "" &&
												value !== "" && 
										tag !== "isFulfilled" &&
										(
													<div key={index}>
														<h2 className="text-m font-semibold">{tag.charAt(0).toUpperCase() + tag.slice(1)}</h2>
														<h2 className="text-sm font-semibold text-farahgray-400">
															{value}
														</h2>
													</div>
												)
										)}
										
										{data.tags.type === "Clothes" &&
											<div>
												<h2 className="text-m font-semibold">Material</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.material}
												</h2>
											</div>
										}
									</div>}
									
									{/*Google map for Org*/}
									{props.page==="organizations" && 
									<div className="w-80 rounded-md overflow-hidden">
										<Maps isStaticMap={true} Location={"Organization"} />
									</div>
									}
									
									{/*Progress bar*/}
									{props.page === "donations" && <div className="flex flex-col items-center gap-2">
										<h2 className="text-m font-semibold">Required amount: {data.required_amount}</h2>
										<div className="relative w-40 h-40">
											<svg className="w-full h-full" viewBox="0 0 100 100">
												<circle
													className="text-farahgreen-300 stroke-current"
													strokeWidth="10"
													cx="50"
													cy="50"
													r="40"
													fill="white"
												></circle>
												<circle
													className="text-farahgreen-700  transition: stroke-dashoffset 0.35s  transform: rotate(-90deg) transform-origin: 50% 50% stroke-current"
													strokeWidth="10"
													cx="50"
													cy="50"
													r="40"
													fill="transparent"
													transform="rotate(-90, 50, 50)"
													strokeDasharray="251.2"
													strokeDashoffset={calculateStrokeDashoffset(percentage)}
												></circle>
												{/* 2*pi*40 = 251.2, change this value if change radius
													Change 70 to the percentage of progress
												*/}
												<text
													x="50"
													y="50"
													fontSize="sm"
													fontWeight="bold"
													textAnchor="middle"
													alignmentBaseline="middle"
												>
													{percentage + "%"}
												</text>
											</svg>
										</div>
									</div>}
								</div>}
								{props.page === "organizationPosts" && data.tags.isFulfilled === "true" &&
									<div style={{ textAlign: 'center', margin: '20px' }}>
										<h1 style={{ marginBottom: '20px' }}>
											This post has been fulfilled and reached its goal!
										</h1>
										{data.tags.type === "Teacher" && 
											<div>
												<p style={{ marginBottom: '10px' }}>
													For further inquiries, please contact:
												</p>
												<p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
													Soha Amer<br />
													Email: soha.amer@example.com<br />
													Phone: +201023482882
												</p>
												<button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '20px' }}
												onClick={() => setIsThanked(true)}
												>
													Send a Thank You Note
												</button>
												{isThanked &&
												<h1>
													Your thank you note has been sent!
												</h1>}
											</div>
										}
										{data.tags.type === "Doctor" &&
											<div>
												<p style={{ marginBottom: '10px' }}>
													For further inquiries, please contact:
												</p>
												<p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
													Maged Hosny<br />
													Email: maged.hosny@example.com<br />
													Phone: +201012359955
												</p>
												<button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '20px' }}
												onClick={() => setIsThanked(true)}
												>
													Send a Thank You Note
												</button>
												{isThanked &&
												<h1>
													Your thank you note has been sent!
												</h1>}
											</div>
											
										}
									</div>
								}
							<div className="flex flex-col align-middle items-center gap-2">
								{props.page === "donations" ? 
									<button
										className="text-sm italic border-2 border-farahorange-600 text-farahorange-600 px-4 py-1 rounded-xl font-semibold"
										onClick={handleDonate}
									>
										Donate {">"}
									</button>
								: props.page === "volunteering" ?
									<div className="flex gap-8">
										<button
											className="text-sm italic border-2 border-farahgreen-600 text-farahgreen-600 px-4 py-1 rounded-xl font-semibold"
											onClick={handleDonate}
										>
											Fulfill 
										</button>
									</div>
								: props.page === "organizations"?
									<div></div>
								:
									<div className="flex gap-8">
										<button
											className="text-sm italic border-2 border-farahgreen-600 text-farahgreen-600 px-4 py-1 rounded-xl font-semibold"
											onClick={handleEdit}
										>
											Edit 
										</button>
									</div>
								}
							</div>
						</div>
					</div>
				}	
			</div>
		</div>
	);
}
export default DetailsView;
