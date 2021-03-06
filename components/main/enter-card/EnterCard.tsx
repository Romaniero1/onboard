import Image from "next/image";
import Enter from "/public/EnterCard/steps.svg";

export const EnterCard = () => {
    return (
        <div className="flex h-[601px] bg-[url('/EnterCard/EnterBg.png')] bg-repeat-x bg-top justify-center">
            <div className="flex flex-row items-center ml-[100px] -mt-4">
                <div className="flex flex-col w-1/4">
                    <h4>HOW IT WORKS?</h4>
                    <h2 className="mt-2">
                        HOW TO ENTER
                        TINY WORLD?</h2>
                    <a href="https://drive.google.com/file/d/1W0-kx1JsXLqEoL3eiSRbW_Mz1nKrtQwq/view?usp=sharing">
                        <button className="outline outline-0 w-40 h-10 rounded-full bg-white text-pink uppercase mt-5 hover:bg-pink hover:text-white active:outline-pink active:outline-4">
                            download deck
                        </button>
                    </a>
                </div>
                <Image src={Enter} width={726} height={96} alt="HowToEnter" />
            </div>

        </div>
    )
}