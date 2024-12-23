import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";

export const Delete = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-[20px] text-center">
      <div>
        <Image
          src="/icons/dashboard/error.png"
          width={102}
          height={102}
          alt="error"
        />
      </div>
      <div>
        <h3 className="text-[20px] text-high-grey-III lg:text-[26px]">
          {title}
        </h3>
        <p className="text-[14px] lg:text-[16px]">{desc}</p>
      </div>
      {/* CTA */}
      <section className="mt-[30px] flex w-full items-center justify-center gap-[20px]">
        <CustomButton
          size="lg"
          className="w-full rounded-full border-mid-danger text-mid-danger"
          variant="outline"
        >
          Cancel
        </CustomButton>
        <CustomButton
          size="lg"
          className="w-full rounded-full"
          variant="primary"
        >
          Delete
        </CustomButton>
      </section>
    </section>
  );
};
