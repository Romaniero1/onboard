import Image from "next/image";
import Susie from "/public/sussie.gif";
import Bubble from "/public/bubble.png";

export const GoCard = () => {
    return (
        <div className="flex h-[835px] bg-[url('/GoCard/goBg.png')] bg-repeat-x bg-top justify-center">
            <div className="absolute h-[532px] w-[532px] bg-no-repeat bg-[url('/GoCard/textBg.png')] mt-20">
                <div className="flex flex-col text-center justify-center items-center pt-[180px]">
                    <h2 className="uppercase">Are you ready? </h2>
                    <h2 className="uppercase">let’s start playing!</h2>
                    <button className="outline outline-0 w-40 h-10 rounded-full bg-pink text-white uppercase mt-10 hover:bg-white hover:text-pink active:outline-white active:outline-4">
                        let’s go!
                    </button>
                </div>
            </div>
            <div className="absolute ml-[900px] mt-[250px]">
                <Image src={Susie} width={124} height={100} alt="Susie" />
            </div>
            <div className="absolute ml-[740px] mt-[220px]">
                <Image src={Bubble} width={124} height={75} alt="Bubble" />
            </div>
            <h5 className="absolute ml-[740px] mt-[235px] text-[11px] w-20 text-center text-dark-blue uppercase">wow! I can’t wait! let’s go</h5>
        </div>
    )
}