/* eslint-disable react/no-unescaped-entities */

import teamImage from "/public/images/customer-care/team-image.png";

import { Accordions } from "~/components/common/accordion/accordion-component";
import { ArticlesCard } from "~/components/common/articles-card/articles-card";
import CustomButton from "~/components/common/common-button/common-button";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { articles } from "~/utils/constants";

const Faq = () => {
  return (
    <main>
      <div className="flex h-[350px] w-full items-center justify-center bg-[url('/images/contact/hero.svg')] bg-center bg-no-repeat lg:h-[510px] xl:bg-cover">
        <div className="mt-[100px] lg:mt-0">
          <h3 className="text-center text-[32px] font-semibold text-white lg:text-[56px]">
            Customer Care
          </h3>

          <BreadCrumb />
        </div>
      </div>

      <section className="bg-[#F6F6F6]">
        <section className="mx-auto py-7 2xl:container lg:py-14">
          <div>
            <Wrapper className="text-center">
              <h3 className="text-neutral-dark-1 text-[28px] font-semibold lg:text-[44px]">
                Frequently Asked Questions
              </h3>
              <p className="mt-3 text-[17px] lg:mt-2 xl:text-[20px]">
                Ask everything you need to know about our products and services.
              </p>
            </Wrapper>

            <div className="mt-[39px]">
              <Accordions />
            </div>
          </div>

          <Wrapper className="mt-7 min-h-[354px] rounded-lg bg-[#fff] py-[40px] text-center lg:mt-14">
            <BlurImage
              src={teamImage}
              alt="team-image"
              className="mx-auto mb-2 h-[60px] w-[138px]"
            />
            <h4 className="text-[28px] font-bold text-[#090914] xl:text-[31px]">
              Still have questions?
            </h4>
            <p className="mx-auto mb-[31px] mt-[16px] text-[17px] leading-[32px] text-[#52525B] lg:max-w-2xl lg:text-[25px]">
              Can't find the answer you're looking for? Try out our AI automated
              live chat support.
            </p>
            <CustomButton
              variant="primary"
              className="mt-5 h-[50px] w-[285px] rounded-full px-14 text-lg"
            >
              Meet Dave
            </CustomButton>
          </Wrapper>

          <Wrapper className="mt-10">
            <div className="items-center justify-between lg:flex">
              <div>
                <h4 className="text-neutral-dark-1 text-[28px] font-semibold lg:text-[44px]">
                  Learn From Our Articles
                </h4>
                <p className="mt-2 text-center text-[17px] lg:text-start xl:text-[20px]">
                  Read everything you need to know about our products and
                  services.
                </p>
              </div>

              <div className="text-center">
                <CustomButton
                  className="mt-4 h-[40px] w-[170px] rounded-full border border-primary bg-transparent text-sm text-primary lg:mt-0"
                  href="/blog"
                >
                  View All Articles
                </CustomButton>
              </div>
            </div>

            <div className="mt-8 items-center justify-between space-y-5 lg:flex lg:space-y-0">
              {articles.slice(0, 2).map((a) => (
                <ArticlesCard
                  key={a.id}
                  articleImage={a.articleImage}
                  heading={a.heading}
                  dateSent={a.dateSent}
                  subHeading={a.subHeading}
                />
              ))}
            </div>
          </Wrapper>
        </section>
      </section>
    </main>
  );
};

export default Faq;
