import { LuBell } from "react-icons/lu";

import { SearchInput } from "~/components/common/search-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { UnreadNotificationCard } from "./_components/notification";
import Profile from "./_components/profile";

const BaseDashboardNavbar = () => {
  return (
    <nav
      className="sticky top-0 z-[1] border-b-[0.5px] border-border"
      role="navbar"
    >
      <section className="flex w-full items-center justify-between gap-[20px] bg-white px-[16px] py-[20px] lg:px-[32px]">
        <SearchInput
          inputBackgroundColor="bg-high-grey-I"
          className="w-[100%] lg:w-[460px]"
        />
        <section className="flex items-center justify-between gap-1 md:gap-2 lg:gap-4">
          <div className="relative flex items-center justify-center">
            <Popover>
              <PopoverTrigger>
                <LuBell
                  data-testid="bell"
                  className="text-neutral-dark-2 hover:text-neutral-dark-1 h-6 w-6 transition-colors duration-300 hover:cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent
                data-testid="notificationContent"
                align="end"
                className="w-fit border-none p-0 shadow-none"
              >
                <UnreadNotificationCard
                  notificationsPreview={[
                    { header: "Check mail", time: "1 hour ago" },
                  ]}
                  unreadCount={30}
                />
              </PopoverContent>
            </Popover>
            <span className="bg-error absolute right-1 top-0 h-[6px] w-[6px] rounded-full"></span>
          </div>
          <Separator orientation="vertical" className="h-[45px]" />
          <div className="flex items-center gap-[10px]">
            <Profile />
          </div>
        </section>
      </section>
    </nav>
  );
};

export default BaseDashboardNavbar;
