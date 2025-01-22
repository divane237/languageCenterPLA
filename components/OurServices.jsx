import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
const OurServices = () => {
  return (
    <section className="py-4 bg-gradient-to-b from-sky-100 via-sky-300 via-40% to-sky-100 to-90%">
      <h2 className="text-center font-semibold text-base lg:text-xl mb-4">
        Our Services
      </h2>
      <div className="w-full grid grid-cols-services justify-center gap-4">
        <div className="w-full bg-white/90 flex flex-col items-center rounded-xl p-2 border-2">
          <Image
            src={"/services/service-learn.png"}
            width={230}
            height={230}
            alt="children"
          />
          <p className="font-semibold">Language Classes</p>

          <p className="text-justify">
            Access unmatched languages classes for{" "}
            <Link className="text-sky-600 hover:text-sky-600/50" href="/german">
              german
            </Link>
            ,{" "}
            <Link
              className="text-sky-600 hover:text-sky-600/50"
              href="/english"
            >
              english
            </Link>
            ,{" "}
            <Link className="text-sky-600 hover:text-sky-600/50" href="/french">
              french
            </Link>{" "}
            for all level from beginners (A1) to professionals (C2)
          </p>
        </div>
        <div className="w-full bg-white/90 flex flex-col items-center rounded-xl p-2 ">
          <Image
            src={"/services/service-translation.png"}
            width={230}
            height={230}
            alt="children"
          />
          <p className="font-semibold">Translation</p>
          <p className="text-justify">
            We provide you with top-nodge certified translation of legal
            documents in all 3 languages
          </p>
        </div>
        <div className="w-full bg-white/90 flex flex-col items-center rounded-xl p-2">
          <Image
            src={"/services/service-preparation.png"}
            width={230}
            height={230}
            alt="children"
          />
          <p className="font-semibold">Intensive preparation</p>
          <p className="text-justify">
            Already have an intermediate language level? Worry no more. We offer
            intensive preparation for your language test. We also assist in
            booking tests for our candidates.
          </p>
        </div>
        <div className="w-full bg-white/90 flex flex-col items-center rounded-xl p-2">
          <Image
            src={"/services/service-transcription2.png"}
            width={230}
            height={230}
            alt="children"
          />
          <p className="font-semibold">Transcription</p>
          <p className="text-justify">
            In need of an online transcriber ? Our teaching staff is available
            to serve you the best service both online and offline. Our fast
            internet connection and sufisticated PC lab ease the work for
            perfect online transcription.
          </p>
        </div>
        <div className="w-full bg-white/90 flex flex-col items-center rounded-xl p-2">
          <Image
            src={"/services/service-it-training.png"}
            width={230}
            height={230}
            alt="children"
          />
          <p className="font-semibold">IT Training</p>
          <p className="text-justify">
            Learn basic computer skills like office suite (Microsoft Word, Excel
            and Powerpoint), basic webdevelopment, AI tools and Photoshops with
            a various IT program design to take you from a beginner to advanced
            level.
          </p>
        </div>
        <div className="w-full bg-white/90 flex flex-col items-center rounded-xl p-2 ">
          <Image
            src={"/services/kids-summer-training.png"}
            width={230}
            height={230}
            alt="children"
          />
          <p className="font-semibold m-1">Summer for Kids</p>
          <p className="text-justify">
            Provide an exciting 1 month summer journey for children between 7 -
            16 years. Various activities such as swimming, robot programming
            (Arduino), dancing, basic office suites, drawing and many more...
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
