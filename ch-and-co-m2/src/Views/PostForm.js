import { useState, useContext } from "react";
import { ReactComponent as SpinnerSVG } from "../SVGs/spinner.svg";
import { DataContext } from "../App";
import Maps from "../Components/Maps";

function PostForm(props) {
	const { data } = useContext(DataContext);
	const dataTags = data && data.tags ? data.tags : {};

	console.log("data\n", data);
	console.log("dataTags\n", dataTags);

	const [formData, setFormData] = useState({
		title: data.title || "",
		description: data.description || "",
		amount: data.required_amount ? data.required_amount.match(/\d+/) : "",
		isVolunteering: "false",
		Category: dataTags.Category || "",
	});

	const [validity, setValidity] = useState({
		title: true,
		description: true,
		amount: true,
		type: true,
		detailsNotEmpty: true,
		toysAge: true,
	});

	const [clothesDetails, setClothesDetails] = useState({
		Age: dataTags.Category === "Clothes" ? dataTags.Age : "",
		Gender: dataTags.Category === "Clothes" ? dataTags.Gender : "",
		Season: dataTags.Category === "Clothes" ? dataTags.Season : "",
		type: dataTags.Category === "Clothes" ? data.type : "",
		material: dataTags.Category === "Clothes" ? data.material : "",
	});

	function handleClothesChange(fieldName, value) {
		setClothesDetails((prevClothesDetails) => ({
			...prevClothesDetails,
			[fieldName]: value,
		}));
	}

	const [toysDetails, setToysDetails] = useState({
		Age: dataTags.Category === "Toys" ? dataTags.Age : "",
		Gender: dataTags.Category === "Toys" ? dataTags.Gender : "",
		Subcategory: dataTags.Category === "Toys" ? dataTags.Subcategory : "",
		type: dataTags.Category === "Toys" ? data.type : "",
	});

	function handleToysChange(fieldName, value) {
		setToysDetails((prevToysDetails) => ({
			...prevToysDetails,
			[fieldName]: value,
		}));
	}

	const [foodDetails, setFoodDetails] = useState({
		Subcategory: dataTags.Category === "Food" ? dataTags.category : "",
	});

	function handleFoodChange(fieldName, value) {
		setFoodDetails((prevFoodDetails) => ({
			...prevFoodDetails,
			[fieldName]: value,
		}));
	}

	const [medicalSuppliesDetails, setMedicalSuppliesDetails] = useState({
		Medical_Device:
			dataTags.Category === "Medical Supplies" ? dataTags.Medical_Device : "",
		Medical_Equipment:
			dataTags.Category === "Medical Supplies" ? dataTags.Medical_Equipment : "",
		Medication: dataTags.Category === "Medical Supplies" ? dataTags.Medication : "",
		use: dataTags.Category === "Medical Supplies" ? data.use : "",
	});

	function handleMedicalSuppliesChange(fieldName, value) {
		setMedicalSuppliesDetails((prevMedicalSuppliesDetails) => ({
			...prevMedicalSuppliesDetails,
			[fieldName]: value,
		}));
	}

	const [bloodDetails, setBloodDetails] = useState({
		Hospital: dataTags.Category === "Blood Donations" ? dataTags.Hospital : "",
		Governorate:
			dataTags.Category === "Blood Donations" ? dataTags.Governorate : "",
		Area: dataTags.Category === "Blood Donations" ? dataTags.Area : "",
		patient_name: dataTags.Category === "Blood Donations" ? data.patient_name : "",
		blood_type: dataTags.Category === "Blood Donations" ? data.blood_type : "",
	});

	function handleBloodChange(fieldName, value) {
		setBloodDetails((prevBloodDetails) => ({
			...prevBloodDetails,
			[fieldName]: value,
		}));
	}

	const [schoolSuppliesDetails, setSchoolSuppliesDetails] = useState({
		Subcategory:
			dataTags.Category === "School Supplies" ? dataTags.Subcategory : "",
		type: dataTags.Category === "School Supplies" ? data.type : "",
		Title: dataTags.Subategory === "Books" ? data.Title : "",
		Author: dataTags.Subategory === "Books" ? data.Author : "",
		Edition: dataTags.Subategory === "Books" ? data.Edition : "",
		Language: dataTags.Subategory === "Books" ? data.Language : "",
	});

	function handleSchoolSuppliesChange(fieldName, value) {
		setSchoolSuppliesDetails((prevSchoolSuppliesDetails) => ({
			...prevSchoolSuppliesDetails,
			[fieldName]: value,
		}));
	}

	const [teacherDetails, setTeacherDetails] = useState({
		Subject: "",
		Grade: "",
		Area: "",
		Governorate: "",
		num_students: "",
		address: ""
	});

	function handleTeacherChange(fieldName, value) {
		setTeacherDetails((prevTeacherDetails) => ({
			...prevTeacherDetails,
			[fieldName]: value,
		}));
	}

	const [doctorDetails, setDoctorDetails] = useState({
		Specialty: "",
		Organization : "",
		Area: "",
		Governorate: "",
		patient_name: "",
		patient_age: "",
		pateint_gender: "",
		patient_weight: "",
		patient_address: "",
		case_description: ""
	});

	function handleDoctorChange(fieldName, value) {
		setDoctorDetails((prevDoctorDetails) => ({
			...prevDoctorDetails,
			[fieldName]: value,
		}));
	}

	const handleInputChange = (fieldName, value) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[fieldName]: value,
		}));
	};

	function checkNotEmpty(fieldName, value) {
		if (fieldName === "detailsNotEmpty") {
			return;
		} // Delete this line if you want to check for empty details
		if (value === "") {
			setValidity((prevValidity) => ({
				...prevValidity,
				[fieldName]: false,
			}));
		} else {
			setValidity((prevValidity) => ({
				...prevValidity,
				[fieldName]: true,
			}));
		}
	}

	function checkAmount(value) {
		if (value < 1) {
			setValidity((prevValidity) => ({
				...prevValidity,
				amount: false,
			}));
		}
		else {
			setValidity((prevValidity) => ({
				...prevValidity,
				amount: true,
			}));
		}
	}

	const isValidAgeRange = /^\d+(-\d+|\+)?$/;

	function checkToysAge(value) {
		if (!isValidAgeRange.test(value)) {
			setValidity((prevValidity) => ({
				...prevValidity,
				toysAge: false,
			}));
		} else {
			setValidity((prevValidity) => ({
				...prevValidity,
				toysAge: true,
			}));
		}
	}

	const [loading, setLoading] = useState(false);

	const [success, setSuccess] = useState(false);

	function timeout(delay) {
		return new Promise((res) => setTimeout(res, delay));
	}

	function isFormInvalid(
		validity,
		formData,
		clothesDetails,
		toysDetails,
		foodDetails,
		medicalSuppliesDetails,
		bloodDetails,
		schoolSuppliesDetails
	) {
		return (
			Object.values(validity).includes(false) ||
			(Object.values(formData).includes("") )||
			(formData.type === "clothes" &&
				Object.values(clothesDetails).includes("")) ||
			(formData.type === "toys" && Object.values(toysDetails).includes("")) ||
			(formData.type === "food" && Object.values(foodDetails).includes("")) ||
			(formData.type === "medicalSupplies" &&
				Object.values(medicalSuppliesDetails).includes("")) ||
			(formData.type === "blood" && Object.values(bloodDetails).includes("")) ||
			(formData.type === "schoolSupplies" &&
				Object.values(schoolSuppliesDetails).includes(""))
		);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!loading) {
			setLoading(true);
			await timeout(2000);
			setLoading(false);
			setSuccess(true);
		}
	};

	const [file, setFile] = useState(undefined);
	function handleFileChange(event) {
		setFile(event.target.files[0]);
	}

	return (
		<div className="h-max flex flex-col items-center mt-12 pb-8">
			<div className="flex flex-col justify-center items-center bg-white rounded-md w-[500px] p-6 shadow-md gap-4">
				<form className="flex flex-col w-full">
					{/* Main Information Section*/}
					<h2 className="text-lg font-semibold mb-2">Post Information</h2>
					<div className="flex flex-col gap-3">
						<label className="label">
							Title
							<input
								type="text"
								value={formData.title}
								placeholder="Type here..."
								className="text-input"
								onChange={(e) => handleInputChange("title", e.target.value)}
								onBlur={() => checkNotEmpty("title", formData.title)}
							/>
						</label>
						{!validity.title && (
							<p className="error text-left -mt-2">Please enter a title</p>
						)}

						<label className="label">
							Description
							<textarea
								type="text"
								rows="5"
								value={formData.description}
								placeholder="Type here..."
								className="text-input"
								onChange={(e) =>
									handleInputChange("description", e.target.value)
								}
								onBlur={() =>
									checkNotEmpty("description", formData.description)
								}
							/>
						</label>
						{!validity.description && (
							<p className="error text-left -mt-2">
								Please enter a description
							</p>
						)}

						<div className="grid grid-cols-2 gap-4">
							<label className="label htmlFor=image">
								Post Image
								<input
									id="image"
									type="file"
									name="image"
									accept="image/*"
									className="block w-max cursor-pointer mt-1 mb-3"
									onChange={props.handleFileChange}
								/>
							</label>
							<label className="label">
								Post Type
								<select
									className="text-input"
									value={formData.isVolunteering}
									onChange={(e) =>
										{handleInputChange("isVolunteering", e.target.value)
										handleInputChange("Category", "volunteering")
										handleInputChange("amount", "1");
									}
									}
								>
									<option value="false">Donation</option>
									<option value="doctor">Volunteering - Doctor</option>
									<option value="teacher">Volunteering - Teacher</option>
								</select>
							</label>
						</div>
						{formData.isVolunteering === "false" ? (
							<div className="grid grid-cols-3 gap-4">
								<label className="label col-span-2">
									Category
									<select
										className="text-input"
										value={formData.Category}
										onChange={(e) =>
											handleInputChange("Category", e.target.value)
										}
										onBlur={() => checkNotEmpty("Category", formData.Category)}
									>
										<option value="">Select...</option>
										<option value="Clothes">Clothes</option>
										<option value="Toys">Toys</option>
										<option value="Food">Food</option>
										<option value="Medical Supplies">Medical Supplies</option>
										<option value="Blood Donation">Blood Donation</option>
										<option value="School Supplies">School Supplies</option>
									</select>
								</label>
								<label className="label col-span-1">
									Required Amount
									<input
										type="number"
										min="1"
										value={formData.amount}
										placeholder={formData.category === "Food" ? "XX KG" : "XX"}
										className="text-input"
										onChange={(e) =>
											handleInputChange("amount", e.target.value)
										}
										onBlur={() => checkAmount(formData.amount)}
									/>
								</label>
								{!validity.amount && (
									<p className="error text-right -mt-2 col-span-3">
										Please enter a valid amount
									</p>
								)}
							</div>
						) : (
							<div>
								<div>
									<h3 className="label ">Location</h3>
									<Maps isStaticMap={false} Location={"Post"} />
								</div>
							</div>
						)}
					</div>

					{/* Donation Details Section*/}
					{formData.Category !== "" && formData.isVolunteering === "false" && (
						<div>
							<hr className="border-t-2 my-4" />
							<h2 className="text-lg font-semibold mb-2">Post Details</h2>

							{/* Clothes Details */}
							{formData.Category === "Clothes" && (
								<div>
									<div className="grid grid-cols-2 gap-2">
										<label className="label">
											Age
											<select
												className="text-input"
												value={clothesDetails.Age}
												onChange={(e) =>
													handleClothesChange("Age", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty("detailsNotEmpty", clothesDetails.Age)
												}
											>
												<option value="">Select...</option>
												<option value="Kids">Kids</option>
												<option value="Teens">Teens</option>
												<option value="Adults">Adults</option>
											</select>
										</label>

										<label className="label">
											Gender
											<select
												className="text-input"
												value={clothesDetails.Gender}
												onChange={(e) =>
													handleClothesChange("Gender", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														clothesDetails.Gender
													)
												}
											>
												<option value="">Select...</option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Unisex">Unisex</option>
											</select>
										</label>
									</div>
									<div className="grid grid-cols-3 gap-2">
										<label className="label">
											Season
											<select
												className="text-input"
												value={clothesDetails.Season}
												onChange={(e) =>
													handleClothesChange("Season", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														clothesDetails.Season
													)
												}
											>
												<option value="">Select...</option>
												<option value="Winter">Winter</option>
												<option value="Summer">Summer</option>
												<option value="Spring">Spring</option>
												<option value="Fall">Fall</option>
												<option value="Year-round">Year-round</option>
											</select>
										</label>

										<label className="label">
											Material
											<input
												list="clothes-materials"
												type="text"
												value={clothesDetails.material}
												placeholder="Select or type..."
												className="text-input"
												onChange={(e) =>
													handleClothesChange("material", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														clothesDetails.material
													)
												}
											/>
											<datalist id="clothes-materials">
												<option value="Cotton" />
												<option value="Polyester" />
												<option value="Wool" />
												<option value="Silk" />
												<option value="Leather" />
											</datalist>
										</label>

										<label className="label">
											Type
											<input
												list="clothes-types"
												type="text"
												value={clothesDetails.type}
												placeholder="Select or type..."
												className="text-input"
												onChange={(e) =>
													handleClothesChange("type", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty("detailsNotEmpty", clothesDetails.type)
												}
											/>
											<datalist id="clothes-types">
												<option value="Shirt" />
												<option value="Pants" />
												<option value="Dress" />
												<option value="Jacket" />
												<option value="Shoes" />
											</datalist>
										</label>
									</div>
								</div>
							)}

							{/* Toys Details */}
							{formData.Category === "Toys" && (
								<div>
									<div className="flex flex-col gap-3">
										<div className="grid grid-cols-2 gap-3 w-full">
											<label className="label">
												Age range
												<input
													type="text"
													value={toysDetails.Age}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleToysChange("Age", e.target.value)
													}
													onBlur={() => checkToysAge(toysDetails.Age)}
												/>
											</label>
											<label className="label">
												Gender
												<select
													className="text-input"
													value={toysDetails.Gender}
													onChange={(e) =>
														handleToysChange("gender", e.target.value)
													}
													onBlur={() =>
														checkNotEmpty("detailsNotEmpty", toysDetails.Gender)
													}
												>
													<option value="">Select...</option>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
													<option value="Unisex">Unisex</option>
												</select>
											</label>

											<label className="label">
												Subcategory
												<input
													type="text"
													value={toysDetails.Subcategory}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleToysChange("Subcategory", e.target.value)
													}
													onBlur={() =>
														checkNotEmpty(
															"detailsNotEmpty",
															toysDetails.Category
														)
													}
												/>
											</label>

											<label className="label">
												Type
												<input
													type="text"
													value={toysDetails.type}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleToysChange("type", e.target.value)
													}
													onBlur={() =>
														checkNotEmpty("detailsNotEmpty", toysDetails.type)
													}
												/>
											</label>
										</div>

										{validity.toysAge === false && (
											<p className="error text-left -mt-2 col-span-3">
												Please enter a valid age range (e.g. 10, 3-5, 6+)
											</p>
										)}
									</div>
								</div>
							)}

							{/* Food Details */}
							{formData.Category === "Food" && (
								<div>
									<label className="label">
										Subcategory
										<input
											list="food-types"
											type="text"
											value={foodDetails.Subcategory}
											placeholder="Select or type..."
											className="text-input"
											onChange={(e) =>
												handleFoodChange("Subcategory", e.target.value)
											}
											onBlur={() =>
												checkNotEmpty(
													"detailsNotEmpty",
													foodDetails.Subcategory
												)
											}
										/>
										<datalist id="food-types">
											<option value="Fruits and vegetables" />
											<option value="Canned foods" />
											<option value="Fresh meals" />
											<option value="Baked goods" />
										</datalist>
									</label>
								</div>
							)}

							{/* Medical Supplies Details */}
							{formData.Category === "Medical Supplies" && (
								<div>
									<div className="grid grid-cols-2 gap-3 w-full">
										<label className="label">
											Device Type
											<input
												type="text"
												value={medicalSuppliesDetails.Medical_Device}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleMedicalSuppliesChange(
														"Medical_Device",
														e.target.value
													)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														medicalSuppliesDetails.Medical_Device
													)
												}
											/>
										</label>

										<label className="label">
											Equipment Type
											<input
												type="text"
												value={medicalSuppliesDetails.Medical_Equipment}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleMedicalSuppliesChange(
														"Medical_Equipment",
														e.target.value
													)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														medicalSuppliesDetails.Medical_Equipment
													)
												}
											/>
										</label>

										<label className="label">
											Medication
											<input
												type="text"
												value={medicalSuppliesDetails.Medication}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleMedicalSuppliesChange(
														"Medication",
														e.target.value
													)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														medicalSuppliesDetails.Medication
													)
												}
											/>
										</label>

										<label className="label">
											Medical Use
											<input
												type="text"
												value={medicalSuppliesDetails.use}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleMedicalSuppliesChange("use", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														medicalSuppliesDetails.use
													)
												}
											/>
										</label>
									</div>
								</div>
							)}

							{/* Blood Details */}
							{formData.Category === "Blood Donation" && (
								<div>
									<div className="grid grid-cols-3 gap-3 w-full">
										<label className="label">
											Hospital
											<input
												type="text"
												value={bloodDetails.Hospital}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("Hospital", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														bloodDetails.Hospital
													)
												}
											/>
										</label>
										<label className="label">
											Governorate
											<input
												type="text"
												value={bloodDetails.Governorate}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("Governorate", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														bloodDetails.Governorate
													)
												}
											/>
										</label>
										<label className="label">
											Area
											<input
												type="text"
												value={bloodDetails.Area}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("Area", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty("detailsNotEmpty", bloodDetails.Area)
												}
											/>
										</label>
									</div>

									<h3 className="label"> Hospital Address </h3>
									<Maps isStaticMap={false} Location={"Hospital"} />

									<div className="grid grid-cols-2 gap-3 w-full mt-2">
										<label className="label">
											Patient Name
											<input
												type="text"
												value={bloodDetails.patient_name}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("patient_name", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														bloodDetails.patient_name
													)
												}
											/>
										</label>
										<label className="label">
											Blood Type
											<select
												className="text-input"
												value={bloodDetails.blood_type}
												onChange={(e) =>
													handleBloodChange("blood_type", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														bloodDetails.blood_type
													)
												}
											>
												<option value="">Select...</option>
												<option value="A+">A+</option>
												<option value="A-">A-</option>
												<option value="B+">B+</option>
												<option value="B-">B-</option>
												<option value="AB+">AB+</option>
												<option value="AB-">AB-</option>
												<option value="O+">O+</option>
												<option value="O-">O-</option>
											</select>
										</label>
									</div>
								</div>
							)}

							{/* School Supplies Details */}
							{formData.Category === "School Supplies" && (
								<div>
									<div className="grid grid-cols-2 gap-3 w-full">
										<label className="label">
											Subcategory
											<input
												list="school-supplies-types"
												type="text"
												value={schoolSuppliesDetails.Subcategory}
												placeholder="Select or type..."
												className="text-input"
												onChange={(e) =>
													handleSchoolSuppliesChange(
														"Subcategory",
														e.target.value
													)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														schoolSuppliesDetails.Subcategory
													)
												}
											/>
											<datalist id="school-supplies-types">
												<option value="Books" />
												<option value="Stationary" />
											</datalist>
										</label>

										<label className="label">
											Type
											<input
												type="text"
												value={schoolSuppliesDetails.type}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleSchoolSuppliesChange("type", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														schoolSuppliesDetails.type
													)
												}
											/>
										</label>
									</div>

									{schoolSuppliesDetails.Subcategory === "Books" && (
										<div className="grid grid-cols-2 gap-3 w-full">
											<label className="label">
												Title
												<input
													type="text"
													value={schoolSuppliesDetails.Title}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleSchoolSuppliesChange("Title", e.target.value)
													}
													onBlur={() =>
														checkNotEmpty(
															"detailsNotEmpty",
															schoolSuppliesDetails.Title
														)
													}
												/>
											</label>

											<label className="label">
												Author
												<input
													type="text"
													value={schoolSuppliesDetails.Author}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleSchoolSuppliesChange("Author", e.target.value)
													}
													onBlur={() =>
														checkNotEmpty(
															"detailsNotEmpty",
															schoolSuppliesDetails.Author
														)
													}
												/>
											</label>

											<label className="label">
												Edition
												<input
													type="text"
													value={schoolSuppliesDetails.Edition}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleSchoolSuppliesChange(
															"Edition",
															e.target.value
														)
													}
													onBlur={() =>
														checkNotEmpty(
															"detailsNotEmpty",
															schoolSuppliesDetails.Edition
														)
													}
												/>
											</label>

											<label className="label">
												Language
												<input
													type="text"
													value={schoolSuppliesDetails.Language}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleSchoolSuppliesChange(
															"Language",
															e.target.value
														)
													}
													onBlur={() =>
														checkNotEmpty(
															"detailsNotEmpty",
															schoolSuppliesDetails.Language
														)
													}
												/>
											</label>
										</div>
									)}
								</div>
							)}
						</div>
					)}

					{/* Volunteering Details Section*/}
					{formData.isVolunteering === "teacher" && (
						<div>
							<hr className="border-t-2 my-4" />
							<h2 className="text-lg font-semibold mb-2">Post Details</h2>

							<div className="grid grid-cols-2 gap-3 w-full">
								<label className="label">
									Governorate
									<input
										type="text"
										value={teacherDetails.Governorate}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleTeacherChange("Governorate", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												teacherDetails.Governorate
											)
										}
									/>
								</label>
								<label className="label">
									Area
									<input
										type="text"
										value={teacherDetails.Area}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleTeacherChange("Area", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty("detailsNotEmpty", teacherDetails.Area)
										}
									/>
								</label>
							</div>
							<div className="grid grid-cols-3 gap-3 w-full">
								<label className="label">
									Subject
									<input
										type="text"
										value={teacherDetails.Subject}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleTeacherChange("Subject", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty("detailsNotEmpty", teacherDetails.Subject)
										}
									/>
								</label>
								<label className="label">
									Grade
									<input
										type="text"
										value={teacherDetails.Grade}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleTeacherChange("Grade", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty("detailsNotEmpty", teacherDetails.Grade)
										}
									/>
								</label>
								<label className="label">
									# of Students
									<input
										type="number"
										value={teacherDetails.num_students}
										placeholder="XX"
										className="text-input"
										onChange={(e) =>
											handleTeacherChange("num_students", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												teacherDetails.num_students
											)
										}
									/>
								</label>
							</div>
						</div>
					)}

					{formData.isVolunteering === "doctor" && (
						<div>
							<hr className="border-t-2 my-4" />
							<h2 className="text-lg font-semibold mb-2">Post Details</h2>

							<div className="grid grid-cols-2 gap-3 w-full">
								<label className="label">
									Governorate
									<input
										type="text"
										value={doctorDetails.Governorate}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("Governorate", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.Governorate
											)
										}
									/>
								</label>

								<label className="label">
									Area
									<input
										type="text"
										value={doctorDetails.Area}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) => handleDoctorChange("Area", e.target.value)}
										onBlur={() =>
											checkNotEmpty("detailsNotEmpty", doctorDetails.Area)
										}
									/>
								</label>

								<label className="label">
									Specialty
									<input
										type="text"
										value={doctorDetails.Specialty}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("Specialty", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty("detailsNotEmpty", doctorDetails.Specialty)
										}
									/>
								</label>

								<label className="label">
									Organization
									<input
										type="text"
										value={doctorDetails.Organization}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("Organization", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.Organization
											)
										}
									/>
								</label>
							</div>

							<hr className="border-t-2 my-4" />
							<h2 className="text-md font-semibold mb-2">Patient Details</h2>

							<div className="grid grid-cols-2 gap-3 w-full">
								<label className="label">
									Name
									<input
										type="text"
										value={doctorDetails.patient_name}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("patient_name", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.patient_name
											)
										}
									/>
								</label>

								<label className="label">
									Age
									<input
										type="number"
										min="0"
										max="120"
										value={doctorDetails.patient_age}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("patient_age", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.patient_age
											)
										}
									/>
								</label>

								<label className="label">
									Gender
									<select
										className="text-input"
										value={doctorDetails.patient_gender}
										onChange={(e) =>
											handleDoctorChange("gender", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.gender
											)
										}
									>
									<option value="">Select...</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									</select>
								</label>

								<label className="label">
									Weight
									<input
										type="number"
										min="0"
										value={doctorDetails.patient_weight}
										placeholder="XX KG"
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("patient_weight", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.patient_weight
											)
										}
									/>	
								</label>
							</div>

							<div className="flex flex-col">
								<label className="label">
									Address
									<input
										type="text"
										value={doctorDetails.patient_address}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("patient_address", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.patient_address
											)
										}
									/>
								</label>

								<label className="label">
									Case Description
									<textarea
										type="text"
										rows="5"
										value={doctorDetails.case_description}
										placeholder="Type here..."
										className="text-input"
										onChange={(e) =>
											handleDoctorChange("case_description", e.target.value)
										}
										onBlur={() =>
											checkNotEmpty(
												"detailsNotEmpty",
												doctorDetails.case_description
											)
										}
									/>	
								</label>
							</div>
						</div>
					)}

					{validity.detailsNotEmpty === false && (
						<p className="error text-left -mt-2 col-span-3">
							Please fill in all details
						</p>
					)}

					{/* Submit Section*/}
					<hr className="border-t-2 my-4" />
					<div className="flex flex-col">
						<div className="flex justify-center items-center gap-4">
							{/* The world did not deserve you dear 
							<button
								type="button"
								className=" py-1 px-3 rounded-md border-2 font-medium hover:bg-farahgreen-100 border-farahgreen-600 text-farahgreen-600 w-[82px] h-[32px]"
								onClick={() => props.setPage("organizationPosts")}
							>
								Back
							</button> */}

							<button
								type="submit"
								className="submit-btn self-center w-[82px] h-[32px]"
								disabled={isFormInvalid(
									validity,
									formData,
									clothesDetails,
									toysDetails,
									foodDetails,
									medicalSuppliesDetails,
									bloodDetails,
									schoolSuppliesDetails
								)}
								onClick={handleSubmit}
							>
								{loading ? (
									<SpinnerSVG className="w-full" />
								) : Object.keys(dataTags).length === 0 ? (
									"Submit"
								) : (
									"Update"
								)}
							</button>
						</div>
						{success && (
							<p className="success items-center text-center mt-2 -mb-4">
								{Object.keys(dataTags).length === 0
									? "Post created successfully!"
									: "Post updated successfully!"}
							</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
export default PostForm;
