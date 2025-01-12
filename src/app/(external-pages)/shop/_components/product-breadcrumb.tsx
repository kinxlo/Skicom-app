"use client";

// import { usePathname } from "next/navigation";
import { PiHouse } from "react-icons/pi";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

interface ProductBreadcrumbProperties {
  productTitle: string;
}

export const ProductBreadcrumb = ({
  productTitle,
}: ProductBreadcrumbProperties) => {
  //   const pathName = usePathname();
  //   const paths = pathName.split("/").filter(Boolean);

  return (
    <div className="bg-gray-100">
      <main className="mx-auto max-w-7xl px-4 py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <PiHouse size={16} />
                <span>Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{productTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </main>
    </div>
  );
};
