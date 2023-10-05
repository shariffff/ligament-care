import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from '../components/container';

import Layout from '../components/layout';
import Header from '../components/header';
import { allDoctorsBasicInfo } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import React from 'react';

export default function Index({ allPosts: { edges }, preview }) {
	return (
		<Layout preview={preview}>
			<Head>
				<title>{`Doctors List | Ligament Care`}</title>
			</Head>
			<Header />
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
			</div>
			<Container>
				<h3 className="font-bold text-4xl mb-12 mt-16 text-center">
					ডাক্তারদের তালিকা
				</h3>
				<div className="mx-auto" style={{ maxWidth: 800 }}>
					{edges.map(({ node }) => (
						<details className="mx-auto my-10 bg-white rounded-lg shadow-md p-5">
							<summary className=" text-xl font-semibold mt-3">
								<div className=" underline underline-offset-4 text-blue-500 ">
									{node.title}
								</div>
								<div className="text-sm underline-offset-0 text-sm text-gray-500 font-normal	">
									{node.additionalInfo.address}
								</div>
							</summary>

							<div className=" mt-2 truncate text-sm leading-5">
								{node.additionalInfo.operationCost &&
									`Operation Cost: ${node.additionalInfo.operationCost}`}
							</div>
						</details>
					))}
				</div>
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await allDoctorsBasicInfo(preview);

	return {
		props: { allPosts, preview },
		revalidate: 10,
	};
};
