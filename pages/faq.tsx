import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from '../components/container';

import Layout from '../components/layout';
import Header from '../components/header';
import { getAllFAQ } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import React from 'react';

export default function Index({ allPosts: { edges }, preview }) {
	return (
		<Layout preview={preview}>
			<Head>
				<title>{`FAQs | LigamentCare`}</title>
			</Head>
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
			</div>
			<Header />
			<Container>
				<h3 className="font-bold text-4xl mb-12 mt-16 text-center">
					সচরাচর জিজ্ঞাসিত প্রশ্ন
				</h3>
				<ol
					role="list"
					className="divide-y divide-gray-100 mx-auto"
					style={{ maxWidth: 800, listStyleType: 'bengali' }}
				>
					{edges.map(({ node }) => (
						<li>
							<details className="gap-x-6 py-5 px-3 rounded-lg shadow border mb-2">
								<summary
									className="font-semibold leading-6 text-gray-900"
									dangerouslySetInnerHTML={{ __html: node.title }}
								></summary>
								<div
									className="ml-4 mt-2 max-w-none prose text-gray-500"
									dangerouslySetInnerHTML={{ __html: node.content }}
								></div>
							</details>
						</li>
					))}
				</ol>
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllFAQ(preview);

	return {
		props: { allPosts, preview },
		revalidate: 3600,
	};
};
