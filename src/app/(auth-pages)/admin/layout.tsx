import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col gap-4 xl:grid xl:grid-cols-2">
      {/* Logo and Image Section */}
      <section className="relative h-[15rem] xl:h-screen">
        <Link className="absolute left-4 top-4 hover:animate-pulse" href={`/`}>
          <Image
            width={84}
            height={84}
            src={"/images/logo/skicom.png"}
            alt="logo"
          />
        </Link>
        <Image
          width={742}
          height={900}
          className="h-full w-full object-cover"
          src="/images/model.jpeg"
          alt="model"
          priority
        />
      </section>

      {/* Content Section */}
      <section className="flex items-center justify-center p-4">
        {children}
      </section>

      {/* Footer */}
      <p className="absolute bottom-4 right-4 hidden font-semibold text-primary xl:block">
        &copy; {new Date().getFullYear()} Skicom Inc.
      </p>
    </main>
  );
}
