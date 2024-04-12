import Link from "next/link";
import "../styles/global.css";
import { SideBarMenuItem } from "./sidebarMenuItem";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="hidden sticky left-0 top-0 cm:flex flex-col h-[100vh] border-r border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)]">
      <div className="pl-4  opacity-80 flex-none border-b border-[rgba(255,255,255,0.12)] flex flex-row-reverse h-[64px] justify-end items-center gap-4">
        <span className="bg-[linear-gradient(15deg,rgb(255,255,255)_0%,rgba(255,255,255,0.61)_100%)] inline-block text-transparent bg-clip-text font-bold font-archivo text-[28px]">
          ZembleX
        </span>
        <div className="h-[37px] w-[32px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 37"
        >
          <g id="ss1446482139_1">
            <path
              d="M 0 0 L 31.67 0 L 31.67 37 L 0 37 Z"
              fill="transparent"
            ></path>
            <path
              d="M 22.616 14.61 L 31.61 9.357 L 31.61 16.634 L 22.616 16.634 Z"
              fill="rgb(255,255,255)"
              stroke-width="0.12"
              stroke="rgb(255,255,255)"
              stroke-miterlimit="0.8"
            ></path>
            <path
              d="M 31.671 9.25 L 22.555 14.575 L 15.834 10.65 L 15.834 0 Z"
              fill="rgb(246,246,246)"
            ></path>
            <path
              d="M 15.834 0 L 15.834 10.65 L 9.115 14.575 L 0 9.25 Z"
              fill="rgb(238,238,238)"
            ></path>
            <path
              d="M 9.115 14.575 L 9.115 22.425 L 0 27.749 L 0 9.25 Z"
              fill="rgb(226,226,226)"
            ></path>
            <path
              d="M 15.834 26.351 L 15.834 37 L 0 27.749 L 9.115 22.425 Z"
              fill="rgb(203,203,203)"
            ></path>
            <path
              d="M 31.671 27.749 L 15.834 37 L 15.834 26.351 L 22.555 22.425 Z"
              fill="rgb(175,175,175)"
            ></path>
            <path
              d="M 31.67 20.304 L 31.67 27.75 L 22.555 22.425 L 22.555 20.304 Z"
              fill="rgb(117,117,117)"
            ></path>
          </g>
        </svg>
        </div>
        
      </div>
      <div className="pt-8 px-4 flex-1 flex-col gap-1">
        <div>
          <span className="font-inter text-xs">Menu</span>
        </div>
        <SideBarMenuItem
          text="Home"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgb(255, 255, 255)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgb(255, 255, 255)"

              // style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"
            >
              <g color="rgb(255, 255, 255)">
                <path d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H52V117.28l76-71.75,76,71.75Z"></path>
              </g>
            </svg>
          }
          link="/"
        />

        <SideBarMenuItem
          text="About"
          svg={
            <svg
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
                <path d="M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"></path>
              </g>
            </svg>
          }
          link="/"
        />
        <SideBarMenuItem
          text="Portfolio"
          svg={
            <svg
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
                <path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>
              </g>
            </svg>
          }
          link="/"
        />
        <SideBarMenuItem
          text="Services"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgba(255, 255, 255, 0.75)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgb(255, 255, 255)"
            >
              <g color="rgba(255, 255, 255, 0.75)">
                <path d="M230.86,109.25,169.18,86.82,146.75,25.14a19.95,19.95,0,0,0-37.5,0L86.82,86.82,25.14,109.25a19.95,19.95,0,0,0,0,37.5l61.68,22.43,22.43,61.68a19.95,19.95,0,0,0,37.5,0l22.43-61.68,61.68-22.43a19.95,19.95,0,0,0,0-37.5Zm-71.65,38a19.92,19.92,0,0,0-11.94,11.94l-19.27,53-19.27-53a19.92,19.92,0,0,0-11.94-11.94L43.79,128l53-19.27a19.92,19.92,0,0,0,11.94-11.94l19.27-53,19.27,53a19.92,19.92,0,0,0,11.94,11.94l53,19.27Z"></path>
              </g>
            </svg>
          }
          link="/"
        />
        <SideBarMenuItem
          text="Shop"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgba(255, 255, 255, 0.75)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgb(255, 255, 255)"
            >
              <g color="rgba(255, 255, 255, 0.75)">
                <path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM76,88a12,12,0,0,1,24,0,28,28,0,0,0,56,0,12,12,0,0,1,24,0A52,52,0,0,1,76,88Z"></path>
              </g>
            </svg>
          }
          link="/"
        />
        <SideBarMenuItem
          text="Blog"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgba(255, 255, 255, 0.75)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgb(255, 255, 255)"
            >
              <g color="rgba(255, 255, 255, 0.75)">
                <path d="M234.36,170A12,12,0,0,1,230,186.37l-96,56a12,12,0,0,1-12.1,0l-96-56a12,12,0,0,1,12.09-20.74l90,52.48L218,165.63A12,12,0,0,1,234.36,170ZM218,117.63,128,170.11,38.05,117.63A12,12,0,0,0,26,138.37l96,56a12,12,0,0,0,12.1,0l96-56A12,12,0,0,0,218,117.63ZM20,80a12,12,0,0,1,6-10.37l96-56a12.06,12.06,0,0,1,12.1,0l96,56a12,12,0,0,1,0,20.74l-96,56a12,12,0,0,1-12.1,0l-96-56A12,12,0,0,1,20,80Zm35.82,0L128,122.11,200.18,80,128,37.89Z"></path>
              </g>
            </svg>
          }
          link="/"
        />
        <SideBarMenuItem
          text="Contact"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgba(255, 255, 255, 0.75)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgb(255, 255, 255)"
            >
              <g color="rgba(255, 255, 255, 0.75)">
                <path d="M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3,37.28l84.32,40,40,84.32a19.81,19.81,0,0,0,18,11.44c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM157,220.92l-33.72-71.19,45.25-45.25a12,12,0,0,0-17-17l-45.25,45.25L35.08,99,210,46Z"></path>
              </g>
            </svg>
          }
          link="/"
        />
      </div>

      <div className="py-2 px-4 flex-none border-b border-[rgba(255,255,255,0.1)]">
        <div className="border border-solid border-[rgba(255,255,255,0.1)] p-2 rounded-[10px]">
          <div className="flex gap-[6px]">
            <div className="h-[21px] w-[36px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.5)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgb(255, 255, 255, 0.5)"
              >
                <g color="rgba(255, 255, 255, 0.5)">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </g>
              </svg>
            </div>
            <div className="h-[21px]  w-[36px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.5)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgb(255, 255, 255, 0.5)"
              >
                <g color="rgba(255, 255, 255, 0.5)">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                </g>
              </svg>
            </div>
            <div className="h-[21px]  w-[36px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.5)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgb(255, 255, 255, 0.5)"
              >
                <g color="rgba(255, 255, 255, 0.5)">
                  <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path>
                </g>
              </svg>
            </div>
            <div className="h-[21px]  w-[36px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.5)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgb(255, 255, 255, 0.5)"
              >
                <g color="rgba(255, 255, 255, 0.5)">
                  <path d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm-24,78a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H90a38,38,0,0,1,25.65,66A42,42,0,0,1,136,158ZM40,116H90a22,22,0,0,0,0-44H40Zm80,42a26,26,0,0,0-26-26H40v52H94A26,26,0,0,0,120,158Zm128-6a8,8,0,0,1-8,8H169a32,32,0,0,0,56.59,11.2,8,8,0,0,1,12.8,9.61A48,48,0,1,1,248,152Zm-17-8a32,32,0,0,0-62,0Z"></path>
                </g>
              </svg>
            </div>
            <div className="h-[21px]  w-[36px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.5)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgb(255, 255, 255, 0.5)"
              >
                <g color="rgba(255, 255, 255, 0.5)">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.65,96.18Q211.83,120,208,120a168.58,168.58,0,0,0-43.94,5.84A166.52,166.52,0,0,0,150.61,96a168.32,168.32,0,0,0,38.2-31.55A87.78,87.78,0,0,1,215.65,120.18ZM176.28,54.46A151.75,151.75,0,0,1,142,82.52a169.22,169.22,0,0,0-38.63-39,88,88,0,0,1,73,10.94ZM85.65,50.88a153.13,153.13,0,0,1,42,39.18A151.82,151.82,0,0,1,64,104a154.19,154.19,0,0,1-20.28-1.35A88.39,88.39,0,0,1,85.65,50.88ZM40,128a87.73,87.73,0,0,1,.53-9.64A168.85,168.85,0,0,0,64,120a167.84,167.84,0,0,0,72.52-16.4,150.82,150.82,0,0,1,12.31,27.13,167.11,167.11,0,0,0-24.59,11.6,169.22,169.22,0,0,0-55.07,51.06A87.8,87.8,0,0,1,40,128Zm42,75a152.91,152.91,0,0,1,50.24-46.79,148.81,148.81,0,0,1,20.95-10,152.48,152.48,0,0,1,3.73,33.47,152.93,152.93,0,0,1-3.49,32.56A87.92,87.92,0,0,1,82,203Zm89.06,1.73a170,170,0,0,0,1.86-25,168.69,168.69,0,0,0-4.45-38.47A152.31,152.31,0,0,1,208,136q3.8,0,7.61.19A88.13,88.13,0,0,1,171.06,204.72Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="p-2">
          <div className="flex gap-[10px]">
            <div className="relative h-[40px] w-[40px] aspect-[1/1] ">
              <img
                src="https://framerusercontent.com/images/TCzd0ccYoWzp53eRFoPWeHXr8.jpg"
                className="h-[100%] w-[100%] absolute object-cover rounded-[10px] "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base">Caleb Martinez</span>
              <span className="text-sm text-[rgba(255,255,255,0.51)]">
                Available
              </span>
            </div>
            <div className="h-[48px]">
              <div className="h-[23px] w-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="rgba(255, 255, 255, 0.54)"
                  width={"100%"}
                  height={"100%"}
                  display={"inline-block"}
                  fill="rgb(255, 255, 255, 0.5)"
                >
                  <g color="rgba(255, 255, 255, 0.54)">
                    <path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM138.81,123.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L119.06,136H100a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L112.94,120H132A8,8,0,0,1,138.81,123.79Z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
