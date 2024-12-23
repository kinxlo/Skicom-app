/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRouter } from "next/navigation";
import { LuChevronLeft, LuFileEdit, LuTrash } from "react-icons/lu";

import { Modal } from "~/app/(dashboard-pages)/_components/modals/content-modal";
import { Delete } from "~/app/(dashboard-pages)/_components/modals/content/delete";
import CustomButton from "~/components/common/common-button/common-button";
import { BlurImage } from "~/components/miscellaneous/blur-image";

const Page = ({ params }: { params: { slug: string } }) => {
  //   const { slug } = params;
  const router = useRouter();
  return (
    <>
      <section className="mb-[51px]">
        <section className="flex flex-col items-start justify-between gap-[10px] sm:flex-row lg:items-center">
          <CustomButton
            onClick={() => router.back()}
            variant="link"
            isLeftIconVisible
            icon={<LuChevronLeft />}
          >
            Back
          </CustomButton>
          <div className="item-center flex justify-between space-x-[30px]">
            <CustomButton
              size="lg"
              className="w-full rounded-full shadow-none lg:w-fit"
              variant="primary"
              isLeftIconVisible
              icon={<LuFileEdit />}
            >
              <span className="hidden sm:inline">Edit Article</span>
            </CustomButton>
            <Modal
              width="max-w-lg"
              title={""}
              triggerStructure={
                <CustomButton
                  size="lg"
                  className="w-full rounded-full border-mid-danger text-mid-danger shadow-none lg:w-fit"
                  isLeftIconVisible
                  icon={<LuTrash />}
                  variant="outline"
                >
                  <span className="hidden sm:inline">Delete Article</span>
                </CustomButton>
              }
            >
              <Delete
                title={"Delete Article"}
                desc={"Are you sure you want to delete this article ?"}
              />
            </Modal>
          </div>
        </section>
      </section>
      <section className="mx-auto max-w-[852px]">
        <div>
          <BlurImage
            width={842}
            height={271}
            src="/images/article-card/article.png"
            alt="preview-img"
            className="w-full"
          />
        </div>
        <article>
          <div className="my-[26px] space-y-[21px]">
            <h1 className="text-[24px] text-high-grey-III lg:text-[34px]">
              Getting Started on SKICOM
            </h1>
            <p className="text-[14px] lg:text-[20px]">3 Days Ago</p>
          </div>
          <div className="mb-[30px] space-y-[20px] text-justify leading-[30px]">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution. It is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution. it has a more-or-less normal
              distribution. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout.
            </p>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution. It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution. It is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};
export default Page;
