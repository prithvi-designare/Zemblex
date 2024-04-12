import Link from "next/link";
import { FC, useEffect, useState } from "react";

export interface ButtonProps {
  link: string;
  buttonText: string;
}


export const Button: FC<ButtonProps> = ({ link, buttonText }) => {



  return (
    <div className="h-[50px] relative group">
      <Link
        href={link}
        className="h-[100%] w-[100%] border border-[rgba(255,255,255,0.3)] p-6 absolute flex flex-row items-center justify-between rounded-xl group-hover:bg-white transition ease-in-out delay-150"
      >
        <span className="group-hover:text-black transition ease-in-out delay-150">{buttonText}</span>
        <div className="h-[17px] w-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="rgb(255, 255, 255)"
            width={"100%"}
            height={"100%"}
            className="fill-white group-hover:fill-black transition ease-in-out delay-150"
            // className=" text-white group-hover:fill-current group-hover:text-black"
          >
            <g color="rgb(255, 255, 255)">
              <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
            </g>
          </svg>
        </div>
      </Link>
    </div>
  );
};
