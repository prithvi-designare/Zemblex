import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div className="flex py-2 px-[2px] h-[64px] justify-between">
        <div className="bg-[rgba(255,255,255,0.03)] h-[48px] w-[48px] flex items-center justify-center rounded-[10px] cm:hidden">
          <div className="h-[24px] w-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgba(255, 255, 255, 0.9)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgba(255, 255, 255, 0.9)"
            >
              <g color="rgba(255, 255, 255, 0.9)">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="w-[300px] bg-[rgba(255,255,255,0.03)] p-2 rounded-[10px] flex gap-[10px] items-center">
          <div className="h-[100%] w-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="rgba(255, 255, 255, 0.5)"
              width={"100%"}
              height={"100%"}
              display={"inline-block"}
              fill="rgba(255, 255, 255, 0.5)"
            >
              <g color="rgba(255, 255, 255, 0.5)">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </g>
            </svg>
          </div>
          <span className="text-xs text-[rgba(255,255,255,0.5)]">
            Search here....
          </span>
        </div>
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="bg-[rgba(255,255,255,0.06)] h-[48px] w-[48px] flex justify-center items-center rounded-[10px]"
          >
            <div className="h-[27px] w-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.9)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgba(255, 255, 255, 0.9)"
              >
                <g color="rgba(255, 255, 255, 0.9)">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                </g>
              </svg>
            </div>
          </Link>
          <Link
            href={"/"}
            className="bg-[rgba(255,255,255,0.06)] h-[48px] w-[48px] flex justify-center items-center rounded-[10px]"
          >
            <div className="h-[27px] w-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.9)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgba(255, 255, 255, 0.9)"
              >
                <g color="rgba(255, 255, 255, 0.9)">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </g>
              </svg>
            </div>
          </Link>
          <Link
            href={"/"}
            className="bg-[rgba(255,255,255,0.06)] h-[48px] w-[48px] flex justify-center items-center rounded-[10px]"
          >
            <div className="h-[27px] w-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.9)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgba(255, 255, 255, 0.9)"
              >
                <g color="rgba(255, 255, 255, 0.9)">
                  <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
                </g>
              </svg>
            </div>
          </Link>
          <Link
            href={"/"}
            className="bg-[rgba(255,255,255,0.06)] h-[48px] w-[48px] flex justify-center items-center rounded-[10px]"
          >
            <div className="h-[27px] w-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="rgba(255, 255, 255, 0.9)"
                width={"100%"}
                height={"100%"}
                display={"inline-block"}
                fill="rgba(255, 255, 255, 0.9)"
              >
                <g color="rgba(255, 255, 255, 0.9)">
                  <path d="M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z"></path>
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
