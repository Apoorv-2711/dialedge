"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionLink = motion(Link);

  const navigationItems: {
    name: string;
    href: string;
    isActive?: boolean;
    isSubmenu?: boolean;
    subMenuTitle?: string;
    submenu?: { name: string; href: string }[];
  }[] = [
    { name: "Services", href: "/#services" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/#pricing" },
    // { name: "Features", href: "/features", isActive: pathname === "/features" },
    // {
    //   name: "Use Case",
    //   href: "/use-cases",
    //   isActive: pathname.includes("/use-cases"),
    //   isSubmenu: true,
    //   subMenuTitle: "Use Cases In Various Industries",
    //   submenu: [
    //     ...industries.map((industry) => ({
    //       name: industry.name,
    //       href: `/use-cases/${slugify(industry.name)}`,
    //     })),
    //   ],
    // },
    // { name: "About Us", href: "/about", isActive: pathname === "/about" },
    {
      name: "Contact Us",
      href: "/#contact",
      isActive: pathname === "/#contact",
    },
  ];

  const NavigationLinks = () => (
    <>
      {navigationItems.map((item) => (
        <motion.div
          key={item.name}
          className={cn(
            "text-sm font-medium hover:text-primary transition-all duration-300 relative group",
            item.isActive && "text-primary",
            className
          )}
          whileHover={{ y: -2 }}
        >
          {item?.isSubmenu ? (
            <HoverCard openDelay={1} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex h-full flex-row items-center gap-0.5 text-sm"
                  )}
                >
                  {item.name}
                  <ChevronDown className="size-[14px] transition-transform duration-300 group-hover:rotate-180 group-hover:transform" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                sideOffset={10}
                className="m-0 w-full rounded-xl p-0 dark:bg-black/70 backdrop-blur-sm "
              >
                <div className="w-[400px] p-3 md:w-[500px] lg:w-[550px]">
                  <p className="px-3 py-2 text-xs font-medium text-gray-500">
                    {item.subMenuTitle}
                  </p>

                  <ul className="grid md:grid-cols-2">
                    {item?.submenu?.map((component, index) => (
                      <li key={index}>
                        <Link href={component.href}>
                          <div
                            className={cn(
                              "flex select-none gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 focus:bg-accent focus:text-accent-foreground",
                              pathname === component.href && "text-primary"
                            )}
                          >
                            <div className="space-y-1">
                              <div className="text-[13px] font-medium leading-none">
                                {component.name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Link href={item.href}>{item.name}</Link>
          )}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
        </motion.div>
      ))}
    </>
  );

  return (
    <motion.header
      className="sticky top-0 z-50 w-full glass border-b border-border/20 dark:bg-background/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between mx-auto px-4 max-w-7xl">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {mounted && (
            <>
              <Link href="/">
                <Image
                  src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                  alt="DialEdge AI"
                  width={150}
                  height={100}
                  className="w-auto h-8 md:h-7 hidden lg:block"
                />
              </Link>
              <Link href="/">
                <Image
                  src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                  alt="DialEdge AI"
                  width={150}
                  height={100}
                  className="w-auto h-8 md:h-10 block lg:hidden shrink-0"
                />
              </Link>
            </>
          )}
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationLinks />
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/#book-demo">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg">
                Contact Us
              </Button>
            </motion.div>
          </Link>
          {/* <Link href="#sign-up">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-primary/50 cursor-pointer hover:border-primary bg-transparent hover:bg-primary/10 dark:text-white px-6 py-3 font-semibold rounded-full backdrop-blur-sm dark:border-primary/70 dark:hover:border-primary dark:hover:bg-primary/20"
              >
                Sign Up
              </Button>
            </motion.div>
          </Link> */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  {mounted && (
                    <Image
                      src={
                        theme === "dark" ? "/logo-dark.png" : "/logo-light.png"
                      }
                      alt="DialEdge AI"
                      width={120}
                      height={80}
                      className="w-auto h-8"
                    />
                  )}
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-6 mt-8 px-6">
                {navigationItems.map((item) => (
                  <MotionLink
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium hover:text-primary transition-all duration-300 py-2 border-b border-border/20 ",
                      item.isActive && "text-primary"
                    )}
                    onClick={() => {
                      setOpen(false);
                    }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </MotionLink>
                ))}
              </nav>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 mt-8 px-6">
                <Link href="#book-demo">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r cursor-pointer from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 rounded-full shadow-lg">
                      Book a Demo
                    </Button>
                  </motion.div>
                </Link>
                <Link href="#sign-up" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary/50 cursor-pointer hover:border-primary bg-transparent hover:bg-primary/10 text-primary dark:text-white py-3 font-semibold rounded-full backdrop-blur-sm dark:border-primary dark:hover:border-primary/80 dark:hover:bg-primary/10"
                    >
                      Sign Up
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
