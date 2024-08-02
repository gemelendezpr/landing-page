"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-8 mb-16 text-center text-2xl md:mt-24 md:mb-32 lg:mt-32 lg:mb-40">
          <Link href="/">
            <h1 className="text-3xl font-semibold ">
              GeMelendezPR<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        {/* Contact Button */}
        <div className="mt-22 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/contact">
              <Button className="bg-custom-background text-white text-xl px-8 py-6 sm:text-lg sm:px-6 sm:py-4">
                Contact me
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
