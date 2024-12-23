import { GiWallet } from "react-icons/gi";
import { LuPlusCircle } from "react-icons/lu";

import { OverViewCard } from "~/app/(dashboard-pages)/_components/overview-card";
import CustomButton from "~/components/common/common-button/common-button";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { DashboardTable } from "../../_components/dashboard-table";
import { CreateNewPlanForm } from "../../_components/forms/create-new-plan-form.tsx";
import { Modal } from "../../_components/modals/content-modal";

const Page = () => {
  return (
    <main>
      <section className="flex items-center justify-between">
        <h4 className="text-[18px] text-mid-grey-III lg:text-[30px]">Plans</h4>
        <div>
          <Modal
            triggerStructure={
              <CustomButton
                isLeftIconVisible
                icon={<LuPlusCircle />}
                variant="primary"
                className="rounded-full"
              >
                New Plan
              </CustomButton>
            }
            title={"Create New Plan"}
          >
            <CreateNewPlanForm />
          </Modal>
        </div>
      </section>
      <section className="my-[38px] grid grid-cols-1 gap-[31px] lg:grid-cols-3">
        <OverViewCard
          title={"Plan Created"}
          value={"500"}
          icon={<GiWallet />}
          iconClassName="bg-[#F2EBFB] text-purple text-[24px]"
        />
        <OverViewCard
          title={"Published Plans"}
          value={"250"}
          icon={<GiWallet />}
          iconClassName="bg-low-success text-mid-success text-[24px]"
        />
        <OverViewCard
          title={"Unplublished Plans"}
          value={"250"}
          icon={<GiWallet />}
          iconClassName="bg-low-danger text-mid-danger text-[24px]"
        />
      </section>
      <section>
        <Tabs defaultValue="published" className="">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger
              value="published"
              className="relative rounded-none px-4 pb-2 text-sm font-medium shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mid-blue data-[state=active]:bg-transparent data-[state=active]:text-mid-blue"
            >
              Published Plans
            </TabsTrigger>
            <TabsTrigger
              value="unpublished"
              className="relative rounded-none px-4 pb-2 text-sm font-medium shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mid-blue data-[state=active]:bg-transparent data-[state=active]:text-mid-blue"
            >
              Unpublished Plans
            </TabsTrigger>
          </TabsList>
          <Separator className="-mt-1 mb-[26px]" />
          <TabsContent value="published">
            <DashboardTable variant="plans" />
          </TabsContent>
          <TabsContent value="unpublished">
            <DashboardTable variant="plans" />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Page;
