import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListItem({movie, nested}){
    const [showInfo, setSetInfo] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="lg:max-w-[12%] lg:min-w-[12%] md:max-w-[12%] md:min-w-[12%] lg:min-h-[100%] md:min-h-[100%] flex justify-center rounded-md mobile:min-w-[15vw]" onMouseEnter={()=>{setSetInfo(true)}} onMouseLeave={()=>{setSetInfo(false)}}>

            <img src={nested ? "." + movie.path : movie.path} className="h-[100%] rounded-md "/>
            
            {
                showInfo && 
                    <div className="min-h-[100%] min-w-[100%] bg-black bg-opacity-60 relative z-20 ml-[-100%] flex flex-col justify-center items-center rounded-md">
                        <p className="lg:text-[3vh] md:text-[3vh] font-bold text-center mobile:text-[2.5vw]">{movie.name}</p>
                        <button onClick={()=>{navigate(`/watch/${movie.id}`)}}
                                className=" lg:text-[2vh] md:text-[2vh] lg:px-[1vw] md:px-[1vw] lg:py-[0.5vh] md:py-[0.5vh] mt-[5%] rounded-md bg-white text-black font-bold  hover:bg-transparent hover:text-white hover:border hover:border-white mobile:text-[2vw] mobile:px-[1vw] mobile:py-[0.5vw]">
                            Watch
                        </button>
                    </div>
            }
        </div>
    );
}

export default ListItem;