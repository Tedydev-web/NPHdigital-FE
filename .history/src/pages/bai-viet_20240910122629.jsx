import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import StartupAgencyBlog from '@/components/blog/StartupAgencyBlog';
import DesignStudioCTA from '@/components/cta/DesignStudioCTA';

const Blog = () => {
	return (
		<>
			<Head>
				<title>Bài viết - NPH Digital</title>
				<meta
					name="description"
					content="Blog Description"
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
					<StartupAgencyBlog />
					<DesignStudioCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default Blog;
