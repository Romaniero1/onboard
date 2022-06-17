export const HelpCard = () => {
    return (
        <div className="flex h-[835px] bg-[url('/HelpCard/helpBg.png')] bg-repeat-x bg-top justify-center">
            <div className="absolute h-[410px] w-[728px] bg-no-repeat bg-[url('/HelpCard/textBg.png')] -ml-[500px] mt-[230px]">
                <div className="flex flex-col text-left pt-[100px] pl-20">
                    <h2 className="uppercase">Still need Help?</h2>
                    <p className="pt-3 w-[500px]">We’re more than happy to answer any questions you may have regarding anything Tiny Colony.
                        Join us on Discord and ask away in our support channels!  </p>
                    <a
                        href="https://discord.com/invite/VjCHsa3WXm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="outline outline-0 w-40 h-10 rounded-full bg-white text-pink uppercase mt-10 hover:bg-pink hover:text-white active:outline-pink active:outline-4">
                            open discord
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}