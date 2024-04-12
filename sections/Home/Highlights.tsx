import Image from "next/image";
import { HighLightCardOne } from "../../components/highlightCardOne";
import { Button } from "../../components/button";
import styles from "./Home.module.css"
import { SlideComponent } from "@/components/slideComponent";

export const Highlights = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <HighLightCardOne
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="rgba(255, 255, 255, 0.52)"
            className="h-[100%] w-[100%] fill-[rgba(255,255,255,0.52)]"
          >
            <g color="rgba(255, 255, 255, 0.52)">
              <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
            </g>
          </svg>
        }
        iconText="Latest Designs"
        iconSubText="Cutting edge Design Solutions"
        banner="https://framerusercontent.com/images/ZlsvHVoe4Ij6ixuqwwajQzhtMc.jpg"
        textLeft="Unleash Your Potential And Explore Diffrent Oppertunities"
        textRight="our solutions are crafted to empower growth and foster success. Discover the possibilities with us."
      />

      <HighLightCardOne
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="rgba(255, 255, 255, 0.52)"
            className="h-[100%] w-[100%] fill-[rgba(255,255,255,0.52)]"
          >
            <g color="rgba(255, 255, 255, 0.52)">
              <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z"></path>
              <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z"></path>
              <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z"></path>
            </g>
          </svg>
        }
        iconText="Crazy Achivements"
        iconSubText="Award Class Showcase"
        banner="https://framerusercontent.com/images/mMLA6wSV0rRcm92esyvsPw6ugxM.jpg"
        textLeft="Where Excellence Gets Noticed"
        textRight="Featuring 30+ prestigious accolades, symbolizing our dedication to excellence"
      />

      <div className="flex flex-row gap-2.5">
        <div className="flex flex-col flex-[1_0_0px] gap-2">
          <div className="flex flex-col p-6 bg-[#ffffff08] h-[272px] gap-2.5 rounded-[29px]">
            <span className="text-2xl">Bring your imaginations to Life</span>
            <span className="text-base text-[rgba(255,255,255,.6)]">
              Among the brands I've used, there's a spectrum of quality and
              reliability. Some brands stand out for their innovative designs{" "}
            </span>
          </div>
          <Button buttonText="Buy Now" link="/" />
        </div>

        <div className="flex-[2_0_0px] h-[330px] overflow-hidden flex flex-col gap-4">
        <div className={`${styles.icons} -rotate-[30deg] w-[100%]`}>
            <SlideComponent />
          </div>
        <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>
          <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>
          <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>
          <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>
          <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>
          <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>
          <div className={`${styles.icons} -rotate-[30deg]`}>
            <SlideComponent />
          </div>

        </div>
      </div>
    </div>
  );
};
