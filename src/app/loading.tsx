"use client";

import { CircularProgress } from "@heroui/react";

export default function Loading() {
	return (
		<CircularProgress
			className="mx-auto"
			classNames={{
				svg: "w-36 h-36 drop-shadow-md mx-auto my-auto",
			}}
			showValueLabel={true}
			aria-label="loading page..."
		/>
	);
}
