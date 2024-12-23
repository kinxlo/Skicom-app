import { HiMiniUserGroup } from "react-icons/hi2";

import { DashboardTable } from "../../_components/dashboard-table";
import { OverViewCard } from "../../_components/overview-card";

const Page = () => {
  return (
    <main>
      <section className="flex items-center justify-between">
        <h4 className="text-[18px] text-mid-grey-III lg:text-[30px]">Users</h4>
      </section>
      <section className="my-[38px] grid grid-cols-1 gap-[31px] lg:grid-cols-3">
        <OverViewCard
          title={"Total Users"}
          value={"500"}
          icon={<HiMiniUserGroup />}
          iconClassName="bg-[#F2EBFB] text-[24px] text-purple"
        />
        <OverViewCard
          title={"Active Users"}
          value={"450"}
          icon={<HiMiniUserGroup />}
          iconClassName="bg-low-success text-[24px] text-mid-success"
        />
        <OverViewCard
          title={"Suspended Users"}
          value={"50"}
          icon={<HiMiniUserGroup />}
          iconClassName="bg-low-danger text-[24px] text-mid-danger"
        />
      </section>
      <section>
        <DashboardTable variant="users" />
      </section>
    </main>
  );
};

export default Page;
