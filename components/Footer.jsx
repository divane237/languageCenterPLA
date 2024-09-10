import Image from "next/image";

import React from "react";
const Footer = () => {
  return (
    <>
      {/* Social Media handles */}
      <div className="flex p-1 gap-x-1 items-center justify-between">
        {/* Discord */}
        <a
          target="blank"
          href={"/"}
          className="hover:scale-150 delay-100 duration-300 transition-transform"
        >
          <Image
            src="./icons/discord.svg"
            alt="discord-icon"
            height={0}
            width={0}
            className="w-8 h8"
          />
        </a>

        {/* Facebook */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/facebook.svg"
            alt="facebook-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* Gmail */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/gmail.svg"
            alt="gmail-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* Instagram */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/instagram.svg"
            alt="instagram-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* linkedIn */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/linkedIn.svg"
            alt="linkedIn-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* SnapChat */}

        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/snapchat.svg"
            alt="snapchat-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* Telegram */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/telegram.svg"
            alt="telegram-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* TikTok */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/tiktok.svg"
            alt="tiktok-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* twitch */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/twitch.svg"
            alt="twitch-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* WhatsApp */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/whatsapp.svg"
            alt="whatsapp-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>

        {/* X  */}
        <a
          target="blank"
          href={"https://www.x.com/div237"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/x.svg"
            alt="x-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>
        {/* YouTube */}
        <a
          target="blank"
          href={"/"}
          className="px-1 hover:scale-150 delay-100 duration-300 transition-transform py-1"
        >
          <Image
            src="./icons/youtube.svg"
            alt="youtube-icon"
            height={0}
            width={0}
            className="w-6 h-6"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
