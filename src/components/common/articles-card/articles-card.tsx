import { StaticImageData } from "next/image";

import { BlurImage } from "~/components/miscellaneous/blur-image";

interface articleCard {
  articleImage: StaticImageData;
  heading: string;
  dateSent: string;
  subHeading: string;
  // id: number;
}

export const ArticlesCard = ({
  articleImage,
  heading,
  subHeading,
  dateSent,
}: articleCard) => {
  return (
    <main className="w-fit rounded-xl border bg-[#ffff] p-5 px-4 lg:px-7">
      <BlurImage
        src={articleImage}
        className="h-[180px] w-[550px] rounded-md object-cover lg:h-[250px] lg:rounded-lg"
        alt=""
      />

      <div className="my-5 flex items-center justify-between">
        <h1 className="whitespace-nowrap text-[14px] font-bold text-[#090914] xl:text-[24px]">
          {heading}
        </h1>

        <span className="whitespace-nowrap text-[12px] text-gray-600 xl:mr-14 xl:text-[20px] 2xl:mr-7">
          {dateSent}
        </span>
      </div>

      <p className="max-w-[550px] text-[12px] text-gray-600 xl:text-[20px]">
        {subHeading}
      </p>
    </main>
  );
};
