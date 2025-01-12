"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";

import CustomButton from "~/components/common/common-button/common-button";

import "./navbar.scss";

import { Logo } from "~/components/common/logo";
import { SearchDialog } from "./_components/search-modal";

const menuVariant = {
  initial: {
    y: -300,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: -300,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Navbar: FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsBlurred(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarClose = () => setIsOpen(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/shop", label: "Stores" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <section
        className={`fixed left-0 right-0 z-20 flex h-[95px] items-center justify-between bg-white px-5 shadow-md xl:top-[1rem] ${
          isBlurred ? "xl:mt-0" : "duration-300"
        } mx-auto max-w-[1240px] xl:rounded-full`}
      >
        <Logo />
        <section className="navbar hidden xl:block">
          <ul className="nav-list flex items-center gap-7 text-sm font-semibold">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`nav-item ${
                    activePath === path ? "active text-[#007CC3]" : ""
                  }`}
                  onClick={handleNavbarClose}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="hidden items-center gap-5 xl:flex">
          {/* Search Dialog Trigger */}
          <SearchDialog />
          <Link href="/shop/cart">
            <BsCart2 size={20} />
          </Link>

          <Link href="/welcome" className="text-sm font-semibold">
            Sign Up
          </Link>

          <CustomButton
            href="/login"
            variant="primary"
            className="h-[46px] rounded-full"
            size="lg"
          >
            Login
          </CustomButton>
        </section>

        <section className="flex items-center gap-2 xl:hidden">
          {/* Search Dialog Trigger */}
          <SearchDialog />
          <Link href="/shop/cart">
            <BsCart2 size={20} />
          </Link>
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </section>
      </section>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="navbar fixed z-20 mt-20 w-full shadow-md xl:hidden"
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ul className="nav-list flex flex-col items-center gap-7 text-sm font-semibold">
              {links.map(({ path, label }) => (
                <li key={path} onClick={handleNavbarClose}>
                  <Link
                    href={path}
                    className={`nav-item ${
                      activePath === path ? "active text-[#007CC3]" : ""
                    }`}
                    onClick={() => setActivePath(path)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mr-4">
                <Link
                  href="/welcome"
                  className="text-sm font-semibold"
                  onClick={handleNavbarClose}
                >
                  Sign Up
                </Link>
              </li>
              <li className="mr-4">
                <CustomButton variant="primary" className="rounded-full">
                  <Link href="/login" onClick={handleNavbarClose}>
                    Login
                  </Link>
                </CustomButton>
              </li>
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
};
