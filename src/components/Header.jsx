import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    function handleLogoClick(){
        navigate("/");
    }

    return (
        <div className="w-full flex flex-row p-3 fixed z-50 bg-gradient-to-b from-black">
            <img className="lg:w-[12%] lg:h-auto md:w-[12%] md:h-auto mobile:w-[24%]" src='/logo.png' alt="logo" onClick={handleLogoClick}/>
            <div className="lg:w-[85%] md:w-[85%] pl-[7%] flex flex-row items-center mobile:w-[75%]">
                <div className='lg:w-[70%] md:w-[70%] lg:mr-[15%] md:mr-[15%] flex flex-row items-center mobile:w-[70%]'>
                </div>     
                <Link to="/login" className="lg:text-[1.5vw] lg:ml-[10%] lg:py-1 md:py-1 lg:px-3 md:text-[1.5vw] md:ml-[10%] md:px-3 font-semibold rounded-md hover:bg-white hover:bg-opacity-15 mobile:ml-[10%] mobile:text-[4vw] mobile:py-[2px] mobile:px-[1px]">
                    <p>Login</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;