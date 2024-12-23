import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { LuLoader } from "react-icons/lu";

import CustomButton from "~/components/common/common-button/common-button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { withDependency } from "~/HOC/withDependencies";
import { adminLoginFormSchema } from "~/schemas";
import { AuthService } from "~/services/auth.service";
import { dependencies } from "~/utils/dependencies";

const BaseLoginForm = ({ authService }: { authService: AuthService }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const formMethods = useForm({
    resolver: zodResolver(adminLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    // reset,
  } = formMethods;

  const onSubmit = (data: object) => {
    startTransition(async () => {
      return await authService.login(data, router);
    });
  };

  return (
    <Form {...formMethods}>
      <form className="max-w-[500px]" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Address*/}
        <FormField
          name="email"
          control={control}
          render={({ field }) => (
            <FormItem className="mb-[32px]">
              <FormControl>
                <Input
                  placeholder="Email Address"
                  {...field}
                  className="h-[46px] w-full rounded-md border px-4 py-2"
                />
              </FormControl>
              {errors.email && (
                <FormMessage>{errors.email?.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          name="password"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Password (6 characters min.)"
                  {...field}
                  className="h-[46px] w-full rounded-md border px-4 py-2"
                />
              </FormControl>
              {errors.password && (
                <FormMessage>{errors.password?.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <section className="mt-[23px] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
          <Link href="/">
            <p className="text-sm text-mid-danger">Forgot Password ?</p>
          </Link>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center justify-center gap-[20px] pt-[20px]">
          <CustomButton
            size="lg"
            className="h-[56px] w-full rounded-full"
            variant="primary"
            type="submit"
            isDisabled={isPending}
          >
            {isPending ? (
              <LuLoader size={16} className="animate-spin text-white" />
            ) : (
              "Login"
            )}
          </CustomButton>
          <span className="text-mid-grey-II">
            -------------------- OR --------------------
          </span>
        </section>
      </form>
      <CustomButton
        href="/admin/home"
        size="lg"
        className="h-[56px] w-full rounded-full border-primary text-primary"
        variant="outline"
        isRightIconVisible
        icon={<FcGoogle />}
      >
        Login with Google
      </CustomButton>
    </Form>
  );
};

const LoginForm = withDependency(BaseLoginForm, {
  authService: dependencies.AUTH_SERVICE,
});

export default LoginForm;
