import left1 from "/public/images/news-letter/left1.svg";
import right1 from "/public/images/news-letter/right1.svg";
import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/ui/input";

export const NewsLetter = () => {
  return (
    <main className="relative flex h-[258px] items-center justify-center rounded-xl bg-primary">
      <section className="absolute left-0 top-0">
        <Image
          src={left1}
          alt={""}
          className="w-[50px] md:w-[80px] xl:w-[100px]"
        />
      </section>

      <section className="mb-4">
        <p className="mb-4 text-center text-[28px] font-medium text-white lg:text-[44px]">
          Subscribe to our newsletter
        </p>
        <div className="mt-3 lg:mt-7">
          <form
            action=""
            className="items-center justify-center gap-3 px-4 xl:flex"
          >
            <Input
              type="email"
              placeholder="Email Address"
              className="max-w-full rounded-full outline-none xl:w-[456px]"
            />

            <div className="text-center">
              <CustomButton
                className="mt-3 w-[178px] rounded-full bg-secondary text-background xl:mt-0"
                size="lg"
              >
                Subscribe
              </CustomButton>
            </div>
          </form>
        </div>
      </section>

      <section className="absolute bottom-0 right-0">
        <Image
          src={right1}
          alt={""}
          className="w-[50px] md:w-[80px] xl:w-[100px]"
        />
      </section>
    </main>
  );
};
