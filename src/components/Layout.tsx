import React from "react";

export default function Layout({ className, children }: any) {
	return (
		<div className={className} id="root">
			{children}
		</div>
	);
}
