import { faDiscord, faTwitter, faInstagram, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
import DropDownWallet from "../drop-down-wallet/drop-down-wallet";
import Logo from '/components/header/logos/Logo.png'

export const ConnectCard = () => {
  return (
    <div className="flex h-[1080px] bg-[url('/mvpPages/connectCard/connectBg.png')] bg-repeat-x bg-top justify-center">
      <div className="container flex flex-row w-full items-baseline pt-10">
        <a href="https://tinycolony.io">
          <Image src={Logo} width={190} height={42} alt="Mainlink" />
        </a>
        <div className="flex space-x-7 pl-7 items-baseline">
          <a
            href="https://discord.com/invite/VjCHsa3WXm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} className="h-7 w-7" />
          </a>
          <a
            href="https://twitter.com/TinyColonyGame"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-7 w-7" />
          </a>
          <a
            href="https://www.instagram.com/tinycolonygame/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-7 w-7" />
          </a>
          <a
            href="https://medium.com/@TinyColonyGame"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMediumM} className="h-7 w-7" />
          </a>
        </div>
      </div>
      <div className="absolute h-[290px] w-[714px] bg-no-repeat bg-[url('/mvpPages/connectCard/windowBg.png')] -ml-[52px] mt-[400px]">
        <div className="pl-[52px]">
          <div className="flex flex-col items-center text-center ">
            <h2 className="mt-[10px] uppercase">Connect your wallet</h2>
            <p className="mt-[26px] w-[542px]">You must connect a Fractal Wallet to play the MVP.
              All in-game assets must be held in this wallet for gameplay.
            </p>
            <DropDownWallet />
          </div>
          <div className="flex flex-row items-center mt-[55px]">
            <Link href="/">
              <button className="bg-grayButton w-[154px] h-[43px] ml-[147px] ">
                <h3 className="uppercase text-stroke">back</h3>
              </button>
            </Link>
            <ScrollIntoView selector="#select" smooth scrollOptions={({ block: 'center' })}>
              <button className="bg-greenButton w-[154px] h-[43px] ml-[60px]">
                <h3 className="uppercase text-stroke">connect</h3>
              </button>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    </div>
  )
}