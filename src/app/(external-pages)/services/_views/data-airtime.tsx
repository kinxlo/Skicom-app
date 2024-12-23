"use client";

import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { DataCard } from "~/components/common/data-card/data-card";
import { Wrapper } from "~/components/layout/wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { dataOffers } from "~/utils/constants";

export const DataAirtime = () => {
  const [serviceType, setServiceType] = useState("data");

  const choosenType = dataOffers.filter((p) => p.type === serviceType);

  return (
    <main className="bg-offers relative bg-primary pb-4 lg:block lg:py-[96px]">
      <Wrapper>
        <section className="">
          <div className="pt-[20px] text-center xl:pt-0">
            <h4 className="text-[17px] font-semibold text-white xl:text-[27px]">
              Our Airtime & Data Plans
            </h4>
            <p className="my-2 text-[28px] text-white xl:text-[44px]">
              Choose The Perfect Plan For You
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-2 flex max-w-[400px] rounded-full border border-black">
            <CustomButton
              className={`w-full rounded-full px-10 ${serviceType === "data" ? "text-neutral-dark-1 bg-white duration-300" : "bg-transparent px-10 text-white duration-300"} h-[50px]`}
              onClick={() => setServiceType("data")}
            >
              Data
            </CustomButton>
            <CustomButton
              className={`w-full rounded-full px-10 ${serviceType === "airtime" ? "text-neutral-dark-1 bg-white duration-300" : "bg-transparent px-10 text-white duration-300"} h-[50px]`}
              onClick={() => setServiceType("airtime")}
            >
              Airtime
            </CustomButton>
          </div>

          <div className="mt-16 hidden items-center gap-[74px] lg:grid-cols-3 xl:grid xl:grid-cols-4">
            {choosenType.map((item, index) => (
              <DataCard
                key={index}
                price={item.price}
                plan={item.plan}
                packages={item.packages}
                initialPrice={undefined}
              />
            ))}
          </div>

          <div className="mt-[30px] xl:hidden">
            <Carousel className="z-10 w-full">
              <CarouselContent>
                {choosenType.map((item, index) => (
                  <CarouselItem key={index} className="basis-1/1">
                    <div className="">
                      <DataCard
                        price={item.price}
                        initialPrice={undefined}
                        plan={item.plan}
                        packages={item.packages}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          {/* <div className="mt-5 text-center text-sm text-white">
            Pagination here
          </div> */}
        </section>
      </Wrapper>
    </main>
  );
};
