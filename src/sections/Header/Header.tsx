"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import styles from "./style.module.scss";

import Link from "next/link";

import { cn } from "@/lib/utils";

const components: { title: string; href: string }[] = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Developers",
    href: "/developers",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];

export default function Header() {
  return (
      <div className="flex justify-center">
    <NavigationMenu className=" bg-black ">
      <NavigationMenuList className="sm:hidden">
        <NavigationMenuItem className={cn("bg-black z-10", styles.navItem)}>
          <Link href="/features" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white")}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/developers" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white")}>
              Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white")}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/changelog" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white")}>
              Changelog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white")}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
<Button className="bg-gradient-to-b from-[#190d2e] to-[#4a208a]">
  Join waitlist
  </Button> 
          
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
}
