import ScrollIntoView from "react-scroll-into-view";
import DropDownColonies from "../drop-down-colonies/drop-down-colonies";

export const SelectCard = () => {
  return (
    <div id="select" className="flex h-[1080px] bg-[url('/mvpPages/selectCard/selectBg.png')] bg-repeat-x bg-top justify-center">
      <div className="absolute h-[290px] w-[714px] bg-no-repeat bg-[url('/mvpPages/selectCard/windowBg.png')] -ml-[52px] mt-[400px]">
        <div className="pl-[52px]">
          <div className="flex flex-col items-center text-center ">
            <h2 className="mt-[10px] uppercase">SELECT YOUR COLONY</h2>
            <p className="mt-[26px] w-[542px]">Begin building, expanding and exploring the underground.
              Select a Colony NFT for use.
            </p>
            <DropDownColonies />
          </div>
          <div className="flex flex-row items-center mt-[55px]">
            <a href="https://www.fractal.is/tinycolony">
              <button className="bg-purpleButton w-[154px] h-[43px] ml-[147px]">
                <h3 className="uppercase text-stroke">buy</h3>
              </button>
            </a>
            <ScrollIntoView selector="#play" smooth scrollOptions={({ block: 'center' })}>
              <button className="bg-greenButton w-[154px] h-[43px] ml-[60px]">
                <h3 className="uppercase text-stroke">next</h3>
              </button>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    </div>
  )
}