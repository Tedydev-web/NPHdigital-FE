import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsWebsite from '@/components/development/DetailsWebsite';
import WebsiteDetailsWorkflow from '@/components/workflow/WebsiteWorkflow';
import WebsiteDetailsService from '@/components/service/WebsiteDetailsService';
import ServiceDetailsFaq from '@/components/faq/MobileAppFaq';
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
					footer="footer3">
					<DetailsWebsite />
					<WebsiteDetailsWorkflow />
					<WebsiteDetailsService />
					<ServiceDetailsFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
