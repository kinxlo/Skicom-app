"use client";

import { FaWallet } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";

import { DashboardTable } from "../../_components/dashboard-table";
import { OverViewCard } from "../../_components/overview-card";
import { CurrencyDropdown } from "./_components/currency-dropdown";

const Page = () => {
  return (
    <main>
      <section className="flex items-center justify-between">
        <h4 className="text-[18px] text-mid-grey-III lg:text-[30px]">
          Dashboard Overview
        </h4>
        <div>
          <CurrencyDropdown />
        </div>
      </section>
      <section className="my-[38px] grid grid-cols-1 gap-[31px] lg:grid-cols-3">
        <OverViewCard
          title={"Total Receivable"}
          value={"₦45,607.00"}
          icon={<FaWallet />}
          iconClassName="bg-low-blue text-[24px] blue text-primary"
        />
        <OverViewCard
          title={"Total Users"}
          value={"500"}
          icon={<HiMiniUserGroup />}
          iconClassName="bg-low-warning text-[24px] text-high-warning"
        />
        <OverViewCard
          title={"Plans Created"}
          value={"500"}
          icon={<GiWallet />}
          iconClassName="bg-[#F2EBFB] text-[24px] text-purple"
        />
      </section>
      <section>
        <DashboardTable variant="default" />
      </section>
    </main>
  );
};

export default Page;
