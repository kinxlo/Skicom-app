"use client";

import CustomButton from "~/components/common/common-button/common-button";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const OnboardingPage = () => {
  return (
    <Wrapper className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-6 flex justify-center">
        <BlurImage
          src={"/images/home/onboarding.png"}
          className="h-[315px] w-[324px] md:h-[400px] md:w-[400px]"
          width={324}
          height={315}
          alt="Onboarding image"
        />
      </div>

      <div className="mb-8 text-center">
        <h3 className="text-neutral-dark-2 text-[22px] font-bold md:text-[26px]">
          The No. 1 Solution for Network Services and Bill Payments
        </h3>
        <p className="mt-4 text-[16px] text-[#5C5C5C] md:text-[18px]">
          Experience unparalleled convenience with our top-rated solution for
          seamless network services and bill payments.
        </p>
      </div>

      <div className="mt-10 flex w-[337px] flex-col space-y-3">
        <CustomButton
          href={`/login`}
          size={`lg`}
          className="h-[50px] w-full rounded-full bg-primary py-3 text-lg text-white md:py-4 md:text-xl"
        >
          Login
        </CustomButton>

        <CustomButton
          size={`lg`}
          href={`/register`}
          className="h-[50px] w-full rounded-full border border-primary py-3 text-lg md:py-4 md:text-xl"
        >
          Register
        </CustomButton>
      </div>
    </Wrapper>
  );
};
