import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails14 from '@/components/blog/BlogDetails14';
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
					footer="footer3"
					defaultMode="light">
					<BlogDetails14 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default BlogDetails14;
