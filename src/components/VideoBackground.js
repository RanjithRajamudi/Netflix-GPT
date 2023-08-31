import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store => store.movies?.movieTrailer);

    useGetMovieTrailer(movieId);

    return (
        <div className="">
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
                title="YouTube video player"
            ></iframe>
        </div>
    )
}

export default VideoBackground;