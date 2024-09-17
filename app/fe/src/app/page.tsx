"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useIsMobile } from "@/hook/useMediaQuery";
import { IconLogo } from "@/component/common/icons";
import Footer from "@/component/footer";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    checkResize();
  }, [isMobile]);

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <>
      <section
        className={`${
          mobile ? "" : "grid grid-cols-2"
        } mx-auto h-full w-screen select-none overflow-x-clip`}
        style={{ gridTemplateColumns: `1fr minmax(400px, 500px)` }}
      >
        {!mobile && (
          <div
            className="flex flex-col items-center justify-center w-full h-full bg-cover bg-center bg-blend-lighten bg-white/40"
            style={{ backgroundImage: `url(/images/landing_profile.jpg)` }}
          ></div>
        )}
        {/* 1. 프로젝트 소개  */}
        <div
          className={`${
            mobile ? "bg-center bg-cover bg-blend-lighten bg-white/60" : ""
          } mx-auto flex h-screen flex-col items-center justify-center min-w-[300px]`}
          style={{
            backgroundImage: mobile ? `url('/images/landing_profile.jpg')` : "",
          }}
        >
          <div className="z-20 flex w-full flex-col items-center justify-center space-y-8">
            {/* 소개 텍스트 */}
            <div
              className={`${
                mobile ? "pt-48" : ""
              } flex w-full flex-col items-center justify-center gap-2`}
            >
              {/* <IconLogo width={mobile ? 100 : 120} fill="#000"></IconLogo> */}
              <p className="font-bold text-4xl">JIUK KIM</p>
              <p
                className={`text-center font-bold ${
                  mobile ? "text-md" : "text-lg"
                }`}
              >
                Backend Developer<br></br>with a cup of Artificial Intelligence
              </p>
            </div>
            {/*  */}
            <div className="flex w-full flex-col items-center justify-center space-y-4">
              <div className="flex flex-row space-x-2">
                <Button
                  className={`font-bold border-black hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="information"
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/document/d/1QAfMea_EV_E7f4dP8K8SKzbpD_mjp3GL/edit?usp=sharing&ouid=115939553945175036835&rtpof=true&sd=true"
                    );
                  }}
                >
                  PDF Resume
                </Button>
                <Button
                  className={`font-bold border-black hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="product"
                  onClick={() => {
                    router.push("/resume");
                  }}
                >
                  WEB Resume
                </Button>
              </div>
              <Footer isFixed title={""} subtitle={""}></Footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
