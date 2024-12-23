/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";

import CustomButton from "~/components/common/common-button/common-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  //   FormMessage,
} from "~/components/ui/form";
import { Separator } from "~/components/ui/separator";
import { Switch } from "~/components/ui/switch";

export const NotificationForm: FC = () => {
  //   const { toast } = useToast();
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formMethods = useForm({
    // resolver: zodResolver(signUpFormSchema),
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phoneNumber: "",
    //   course: "",
    //   schedule: "",
    //   newsletter: false,
    // },
  });

  const {
    handleSubmit,
    // formState: { errors },
    control,
    // reset,
  } = formMethods;

  const onSubmit = async (data: any) => {
    console.log(data);

    //     setIsSubmitting(true);

    //     const response = await submitRegisterForm(data, `courseID`);

    //     if (response.error) {
    //       toast({
    //         variant: "destructive",
    //         title: "Something went wrong!",
    //         description: response.error,
    //       });
    //     } else {
    //       setIsModalOpen(true);
    //       reset();
    //     }

    //     setIsSubmitting(false);
  };

  return (
    <>
      <div className="mb-[22px] space-y-[5px]">
        <h3 className="text-[18px] lg:text-[24px]">Notification Settings</h3>
        <p className="text-[14px] text-mid-grey-II lg:text-[18px]">
          Edit your notification settings
        </p>
      </div>
      <Form {...formMethods}>
        <form className="space-y-[16px]" onSubmit={handleSubmit(onSubmit)}>
          {/* Airtime Purchase */}
          <FormField
            control={control}
            name="airtime"
            render={({ field }) => (
              <FormItem className="col-span-2 m-0 flex items-center justify-between">
                <div className="">
                  <FormLabel className="">Airtime Purchase</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    className="mt-0"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="text-low-grey-II" />
          {/* Data Purchase */}
          <FormField
            control={control}
            name="data"
            render={({ field }) => (
              <FormItem className="col-span-2 m-0 flex items-center justify-between">
                <div className="">
                  <FormLabel className="">Data Purchase</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    className="mt-0"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="text-low-grey-II" />
          {/* Bill Payment */}
          <FormField
            control={control}
            name="bills"
            render={({ field }) => (
              <FormItem className="col-span-2 m-0 flex items-center justify-between">
                <div className="">
                  <FormLabel className="">Bills Payment</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    className="mt-0"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* CTA */}
          <section className="flex items-center justify-center gap-[20px] pt-[20px]">
            <CustomButton
              size="lg"
              className="w-full rounded-full border-mid-danger text-mid-danger"
              variant="outline"
            >
              Cancel
            </CustomButton>
            <CustomButton
              size="lg"
              className="w-full rounded-full"
              variant="primary"
            >
              Save Change
            </CustomButton>
          </section>
        </form>
      </Form>
    </>
  );
};
