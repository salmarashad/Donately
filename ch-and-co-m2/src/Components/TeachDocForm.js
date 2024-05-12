import { useState } from "react";
import Counter from "./Counter";
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import {ReactComponent as HeartSVG} from '../SVGs/tigerh-filled.svg';
import Maps from "./Maps";
import Dropdown from "./Dropdown";

function TeachDocForm(props) {
    const governorates = [
        { value: "Alexandria", label: "Alexandria" },
        { value: "Aswan", label: "Aswan" },
        { value: "Asyut", label: "Asyut" },
        { value: "Beheira", label: "Beheira" },
        { value: "Beni Suef", label: "Beni Suef" },
        { value: "Cairo", label: "Cairo" },
        { value: "Dakahlia", label: "Dakahlia" },
        { value: "Damietta", label: "Damietta" },
        { value: "Faiyum", label: "Faiyum" },
        { value: "Gharbia", label: "Gharbia" },
        { value: "Giza", label: "Giza" },
        { value: "Ismailia", label: "Ismailia" },
        { value: "Kafr El Sheikh", label: "Kafr El Sheikh" },
        { value: "Luxor", label: "Luxor" },
        { value: "Matrouh", label: "Matrouh" },
        { value: "Minya", label: "Minya" },
        { value: "Monufia", label: "Monufia" },
        { value: "New Valley", label: "New Valley" },
        { value: "North Sinai", label: "North Sinai" },
        { value: "Port Said", label: "Port Said" },
        { value: "Qalyubia", label: "Qalyubia" },
        { value: "Qena", label: "Qena" },
        { value: "Red Sea", label: "Red Sea" },
        { value: "Sharqia", label: "Sharqia" },
        { value: "Sohag", label: "Sohag" },
        { value: "South Sinai", label: "South Sinai" },
        { value: "Suez", label: "Suez" },
      ];
    const areas = [
    { value: "Alexandria_City", label: "Alexandria City" },
    { value: "Borg_El_Arab", label: "Borg El Arab" },
    { value: "Miami", label: "Miami" },
    
    { value: "Aswan_City", label: "Aswan City" },
    { value: "Kom_Ombo", label: "Kom Ombo" },
    { value: "Edfu", label: "Edfu" },
    
    { value: "Asyut_City", label: "Asyut City" },
    { value: "Dairut", label: "Dairut" },
    { value: "Abnub", label: "Abnub" },
    
    { value: "Damanhur", label: "Damanhur" },
    { value: "Kafr_El_Dawar", label: "Kafr El Dawar" },
    { value: "Rashid", label: "Rashid" },
    
    { value: "Beni_Suef_City", label: "Beni Suef City" },
    { value: "Al_Wasta", label: "Al Wasta" },
    { value: "Beba", label: "Beba" },
    
    { value: "Cairo_City", label: "Cairo City" },
    { value: "Heliopolis", label: "Heliopolis" },
    { value: "Nasr_City", label: "Nasr City" },
    
    { value: "Mansoura", label: "Mansoura" },
    { value: "Mit_Ghamr", label: "Mit Ghamr" },
    { value: "Talkha", label: "Talkha" },
    
    { value: "Damietta_City", label: "Damietta City" },
    { value: "Kafr_Saqr", label: "Kafr Saqr" },
    { value: "Ras_El_Barr", label: "Ras El Barr" },
    
    { value: "Faiyum_City", label: "Faiyum City" },
    { value: "Al_Fayyum", label: "Al Fayyum" },
    { value: "Tamiya", label: "Tamiya" },
    
    { value: "Tanta", label: "Tanta" },
    { value: "Kafr_El_Zayat", label: "Kafr El Zayat" },
    { value: "Mallawi", label: "Mallawi" },
    
    { value: "Giza_City", label: "Giza City" },
    { value: "6th_of_October_City", label: "6th of October City" },
    { value: "Sheikh_Zayed_City", label: "Sheikh Zayed City" },
    
    { value: "Ismailia_City", label: "Ismailia City" },
    { value: "Fayed", label: "Fayed" },
    { value: "Qantara", label: "Qantara" },
    
    { value: "Kafr_El_Sheikh_City", label: "Kafr El Sheikh City" },
    { value: "Ras_El_Bar", label: "Ras El Bar" },
    { value: "Desouk", label: "Desouk" },
    
    { value: "Luxor_City", label: "Luxor City" },
    { value: "Al_Uqsur", label: "Al Uqsur" },
    { value: "Armant", label: "Armant" },
    
    { value: "Marsa_Matrouh", label: "Marsa Matrouh" },
    { value: "Siwa", label: "Siwa" },
    { value: "Dabaa", label: "Dabaa" },
    
    { value: "Minya_City", label: "Minya City" },
    { value: "Maghagha", label: "Maghagha" },
    { value: "Abu_Qirqas", label: "Abu Qirqas" },
    
    { value: "Shebin_El_Kom", label: "Shebin El Kom" },
    { value: "Menouf", label: "Menouf" },
    { value: "Ashmun", label: "Ashmun" },
    
    { value: "Kharga", label: "Kharga" },
    { value: "Dakhla", label: "Dakhla" },
    { value: "Farafra", label: "Farafra" },
    
    { value: "Arish", label: "Arish" },
    { value: "Bir_Al_Abd", label: "Bir Al Abd" },
    { value: "Rafah", label: "Rafah" },
    
    { value: "Port_Said_City", label: "Port Said City" },
    { value: "Port_Fouad", label: "Port Fouad" },
    { value: "Al_Arish", label: "Al Arish" },
    
    { value: "Banha", label: "Banha" },
    { value: "Shubra_El_Kheima", label: "Shubra El Kheima" },
    { value: "Qaha", label: "Qaha" },
    
    { value: "Qena_City", label: "Qena City" },
    { value: "Dendera", label: "Dendera" },
    { value: "Nag_Hammadi", label: "Nag Hammadi" },
    
    { value: "Hurghada", label: "Hurghada" },
    { value: "El_Gouna", label: "El Gouna" },
    { value: "Safaga", label: "Safaga" },
    
    { value: "Zagazig", label: "Zagazig" },
    { value: "10th_of_Ramadan_City", label: "10th of Ramadan City" },
    { value: "Mansoura", label: "Mansoura" },
    
    { value: "Sohag_City", label: "Sohag City" },
    { value: "Akhmim", label: "Akhmim" },
    { value: "Gerga", label: "Gerga" },
    
    { value: "Sharm_El_Sheikh", label: "Sharm El Sheikh" },
    { value: "Dahab", label: "Dahab" },
    { value: "Nuweiba", label: "Nuweiba" },
    
    { value: "Suez_City", label: "Suez City" },
    { value: "Ismailia", label: "Ismailia" },
    { value: "Ain_Sokhna", label: "Ain Sokhna" },
    ];

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
                props.setConfirm(true);
            }
            else {
                props.setStep(2);
            }
        }
    }

    return(
        <>
            {props.confirm !== true ?
            <div>
                {props.form === "teacher" &&
                <div>
                    {props.profile === true && <h2 className="text-xl text-center font-semibold mb-2">Teacher Verification Form</h2>}
                    <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                    <label className='label'>Subjects
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

                    <hr className='border-t-2 my-4 border-farahorange-200' />
                    <h2 className="text-lg font-semibold mb-1">Clinic Location</h2>
                    <label className='label'>Address
                        <input type="text" value={props.doctorData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleDoctorChange("address", e.target.value)} />
                    </label>
                    <div className="grid grid-cols-2 gap-x-4">
                        <label className='label'>Governorate
                            {/* <input type="text" value={props.doctorData.governorate} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleDoctorChange("governorate", e.target.value)} /> */}
                            <Dropdown multi={false} options={governorates} onChange={(val) => props.handleDoctorChange("governorate", val)} />
                        </label>
                        <label className='label'>Area
                            {/* <input type="text" value={props.doctorData.area} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleDoctorChange("area", e.target.value)} /> */}
                            <Dropdown multi={false} options={areas} onChange={(val) => props.handleDoctorChange("area", val)} />
                        </label>
                    </div>
                    <label className="label">Exact Location
                        <div className= "w-full rounded-md overflow-hidden m-2 pr-4">
                                <Maps isStaticMap={false} Location={"Set"}/>
                        </div>
                    </label>
                </div>
                }
                <hr className='border-t-2 my-4 border-farahorange-200' />
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
            :
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-bold">Your request has successfully<br/>been submitted!</h2>
                <HeartSVG className="w-60" />
                <p className="font-medium">You may use the website as a regular donor until your request is verified. We'll get back to you in 1-2 weeks.</p>
                <p className="font-medium">Thank you for using donate<span className="font-sans">لي</span></p>
                <p className="underline cursor-pointer -mt-4 italic ml-1" onClick={() => props.setPage("donations")}>
                    Continue browsing
                </p>
            </div>
            }
        </>
    );
}
export default TeachDocForm;