
import Header from "../components/Header";
import SignIn from '../components/SignIn';

function LoginPage(){
    return (
            <div className='lg:w-[100vw] md:w-[100vw] lg:h-[100vh] md:h-[100vh] text-white mobile:w-[100vw] mobile:h-[100vh]'>
                <Header/>
                <img className="lg:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[100vh] relative z-0 brightness-[60%] mobile:w-[100vw] mobile:h-[100vh]" src="./HomeBackground.jpg" alt='background'/>
                <SignIn/>
            </div>
    );
}

export default LoginPage;