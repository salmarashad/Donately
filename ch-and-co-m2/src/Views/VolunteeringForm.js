import React, { useState } from "react";
import { ReactComponent as SpinnerSVG } from "../SVGs/spinner.svg";
import { ReactComponent as HeartSVG } from "../SVGs/tigerh-filled.svg";

function VolunteeringForm(props) {
	const [loading, setLoading] = useState(false);
    const [availability, setAvailability] = useState("");
	const [confirm, setConfirm] = useState("");

	function timeout(delay) {
		return new Promise((res) => setTimeout(res, delay));
	}

	const handleConfirmNormal = async (e) => {
		e.preventDefault();
		if (!loading) {
			setLoading(true);
			await timeout(2000);
			setLoading(false);
			setConfirm("normal");
		}
	};

    const handleDetailsChange = (e) => {
        setAvailability(e.target.checked ? "available" : "");
    };

	return (
		<div className="-mt-24 -mb-8 h-screen flex justify-center items-center">
			{confirm === "" ? (
				<div className="h-max flex flex-col items-center pb-8">
					<div className="flex flex-col items-start w-[500px] gap-2">
						<div className="flex flex-col justify-center bg-white rounded-md w-full p-6 shadow-md gap-4">
							<form className="flex flex-col w-full gap-6">
								<div className="flex flex-col gap-3">
									<h2 className=" text-xl flex justify-center items-center text-center">
										Do you confirm your availability for this volunteering
										position?
									</h2>
									<div className="flex mb-2 justify-center gap-10">
										<div className="flex gap-1">
											<input
												type="checkbox"
												name="availability"
												value="available"
												id="available"
												className="accent-farahgreen-500"
												checked={availability === "available"}
												onChange={(e) => handleDetailsChange(e)}
											/>
											<label htmlFor="availability">
												I am available and comitted to volunteering
											</label>
										</div>
									</div>
								</div>

								<button
									type="submit"
									className="submit-btn self-center w-[84px] h-[32px]"
									disabled={availability === ""}
									onClick={handleConfirmNormal}
								>
									{loading ? <SpinnerSVG className="w-full" /> : "Confirm"}
								</button>
							</form>
						</div>
					</div>
				</div>
			) : (
				<div className="flex flex-col w-[500px] bg-white shadow-md rounded-md gap-4 p-7">
					<div className="flex flex-col items-center gap-4 text-center">
						<h2 className="text-2xl font-bold">
							Your request has successfully
							<br />
							been submitted!
						</h2>
						<HeartSVG className="w-60" />
						<p className="font-medium">
							We'll let you know when your volunteering request has been processed
						</p>
						<p className="font-medium">
							Thank you for using donate<span className="font-sans">لي</span>
						</p>
						<button
							className="underline cursor-pointer -mt-4 italic ml-1"
							onClick={() => props.setPage("donations")}
						>
							Continue browsing
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
export default VolunteeringForm;
