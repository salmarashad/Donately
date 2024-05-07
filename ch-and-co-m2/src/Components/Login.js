import { useState } from 'react';
import {ReactComponent as GraphicSVG} from '../SVGs/sign-up-graphic.svg';
import {ReactComponent as LogoSVG} from '../SVGs/tigero-filled.svg';
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import { useContext } from 'react';
import { UserTypeContext } from "../App";

function Login(props) {
    const { setUserType } = useContext(UserTypeContext);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");

    const handleMailChange = (e) => {
		setEmail(e.target.value);
	};

    const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

    const [loading, setLoading] = useState(false);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if(!loading) {
            setLoading(true);
            await timeout(2000);
            setLoading(false);
            if(email === "donor@gmail.com" && password === "donor") {
                props.setIsLoggedin(true);
                setUserType("donor");
                setError(false);
                props.setPage("donations");
            }
            else if(email === "teacher@gmail.com" && password === "teacher") {
                props.setIsLoggedin(true);
                setUserType("teacher");
                setError(false);
                props.setPage("donations");
            }
            else if(email === "doctor@gmail.com" && password === "doctor") {
                props.setIsLoggedin(true);
                setUserType("doctor");
                setError(false);
                props.setPage("donations");
            }
            else if(email === "admin@gmail.com" && password === "admin") {
                props.setIsLoggedin(true);
                setUserType("admin");
                setError(false);
                props.setPage("organizations")
            }
            else if(email === "organization@gmail.com" && password === "organization") {
                props.setIsLoggedin(true);
                setUserType("organization");
                setError(false);
            }
            else {
                props.setIsLoggedin(false);
                setError(true);
            }
        }
	};
    
    return(
        <div className='flex justify-center items-center gap-24 h-screen -mb-8 -mt-24'>
            <div className="shrink-0 w-[550px]">
                <GraphicSVG className="w-full" />
            </div>
            <div className='flex flex-col w-[500px] bg-white shadow-md rounded-lg gap-4 p-8'>
                <div className='flex gap-2 justify-center items-end'>
                    <h2 className='text-center text-2xl font-medium mb-4'>
                        Welcome to 
                    </h2>
                    <LogoSVG className="w-24 mb-1 cursor-pointer" onClick={() => props.setPage("donations")} />
                </div>
                <form>
                    <label className='label'>E-mail
                        <input type="email" value={email} name="name" placeholder="Type here..." onChange={handleMailChange} className="text-input"/>
                    </label>
                    <label className='label'>Password
                        <input type="password" value={password} name="name" placeholder="Type here..." onChange={handlePassChange} className="text-input" />
                    </label>
                    {error && <p className='error text-center'>Incorrect email or password, please try again</p>}
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className='submit-btn w-[69px] h-[32px]'
                            disabled={email === "" || password === ""}
                            onClick={handleLogin}>
                            {loading ? <SpinnerSVG className="w-full"/> : "Log in"}
                        </button>
                    </div>
                </form>
                {/*Redirect*/}
                <div className='text-center text-sm'>
                    <p>New user?
                        <span className='underline cursor-pointer w-max mx-auto italic ml-1' 
                            onClick={() => props.setPage("registration")}>
                            Create an account 
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Login;