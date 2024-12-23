import { BlurImage } from "~/components/miscellaneous/blur-image";

export const Teams = () => {
  return (
    <section className="mx-auto mt-3">
      <div className="pt-14 text-center">
        <h4 className="mb-2 text-[28px] text-primary xl:text-[44px]">
          Meet Our Team
        </h4>
        <p className="mx-auto max-w-lg text-[14px] leading-[23px] text-[#292929] xl:text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut venenatis
          feugiat lacus. Elit tellus morbi quis a aliquam mi pretium nam donec.
          Duis posuere venenatis et amet sed.
        </p>

        <div className="relative mt-[56px]">
          <BlurImage
            src="/images/about/team.svg"
            width={100}
            height={363}
            alt="teams-img"
            className="mt-20 h-fit w-full object-cover"
          />
          <BlurImage
            src="/images/about/role.png"
            width={185}
            height={90}
            alt="teams-img"
            className="absolute -top-14 left-1/2 h-[70px] w-[140px] -translate-x-1/2 transform"
          />
        </div>
      </div>
    </section>
  );
};
