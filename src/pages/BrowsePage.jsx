import { useSelector } from "react-redux";
import Header from "../components/Header";
import ListContainer from "../components/ListContainer";
import ListItem from "../components/ListItem";
import MainMovie from "../components/MainMovie";

function BrowsePage(){
    const moviesList = useSelector(state => state.movieData);

    return (
        <div className='lg:w-full md:w-full sm:w-full text-white lg:bg-black md:bg-black mobile:w-full mobile:bg-black'>
            <Header/>
            <MainMovie/>
            <div className="overflow-y-scroll no-scrollbar lg:mt-[-5vh] md:mt-[-5vh] relative z-40 lg:w-[100%] md:w-[100%] lg:h-[800px] md:h-[800px] lg:bg-transparent md:bg-transparent mobile:w-[100%] mobile:h-[60vh] mobile:mt-[-0vh] mobile:bg-transparent">
                <ListContainer>
                    { moviesList.map(movie => <ListItem movie={movie} key={movie.id}/>) }
                </ListContainer>
                <ListContainer>
                    { moviesList.map(movie => <ListItem movie={movie} key={movie.id}/>) }
                </ListContainer>
                <ListContainer>
                    { moviesList.map(movie => <ListItem movie={movie} key={movie.id}/>) }
                </ListContainer>
            </div>
        </div>
    );
}

export default BrowsePage;