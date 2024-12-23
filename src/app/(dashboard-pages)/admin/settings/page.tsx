import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { DashboardTable } from "../../_components/dashboard-table";
import { AccountInfoLayout } from "./layout/account-info";

const Page = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <h4 className="text-[18px] text-mid-grey-III lg:text-[30px]">
          Settings
        </h4>
      </section>
      <section>
        <Tabs defaultValue="accountInfo" className="">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger
              value="accountInfo"
              className="relative rounded-none px-4 pb-2 text-sm font-medium shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mid-blue data-[state=active]:bg-transparent data-[state=active]:text-mid-blue"
            >
              Account Information
            </TabsTrigger>
            <TabsTrigger
              value="admins"
              className="relative rounded-none px-4 pb-2 text-sm font-medium shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mid-blue data-[state=active]:bg-transparent data-[state=active]:text-mid-blue"
            >
              Admins
            </TabsTrigger>
          </TabsList>
          <Separator className="-mt-1 mb-[26px]" />
          <TabsContent value="accountInfo">
            <AccountInfoLayout />
          </TabsContent>
          <TabsContent value="admins">
            <DashboardTable variant="settings" />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Page;
