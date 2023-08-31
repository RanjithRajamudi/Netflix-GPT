

const VideoTitle = (props) => {
    const { title, overview } = props
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex">
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-75">
                    ▶️ Play
                </button>
                <button className="mx-2 bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                    ℹ️ More info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;