import { useState } from "react";
import Counter from "./Counter";
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';

function TeachDocForm(props) {
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
            if(props.profile === true) {
                props.setPage("donations");
            }
            else {
                props.setStep(2);
            }
        }
    }

    return(
        <div>
        {props.form === "teacher" &&
            <div>
                {props.profile === true && <h2 className="text-xl text-center font-semibold mb-2">Teacher Verification Form</h2>}
                <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                <label className='label'>Subject
                    <input type="text" value={props.teacherData.subject} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleTeacherChange("subject", e.target.value)} />
                </label>
                <label className='label'>Number of pro-bono classes you can teach a month
                    <Counter val={props.teacherData.numCases} setter={props.handleTeacherChange} valName="numCases" />
                </label>
            </div>
        }
        {props.form === "doctor" &&
            <div>
                {props.profile === true && <h2 className="text-xl text-center font-semibold mb-2">Doctor Verification Form</h2>}
                <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                <label className='label'>Specialty
                    <input type="text" value={props.doctorData.specialty} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleDoctorChange("specialty", e.target.value)} />
                </label>
                <label className='label'>Number of pro-bono cases you can take a month
                    <Counter val={props.doctorData.numCases} setter={props.handleDoctorChange} valName="numCases" />
                </label>

                <hr className='border-t-2 my-4' />
                <h2 className="text-lg font-semibold mb-1">Clinic Location</h2>
                <label className='label'>Address
                    <input type="text" value={props.doctorData.address} placeholder="Type here..." className="text-input"
                    onChange={(e) => props.handleDoctorChange("address", e.target.value)} />
                </label>
                <div className="grid grid-cols-2 gap-x-4">
                    <label className='label'>Area
                        <input type="text" value={props.doctorData.area} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleDoctorChange("area", e.target.value)} />
                    </label>
                    <label className='label'>Governorate
                        <input type="text" value={props.doctorData.governorate} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleDoctorChange("governorate", e.target.value)} />
                    </label>
                </div>
            </div>
        }
        <hr className='border-t-2 my-4' />
        <h2 className="text-lg font-semibold mb-1">Qualifications</h2>
        <label className='label' htmlFor="pdf">CV
            <input id="pdf" type="file" name="pdf" accept="application/pdf" className="block w-max cursor-pointer mt-1 mb-3" 
            onChange={props.handleFileChange}/>
        </label>

        <div className="flex justify-center">
            <button
                type="submit"
                className='submit-btn w-[80px] h-[32px]'
                onClick={handleSubmit}
                disabled={(props.form === "teacher" && (Object.values(props.teacherData).includes("") || props.teacherData.numCases === 0))
                            || (props.form === "doctor" && (Object.values(props.doctorData).includes("") || props.doctorData.numCases === 0))
                            || props.file === undefined}>
                {loading ? <SpinnerSVG className="w-full"/> : "Submit"}
            </button>
        </div>
        </div>
    );
}
export default TeachDocForm;