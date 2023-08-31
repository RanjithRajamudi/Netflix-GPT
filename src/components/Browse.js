
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import SuggestionsContainer from "./SuggestionsContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";

const Browse = () => {
    useGetNowPlayingMovies();
    useGetPopularMovies();

    return (
        <div>
            <Header />
            <VideoContainer />
            <SuggestionsContainer />
        </div>
    )

}
export default Browse;