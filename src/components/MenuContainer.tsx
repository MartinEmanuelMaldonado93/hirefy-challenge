import { data } from "../data";
import ItemView from "./ItemView";

export default function MenuContainer() {
	return (
		<div className='border p-4 h-full grow'>
			{data.map((item) => (
				<ItemView {...item} />
			))}
		</div>
	);
}
