import React from "react";

import { Footer } from "~/components/layout/footer/footer";
import { Navbar } from "~/components/layout/navbar/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </section>
  );
}
