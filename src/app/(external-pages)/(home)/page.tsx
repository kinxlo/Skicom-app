"use client";

import { useEffect, useState } from "react";

import "./home.scss";

import { Hero } from "./_views/hero";
import { SectionFour } from "./_views/section-four";
import { SectionOne } from "./_views/section-one";
import { SectionThree } from "./_views/section-three";
import { SectionTwo } from "./_views/section-two";
import { OnboardingPage } from "./onboarding";

function Page() {
  const [isPwa, setIsPwa] = useState(false);

  useEffect(() => {
    // Check if the app is running in standalone mode
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    setIsPwa(isStandalone);
  }, []);

  return (
    <section>
      {isPwa ? (
        <OnboardingPage />
      ) : (
        <>
          <Hero />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </>
      )}
    </section>
  );
}

export default Page;
