import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";

export const SectionTwo = () => {
  return (
    <section className="bg-white bg-[url('/images/about/about-right.svg')] bg-[right_bottom] bg-no-repeat">
      <Wrapper>
        <div className="flex flex-col-reverse items-center justify-between gap-[76px] lg:flex-row">
          <div className="my-[32px] flex-1 xl:my-0">
            <h3 className="text-neutral-dark-2 text-[17px] xl:text-[27px]">
              Our Mission & Vision
            </h3>
            <p className="text-neutral-dark-1 my-2 text-[28px] xl:text-[44px]">
              Transforming Connectivity, Inspiring the Future
            </p>
            <p className="mb-[20px] text-[17px] leading-[30px] xl:text-[20px]">
              At Skicom, our mission is to revolutionize network services and
              connectivity through innovative, reliable, and accessible
              solutions. We strive to enhance your digital journey with
              cutting-edge technology and exceptional service.
            </p>
            <p className="text-[17px] leading-[30px] xl:text-[20px]">
              Our vision is to lead the future of digital connectivity by
              setting new standards in network services and data access. We aim
              to create a world where everyone is seamlessly connected,
              empowered by limitless possibilities and innovative solutions.
            </p>
          </div>
          <div className="mt-[35px] flex-1 xl:mt-0">
            <BlurImage
              width={323}
              height={453}
              src="/images/about/vision.svg"
              alt="about-hero-img"
              className="w-full"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
