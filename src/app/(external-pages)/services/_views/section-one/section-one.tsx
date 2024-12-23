import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const SectionOne = () => {
  return (
    <section className="relative bg-white">
      <Wrapper>
        <div className="mx-auto py-10 lg:mt-[30px]">
          <div className="mx-auto max-w-[1000px] text-center">
            <h3 className="text-neutral-dark-2 text-[17px] font-semibold xl:text-[27px]">
              Our Services
            </h3>
            <p className="my-2 text-[28px] font-semibold leading-[44px] text-secondary lg:text-[44px] xl:leading-[39px]">
              Experience Superior Network Services
            </p>
            <p className="mx-auto max-w-[792px] text-[17px] leading-[25px] xl:text-[20px] xl:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam.
            </p>
          </div>

          <section className="mt-8 items-center justify-between space-y-10 lg:flex lg:space-y-0">
            <div className="relative text-center">
              <BlurImage
                src="/images/services/speed.svg"
                width={100}
                height={100}
                alt="speed-services-img"
                className="animate-sway relative mx-auto mb-4 h-48 w-48 rounded-full"
              />
              <h4 className="text-neutral-dark-1 mb-1 text-[24px] xl:text-[28px]">
                Speed
              </h4>
              <p className="mx-auto max-w-[340px] text-[17px] xl:text-[20px]">
                Our network offers high-speed internet with various options to
                meet your needs.
              </p>
            </div>

            <div className="relative text-center">
              <BlurImage
                src="/images/services/coverage.svg"
                alt="coverage-services-img"
                width={100}
                height={100}
                className="animate-sway relative mx-auto mb-4 h-48 w-48 rounded-full"
              />
              <h4 className="text-neutral-dark-1 mb-1 text-[24px] xl:text-[28px]">
                Coverage
              </h4>
              <p className="mx-auto max-w-[340px] text-[17px] xl:text-[20px]">
                We provide extensive coverage across the country, ensuring you
                stay connected wherever you go.
              </p>
            </div>

            <div className="relative text-center">
              <BlurImage
                src="/images/services/reliability.svg"
                width={100}
                height={100}
                alt="reliability-services-img"
                className="animate-sway relative mx-auto mb-4 h-48 w-48 rounded-full"
              />
              <h4 className="text-neutral-dark-1 mb-1 text-[24px] xl:text-[28px]">
                Reliability
              </h4>
              <p className="mx-auto max-w-[340px] text-[17px] xl:text-[20px]">
                Our network is built with the latest technology to offer a
                stable and reliable connection at all times.
              </p>
            </div>
          </section>
        </div>
      </Wrapper>

      <div className="absolute bottom-5 right-0 hidden lg:block">
        {/* <BlurImage src={network} alt="network-design-left" /> */}
      </div>
    </section>
  );
};
