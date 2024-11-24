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
    <NavigationMenu className="rounded border bg-black ">
      <NavigationMenuList>
        <NavigationMenuItem className={cn("bg-black  z-10", styles.navItem)}>
          <Link href="/features" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/developers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/changelog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Changelog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Button
          className={`rounded-lg text-sm font-medium border-white w-24 h-8 py-2 px-3 shadow-[0px_0px_12px_#8c45ff] ${styles.btn}`}
        >
          Join waitlist
        </Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
