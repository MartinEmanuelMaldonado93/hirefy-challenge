import { useState } from "react";
import { Item } from "../../types";

export default function ItemView({ icon, label, route, children }: Item) {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className='flex flex-col font-semibold text-blue-950 hover:bg-blue-200 p-2 rounded-md transition-all'>
			<div className='flex justify-between w-full'>
				<a href={route} className='flex'>
					<span>{icon}</span>
					<div>{label}</div>
				</a>
				{children ? (
					<button type='button' onClick={() => setIsClicked(!isClicked)}>
						{isClicked ? <span>↓</span> : <span>↑</span>}
					</button>
				) : null}
			</div>
			<div>
				{children && isClicked ? (
					Array.isArray(children) ? (
						children.map((child) => <ItemView {...child} />)
					) : (
						<ItemView {...children} />
					)
				) : null}
			</div>
		</div>
	);
}
/// if has children don't showup
