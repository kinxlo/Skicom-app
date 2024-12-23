/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LuFile } from "react-icons/lu";

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
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";

// import ResponseModal from "../../modals/response-modal";
const maxWords = 100;

export const CreateArticleForm: FC = () => {
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
        <form className="space-y-[16px]" onSubmit={handleSubmit(onSubmit)}>
          {/* Artitle title */}
          <FormField
            name="articleTitle"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Article title"
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

          {/* Artitle Image */}
          <FormField
            name="articleImage"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Image</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="Enter Article title"
                      {...field}
                      className="hidden h-[46px] w-full rounded-md border px-4 py-2"
                    />
                    <div className="flex flex-col items-center justify-center gap-[14px] rounded-[8px] bg-accent p-[20px] pb-[30px] text-primary">
                      <CustomButton
                        size="lg"
                        className="border border-primary"
                        variant="outline"
                        isLeftIconVisible
                        icon={<LuFile />}
                      >
                        Add Image
                      </CustomButton>
                      <span className="text-[10px] text-mid-grey-II lg:text-[12px]">
                        Upload images various format(png, jpg)
                      </span>
                    </div>
                  </>
                </FormControl>
                {/* {errors.lastName && (
                    <FormMessage>{errors.lastName?.message}</FormMessage>
                  )} */}
              </FormItem>
            )}
          />

          {/* article Description */}
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
                    placeholder="Describe your article here..."
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

          {/* Publish Article */}
          <FormField
            control={control}
            name="publish"
            render={({ field }) => (
              <FormItem className="col-span-2 m-0 flex items-center justify-between">
                <div className="">
                  <FormLabel className="">Publish Article</FormLabel>
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
