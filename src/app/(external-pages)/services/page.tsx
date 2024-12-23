import { Wrapper } from "~/components/layout/wrapper";

import "./services.scss";

import { Testimonial } from "~/components/common/testimonial/testimonial";
import { Coverage } from "./_views/coverage";
import { DataAirtime } from "./_views/data-airtime";
import { Hero } from "./_views/Hero";
import { SectionOne } from "./_views/section-one/section-one";

const Page = () => {
  return (
    <main>
      <Hero />
      <SectionOne />
      <Coverage />
      <DataAirtime />
      <Wrapper>
        <Testimonial />
      </Wrapper>
    </main>
  );
};

export default Page;
