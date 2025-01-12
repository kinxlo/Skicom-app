import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

import { Wrapper } from "~/components/layout/wrapper";

interface FeatureItemProperties {
  icon: React.ReactNode;
  title: string;
}

const FeatureItem = ({ icon, title }: FeatureItemProperties) => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <div className="flex items-center justify-center text-[32px] text-primary sm:text-[36px] md:text-[41px]">
        {icon}
      </div>
      <p className="text-base font-medium text-gray-700 sm:text-lg md:text-[22px]">
        {title}
      </p>
    </div>
  );
};

export const ListContent = () => {
  return (
    <Wrapper className="w-full border-y border-gray-200 py-3 md:py-4">
      <div className="flex flex-wrap justify-between gap-3 sm:gap-4">
        <FeatureItem icon={<LuClock />} title="Best Quality" />
        <FeatureItem icon={<TbTruckDelivery />} title="Fast Delivery" />
        <FeatureItem
          icon={<IoShieldCheckmarkOutline />}
          title="Secured Payment"
        />
        <FeatureItem icon={<BiSupport />} title="24/7 Support" />
      </div>
    </Wrapper>
  );
};
