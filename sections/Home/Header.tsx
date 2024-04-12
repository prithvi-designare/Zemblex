export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[rgba(255,255,255,0.06)] flex pt-8 pb-4 flex-row rounded-[25px] items-end">
        <div className="flex flex-col px-4 pt-4 pb-2 gap-6 flex-1">
          <span className="text-5xl leading-[1.2em]">
            Make your Website Standout Using Futuristic Templates
          </span>

          <span className="text-base text-[rgba(255,255,255,0.6)] leading-[1.4em]">
            Step into a world of cutting edge design and limitless
            possibilities. Elevate your experience with our futuristic
            templates, crafting a tomorrow that starts now.
          </span>

          <div className="flex flex-row gap-2.5">
            <div className="flex flex-row items-center gap-2.5 w-[200px] h-[48px] p-6 border rounded-[12px] justify-between">
              <span className="text-base font-bold">Buy Now</span>
              <div className="w-[14px] h-[17px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="rgb(255, 255, 255)"
                  width={"100%"}
                  height={"100%"}
                  fill="rgb(255, 255, 255)"
                >
                  <g color="rgb(255, 255, 255)">
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-[1_0_0px] h-[48px]">
              <div className="w-[24px] h-[27px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="rgba(255, 255, 255, 0.85)"
                  width={"100%"}
                  height={"100%"}
                  fill="rgb(255, 255, 255)"
                >
                  <g color="rgba(255, 255, 255, 0.85)">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
                  </g>
                </svg>
              </div>
              <span className="text-base font-bold">Explore More</span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col items-center">
              <span className="text-[22px]">320+</span>
              <span className="text-sm">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[22px]">100K+</span>
              <span className="text-sm">Instagram Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[22px]">1.5 M</span>
              <span className="text-sm">Behance Views</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[450px] px-4">
          <video
            playsInline
            autoPlay
            muted
            loop
            // controls

            style={{
                cursor: "auto",
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                backgroundColor: "rgba(0, 0, 0, 0)",
                objectPosition: "50% 50%"
            }}
            // style="cursor: auto; width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: cover; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;"
          >
            <source src="https://framerusercontent.com/assets/InV1Z72FFcxtqts0HNLqdGAZg.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  );
};
