import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkValidData from '../utils/validators';

function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const res = checkValidData(name,email,password,confirmPassword);
        if (res !== null){
            setMessage(res);
            return
        }
        else{
            setMessage(null);
            navigate('/login');
        }
    }

    return (

        <div className="lg:w-[30vw] lg:mt-[-75vh] md:w-[30vw] md:mt-[-75vh] lg:p-[2vh] md:p-[2vh] relative z-2 mr-auto ml-auto bg-black bg-opacity-60 rounded-md flex justify-center items-center mobile:w-[90vw] mobile:mt-[-80vh] mobile:p-[1vh]">    
            <form className="w-[90%] h-[90%] font-semibold mobile:w-[90%]" onSubmit={(e)=> handleSubmit(e)}>
                <h1 className='lg:text-[4vh] md:text-[4vh] lg:mb-[1.5vh] font-bold mobile:text-[3vh] mobile:mb-[1vh]'>Sign Up</h1>

                { message !== null && <p className="lg:text-base md:text-base text-red-500 font-bold">{message}</p>}

                <input type='text' placeholder='Enter your Name' className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] text-gray-600 mobile:w-[100%] mobile:h-[5vh]" value={name} onChange={(e)=>{ setName(e.target.value) }}></input>
                <input type='text' placeholder='Enter your email address' className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] text-gray-600 mobile:w-[100%] mobile:h-[5vh]" value={email} onChange={(e)=>{ setEmail(e.target.value) }}></input>
                <input type='password' placeholder='Enter your password' className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] text-gray-600 mobile:w-[100%] mobile:h-[5vh]" value={password} onChange={(e)=>{ setPassword(e.target.value) }}></input>
                <input type='password' placeholder='Confirm your password' className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] text-gray-600 mobile:w-[100%] mobile:h-[5vh]" onChange={(e)=>{ setConfirmPassword(e.target.value) }}></input>

                <button className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] bg-red-600 text-white hover:bg-red-800 hover:border-2 hover:border-solid hover:border-white hover:font-bold mobile:w-[100%] mobile:h-[5vh]" type='submit'>
                    Sign Up
                </button>

                <p className='mt-[1.5vh] font-sans text-white'>
                    Already Registered ? 
                    <Link to='/login' className='font-bold no-underline text-white hover:text-red-600'>
                        <span className='pl-[1vw]'>Sign In</span>
                    </Link>
                </p>
                
            </form>
        </div>
    );
}

export default SignUp;