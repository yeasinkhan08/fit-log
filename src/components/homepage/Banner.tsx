import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto pt-5">
      <div className="w-full max-w- h-112 border border-[#222630] rounded-2xl bg-[#15171D] flex items-center justify-between px-14 py-14 mx-auto">
        {/* left side */}
        <div className="w-139.5 h-75 flex flex-col gap-5 pt-[5.75px] ">
          <p className="text-[11px] leading-normal font-bold tracking-[1.1px] uppercase text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-oswald w-139.5 text-[60px] leading-none font-bold tracking-[-1.5px] uppercase text-white">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="w-[481.7px] text-[16px] leading-normalfont-normal text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="w-[178.92px] h-10 px-6 py-3 bg-[#C2F800] text-black text-[12px] leading-[1.333] font-bold tracking-[0.3px] uppercase">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="w-83.5 h-83.5 shrink-0">
          <Image
            src={bannerImg}
            alt="Bannner img"
            width={334}
            height={334}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
