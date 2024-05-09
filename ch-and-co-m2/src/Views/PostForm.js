import { useState } from "react";
import { ReactComponent as SpinnerSVG } from "../SVGs/spinner.svg";

function PostForm(props) {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		progress: "",
		type: "",
	});

	const [validity, setValidity] = useState({
		title: true,
		description: true,
		progress: true,
		type: true,
		detailsNotEmpty: true,
		toysAge: true,
	});

	const [clothesDetails, setClothesDetails] = useState({
		age: "",
		gender: "",
		season: "",
	});

	function handleClothesChange(fieldName, value) {
		setClothesDetails((prevClothesDetails) => ({
			...prevClothesDetails,
			[fieldName]: value,
		}));
	}

	const [toysDetails, setToysDetails] = useState({
		age: "",
		gender: "",
		category: "",
	});

	function handleToysChange(fieldName, value) {
		setToysDetails((prevToysDetails) => ({
			...prevToysDetails,
			[fieldName]: value,
		}));
	}

	const [foodDetails, setFoodDetails] = useState({
		type: "",
	});

	function handleFoodChange(fieldName, value) {
		setFoodDetails((prevFoodDetails) => ({
			...prevFoodDetails,
			[fieldName]: value,
		}));
	}

	const [medicalSuppliesDetails, setMedicalSuppliesDetails] = useState({
		type: "",
		equpiment: "",
		use: "",
	});

	function handleMedicalSuppliesChange(fieldName, value) {
		setMedicalSuppliesDetails((prevMedicalSuppliesDetails) => ({
			...prevMedicalSuppliesDetails,
			[fieldName]: value,
		}));
	}

	const [bloodDetails, setBloodDetails] = useState({
		hospital: "",
		governorate: "",
		area: "",
	});

	function handleBloodChange(fieldName, value) {
		setBloodDetails((prevBloodDetails) => ({
			...prevBloodDetails,
			[fieldName]: value,
		}));
	}

	const [schoolSuppliesDetails, setSchoolSuppliesDetails] = useState({
		type: "",
	});

	function handleSchoolSuppliesChange(fieldName, value) {
		setSchoolSuppliesDetails((prevSchoolSuppliesDetails) => ({
			...prevSchoolSuppliesDetails,
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

	function checkProgress(value) {
		if (value < 0 || value > 100) {
			setValidity((prevValidity) => ({
				...prevValidity,
				progress: false,
			}));
		} else {
			setValidity((prevValidity) => ({
				...prevValidity,
				progress: true,
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

	function isFormValid(
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
			Object.values(formData).includes("") ||
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

						<label className="label" htmlFor="image">
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

						<div className="grid grid-cols-3 gap-4">
							<label className="label col-span-2">
								Type
								<select
									className="text-input"
									value={formData.type}
									onChange={(e) => handleInputChange("type", e.target.value)}
									onBlur={() => checkNotEmpty("type", formData.type)}
								>
									<option value="">Select...</option>
									<option value="clothes">Clothes</option>
									<option value="toys">Toys</option>
									<option value="food">Food</option>
									<option value="medicalSupplies">Medical Supplies</option>
									<option value="blood">Blood</option>
									<option value="schoolSupplies">School Supplies</option>
								</select>
							</label>
							<label className="label col-span-1">
								Progress
								<input
									type="number"
									min="0"
									max="100"
									value={formData.progress}
									placeholder="XX%"
									className="text-input"
									onChange={(e) =>
										handleInputChange("progress", e.target.value)
									}
									onBlur={() => checkProgress(formData.progress)}
								/>
							</label>
							{!validity.progress && (
								<p className="error text-right -mt-2 col-span-3">
									Please enter a valid percentage
								</p>
							)}
						</div>
					</div>

					{/* Details Section*/}
					{formData.type !== "" && (
						<div>
							<hr className="border-t-2 my-4" />
							<h2 className="text-lg font-semibold mb-2">Post Details</h2>

							{/* Clothes Details */}
							{formData.type === "clothes" && (
								<div className="flex gap-3">
									<label className="label">
										Age
										<select
											className="text-input"
											value={clothesDetails.age}
											onChange={(e) =>
												handleClothesChange("age", e.target.value)
											}
											onBlur={() =>
												checkNotEmpty("detailsNotEmpty", clothesDetails.age)
											}
										>
											<option value="">Select...</option>
											<option value="kids">Kids</option>
											<option value="teens">Teens</option>
											<option value="adults">Adults</option>
										</select>
									</label>

									<label className="label">
										Gender
										<select
											className="text-input"
											value={clothesDetails.gender}
											onChange={(e) =>
												handleClothesChange("gender", e.target.value)
											}
											onBlur={() =>
												checkNotEmpty("detailsNotEmpty", clothesDetails.gender)
											}
										>
											<option value="">Select...</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
											<option value="unisex">Unisex</option>
										</select>
									</label>

									<label className="label">
										Season
										<select
											className="text-input"
											value={clothesDetails.season}
											onChange={(e) =>
												handleClothesChange("season", e.target.value)
											}
											onBlur={() =>
												checkNotEmpty("detailsNotEmpty", clothesDetails.season)
											}
										>
											<option value="">Select...</option>
											<option value="winter">Winter</option>
											<option value="summer">Summer</option>
											<option value="all">All</option>
										</select>
									</label>
								</div>
							)}

							{/* Toys Details */}
							{formData.type === "toys" && (
								<div>
									<div className="flex flex-col gap-3">
										<div className="grid grid-cols-2 gap-3 w-full">
											<label className="label">
												Age range
												<input
													type="text"
													value={toysDetails.age}
													placeholder="Type here..."
													className="text-input"
													onChange={(e) =>
														handleToysChange("age", e.target.value)
													}
													onBlur={() => checkToysAge(toysDetails.age)}
												/>
											</label>
											<label className="label">
												Gender
												<select
													className="text-input"
													value={toysDetails.gender}
													onChange={(e) =>
														handleToysChange("gender", e.target.value)
													}
													onBlur={() =>
														checkNotEmpty("detailsNotEmpty", toysDetails.gender)
													}
												>
													<option value="">Select...</option>
													<option value="male">Male</option>
													<option value="female">Female</option>
													<option value="unisex">Unisex</option>
												</select>
											</label>
										</div>

										<label className="label">
											Category
											<input
												type="text"
												value={toysDetails.category}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleToysChange("category", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty("detailsNotEmpty", toysDetails.category)
												}
											/>
										</label>

										{validity.toysAge === false && (
											<p className="error text-left -mt-2 col-span-3">
												Please enter a valid age range (e.g. 10, 3-5, 6+)
											</p>
										)}
									</div>
								</div>
							)}

							{/* Food Details */}
							{formData.type === "food" && (
								<div>
									<label className="label">
										Type
										<input
											list="food-types"
											type="text"
											value={foodDetails.type}
											placeholder="Select or type..."
											className="text-input"
											onChange={(e) => handleFoodChange("type", e.target.value)}
											onBlur={() =>
												checkNotEmpty("detailsNotEmpty", foodDetails.type)
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
							{formData.type === "medicalSupplies" && (
								<div>
									<div className="grid grid-cols-2 gap-3 w-full">
										<label className="label">
											Type
											<input
												type="text"
												value={medicalSuppliesDetails.type}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleMedicalSuppliesChange("type", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														medicalSuppliesDetails.type
													)
												}
											/>
										</label>
										<label className="label">
											Equipment
											<input
												type="text"
												value={medicalSuppliesDetails.equipment}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleMedicalSuppliesChange(
														"equipment",
														e.target.value
													)
												}
											/>
										</label>
										<label className="label col-span-2">
											Medical Use
											<input
												type="text"
												value={medicalSuppliesDetails.use}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													setMedicalSuppliesDetails(
														handleMedicalSuppliesChange("use", e.target.value)
													)
												}
											/>
										</label>
									</div>
								</div>
							)}

							{/* Blood Details */}
							{formData.type === "blood" && (
								<div>
									<div className="grid grid-cols-3 gap-3 w-full">
										<label className="label">
											Hospital
											<input
												type="text"
												value={bloodDetails.hospital}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("hospital", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														bloodDetails.hospital
													)
												}
											/>
										</label>
										<label className="label">
											Governorate
											<input
												type="text"
												value={bloodDetails.governorate}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("governorate", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty(
														"detailsNotEmpty",
														bloodDetails.governorate
													)
												}
											/>
										</label>
										<label className="label">
											Area
											<input
												type="text"
												value={bloodDetails.area}
												placeholder="Type here..."
												className="text-input"
												onChange={(e) =>
													handleBloodChange("area", e.target.value)
												}
												onBlur={() =>
													checkNotEmpty("detailsNotEmpty", bloodDetails.area)
												}
											/>
										</label>
									</div>
								</div>
							)}

							{/* School Supplies Details */}
							{formData.type === "schoolSupplies" && (
								<div>
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
							)}
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
						<button
							type="button"
							className=" py-1 px-3 rounded-md border-2 font-medium hover:bg-farahgreen-100 border-farahgreen-600 text-farahgreen-600 w-[82px] h-[32px]"
							onClick={() => props.setPage("organizationPosts")}
						>
							Back
						</button>

						<button
							type="submit"
							className="submit-btn self-center w-[82px] h-[32px]"
							disabled={isFormValid(
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
							{loading ? <SpinnerSVG className="w-full" /> : "Submit"}
						</button>
						</div>
						{success && (
							<p className="success items-center text-center mt-2 -mb-4">
								Post submitted successfully!
							</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
export default PostForm;

