import * as React from "react";

// https://jakearchibald.github.io/svgomg/
export default function Logo() {
	return (
		<svg
			viewBox="0 0 80 80"
			xmlns="http://www.w3.org/2000/svg"
			className="logo"
			aria-label="Logo"
		>
			<path
				d="M39.923828 0A40 40 0 0 0 0 40a40 40 0 0 0 0 .076172A40 40 0 0 0 40 80h.07617A40 40 0 0 0 80 40a40 40 0 0 0 0-.076172A40 40 0 0 0 40 0Z"
				fill="#1abc9c"
			/>
			<path
				d="M40 12a28 28 0 0 0-4.3086.33398l6.7578 25.217.18945.70703 1.6035 5.9863-6.6914-1.793v-.002l-25.217-6.7558a28 28 0 0 0-.33398 4.3066 28 28 0 0 0 28 28 28 28 0 0 0 28-28 28 28 0 0 0-28-28zm-10.104 1.8867a28 28 0 0 0-16.01 16.012l21.871 5.8594z"
				fill="#fff"
			/>
		</svg>
	);
}
