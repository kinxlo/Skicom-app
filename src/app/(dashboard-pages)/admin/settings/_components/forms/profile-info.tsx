/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  //   FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export const ProfileInfoForm: FC = () => {
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
        <h3 className="text-[18px] lg:text-[24px]">Profile Information</h3>
        <p className="text-[14px] text-mid-grey-II lg:text-[18px]">
          Edit your Profile Information
        </p>
      </div>
      <Form {...formMethods}>
        <form className="space-y-[16px]" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <FormField
            name="fullname"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
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

          {/* Email */}
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
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

          {/* Profile Photo */}
          <FormField
            name="avatar"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Photo</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="example@gmail.com"
                      {...field}
                      className="hidden h-[46px] w-full rounded-md border px-4 py-2"
                    />
                    <Avatar className="relative h-[93px] w-[93px]">
                      <AvatarImage
                        className="absolute left-[50%] top-[50%] z-[2] h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 transform"
                        src="/icons/dashboard/file.png"
                      />
                      <AvatarImage
                        className="opacity-50"
                        src="https://github.com/shadcn.png"
                      />
                    </Avatar>
                  </>
                </FormControl>
                {/* {errors.lastName && (
                    <FormMessage>{errors.lastName?.message}</FormMessage>
                  )} */}
              </FormItem>
            )}
          />

          {/* Submit Button */}
        </form>
      </Form>
    </>
  );
};
