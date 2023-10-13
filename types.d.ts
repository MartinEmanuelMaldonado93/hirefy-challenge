export type Item = {
	label: string;
	icon: string;
	route: string;
	children?: Item | Item[];
};
