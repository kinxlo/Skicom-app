import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import { Wrapper } from "~/components/layout/wrapper";
import { Input } from "~/components/ui/input";

export const Coverage = () => {
  return (
    <main className="bg-mid-grey-I bg-[url('/images/services/covered.svg')] bg-[left_bottom] bg-no-repeat">
      <Wrapper>
        <section className="mx-auto w-11/12 pt-10 text-center 2xl:container">
          <h3 className="text-neutral-dark-2 text-[17px] font-semibold xl:text-[27px]">
            Check Our Network Coverage
          </h3>
          <p className="my-2 text-[28px] font-semibold text-secondary lg:text-[44px]">
            See Where You’re Covered
          </p>

          <div className="relative mx-auto mb-[49px] mt-4 lg:w-[800px]">
            <form className="">
              <Input
                type="text"
                className="mx-auto h-[50px] rounded-full bg-[#FFFFFF] outline-none placeholder:text-sm lg:w-[800px]"
                placeholder="Search for our coverage locations"
              />

              <CustomButton
                variant="primary"
                className="right-0 top-0 mt-3 h-[33px] w-[138px] rounded-full lg:absolute lg:mt-0 lg:h-[50px]"
              >
                Search
              </CustomButton>
            </form>
          </div>
        </section>
        <section className="mt-5 pb-10">
          <Image
            src="/images/services/map.svg"
            width={1240}
            height={498}
            alt="map"
            className="mx-auto h-64 w-full max-w-full object-cover lg:h-[500px]"
          />
        </section>
      </Wrapper>
    </main>
  );
};
