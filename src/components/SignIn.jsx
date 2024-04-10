import { Link } from 'react-router-dom';
import { useRef } from 'react';

function SignIn(){
    const email = useRef("");
    const password = useRef("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(email.current.value);
        console.log(password);
    }

    return (
        <div className="lg:w-[30vw] lg:mt-[-70vh] md:w-[30vw] md:mt-[-70vh] lg:p-[2vh] md:p-[2vh] relative z-2 mr-auto ml-auto bg-black bg-opacity-60 rounded-md flex justify-center items-center mobile:w-[90vw] mobile:mt-[-80vh] mobile:p-[1vh]">
            <form className="w-[90%] h-[90%] font-semibold mobile:w-[90%] " onSubmit={(e)=> handleSubmit(e)}>
        
                <h1 className='lg:text-[4vh] md:text-[4vh] lg:mb-[1.5vh] font-bold mobile:text-[3vh] mobile:mb-[1vh]'>Sign In</h1>
    
                <input type='text' placeholder='Enter your email address' className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] text-gray-600 mobile:w-[100%] mobile:h-[5vh]" ref={email}></input>

                <input type='password' placeholder='Enter your password' className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh] text-gray-600 mobile:w-[100%] mobile:h-[5vh]" ref={password}></input>

                <button className="lg:w-[100%] lg:h-[5.5vh] md:w-[100%] md:h-[5.5vh] rounded-md pl-[1.5vw] my-[1.5vh]  bg-red-600 text-white hover:bg-red-800 hover:border-2 hover:border-solid hover:border-white hover:font-bold mobile:w-[100%] mobile:h-[5vh]" type='submit'>
                    Sign In
                </button>

                <p className='mt-[1.5vh] font-sans text-white'>
                    New to Netflix ? 
                    <Link to='/signup' className='font-bold no-underline text-white hover:text-red-600'>
                        <span className='pl-[1vw]'>Sign Up</span>
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;