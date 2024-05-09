import { useState } from "react";
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';

function PostForm(props) {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        description: "",
        type: "",
        progress: "",
    });


    const handleInputChange = (fieldName, value) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [fieldName]: value
        }));
    };

    const [loading, setLoading] = useState(false);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!loading) {
            setLoading(true);
            await timeout(2000);
            setLoading(false);
            if(props.type !== "donor"){
                handleInputChange("accountType", "");
            }
            props.setStep(1);
        }
    }

    const [teacherData, setTeacherData] = useState({
        subject: "",
        numCases: 0
    });

    const [file, setFile] = useState(undefined);
    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    return (
		<div className='h-max flex flex-col items-center mt-12 pb-8'>
			<div className="flex flex-col justify-center items-center bg-white rounded-md w-[500px] p-6 shadow-md gap-4">
				<form className="flex flex-col w-full">
					<h2 className="text-lg font-semibold mb-2">Personal Information</h2>

					<div className="grid grid-cols-2 gap-x-4">
						<label className="label">
							Title
							<input
								type="text"
								value={formData.title}
								placeholder="Type here..."
								className="text-input"
								onChange={(e) => handleInputChange("title", e.target.value)}
							/>
						</label>

						<label className="label">
							Description
							<input
								type="text"
								value={formData.description}
								placeholder="Type here..."
								className="text-input"
								onChange={(e) =>
									handleInputChange("description", e.target.value)
								}
							/>
						</label>
					</div>

					<div className="flex flex-col gap-3">
						<label className="label">Pickup details</label>
						<div className="flex flex-row justify-center gap-10">
							<div>
								<label className="label">
									Date
									<input
										type="date"
										className="ml-3 cursor-pointer"
										value={formData.date}
										onChange={(e) => handleInputChange("date", e.target.value)}
									/>
								</label>
							</div>
							<div>
								<label className="label">
									Time
									<input
										type="time"
										className="ml-3 cursor-pointer"
										value={formData.time}
										onChange={(e) => handleInputChange("time", e.target.value)}
									/>
								</label>
							</div>
						</div>
					</div>

					<hr className="border-t-2 my-4" />
					<button
						type="submit"
						className="submit-btn self-center w-[82px] h-[32px]"
						onClick={handleSubmit}
					>
						{loading ? <SpinnerSVG className="w-full" /> : "Sign up"}
					</button>
				</form>
			</div>
			</div>
		);
}
export default PostForm;