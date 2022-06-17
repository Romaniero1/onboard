export const HandbookCard = () => {
    return (
        <div className="flex h-[964px] bg-[url('/handbookCard/handbookBg.png')] bg-repeat-x bg-top justify-center">
            <div className="absolute h-[571px] w-[916px] bg-no-repeat bg-[url('/handbookCard/textBg.png')] -ml-[200] mt-[300px]">
                <div className="flex flex-col text-center justify-center items-center">
                    <h2 className="pt-[220px] uppercase">mvp handbook</h2>
                    <p className="pt-3 w-[416px]">A one stop shop for everything you need to know about the MVP, 
                    including an in-depth breakdown of cells, game mechanics, play-testing rewards and how to provide feedback. </p>
                    <button className="outline outline-0 w-40 h-10 rounded-full bg-white text-pink uppercase mt-10 hover:bg-pink hover:text-white active:outline-pink active:outline-4">
                        read
                    </button>
                </div>
            </div>
        </div>
    )
}