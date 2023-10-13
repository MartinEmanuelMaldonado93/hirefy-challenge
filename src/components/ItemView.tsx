import { useState } from "react";
import { Item } from "../../types";

export default function ItemView({ icon, label, route, children }: Item) {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className='flex flex-col font-semibold text-blue-950  '>
			<div className='flex justify-between w-full hover:bg-blue-200 transition-all p-2 rounded-md '>
				<a href={route} className='flex'>
					<span>{icon}</span>
					<div>{label}</div>
				</a>
				{children ? (
					<button type='button' onClick={() => setIsClicked(!isClicked)}>
						{isClicked ? (
							<span className='px-2 text-lg font-bold rounded-md  bg-blue-100 hover:bg-blue-300 transition'>
								↑
							</span>
						) : (
							<span className='px-2 text-lg font-bold rounded-md  bg-blue-100 hover:bg-blue-300 transition'>
								↓
							</span>
						)}
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
