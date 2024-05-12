import React, { useContext } from "react";
import { DetailedContext, DataContext, UserTypeContext } from "../App";
import { ReactComponent as CloseSVG } from "../SVGs/close.svg";
import { useState, useEffect } from "react";
import Maps from "./Maps";

function DetailsView(props) {
	const { setIsDetailedView } = useContext(DetailedContext);
	const { data } = useContext(DataContext);
	const { userType } = useContext(UserTypeContext);
	const [details, setDetails] = useState({
		date: "",
		time: "",
	});
	const handleDetailsChange = (fieldName, value) => {
		setDetails((prevDetails) => ({
			...prevDetails,
			[fieldName]: value,
		}));
	};

	const [percentage, setPercentage] = useState(Math.floor(Math.random() * 101)); 
	const [isThanked, setIsThanked] = useState(false);

	const calculateStrokeDashoffset = () => {
	  return `calc(251.2 - (251.2 * ${data.progress}) / 100)`;
	};

	const [submition, setSubmition] = useState(false);

	useEffect(() => {
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
			<div className="flex flex-col bg-white w-[600px] h-max rounded-md p-6 relative">
					
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
							<hr className=" border-t-2 w-full pb-2" />
							{submition === false?
								<>
								<div className="flex flex-row justify-center gap-10">
									<div>
										<label className="label">
											Date:
											<input type="date" 
											value={details.date} 
											onChange={(e) =>
												handleDetailsChange("date", e.target.value)
											}
											className="ml-3 bg-farahgray-100 border-2 border-solid border-farahgray-600 rounded-md px-2 cursor-pointer"/>
										</label>
									</div>
									<div>
										<label className="label ">
											Time:
											<input type="time" 
											value={details.time} 
											onChange={(e) =>
												handleDetailsChange("time", e.target.value)
											}
											className="ml-3 bg-farahgray-100 border-2 border-solid border-farahgray-600 rounded-md px-2 cursor-pointer"/>
										</label>
									</div>
								</div>
								<button className="text-sm italic border border-farahgreen-600 text-farahgreen-600 ml-8 px-3 py-1 mt-4 rounded-xl self-center"
									disabled={
										Object.values(details).includes("") || details.count === 0
									}
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
									{props.page === "volunteering" && data.patient_details && <>
										<p className="text-sm">
											<span className="font-semibold">Case description:</span> {data.patient_details.case_description}
										</p>
									</>}
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
							<hr className="border-t-2 w-full my-8" />

							{/*Google map for doctor in volunteering*/}
							{(props.page === "volunteering") &&
									 <div className="w-full rounded-md overflow-hidden p-4 pt-0 ">
										<Maps 
										isStaticMap={true} 
										Location={data.tags.type==="Doctor"? "Hospital": "Teaching Post"} />
									</div>}
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
										<div className="grid h-max grid-cols-2 gap-4 gap-y-4 col-span-2 grid-flow-row">
										{Object.entries(data.tags).map(
											([tag, value], index) =>
												tag !== "" &&
												value !== "" && 
										tag !== "isFulfilled" &&
										(<>
													{(tag === "Medical_Device" || tag === "Medication" || tag === "Medical_Equipment") &&
													<div key={index}>
														<h2 className="text-m font-semibold">
															Subcategory
														</h2>
														<h2 className="text-sm font-semibold text-farahgray-400">
															{tag.replace(/_/g, ' ')}
														</h2>
													</div>}
													<div key={index}>
														<h2 className="text-m font-semibold">
															{tag === "Medical_Device" || tag === "Medication" || tag === "Medical_Equipment" ? "Type" : tag}
														</h2>
														<h2 className="text-sm font-semibold text-farahgray-400">
															{value}
														</h2>
													</div>
												</>)
										)}
										
										{data.material &&
											<div>
												<h2 className="text-m font-semibold">Material</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.material}
												</h2>
											</div>
										}
										{data.item_type &&
											<div>
												<h2 className="text-m font-semibold">Type</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.item_type}
												</h2>
											</div>
										}
										{data.book_details && <>
											<div>
												<h2 className="text-m font-semibold">Language</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.book_details.Language}
												</h2>
											</div>
											<div>
												<h2 className="text-m font-semibold">Title</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.book_details.Title} ({data.book_details.Edition})
												</h2>
											</div>
											<div>
												<h2 className="text-m font-semibold">Author</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.book_details.Author}
												</h2>
											</div>
										</>}
										{data.use &&
										<div>
											<h2 className="text-m font-semibold">Use</h2>
											<h2 className="text-sm font-semibold text-farahgray-400">
												{data.use}
											</h2>
										</div>
										}
										{data.patient_name &&
										<div>
											<h2 className="text-m font-semibold">Patient name</h2>
											<h2 className="text-sm font-semibold text-farahgray-400">
												{data.patient_name}
											</h2>
										</div>
										}
										{data.blood_type &&
										<div>
											<h2 className="text-m font-semibold">Blood type</h2>
											<h2 className="text-sm font-semibold text-farahgray-400">
												{data.blood_type}
											</h2>
										</div>
										}
										{data.hospital_address &&
										<div>
											<h2 className="text-m font-semibold">Hospital address</h2>
											<h2 className="text-sm font-semibold text-farahgray-400">
												{data.hospital_address}
											</h2>
										</div>
										}
									</div>}

									{props.page === "volunteering" && <div className="flex flex-col gap-4">
											{data.num_students &&
											<div>
												<h2 className="text-m font-semibold">Number of students</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.num_students}
												</h2>
											</div>
											}
											{data.address &&
											<div>
												<h2 className="text-m font-semibold">School address</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.address}
												</h2>
											</div>
											}
											{data.patient_details && <>
											<div>
												<h2 className="text-m font-semibold">Patient</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.patient_details.name} ({data.patient_details.gender.charAt(0)})
												</h2>
											</div>
											<div>
												<h2 className="text-m font-semibold">Details</h2>
												<h2 className="text-sm font-semibold text-farahgray-400">
													{data.patient_details.age} y/o, {data.patient_details.weight}KG
												</h2>
											</div>
										</>}
									</div>}
									
									{/*Google map for Org*/}
									{props.page==="organizations" && 
									<div className="w-80 rounded-md overflow-hidden">
										<Maps isStaticMap={true} Location={"Organization"} />
									</div>
									}
									
									{/*Progress bar*/}
									{props.page === "donations" && <div className="flex flex-col items-center gap-2">
										<h2 className="text-m font-semibold text-center leading-tight">Required amount<br/><span className="font-normal">{data.required_amount}</span></h2>
										<div className="relative w-40 h-40">
											<svg className="w-full h-full" viewBox="0 0 100 100">
												<circle
													className="text-farahgreen-300 stroke-current fill-farahgreen-50"
													strokeWidth="10"
													cx="50"
													cy="50"
													r="40"
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
													strokeDashoffset={calculateStrokeDashoffset()}
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
													{data.progress + "%"}
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
										className="button2"
										onClick={handleDonate}
									>
										Donate {">"}
									</button>
								: props.page === "volunteering" ?
									<div className="flex gap-8">
										{(userType === "donor") || (data.tags.Category === "Teacher" && userType === "doctor" ) || (data.tags.Category === "Doctor" && userType === "teacher" )  ?	
											<div className=" text-center m-4">
												<p>Sorry, you must be a 
													<span className=" font-semibold italic"> {data.tags.Category} </span>
													to be eligible
												</p>
											</div>
										:
											<button
												className="button2"
												onClick={handleDonate}
											>
												Fulfill 
											</button>
										}
									</div>
								: props.page === "organizations"?
									<div></div>
								:
									<div className="flex gap-8">
										<button
											className="button2"
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
