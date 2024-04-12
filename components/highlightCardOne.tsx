import { FC } from "react";

export interface HighLightCardOneProps {
    icon: any;
    iconText: string;
    iconSubText: string;
    banner: string;
    textLeft: string;
    textRight: string;
}
export const HighLightCardOne : FC<HighLightCardOneProps> = ({icon, iconText, iconSubText, banner, textLeft, textRight}) => {
    return (
        <div className="flex flex-col py-2 px-1 bg-[rgba(255,255,255,0.03)] gap-2.5 rounded-[25px]">
        <div className="flex flex-row w-[100%]">
          <div className="flex flex-col gap-2.5 pl-4 pt-4 flex-[1_0_0px]">
            <div className="h-[64px] w-[64px] border rounded-[14px] border-[rgba(255,255,255,0.16)] flex items-center justify-center">
              <div className="h-[35px] w-[35px]">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="rgba(255, 255, 255, 0.52)"
                  className="h-[100%] w-[100%] fill-[rgba(255,255,255,0.52)]"
                >
                  <g color="rgba(255, 255, 255, 0.52)">
                    <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
                  </g>
                </svg> */}
                {icon}
              </div>
            </div>
            <span className="text-2xl">{iconText}</span>
            <span className="text-lg text-[rgba(255,255,255,0.6)]">
              {iconSubText}
            </span>
          </div>
          <div className="flex-[2_0_0px] p-4 h-min-content">
            <div className="h-[297px] relative rounded-[25px]">
                <div className="absolute h-[100%] w-[100%]">
            <img
                // src="https://framerusercontent.com/images/ZlsvHVoe4Ij6ixuqwwajQzhtMc.jpg"
                src={banner}
                // srcset="https://framerusercontent.com/images/ZlsvHVoe4Ij6ixuqwwajQzhtMc.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/ZlsvHVoe4Ij6ixuqwwajQzhtMc.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/ZlsvHVoe4Ij6ixuqwwajQzhtMc.jpg 1300w"
                sizes="max(max((min(992px, 100vw) - 18px) / 1.5, 0px) - 32px, 0px)"
                className="h-[100%] w-[100%] object-cover rounded-[25px]"
                // style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
              />
                </div>
             
            <div className="bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgba(217,217,217,0)_50.4594%,rgb(0,0,0)_100%)] h-[100%] w-[100%] z-10 relative rounded-[25px]"></div>

            </div>

          </div>
        </div>
        <div className="flex flex-row p-4">
          <span className="text-lg flex-[1_0_0px]">{textLeft}</span>
          <span className="text-lg text-[rgba(255,255,255,.6)] flex-[1_0_0px]">
            {textRight}
          </span>
        </div>
      </div>
    )
}