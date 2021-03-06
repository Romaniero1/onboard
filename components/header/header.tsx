import { faDiscord, faTwitter, faInstagram, faMediumM, faYoutube, faTiktok, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import Logo from './logos/Logo.png'

export const Header = () => {
  return (
    <header className="relative flex flex-col items-center h-[800px] overflow-hidden">
      <div className="container relative flex flex-col items-center z-10 ">
        <div className="flex flex-row items-center w-full justify-between pt-10">
          <div className="flex flex-row items-baseline">
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
              <a
                href="https://www.youtube.com/channel/UC8c545SX_PGCD7jqPTEU_yQ"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-7 w-7" />
              </a>
              <a
                href="http://tiktok.com/@tinycolony"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/tiny-colony"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
              </a>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1W0-kx1JsXLqEoL3eiSRbW_Mz1nKrtQwq/view?usp=sharing">
            <button className="outline outline-0 w-40 h-10 rounded-full bg-white text-pink uppercase  hover:bg-pink hover:text-white active:outline-pink active:outline-4">
              download deck
            </button>
          </a>
        </div>
        <div className="text-center w-[500px] pt-32">
          <h1 className="uppercase ">
            welcome to the mvp
          </h1>
          <p className="pt-4">Build and grow your Colony, assemble your army, and train your Characters for defense.
            The MVP is the first step in conquering the Tinyverse. </p>
          <div className="mt-10">
            <input type="text" className="w-[292px] h-[50px] pl-4 bg-transparent bg-[url('/input.png')] bg-no-repeat bg-cover" />
            <button className="outline outline-0 w-40 h-10 rounded-full bg-pink ml-5 uppercase hover:bg-white hover:text-pink active:outline-white active:outline-4">
              let???s start
            </button>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  )
}

