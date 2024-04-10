import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";

function WatchPage(){
    const moviesList = useSelector(state => state.movieData);
    const {id} = useParams();

    const matches = moviesList.filter(movie => movie.id === Number(id));

    if (matches.length === 0 || !matches) return <Navigate to="/browse"/>

    const match = matches[0];

    return (
        <div className='lg:w-full md:w-full h-[100vh] overflow-y-scroll no-scrollbar text-white bg-black mobile:w-full'>
            <Header/>

            <div className="lg:max-w-[100%] md:max-w-[100%] lg:min-w-[100%] md:min-w-[100%] lg:min-h-[100%] lg:max-h-[100%] md:min-h-[100%] md:max-h-[100%] flex lg:flex-row md:flex-row mobile:flex-col mobile:min-h-[40vh] mobile:max-h-[40vh]">
                <div className="lg:min-w-[70%] lg:min-h-[100%] lg:max-w-[70%] lg:max-h-[100%] md:min-w-[70%] md:min-h-[100%] md:max-w-[70%] md:max-h-[100%] flex flex-col bg-black mobile:min-w-[100%] mobile:min-h-[100vh]" >
                    <video className="lg:w-[98%] md:w-[98%] lg:mx-[1%] md:mx-[1%] lg:min-h-[auto] md:min-h-[auto] relative z-40 border border-slate-700 rounded-md lg:mt-[8%] md:mt-[8%] mobile:mt-[14%] mobile:w-[96%] mobile:mx-[2%]" controls >
                        <source src="/JujutsuKaisen.mp4" type="video/mp4"/>
                    </video>

                    <div className="lg:w-[100vw] md:w-[100vw] pb-[4vh] lg:mt-[2%] md:mt-[2%] lg:ml-[0vw] md:ml-[0vw] lg:bg-black md:bg-black relative z-30 mobile:mt-[35vh] mobile:bg-transparent mobile:w-[90vw] mobile:ml-[7vw]">
                        <p className="w-[97%] pb-[1vh] pt-[1vh] lg:text-[3vh] md:text-[3vh] bg-transparent ml-[1%] font-semibold font-sans mobile:text-[3vw]">Related Movies</p>
                        <div className="lg:w-[95%] md:w-[95%] flex flex-row ml-[1%] gap-3 overflow-x-scroll no-scrollbar bg-transparent">
                        { moviesList.map(movie => <ListItem movie={movie} nested={true} key={movie.name}/>) }
                        </div>
                    </div>
                </div>

                <div className="lg:min-w-[30%] md:min-w-[30%] lg:max-w-[30%] md:max-w-[30%] lg:min-h-[100%] md:min-h-[100%] lg:max-h-[100%] md:max-h-[100%] lg:mt-[0%] md:mt-[0%] bg-black flex flex-col items-center mobile:min-w-[100vw] mobile:max-h-[60vw] mobile:min-h-[60vh] mobile:max-w-[100vh] mobile:mt-[-60vh]">
                    <img src={"." + match.path} alt="aot" className="lg:mt-[19%] md:mt-[19%] lg:min-h-[92%] md:min-h-[92%] lg:max-h-[92%] md:max-h-[92%] rounded-md  mobile:min-w-[90%] mobile:max-w-[90%] mobile:min-h-[60vh]"/>
                    <div className="lg:max-h-[100%] lg:min-h-[100%] lg:max-w-[92%] lg:min-w-[92%] md:max-h-[100%] md:min-h-[100%] md:max-w-[92%] md:min-w-[92%]  relative z-20 bg-black bg-opacity-65 lg:mt-[-100vh] md:mt-[-100vh] lg:pt-[14vh] md:pt-[14vh] mobile:mt-[-60vh] mobile:min-h-[60vh] mobile:max-h-[60vh] mobile:max-w-[90%] mobile:pt-[5vh]">
                        <h1 className="lg:ml-[5%] md:ml-[5%] lg:text-[3vw] md:text-[3vw] font-sans font-bold mobile:text-[5vw] mobile:ml-[7vw]">{match.name}</h1> 
                        <p className="lg:ml-[5%] md:ml-[5%] lg:text-[1vw] md:text-[1vw] mt-[2%] mr-[5%] font-semibold mobile:ml-[7vw] mobile:text-[2vw]">{match.desc}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchPage;
