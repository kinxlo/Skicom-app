import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const SectionOne = () => {
  return (
    <section className="relative bg-high-grey-I">
      <Wrapper>
        <div className="items-center justify-between gap-[66px] py-7 lg:flex lg:py-[98px]">
          <BlurImage
            src="/images/about/leading.svg"
            width={658}
            height={729}
            alt="about-hero-img"
            className="z-10 lg:h-[650px] lg:w-[600px] lg:object-contain"
          />

          <div className="mt-7 lg:mt-0">
            <h3 className="text-neutral-dark-2 text-[17px] font-semibold xl:text-[27px]">
              About SKICOM
            </h3>
            <p className="text-neutral-dark-1 relative my-2 text-[28px] font-semibold leading-[52px] lg:text-[44px] xl:leading-[62px]">
              New Leading Telecoms Provider
              <span className="border-neutral-dark-2 text-neutral-dark-2 absolute ms-3 rounded-full border px-10 py-2.5 text-sm xl:mt-3">
                Established 2020.
              </span>
            </p>
            <p className="text-[17px] leading-[25px] xl:text-[20px] xl:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
              pretium nam donec. Duis posuere venenatis et amet sed.{" "}
            </p>

            <div className="mt-[24px] flex gap-2">
              <BlurImage
                width={90}
                height={88}
                src="/images/home/wifi-bold.svg"
                alt="offer-img"
                className="h-[90px] w-24 rounded-lg"
              />

              <div>
                <h5 className="text-neutral-dark-2 text-[20px] font-medium xl:text-[22px]">
                  Swift Network
                </h5>
                <p className="mt-2 max-w-[270px] text-[17px]">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>

            <div className="mt-[24px] flex gap-2">
              <div className="flex gap-2">
                <BlurImage
                  width={90}
                  height={88}
                  src="/images/about/connection.svg"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-neutral-dark-2 text-[20px] font-medium xl:text-[22px]">
                    Fast Connection
                  </h5>
                  <p className="mt-2 max-w-[270px] text-[17px]">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <BlurImage
        src="/images/about/about-down.svg"
        width={500}
        height={500}
        alt="about-hero-img"
        className="absolute bottom-0 left-0 z-0 hidden h-[500px] w-[700px] object-cover lg:block"
      />
    </section>
  );
};
