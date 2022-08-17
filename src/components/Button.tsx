import classNames from "classnames";
import * as React from "react"
// https://www.freecodecamp.org/news/html-button-link-code-examples-how-to-make-html-hyperlinks-using-the-href-attribute-on-tags/

const Button = (props: {
	type: "primary" | "secondary" | "outline";
	label: string;
	href?: string;
	target?: React.HTMLAttributeAnchorTarget;
	onClick?: () => React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
	if (props.href) {
		if (!props.target) {
			props.target = "_self";
		}

		return (
			<a
				className={classNames("button", props.type)}
				href={props.href}
				target={props.target}
			>
				{props.label}
			</a>
		);
	} else {
		if (props.onClick) {
			return (
				<button
					className={classNames("button", props.type)}
					onClick={props.onClick}
				>
					{props.label}
				</button>
			);
		} else {
			return (
				<button className={classNames("button", props.type)}>
					{props.label}
				</button>
			);
		}
	}
};

export default Button;
