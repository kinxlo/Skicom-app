"use client";

import { usePathname } from "next/navigation";
import { PiHouse } from "react-icons/pi";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export const BreadCrumb = () => {
  const pathName = usePathname();

  return (
    <main className="mt-2 flex justify-center">
      <Breadcrumb>
        <BreadcrumbList className="xl:text-[20px]">
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/`}
              className="flex items-center gap-1 text-white"
            >
              <PiHouse size={16} />
              <span>Home</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white" />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize text-white">
              {pathName.replace("/", "")}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </main>
  );
};
