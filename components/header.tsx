import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav className="text-center">
				<div className="font-extrabold  ">
					<Link href="/">LigamentCare</Link>
				</div>
			</nav>
		</header>
	);
}
