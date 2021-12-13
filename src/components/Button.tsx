import { Link } from "react-router-dom";
import classNames from "classnames";

// https://www.freecodecamp.org/news/html-button-link-code-examples-how-to-make-html-hyperlinks-using-the-href-attribute-on-tags/

const Button = (props: {
	type: "primary" | "secondary";
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
		return (
			<button className={classNames("button", props.type)}>
				{props.label}
			</button>
		);
	}
};

export default Button;
