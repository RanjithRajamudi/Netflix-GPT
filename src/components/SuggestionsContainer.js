import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SuggestionsContainer = () => {

    const movies = useSelector((store) => store.movies);
    console.log(movies, "inCont")

    return (
        movies.nowPlayingMovies &&
        <div className="bg-black">
            <div className="-mt-52 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending Now"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"New Releases"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Blockb uster Movies"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SuggestionsContainer;