import { Item } from "../../types";

export const data: Item[] = [
	{
		label: "Home",
		icon: "🏠",
		route: "/home",
	},
	{
		label: "How it Works ",
		icon: "❔",
		route: "/howitworks",
	},
	{
		label: "Categories",
		icon: "🎨",
		route: "/cat",
		children: {
			icon: "🖥",
			label: "lorem",
			route: "lorem",
		},
	},
];
