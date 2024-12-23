import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const SectionTwo = () => {
  return (
    <section className="relative bg-high-grey-I bg-[url('/images/home/offer.svg')] bg-right-top bg-no-repeat py-5 xl:py-[85px]">
      <Wrapper>
        <div className="text-center">
          <p className="text-neutral-dark-2 mx-auto w-fit text-[17px] font-semibold xl:text-[27px]">
            What We Do At SKICOM
          </p>
          <h2 className="text-neutral-dark-1 mx-auto my-[25px] w-fit text-[28px] font-semibold lg:text-[44px]">
            We Are Offering The Best Services
          </h2>
          <p className="mx-auto max-w-[700px] text-[13px] font-medium lg:text-xl">
            At Skicom, we’re dedicated to providing innovative telecommunication
            solutions that keep you connected, informed, and entertained. Our
            mission is to make your digital life simpler and more accessible,
            whether at home, work, or on the go.
          </p>
        </div>

        <section className="items-center justify-between md:grid md:grid-cols-2 xl:mt-20 xl:flex">
          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
          </div>

          <div className="hidden xl:block">
            <BlurImage
              width={392}
              height={427}
              src="/images/home/center-offer.svg"
              alt="center-offer-img"
            />
          </div>

          <div className="mt-5 flex flex-col gap-7 md:mt-0">
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
          </div>
        </section>
      </Wrapper>
    </section>
  );
};
