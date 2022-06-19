import ScrollIntoView from "react-scroll-into-view";
import DropDownColonies from "../drop-down-colonies/drop-down-colonies";

export const SelectCard = () => {
  return (
    <div id="select" className="flex h-[1080px] bg-[url('/mvpPages/selectCard/selectBg.png')] bg-repeat-x bg-top justify-center">
      <div className="absolute h-[290px] w-[662px] bg-no-repeat bg-[url('/mvpPages/dialogBg.png')] mt-[400px]">
        <div className="flex flex-col items-center text-center ">
          <h2 className="mt-[10px] uppercase">SELECT COLONY</h2>
          <p className="mt-[26px] w-[542px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mauris
            in dui mollis gravida at accumsan ex. Aenean nunc urna, efficitur vel enim eu,
            pharetra tempus turpis. Nunc maximus iaculis fringilla. Lorem ipsum dolor
            sit amet, consectetur.
          </p>
          <DropDownColonies />
        </div>
        <div className="flex flex-row items-center mt-[30px]">
        <a href="https://www.fractal.is/tinycolony">
          <button className="bg-purpleButton w-[154px] h-[43px] ml-[147px]">
            <h3 className="uppercase text-stroke">buy</h3>
          </button>
        </a>
        <ScrollIntoView selector="#play" smooth scrollOptions={({block: 'center'})}>
          <button className="bg-greenButton w-[154px] h-[43px] ml-[60px]">
            <h3 className="uppercase text-stroke">next</h3>
          </button>
        </ScrollIntoView>
        </div>
      </div>

    </div>
  )
}