export const GoCard = () => {
    return (
        <div className="flex h-[835px] bg-[url('/GoCard/goBg.png')] bg-repeat-x bg-top justify-center">
            <div className="absolute h-[532px] w-[532px] bg-no-repeat bg-[url('/GoCard/textBg.png')] mt-20">
                <div className="flex flex-col text-center justify-center items-center pt-[180px]">
                    <h2 className="uppercase">Are you ready? </h2>
                    <h2 className="uppercase">let’s start playing!</h2>
                        <button className="w-40 h-10 rounded-full bg-pink text-white uppercase mt-10">
                        let’s go!
                        </button>
                </div>
            </div>
        </div>
    )
}