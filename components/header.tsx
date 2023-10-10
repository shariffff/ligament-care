import Link from 'next/link';

export default function Header() {
	return (
		<header className="py-4">
			<nav className="text-center">
				<div className="font-extrabold  ">
					<Link className="underline" href="/">
						LigamentCare
					</Link>
				</div>
			</nav>
		</header>
	);
}
