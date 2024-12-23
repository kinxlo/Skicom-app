import { JobCard } from "~/components/common/job-card/job-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

interface cardProperties {
  id: number;
  position: string;
  location: string;
  opening: string;
  description: {
    id: number;
    descriptions: string;
  }[];
}

interface MobileOffersProperties {
  offers: cardProperties[];
}

export const MobileJobOpening = ({ offers }: MobileOffersProperties) => {
  return (
    <section>
      <Carousel className="z-10 w-full">
        <CarouselContent>
          {offers.map((item, index) => (
            <CarouselItem key={index} className="basis-1/1">
              <JobCard
                position={item.position}
                contract={item.location}
                opening={item.opening}
                jobDescription={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default MobileJobOpening;
