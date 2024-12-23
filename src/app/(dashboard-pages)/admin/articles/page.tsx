import { LuPlusCircle } from "react-icons/lu";

import CustomButton from "~/components/common/common-button/common-button";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Modal } from "../../_components/modals/content-modal";
import { CreateArticleForm } from "./_components/forms/create-article";
import { ArticleLayout } from "./layout/articles";

const Page = () => {
  return (
    <main>
      <section className="flex items-center justify-between">
        <h4 className="mb-[10px] text-[18px] text-mid-grey-III lg:text-[30px]">
          Articles
        </h4>
        <div>
          <Modal
            triggerStructure={
              <CustomButton
                isLeftIconVisible
                icon={<LuPlusCircle />}
                variant="primary"
                className="rounded-full"
              >
                Create Articles
              </CustomButton>
            }
            title={"Create New Article"}
          >
            <CreateArticleForm />
          </Modal>
        </div>
      </section>
      <section>
        <Tabs defaultValue="published" className="">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger
              value="published"
              className="relative rounded-none px-4 pb-2 text-sm font-medium shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mid-blue data-[state=active]:bg-transparent data-[state=active]:text-mid-blue"
            >
              Published Articles
            </TabsTrigger>
            <TabsTrigger
              value="unpublished"
              className="relative rounded-none px-4 pb-2 text-sm font-medium shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mid-blue data-[state=active]:bg-transparent data-[state=active]:text-mid-blue"
            >
              Unpublished Articles
            </TabsTrigger>
          </TabsList>
          <Separator className="-mt-1 mb-[26px]" />
          <TabsContent value="published">
            <ArticleLayout />
          </TabsContent>
          <TabsContent value="unpublished">
            <ArticleLayout />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Page;
