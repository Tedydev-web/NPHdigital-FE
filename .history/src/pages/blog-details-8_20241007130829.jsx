import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails8 from '@/components/blog/BlogDetails8';
import BlogRelated from '@/components/blog/BlogRelated';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const BlogDetails = () => {
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
					<BlogDetails8 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default BlogDetails8;
