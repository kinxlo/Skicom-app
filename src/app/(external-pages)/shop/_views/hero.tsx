"use client";

import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

const heroImages = [
  "/images/shop/hero.svg",
  "/images/shop/hero.svg",
  "/images/shop/hero.svg",
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const transitionDuration = 2500;
    const intervalDuration = 10_000;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setCurrentImageIndex(
          (previousIndex) => (previousIndex + 1) % heroImages.length,
        );
        setIsTransitioning(true);
      }, transitionDuration);

      return () => clearTimeout(timeout);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-subtle relative min-h-[600px]">
      <BlurImage
        className={`duration-[2.5s] absolute inset-0 h-full w-full object-cover transition-all ease-in-out ${
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

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <Wrapper>
        <div className="relative z-10 flex min-h-[600px] flex-col justify-center text-white">
          <div className="mr-auto mt-[10rem] max-w-3xl space-y-[12px]">
            <h1 className="text-center text-[32px] font-bold leading-[44px] text-white md:text-left lg:text-[56px] lg:leading-[78px]">
              Explore Trendsetting Gadgets Under One Roof
            </h1>
            <p className="mb-8 text-lg text-gray-200">
              Discover the latest and most innovative gadgets all in one place.
              From cutting-edge technology to everyday essentials, we&apos;ve
              got everything you need.
            </p>
          </div>
          <div className="mx-auto lg:mx-0">
            <CustomButton
              href={`/`}
              className="mt-8 h-[46px] w-[220px] rounded-full"
              variant="primary"
            >
              Explore Now
            </CustomButton>
          </div>

          {/* Carousel indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentImageIndex === index ? "w-6 bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
