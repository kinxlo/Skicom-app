import "./about.scss";

import { Hero } from "~/app/(external-pages)/about/_views/Hero";
import { JobOffers } from "~/app/(external-pages)/about/_views/job-offers/job-offers";
import { SectionOne } from "~/app/(external-pages)/about/_views/section-one/section-one";
import { SectionTwo } from "~/app/(external-pages)/about/_views/section-two/section-two";
import { Teams } from "~/app/(external-pages)/about/_views/team/teams";
import { Testimonial } from "~/components/common/testimonial/testimonial";
import { Wrapper } from "~/components/layout/wrapper";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <JobOffers />
      <Teams />
      <Wrapper>
        <Testimonial />
      </Wrapper>
    </main>
  );
};

export default Page;
