export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='px-4  text-blue-500'>
			<div className='flex gap-2'>
				<div>Terms</div>
				<div>Privacy</div>
				<div>Security</div>
				<div>Version</div>
			</div>
			<div className='flex w-full grow text-blue-950 my-6'>
				® {currentYear} Hirefy. LLC
			</div>
		</footer>
	);
}
