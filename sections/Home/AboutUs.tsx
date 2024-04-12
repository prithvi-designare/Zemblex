import Link from "next/link";
import { Button } from "../../components/button";

export const AboutUs = () => {
  return (
    <div className="flex flex-row py-[108px] px-4 items-start">
      <span className="text-5xl leading-[1.2em] flex-1">
        Inspiring Dynamic Passion Leads to Excellence
      </span>
      <div className="flex flex-col gap-[27px] flex-1">
        <span className="leading-[1.4em] text-[rgba(255,255,255,.6)]">
          Welcome to our world! Before embarking on your exploration of our
          offerings, allow us to unveil the story behind our brand. Our About
          page serves as a gateway to understanding our journey, values, and the
          relentless passion propelling us forward.Get To Know Us Better
        </span>
        <Button link="/" buttonText="More About Us"/>
      </div>
    </div>
  );
};
