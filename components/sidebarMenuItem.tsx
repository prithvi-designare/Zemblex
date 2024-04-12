import Link from "next/link";
import { FC } from "react";

export interface SideBarMenuItemProps {
  text: string;
  svg: any;
  link: string;
}
export const SideBarMenuItem : FC<SideBarMenuItemProps> = ({text, svg, link}) => {
  return <div className="h-auto flex">
        <Link href={link} className="px-1 py-2">
            <div className="flex flex-row gap-[10px] items-center">
                <div className="h-[20px] w-[17px] aspect-[1/1]">
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="rgb(255, 255, 255)"
                        width={"100%"}
                        height={"100%"}
                        display={"inline-block"}
                        fill="rgb(255, 255, 255)"

                    >
                        <g color="rgb(255, 255, 255)">
                            <path d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H52V117.28l76-71.75,76,71.75Z"></path>
                        </g>
                    </svg> */}
                    {svg}
                </div>

                <span className="font-inter text-base">{text}</span>
            </div>
        </Link>
    </div>;
};
