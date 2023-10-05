import Link from 'next/link';
export default function Footer() {
	return (
		<footer className="bg-accent-1 border-t border-accent-2">
			<nav className="text-center">
				<div className=" mt-2 ">
					<Link href="/">LigamentCare</Link>
				</div>
			</nav>
		</footer>
	);
}
