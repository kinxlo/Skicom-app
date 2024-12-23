import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LuLoader } from "react-icons/lu";

import CustomButton from "~/components/common/common-button/common-button";
import { BlurImage } from "../miscellaneous/blur-image";

export const ProfileCreated = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    startTransition(() => {
      router.push(`/login`);
    });
  };

  return (
    <section className="flex flex-col space-y-[20rem]">
      <section>
        <BlurImage
          className="mx-auto"
          width={143}
          height={143}
          src="/images/checked.svg"
          alt="checked"
        />
        <div className="text-center sm:mb-[5rem]">
          <h2 className="">Profile Created</h2>
          <p className="text-high-grey-II">
            Congrats! Your profile has been created
          </p>
        </div>
      </section>
      <section>
        <CustomButton
          onClick={handleClick}
          className="mt-[28px] h-[50px] w-full rounded-full"
          size="lg"
          variant="primary"
          isDisabled={isPending}
        >
          {isPending ? (
            <LuLoader size={16} className="animate-spin text-white" />
          ) : (
            "Next"
          )}
        </CustomButton>
      </section>
    </section>
  );
};
