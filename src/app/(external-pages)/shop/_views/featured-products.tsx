import { ArrowRight } from "lucide-react";

import CustomButton from "~/components/common/common-button/common-button";
import { Wrapper } from "~/components/layout/wrapper";
import { Badge } from "~/components/ui/badge";

export const FeaturedProducts = () => {
  return (
    <Wrapper className="mx-auto mb-[98px] grid gap-4 px-4 md:grid-cols-2">
      {/* Large Earbuds Banner */}

      <div className="overflow-hidden rounded-2xl bg-low-blue bg-[url('/images/shop/fi-1.svg')] bg-cover bg-center bg-no-repeat sm:min-h-[400px]">
        <div className="mt-[33px] transform space-y-4 text-center">
          <h1 className="font-semibold">Minimal Earbuds</h1>
          <CustomButton
            isRightIconVisible
            icon={<ArrowRight />}
            variant="primary"
            size="lg"
            className="rounded-full bg-[#112BB1] transition duration-200 hover:bg-[#0E1A8D]"
          >
            Shop Now
          </CustomButton>
        </div>
      </div>

      {/* Smartwatch and Tablet Grid */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl bg-low-success bg-[url('/images/shop/fi-2.svg')] bg-cover bg-center bg-no-repeat">
          {/* Content wrapper */}
          <div className="w-full p-4 sm:p-6 lg:p-8">
            <Badge className="mb-4 rounded-sm bg-mid-success text-white sm:mb-6 lg:mb-8">
              Best Offer!
            </Badge>

            <h4 className="mb-3 text-xl font-semibold sm:text-2xl lg:text-3xl">
              Apple Smart <br /> Watch Pro
            </h4>

            <div className="mb-4 flex items-center gap-2 sm:mb-6 lg:mb-8">
              <p className="text-lg font-medium text-mid-success sm:text-xl">
                ₦{`250,000`}
              </p>
              <p className="text-sm text-gray-500 line-through sm:text-base">
                ₦{`350,000`}
              </p>
            </div>

            <CustomButton
              isRightIconVisible
              icon={<ArrowRight />}
              variant="primary"
              size="lg"
              className="w-full rounded-full bg-black transition duration-200 hover:bg-[#0E1A8D] sm:w-auto"
            >
              Shop Now
            </CustomButton>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[url('/images/shop/fi-2.svg')] bg-cover bg-center bg-no-repeat">
          {/* Content wrapper */}
          <div className="w-full p-4 sm:p-6 lg:p-8">
            <p className="mb-4 text-sm font-medium text-[#112BB1] sm:mb-6 lg:mb-8">
              Starting At Only ₦200,000
            </p>
            <h4 className="mb-3 text-xl font-semibold sm:text-2xl lg:text-3xl">
              Samsung Galaxy
              <br /> Tab A8
            </h4>

            <div className="mb-4 flex items-center gap-2 sm:mb-6 lg:mb-8">
              <p className="text-sm font-medium text-mid-grey-II">
                The Samsung Galaxy Tab A8 64GB <br /> WiFi Gray is a mid-range
                tablet
              </p>
            </div>

            <CustomButton
              isRightIconVisible
              icon={<ArrowRight />}
              variant="primary"
              size="lg"
              className="w-full rounded-full bg-black transition duration-200 hover:bg-[#0E1A8D] sm:w-auto"
            >
              Shop Now
            </CustomButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
