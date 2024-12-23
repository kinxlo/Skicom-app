import check from "/public/images/data-card/Check.png";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";

import CustomButton from "../common-button/common-button";

interface jobProperties {
  jobDescription: {
    id: number;
    descriptions: string;
  }[];

  position: string;
  contract: string;
  opening: string;
}

export const JobCard = ({
  jobDescription,
  position,
  contract,
  opening,
}: jobProperties) => {
  return (
    <main className="my-3 min-h-[460px] max-w-[263px] transform rounded-[27px] bg-white p-[18px] transition-transform duration-300 hover:scale-105 lg:max-w-[400px] lg:p-[28px]">
      <h3 className="text-neutral-dark-1 text-[19px] font-medium xl:text-[30px]">
        {position}
      </h3>

      <p className="text-[13px] text-destructive xl:text-[20px]">
        {contract}, {opening}
      </p>

      <p className="text-neutral-dark-2 mt-4 text-[13px] font-semibold xl:text-[20px]">
        Description
      </p>

      <div className="mt-1 h-[0.5px] w-full bg-gray-200"></div>

      <ul className="mt-5 space-y-4">
        {jobDescription.map((item) => (
          <li key={item.id}>
            <div className="flex gap-2 lg:pr-[25px]">
              <Image
                src={check}
                className="h-[15px] w-[15px] xl:h-[24px] xl:w-[24px]"
                alt={"check"}
              />
              <p className="text-[12px] text-gray-500 xl:text-[16px]">
                {item.descriptions}
              </p>
            </div>
          </li>
        ))}
        <CustomButton
          variant="primary"
          className="h-12 w-full rounded-full text-[16px]"
          href={`/jobs`}
        >
          Apply Now
          <span>
            <LuChevronRight size={16} />
          </span>
        </CustomButton>
      </ul>
    </main>
  );
};
