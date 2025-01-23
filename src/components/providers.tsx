"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
	const router = useRouter();
	return (
		<SessionProvider>
			<HeroUIProvider
				navigate={router.push}
				className="flex size-full flex-col"
			>
				<NextThemesProvider attribute="class">
					{children}
				</NextThemesProvider>
			</HeroUIProvider>
		</SessionProvider>
	);
}
