"use client";

import Apple from "/public/images/footer/Apple.png";
import facebook from "/public/images/footer/facebook.png";
import instagram from "/public/images/footer/instagram.png";
import Playstore from "/public/images/footer/Playstore.png";
import twitter from "/public/images/footer/twitter.png";
import Logo from "/public/images/logo/skicom.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FC } from "react";

import { NewsLetter } from "~/components/common/news-letter/news-letter";
import { Wrapper } from "../wrapper";

export const Footer: FC = () => {
  const getYear = new Date().getFullYear();
  const pathname = usePathname(); // Get the current path

  return (
    <main className="w-full bg-black py-10 md:py-14">
      <Wrapper>
        <section>
          <div>
            <NewsLetter />
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 xl:hidden">
            <a href="" className="rounded-lg border p-2 pr-3 md:flex-none">
              <div className="flex items-center gap-2">
                <Image src={Playstore} alt={"Google Play"} height={30} />
                <div className="text-white">
                  <p className="-mb-1 text-xs">GET IT ON</p>
                  <p className="mt-0 text-sm">Google Play</p>
                </div>
              </div>
            </a>

            <a href="" className="rounded-lg border p-2 md:flex-none">
              <div className="flex items-center gap-2">
                <Image src={Apple} alt={"App Store"} height={30} />
                <div className="text-white">
                  <p className="-mb-1 text-xs">Download on the</p>
                  <p className="mt-0 text-sm">App Store</p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-10 items-center justify-between text-white xl:flex">
            <div className="flex flex-col items-center justify-center xl:block">
              <Image src={Logo} alt={"Skicom Logo"} height={50} />
              <div className="mt-5 flex items-center gap-4">
                <a href="" className="rounded-full border p-2">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    className="h-[25px] w-[25px] rounded-full"
                  />
                </a>
                <a href="" className="rounded-full border p-2">
                  <Image
                    src={facebook}
                    alt="Facebook"
                    className="h-[25px] w-[25px] rounded-full"
                  />
                </a>
                <a href="" className="rounded-full border p-2">
                  <Image
                    src={twitter}
                    alt="Twitter"
                    className="h-[25px] w-[25px] rounded-full"
                  />
                </a>
              </div>
            </div>

            <div className="hidden xl:block">
              <h2 className="text-sm font-semibold uppercase text-white">
                Contact
              </h2>
              <p className="mt-5 text-sm text-white">
                Plot 1, Kwara Osun Street, Lagos.
              </p>
              <div className="mt-2 flex items-center gap-1">
                <a href="tel:08130054558" className="text-sm text-white">
                  08130054558,
                </a>
                <a href="tel:08123456443" className="text-sm text-white">
                  08123456443
                </a>
              </div>
            </div>

            <div className="hidden xl:block">
              <h2 className="text-sm font-semibold uppercase text-white">
                Quick Links
              </h2>
              <div className="flex items-center gap-20">
                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/about"
                    className={`text-sm ${pathname === "/about" ? "font-bold text-primary" : ""}`}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className={`text-sm ${pathname === "/services" ? "font-bold text-primary" : ""}`}
                  >
                    Services
                  </Link>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/store"
                    className={`text-sm ${pathname === "/store" ? "font-bold text-primary" : ""}`}
                  >
                    Store
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-sm ${pathname === "/contact" ? "font-bold text-primary" : ""}`}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <h2 className="text-sm font-semibold uppercase text-white">
                Help
              </h2>
              <div className="flex items-center gap-20">
                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/faq"
                    className={`text-sm ${pathname === "/faq" ? "font-bold text-primary" : ""}`}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-sm ${pathname === "/blog" ? "font-bold text-primary" : ""}`}
                  >
                    Blog
                  </Link>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/live-chat"
                    className={`text-sm ${pathname === "/live-chat" ? "font-bold text-primary" : ""}`}
                  >
                    Live Chat
                  </Link>
                  <Link
                    href="/terms-condition"
                    className={`text-sm ${pathname === "/terms-condition" ? "font-bold text-primary" : ""}`}
                  >
                    Terms & Condition
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-10" />
          <p className="text-center text-[17px] text-[#71717A] lg:text-2xl">
            &copy; Copyright {getYear}. All Rights Reserved by SKICOM
          </p>
        </section>
      </Wrapper>
    </main>
  );
};
