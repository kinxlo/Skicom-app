"use client";

import check from "/public/images/data-card/Check.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuChevronRight } from "react-icons/lu";

interface cardProperties {
  price: number;
  initialPrice: number | undefined;
  plan: string;
  packages: {
    id: number;
    data: string;
  }[];
}

export const DataCard = ({
  price,
  initialPrice,
  plan,
  packages,
}: cardProperties) => {
  const pathName = usePathname();

  return (
    <div
      className={`card relative transform rounded-[1rem] bg-[url('/images/home/card-clip-bg.svg')] bg-no-repeat transition-transform duration-300 hover:scale-105 ${pathName === "/services" ? "w-[293px] p-[20px] xl:p-[19px]" : "w-[289px] p-[20px] xl:w-[400px] xl:p-[43px]"}`}
    >
      <div className="mt-3 flex items-center gap-4">
        <p
          className={`text-[36px] font-semibold text-secondary xl:text-[50px] ${pathName === "/services" ? "" : ""}`}
        >
          #{price}
        </p>
        <p className="text-[24px] font-medium text-red-600 line-through xl:text-3xl">
          {initialPrice && "#"}
          {initialPrice}
        </p>
      </div>

      <p className="text-neutral-dark-2 my-3 mt-8 text-[19px] font-bold xl:text-[27px]">
        {plan}
      </p>

      <div className="mt-5 h-[0.5px] w-full bg-gray-300"></div>

      <ul className="mt-5">
        {packages.map((item) => (
          <li key={item.id}>
            <div className="mt-[12px] flex items-center gap-2">
              <Image src={check} className="h-6 w-6" alt={""} />
              <p className="text-[11px] text-gray-500 xl:text-[16px]">
                {item.data}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button
        className={`absolute rounded-full bg-[#EFEFEF] p-2 ${pathName === "/services" ? "bottom-[19px] right-[19px]" : "bottom-[20px] right-[20px] xl:bottom-[43px] xl:right-[43px]"}`}
      >
        <LuChevronRight size={33} />
      </button>
    </div>
  );
};
