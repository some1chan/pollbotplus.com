import * as React from "react";

// https://feathericons.com/?query=moon
// https://www.svgminify.com/
export default function Moon() {
	const element = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			// class="feather feather-moon"
			className="light-dark-toggle hide-on-dark"
			aria-label="Toggle Light Mode"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
	);

	return element;
}
