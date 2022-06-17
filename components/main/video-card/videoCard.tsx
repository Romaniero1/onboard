import Image from "next/image";
import Miner from "/public/videoCard/mineridle.gif";
import Builder from "/public/videoCard/builder_dig.gif";

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
            <div className="absolute ml-[900px] mt-[370px]">
                <Image src={Miner} width={100} height={100} alt="Miner"/>
                <Image src={Miner} width={100} height={100} alt="Miner"/>
            </div>
            <div className="absolute ml-[2050px] mt-[630px]">
                <Image src={Builder} width={100} height={100} alt="Builder"/>
            </div>
        </div>
    )
}