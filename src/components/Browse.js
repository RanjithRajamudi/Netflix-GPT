
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import SuggestionsContainer from "./SuggestionsContainer";

const Browse = () => {
    useGetNowPlayingMovies();

    return (
        <div>
            <Header />
            <VideoContainer />
            <SuggestionsContainer />
        </div>
    )

}
export default Browse;