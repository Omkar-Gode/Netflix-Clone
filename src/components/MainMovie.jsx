
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const videoid =null;
// const videoid = "elyXcwunIYA";
// const videoid = "gcgKUcJKxIs";
// const videoid = "hlnPBMUl5VQ";

function MainMovie(){
    const movie = useSelector(state => state.movieData[0]);
    const navigate = useNavigate();

    return (
        <div className='lg:w-[100%] lg:h-[728px] md:w-[100%] md:h-[728px] overflow-hidden mobile:w-[100%] mobile:h-[48vh]'> 
            <div className="lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[100%] relative z-10 bg-gradient-to-tr from-black from-5% mobile:w-[100%] mobile:h-[100%]">
                <h1 className="lg:pt-[320px] lg:pl-[4%] md:pt-[320px] md:pl-[4%] lg:text-3xl md:text-3xl font-semibold font-sans mobile:pt-[150px] mobile:text-[4vw] mobile:pl-[2%]">Jujutsu Kaisen</h1><br/>
                <p className='lg:w-[40%] md:w-[40%] lg:pl-[4%] md:pl-[4%] lg:text-base md:text-base font-sans mobile:w-[90%] mobile:text-[2vw] mobile:pl-[2%]'>Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses.</p>
                <div className="lg:w-[40%] lg:ml-[4%] lg:mt-[1.5%] md:w-[40%] md:mt-[1.5%] md:ml-[4%] mobile:w-[90%] mobile:mt-[3%] mobile:ml-[2%]">
                    <button onClick={()=>{ navigate(`/watch/${movie.id}`)}} className="lg:w-[20%] md:w-[20%] lg:h-[5vh] lg:text-base md:text-base md:h-[5vh] bg-white rounded-md text-black font-bold hover:bg-transparent hover:text-white hover:border hover:border-white mobile:text-[3vw] mobile:w-[12vw] mobile:h-[5.5vw]">watch</button>
                </div>
            </div>

            <video className="lg:w-[100%] lg:h-auto lg:scale-100 lg:mt-[-728px] md:w-[100%] md:h-auto md:scale-100 md:mt-[-728px] relative z-0 mobile:w-[100%] mobile:scale-[2.8] mobile:mt-[-275px]" autoPlay muted loop>
                <source src="/JujutsuKaisen.mp4" type="video/mp4"/>  
            </video>

            {videoid && 
                <iframe className="lg:w-[100%] lg:h-auto md:w-[100%] md:h-auto relative z-0 mt-[-728px] mobile:h-[350px] mobile:mt-[-350px]"
                src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1&rel=0&enablejsapi=1&modestbranding=1&showinfo=0&controls=0&loop=1&playlist=${videoid}`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen>    
                </iframe>
            }
        </div>
    );
} 

export default MainMovie;