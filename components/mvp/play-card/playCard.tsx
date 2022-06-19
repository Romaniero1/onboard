
export const PlayCard = () => {
  return (
    <div id="play" className="flex h-[1080px] bg-[url('/mvpPages/playCard/playBg.png')] bg-repeat-x bg-top justify-center">
      <div className="absolute h-[290px] w-[662px] bg-no-repeat bg-[url('/mvpPages/dialogBg.png')] mt-[400px]">
        <div className="flex flex-col items-center text-center ">
          <h2 className="mt-[10px] uppercase">PUrCHASE NFT’s AND PLAY!</h2>
          <p className="mt-[26px] w-[542px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mauris
            in dui mollis gravida at accumsan ex. Aenean nunc urna, efficitur vel enim eu,
            pharetra tempus turpis. Nunc maximus iaculis fringilla. Lorem ipsum dolor
            sit amet, consectetur.
          </p>
        </div >
        <a href="https://www.fractal.is/tinycolony">
          <button className="bg-purpleButton w-[154px] h-[43px] ml-[147px] mt-[90px]">
            <h3 className="uppercase text-stroke">buy</h3>
          </button>
        </a>
        <a href="#play">
          <button className="bg-greenButton w-[154px] h-[43px] ml-[60px] mt-[90px]">
            <h3 className="uppercase text-stroke">play</h3>
          </button>
        </a>
      </div>
    </div>
  )
}