import { NotificationForm } from "../_components/forms/notification";
import { ProfileInfoForm } from "../_components/forms/profile-info";
import { ResetPasswordForm } from "../_components/forms/reset-password";

export const AccountInfoLayout = () => {
  return (
    <section className="grid grid-cols-1 gap-[64px] rounded-[8px] border bg-white p-[37px] lg:grid-cols-2">
      <div>
        <ProfileInfoForm />
      </div>
      <div>
        <ResetPasswordForm />
      </div>
      <div>
        <NotificationForm />
      </div>
    </section>
  );
};
