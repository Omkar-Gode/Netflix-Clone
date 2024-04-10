
import Header from "../components/Header";
import SignUp from "../components/SignUp";


function SignUpPage(){
    return (
        <div className='lg:w-[100vw] md:w-[100vw] lg:h-[100vh] md:h-[100vh] text-white mobile:w-[100vw] mobile:h-[100vh]'>
            <Header/>
            <img className="lg:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[100vh] relative z-0 brightness-[60%] mobile:w-[100vw] mobile:h-[100vh]" src="./HomeBackground.jpg" alt='background'/>
            <SignUp/>
        </div>
    );
}

export default SignUpPage;