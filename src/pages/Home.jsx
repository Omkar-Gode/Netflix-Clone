import Header from "../components/Header";
import {useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    
    function handleBrowse(){
        navigate('/browse');
    }

    return (
        <div className='lg:w-[100vw] md:w-[100vw] lg:h-[100vh] md:h-[100vh] text-white mobile:w-[100vw] mobile:h-[100vh]'>
            <Header/>
            <img className="lg:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[100vh] relative z-0 brightness-[60%]  mobile:h-[100vh] mobile:w-[100vw] " src="./HomeBackground.jpg" alt='background'/>
            <div className="lg:w-[40vw] lg:h-[40vh] lg:mt-[-70vh] md:w-[40vw] md:h-[40vh] md:mt-[-70vh] relative bg-transparent bg-opacity-60 ml-auto mr-auto flex flex-col justify-center items-center rounded-md mobile:w-[80vw] mobile:h-[40vh] mobile:mt-[-75vh] mobile:py-[5vh]">
                <h1 className="lg:text-[7vh] md:text-[7vh] font-sans font-medium [text-shadow:_3px_3px_9px_rgb(0_0_0_/_80%)] mobile:text-[4vh]">Start Watching Now</h1>
                <button className="lg:w-[15vw] lg:h-[10vh] lg:text-5xl md:w-[15vw] md:h-[10vh] lg:mt-[5vh] md:mt-[5vh] rounded-md text-center bg-white text-black font-bold hover:bg-transparent hover:text-white hover:border-2 hover:border-solid hover:border-white mobile:mt-[5vh] mobile:w-[40vw] mobile:h-[8vh] mobile:text-[5vh]" onClick={ handleBrowse }>&#10230;</button>
            </div>
        </div>
    );
}

export default Home;