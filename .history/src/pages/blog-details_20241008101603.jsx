import { useState, useRef } from 'react';
import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails1 from '@/components/blog/BlogDetails1';
import BlogRelated from '@/components/blog/BlogRelated';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import Switcher from '@/components/Switcher';

const BlogDetails = () => {
	const [mode, setMode] = useState(''); // Default mode can be set here
	const cursor1 = useRef();
	const cursor2 = useRef();

	return (
		<>
			<Head>
				<title>Blog Details</title>
				<meta
					name="description"
					content="Blog Details Description"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main>
				<RootLayout
					header="header3"
					footer="footer3">
					<BlogDetails1 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
				<Switcher
					setMode={setMode}
					mode={mode}
					cursor1={cursor1}
					cursor2={cursor2}
				/>
			</main>
		</>
	);
};

export default BlogDetails;
