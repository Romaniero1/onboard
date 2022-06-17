export const VideoCard = () => {
    return (
        <div className="flex h-[721px] bg-[url('/videoCard/videoBg.png')] bg-repeat-x bg-top justify-center">
            <div className="absolute h-[492px] w-[811px] bg-no-repeat bg-[url('/videoCard/playerBg.png')] -ml-[400px] mt-[110px]">
                <iframe
                    className="absolute top-4 left-6 h-[463px] w-[760px]"
                    src="https://www.youtube.com/embed/ad7FswZn1lQ?controls=0&modestbranding=1&showinfo=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}