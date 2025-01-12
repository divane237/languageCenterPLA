import { truncateStringAtFirstFullStop } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const Images = [
  "english-cambridge-logo.png",
  "english-celpip-logo.png",
  "english-toefl-logo.png",
  "english-ielts-logo.png",
  "french-delf-dalf.jpg",
  "french-dilf.jpg",
  "french-tcf.png",
  "french-tef.jpg",
  "german-dsh.png",
  "german-goethe.jpg",
  "german-osd.png",
  "german-telc.png",
  "german-TestDaf.jpg",
];

const MovingCaroussel = ({ height = 100, width = 100, ImgLinks = Images }) => {
  const qtyImages = ImgLinks.length;
  return (
    <section className="mt-4">
      <h2 className="text-base md:text-lg lg:text-xl font-semibold text-center">
        Language Tests
      </h2>
      <div className="my-2 py-2 min-h-caroussel  [mask-image:linear-gradient(to_left,transparent,#000_20%_80%,transparent)] overflow-hidden">
        {/* Slider  */}
        <ul
          className={`flex w-caroussel relative justify-center items-center h-item`}
        >
          {/* List */}
          {ImgLinks.map((img, i) => {
            return (
              <li
                className={`absolute right-0 animate-caroussel h-item w-item p-4 `}
                key={img}
                style={{
                  "--caroussel-qty": qtyImages,
                  animationDelay: `calc((var(--caroussel-duration)/var(--caroussel-qty))*${i})`,
                }}
              >
                <Image
                  src={`/images/${img}`}
                  alt={truncateStringAtFirstFullStop(img)}
                  width={width}
                  height={height}
                  priority={true}
                  className="w-full h-full"
                />
              </li>
            );
          })}
        </ul>

        {/*  */}
      </div>
    </section>
  );
};

export default MovingCaroussel;
