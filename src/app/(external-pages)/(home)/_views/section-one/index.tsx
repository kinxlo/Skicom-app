import { LuBanknote, LuHeadphones } from "react-icons/lu";

import { Wrapper } from "~/components/layout/wrapper";

export const SectionOne = () => {
  return (
    <Wrapper className="py-[87px] text-center">
      <p className="text-neutral-dark-2 mx-auto w-fit font-semibold xl:text-[27px]">
        Welcome to SKICOM
      </p>

      <h2 className="text-neutral-dark-1 mx-auto my-[25px] w-fit text-[28px] font-semibold lg:max-w-full lg:text-[44px]">
        A Single Sign-in To Your Digital World
      </h2>
      <p className="mx-auto max-w-[700px] text-[13px] font-medium lg:text-xl">
        Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut venenatis
        feugiat lacus. Elit tellus morbi quis a aliquam mi pretium nam donec.
        Duis posuere venenatis et amet sed.
      </p>

      <section className="mt-10 items-center justify-center text-start lg:flex">
        <div className="rate flex h-[300px] w-full flex-col rounded-bl-xl rounded-tl-xl px-7">
          <LuBanknote color="#007CC3" className="mt-10" size={45} />

          <div>
            <h5 className="text-neutral-dark-2 my-2 text-[25px] font-semibold xl:text-[32px]">
              Affordable Rates
            </h5>
            <p className="mt-4 max-w-[400px] xl:text-[20px]">
              Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
              feugiat lacus.
            </p>
          </div>
        </div>

        <div className="support flex h-[300px] w-full flex-col px-7">
          <LuHeadphones color="white" className="mt-10" size={45} />
          <div>
            <h5 className="my-2 text-[25px] font-semibold text-white xl:text-[32px]">
              24/7 Support
            </h5>
            <p className="mt-4 max-w-[400px] text-white xl:text-[20px]">
              Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
              feugiat lacus.{" "}
            </p>
          </div>
        </div>

        <div className="payment flex h-[300px] w-full flex-col rounded-br-xl rounded-tr-xl px-7">
          <LuBanknote color="#007CC3" className="mx-7 mt-10" size={45} />
          <div>
            <h5 className="text-neutral-dark-2 my-2 text-[25px] font-semibold xl:text-[32px]">
              Secure Payments
            </h5>
            <p className="mt-4 max-w-[400px] xl:text-[20px]">
              Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
              feugiat lacus.{" "}
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
