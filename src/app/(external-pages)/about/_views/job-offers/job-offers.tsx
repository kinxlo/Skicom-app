import MobileJobOpening from "~/app/(external-pages)/about/_views/job-offers/mobile-job-opening";
import { JobCard } from "~/components/common/job-card/job-card";
import { Wrapper } from "~/components/layout/wrapper";
import { jobOffers } from "~/utils/constants";

export const JobOffers = () => {
  return (
    <section className="bg-offers relative bg-primary py-7 lg:py-10">
      <Wrapper>
        <section className="">
          <div className="text-center">
            <p className="mb-1 text-[17px] text-gray-300 xl:text-[27px]">
              Join Our Team
            </p>
            <h3 className="mb-3 text-[28px] text-white xl:text-[44px]">
              Current Job Openings
            </h3>
          </div>

          <div className="my-7 hidden items-center justify-between gap-5 lg:flex">
            {jobOffers.map((item) => (
              <JobCard
                key={item.id}
                jobDescription={item.description}
                position={item.position}
                contract={item.location}
                opening={item.opening}
              />
            ))}
          </div>

          <div className="mt-4 lg:hidden">
            <MobileJobOpening offers={jobOffers} />
          </div>
        </section>
      </Wrapper>
    </section>
  );
};
