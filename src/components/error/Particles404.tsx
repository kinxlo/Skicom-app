import React, { useEffect } from "react";

import { handleMouseEnter } from "~/lib/utils";
import { particlesCanvas } from "./particles";
import { useWindowWidth } from "~/hooks/window-width";

const Particles404 = () => {
  const canvaReference = React.useRef<HTMLCanvasElement>(null);
  const { winWidth } = useWindowWidth();

  useEffect(() => {
    setTimeout(() => {
      if (!canvaReference.current) return;
      particlesCanvas(canvaReference.current);
    }, 500);
  }, [winWidth]);
  return (
    <div className="h-full w-full overflow-hidden">
      <canvas
        ref={canvaReference}
        id="particles_404"
        className="absolute left-0 top-0 h-[100dvh] w-full"
      />
      <header className="absolute left-0 top-0 w-full bg-white px-10 py-8 font-medium uppercase text-primary md:text-3xl">
        <h1
          className=""
          // @ts-expect-error Hacking the type
          onMouseEnter={handleMouseEnter}
          data-value="SKICOM INC."
        >
          SkiCom Inc.
        </h1>
      </header>
      <div className="absolute bottom-10 left-10 font-sans text-2xl uppercase">
        <p
          className="font-bold text-primary md:text-6xl lg:text-9xl xl:text-[10rem]"
          // @ts-expect-error Hacking the type
          onMouseEnter={handleMouseEnter}
          data-value="404!!"
        >
          404
        </p>
        <p className="font-medium md:text-3xl lg:text-4xl">
          This is not the page <br /> you are looking for
        </p>
      </div>
    </div>
  );
};

export default Particles404;
