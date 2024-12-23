import CustomButton from "~/components/common/common-button/common-button";
import { DataCard } from "~/components/common/data-card/data-card";
import { Wrapper } from "~/components/layout/wrapper";
import { offers } from "~/utils/constants";
import { MobileOffers } from "./mobile-offers";

export const SectionThree = () => {
  return (
    <section className="bg-offers relative bg-primary py-7 lg:py-[90px]">
      <Wrapper>
        <section>
          <div className="mb-[51px] flex flex-col items-center justify-between md:flex-row">
            <div className="text-center xl:text-left">
              <p className="mb-1 text-[17px] text-gray-300 lg:text-[24px]">
                Best Of SKICOM
              </p>
              <h3 className="mb-3 text-[28px] text-white lg:text-[44px]">
                Promotions And Offers
              </h3>
            </div>

            <div>
              <CustomButton
                href={`/services`}
                className="h-[44px] w-[180px] rounded-full bg-white text-primary"
              >
                View All Plans
              </CustomButton>
            </div>
          </div>

          <div className="hidden flex-wrap items-center justify-between lg:flex">
            {offers.map((item) => (
              <DataCard
                key={item.id}
                price={item.price}
                initialPrice={item.initialPrice}
                plan={item.plan}
                packages={item.packages}
              />
            ))}
          </div>

          <div className="mt-4 lg:hidden">
            <MobileOffers offers={offers} />
          </div>
        </section>
      </Wrapper>
    </section>
  );
};
