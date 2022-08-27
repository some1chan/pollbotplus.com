declare module "*.svg" {
	const content: any;
	export default content;
	export function ReactComponent(): JSX.Element;
}
