"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

const heroImages = [
  "/images/home/hero.png",
  "/images/home/hero-2.png",
  "/images/home/hero-3.png",
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const transitionDuration = 2500;
    const intervalDuration = 10_000;

    const interval = setInterval(() => {
      setIsTransitioning(false); // Start the fade and blur out effect
      const timeout = setTimeout(() => {
        setCurrentImageIndex(
          (previousIndex) => (previousIndex + 1) % heroImages.length,
        );
        setIsTransitioning(true); // Start the fade and blur in effect
      }, transitionDuration); // Duration of blur and fade out before switching image

      return () => clearTimeout(timeout);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-subtle">
      <Wrapper className="relative flex h-[430px] items-center justify-center pt-20 lg:h-[730px] lg:justify-start xl:pt-14">
        <div className="relative z-10 mx-auto w-[730px] xl:mx-0">
          <h1 className="text-neutral-dark-1 text-center text-[32px] font-bold leading-[44px] lg:text-[56px] lg:leading-[78px] xl:text-left">
            Get Connected With Us & Stay Connected
          </h1>
          <div className="flex w-full justify-center xl:justify-start">
            <CustomButton
              href={`/register`}
              className="mt-8 h-[46px] w-[220px] rounded-full"
              variant="primary"
            >
              Sign Up With Skicom
            </CustomButton>
          </div>

          <Image
            width={50}
            height={50}
            src={"/images/home/wifi.png"}
            alt="hero-wifi"
            className="absolute left-[0] top-[-3rem] lg:left-[-2rem] lg:top-[-2rem]"
          />
        </div>
        <Link href={"/contact"} className="lg:block">
          <div className="hidden xl:block">
            <BlurImage
              className="absolute bottom-[30px] right-0 z-10"
              width={170}
              height={50}
              src={`/images/home/help.svg`}
              alt="help"
            />
          </div>
          <div className="xl:hidden">
            <BlurImage
              className="absolute bottom-[-30px] right-[20px] z-10"
              width={124}
              height={50}
              src={`/images/home/help.svg`}
              alt="help"
            />
          </div>
        </Link>
        <BlurImage
          className={`duration-[2.5s] absolute bottom-0 right-0 hidden transition-all ease-in-out xl:block ${
            isTransitioning ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
          style={{
            transition: "opacity 2.5s ease-in-out, filter 2.5s ease-in-out",
          }}
          width={1440}
          height={800}
          src={heroImages[currentImageIndex]}
          alt="hero-image"
        />
      </Wrapper>
    </section>
  );
};
