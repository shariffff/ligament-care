import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';

export default function Index({ allPosts: { edges }, preview }) {
	return (
		<Layout preview={preview}>
			<Head>
				<title>{`LigamentCare`}</title>
			</Head>
			<div className="bg-white">
				<div className="relative isolate px-6 pt-14 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
					</div>
					<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
						<div className="mb-8 sm:flex sm:justify-center text-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
								এই সাইটটি কোন ডাক্তার দ্বারা পরিচালিত নয়।
								<span className="block sm:inline">
									{' '}
									অনুগ্রহ করে সব তথ্য যাচাই করুন।
								</span>
							</div>
						</div>
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								LigamentCare
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								লিগামেন্ট ইঞ্জুরড পেশেন্টদের অনেক প্রশ্ন থাকে। সবগুলো প্রশ্ন এবং
								এর সম্ভাব্য উত্তর গুলো একত্র করার চেষ্টা করেছি মাত্র। আশা করছি
								আপনি উপকৃত হবেন। এই সাইটের বেশীরভাগ তথ্য ফেসবুক গ্রুপ ACL
								cordial comrade (BANGLADESH 🇧🇩 ) থেকে সংগ্রহ করা।
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									<Link href="/doctors">ডাক্তারদের তালিকা</Link>
								</div>

								<div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									<Link href="/faq">সচারাচর জিজ্ঞাসিত প্রশ্ন</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					>
						<div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPostsForHome(preview);

	return {
		props: { allPosts, preview },
		revalidate: 10,
	};
};
