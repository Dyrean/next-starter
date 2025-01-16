"use client";

import React from "react";

import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@heroui/react";
import { useSession } from "next-auth/react";

import AuthButton from "@/components/app-navbar/auth-button";
import ThemeSwitcher from "@/components/app-navbar/theme-switcher";

export const AcmeLogo = () => {
	return (
	  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
		<path
		  clipRule="evenodd"
		  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
		  fill="currentColor"
		  fillRule="evenodd"
		/>
	  </svg>
	);
  };

export default function AppNavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const { status } = useSession();

	const menuItems = [
		{
			label: "Home",
			href: "/",
		},
	];

	if (status === "authenticated") {
		const protectedMenuItems = [
			{
				label: "Profile",
				href: "/profile",
			},
			{
				label: "Guestbook",
				href: "/guestbook",
			},
		];
		menuItems.push(...protectedMenuItems);
	}

	return (
		<Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<AcmeLogo />
					<p className="font-bold text-inherit">Next.js Starter</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				{menuItems.map((item, index) => (
					<NavbarItem key={`${item}-${index}`}>
						<Link className="w-full" href={item.href} size="lg">
							{item.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarItem>
				<ThemeSwitcher />
			</NavbarItem>
			<NavbarItem>
				<AuthButton minimal={false} />
			</NavbarItem>
			<NavbarMenu>
				<NavbarMenuItem>
					<ThemeSwitcher showLabel />
				</NavbarMenuItem>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className="w-full" href={item.href} size="lg">
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				<NavbarMenuItem>
					<AuthButton />
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}
