

function ListContainer({children}){
    return (
        <div className="lg:w-[100%] md:w-[100%]  bg-transparent lg:mb-[5vh] md:mb-[5vh] mobile:mb-[1.5vh] ">
            <p className="lg:text-[3vh] md:text-[3vh] w-[100%] pb-[1vh] pt-[1vh] bg-transparent pl-[4%] font-semibold font-sans mobile:text-[3vw]">Now Playing</p>

            <div className="lg:w-[90%] md:w-[93%] flex flex-row ml-[4%] lg:gap-3 md:gap-3 overflow-x-scroll no-scrollbar bg-transparent mobile:gap-[2vw]">
                {children}
            </div>
        </div>
    );
}

export default ListContainer;