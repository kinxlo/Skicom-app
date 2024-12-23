import { DataCard } from "~/components/common/data-card/data-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { MobileOffersProperties } from "~/types";

export const MobileOffers = ({ offers }: MobileOffersProperties) => {
  return (
    <main>
      <Carousel className="z-10 w-full">
        <CarouselContent>
          {offers.map((item, index) => (
            <CarouselItem key={index} className="basis-1/1">
              <div className="">
                <DataCard
                  price={item.price}
                  initialPrice={item.initialPrice}
                  plan={item.plan}
                  packages={item.packages}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
};
