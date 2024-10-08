import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails2 from '@/components/blog/BlogDetails2';
import BlogRelated from '@/components/blog/BlogRelated';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import Switcher from '../components/common/Switcher';

const BlogDetails = () => {
	return (
		<>
			<Switcher
				setMode={setMode}
				mode={mode}
				cursor1={cursor1}
				cursor2={cursor2}
			/>
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
					<BlogDetails2 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default BlogDetails2;
