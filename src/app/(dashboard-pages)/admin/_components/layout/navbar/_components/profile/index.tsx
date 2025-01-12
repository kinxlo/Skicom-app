"use client";

import { useRouter } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { withDependency } from "~/HOC/withDependencies";
import { useSession } from "~/hooks/use-session";
import { AuthService } from "~/services/auth.service";
import { dependencies } from "~/utils/dependencies";

export const BaseProfile = ({ authService }: { authService: AuthService }) => {
  const router = useRouter();
  const { session, loading } = useSession();

  const handleLogOut = async () => {
    await authService.logout(router);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>No session found</div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-[5px] focus:outline-none active:outline-none">
        <Avatar>
          <AvatarImage
            src={session.user.avatar || "https://github.com/shadcn.png"}
          />
          <AvatarFallback>
            {session.user.name[0]?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <p className="hidden lg:block">{session.user.name || "Skicom Admin"}</p>
        <LuChevronDown className="hidden lg:block" size="20px" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative z-[999999]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogOut} className="text-mid-danger">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Profile = withDependency(BaseProfile, {
  authService: dependencies.AUTH_SERVICE,
});

export default Profile;
