import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsWebsite from '@/components/development/DetailsWebsite';
import WebsiteWorkflow from '@/components/workflow/WebsiteWorkflow';
import WebsiteService from '@/components/service/WebsiteService';
import WebsiteFaq from '@/components/faq/WebsiteFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Thiết kế website - NPH Digital</title>
				<meta
					name="description"
					content="Service Details Description"
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
					defaultMode="dark">
					<DetailsWebsite />
					<WebsiteWorkflow />
					<WebsiteService />
					<WebsiteFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
