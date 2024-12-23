import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";

export const Hero = () => {
  return (
    <div className="flex h-[350px] w-full items-center justify-center bg-[url('/images/about/hero.svg')] bg-center bg-no-repeat lg:h-[510px] xl:bg-cover">
      <div className="mt-[100px] lg:mt-0">
        <h3 className="text-center text-[32px] font-semibold text-white lg:text-[56px]">
          About Us
        </h3>
        <BreadCrumb />
      </div>
    </div>
  );
};
