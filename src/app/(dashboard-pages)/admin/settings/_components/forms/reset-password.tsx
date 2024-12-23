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
import { Input } from "~/components/ui/input";

export const ResetPasswordForm: FC = () => {
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
        <h3 className="text-[18px] lg:text-[24px]">Reset Password</h3>
        <p className="text-[14px] text-mid-grey-II lg:text-[18px]">
          Reset your Password
        </p>
      </div>
      <Form {...formMethods}>
        <form className="space-y-[16px]" onSubmit={handleSubmit(onSubmit)}>
          {/* Current Password */}
          <FormField
            name="currentPassword"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Current Password"
                    {...field}
                    className="h-[46px] w-full rounded-md border px-4 py-2"
                  />
                </FormControl>
                {/* {errors.lastName && (
                    <FormMessage>{errors.lastName?.message}</FormMessage>
                  )} */}
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            name="NewPassword"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Password"
                    {...field}
                    className="h-[46px] w-full rounded-md border px-4 py-2"
                  />
                </FormControl>
                {/* {errors.lastName && (
                    <FormMessage>{errors.lastName?.message}</FormMessage>
                  )} */}
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    {...field}
                    className="h-[46px] w-full rounded-md border px-4 py-2"
                  />
                </FormControl>
                {/* {errors.lastName && (
                    <FormMessage>{errors.lastName?.message}</FormMessage>
                  )} */}
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
