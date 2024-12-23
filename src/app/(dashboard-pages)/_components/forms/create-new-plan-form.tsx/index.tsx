/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import CustomButton from "~/components/common/common-button/common-button";
import { WordCounter } from "~/components/miscellaneous/WordCounter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  //   FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";

// import ResponseModal from "../../modals/response-modal";
const maxWords = 100;

export const CreateNewPlanForm: FC = () => {
  const [description, setDescription] = useState<string>("");
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
      <Form {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-[15px] md:grid md:grid-cols-2 md:gap-[30px] md:space-y-0">
            {/* Plan type */}
            <FormField
              name="planType"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekday">Weekday Class</SelectItem>
                        <SelectItem value="weekend">Weekend Class</SelectItem>
                        <SelectItem value="online">Online Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {/* {errors.firstName && (
                    <FormMessage>{errors.firstName?.message}</FormMessage>
                  )} */}
                </FormItem>
              )}
            />

            {/* Plan Name */}
            <FormField
              name="planName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Plan Name"
                      {...field}
                      className="w-full rounded-md border px-4 py-2"
                    />
                  </FormControl>
                  {/* {errors.lastName && (
                    <FormMessage>{errors.lastName?.message}</FormMessage>
                  )} */}
                </FormItem>
              )}
            />

            {/* Plan Duration */}
            <FormField
              name="duration"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Duration</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekday">Weekday Class</SelectItem>
                        <SelectItem value="weekend">Weekend Class</SelectItem>
                        <SelectItem value="online">Online Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {/* {errors.schedule && (
                    <FormMessage>{errors.schedule?.message}</FormMessage>
                  )} */}
                </FormItem>
              )}
            />

            {/* Plan Price */}
            <FormField
              name="price"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="₦ 0.00"
                      {...field}
                      className="w-full rounded-md border px-4 py-2"
                    />
                  </FormControl>
                  {/* {errors.course && (
                    <FormMessage>{errors.course?.message}</FormMessage>
                  )} */}
                </FormItem>
              )}
            />

            {/* Plan Description */}
            <FormField
              name="description"
              control={control}
              render={({ field }) => (
                <FormItem className="col-span-2 mb-6">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="text-dark w-full rounded-md border px-4 py-2"
                      rows={7}
                      placeholder="Describe your plan here..."
                      {...field}
                      value={description}
                      onChange={(_event) => {
                        const inputText = _event.target.value;
                        setDescription(inputText);
                        field.onChange(inputText);
                      }}
                    />
                  </FormControl>
                  <WordCounter word={description} length={maxWords} />

                  {/* {errors.description && (
            <FormMessage className="text-xs italic text-destructive">
              {errors.description?.message}
            </FormMessage>
          )} */}
                </FormItem>
              )}
            />

            {/* Publish Plan */}
            <FormField
              control={control}
              name="publish"
              render={({ field }) => (
                <FormItem className="col-span-2 m-0 flex items-center justify-between">
                  <div className="">
                    <FormLabel className="">Publish Plan</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* CTA */}
          <section className="mt-[30px] flex items-center justify-center gap-[20px]">
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
              Save
            </CustomButton>
          </section>
        </form>
      </Form>
    </>
  );
};
