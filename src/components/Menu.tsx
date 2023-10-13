import Footer from "./Footer";
import MenuContainer from "./MenuContainer";

export default function Menu() {
	return (
		<div className='flex flex-col min-h-screen p-4 w-full justify-between'>
			{/* <Header /> */}
			<div className='flex justify-between p-4 rounded-md rounded-b-[0px]  bg-hirefy-blue text-white'>
				<span>
					<h3 className='font-bold text-xl'>🎁 Hirefy</h3>
				</span>
				<span>X</span>
			</div>
			<MenuContainer />
			<Footer />
		</div>
	);
}
