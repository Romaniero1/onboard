import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FractalImg from "./logos/fractal.svg";
import iLogosImg from "./logos/i-logos.svg";
import StarLaunchImg from "./logos/star-launch.svg";
import Solana from "./logos/solana.svg";
import Unity from "./logos/unity.svg";

export const Footer = () => {
  return (
    <div className="bg-bottom h-[706px] bg-[#21181B] lg:h-[440px]">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="flex flex-col items-center pt-12 lg:flex-row xl:pt-[68px]">
            <div className="container flex h-60 w-60 bg-[#a92633] rounded-full items-center justify-center">
              <div className="absolute ml-2">
                <Image src="/ezgifcom-gif-maker.gif" width={118} height={118} alt="Mainlink" />
              </div> 
              <div className="animate-[spin_30s_linear_infinite]">
                <Image src="/_1052x.webp" width={200} height={200} alt="Mainlink" />
              </div>

            </div>
            <div className="flex space-x-7 pt-10 lg:pl-10 xl:pl-20">
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
          <div
            className="flex flex-col font-mono text-base items-center justify-center pt-10 lg:items-start lg:pl-60 xl:pl-[400px] xl:pt-[138px] 2xl:pl-[500px]
            "
          >
            <a
              href="https://tinycolony.io/tinyverse#about"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
            <a
              href="https://tinycolony.io/tinyverse#thegame"
              target="_blank"
              rel="noreferrer"
            >
              The Game
            </a>
            <a
              href="https://tinycolony.io/tinyverse#nfts"
              target="_blank"
              rel="noreferrer"
            >
              NFTs
            </a>
            <a
              href="https://tinycolony.io/tinyverse#roadmap"
              target="_blank"
              rel="noreferrer"
            >
              Roadmap
            </a>
            <a
              className="text-yellow-500"
              href="https://drive.google.com/file/d/1wTeosdBIHjipg7wJVW7IiqSRxNEo0RS5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD DECK
            </a>
          </div>
        </div>
        <div className="flex justify-center pt-14 sm:pt-10">
          <div className="border-b-[2px] border-white w-80 sm:w-[640px] md:w-[768px] lg:w-[928px] xl:w-[1100px] 2xl:w-[1170px]" />
        </div>
        <div className="container flex flex-wrap pt-5 justify-center items-center sm:pb-4 lg:-ml-44 xl:-ml-64 2xl:-ml-72">
          <div className="flex items-center">
            <a
              className="flex pr-2.5"
              href="https://ilogos.biz/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={iLogosImg} width={117} height={41} alt="iLogos" />
            </a>
            <a
              className="flex pr-5 sm:order-1"
              href="https://www.fractal.is/tinycolony"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={FractalImg} width={88} height={28} alt="Fractal" />
            </a>
            <a
              className="flex pr-6"
              href="https://starlaunch.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={StarLaunchImg}
                width={131}
                height={23}
                alt="Star Launch"
              />
            </a>
          </div>
          <a
            className="flex pr-6 sm:order-0"
            href="https://solana.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Solana} width={92} height={11} alt="Solana" />
          </a>
          <a href="https://unity.com/" target="_blank" rel="noreferrer">
            <Image src={Unity} width={81} height={28} alt="Unity" />
          </a>
        </div>
      </div>
    </div>
  );
};
