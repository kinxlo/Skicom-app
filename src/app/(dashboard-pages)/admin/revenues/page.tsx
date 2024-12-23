import { HiMiniBriefcase } from "react-icons/hi2";

import { Chart } from "../../_components/chart";
import { PieChartComponent } from "../../_components/chart/pie-chart";
import { DashboardTable } from "../../_components/dashboard-table";
import { OverViewCard } from "../../_components/overview-card";

const Page = () => {
  return (
    <main>
      <section className="flex items-center justify-between">
        <h4 className="text-[18px] text-mid-grey-III lg:text-[30px]">
          Revenues
        </h4>
      </section>
      <section className="my-[38px] grid grid-cols-1 gap-[31px] lg:grid-cols-4">
        <OverViewCard
          title={"Total Revenue"}
          value={"₦5,000,000"}
          icon={<HiMiniBriefcase />}
          iconClassName="bg-[#F2EBFB] text-[24px] text-purple"
        />
        <OverViewCard
          title={"Airtime Revenue"}
          value={"₦5,000,000"}
          icon={<HiMiniBriefcase />}
          iconClassName="bg-low-warning text-[24px] text-high-warning"
        />
        <OverViewCard
          title={"Data Revenue"}
          value={"₦5,000,000"}
          icon={<HiMiniBriefcase />}
          iconClassName="bg-low-success text-[24px] text-mid-success"
        />
        <OverViewCard
          title={"Bills Revenue"}
          value={"₦5,000,000"}
          icon={<HiMiniBriefcase />}
          iconClassName="bg-low-blue text-[24px] text-primary"
        />
      </section>
      <section className="my-[38px] grid grid-cols-1 gap-[31px] lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Chart />
        </div>
        <div className="lg:col-span-4">
          <PieChartComponent />
        </div>
      </section>
      <section>
        <DashboardTable variant="revenues" />
      </section>
    </main>
  );
};

export default Page;
