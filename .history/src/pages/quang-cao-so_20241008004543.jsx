import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsMarketing from '@/components/development/DetailsMarketing';
import MarketingWorkflow from '@/components/workflow/MarketingWorkflow';
import MarketingService from '@/components/service/MarketingService';
import ServiceDetailsFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Quảng cáo số - NPH Digital</title>
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
					<DetailsMarketing />
					<MarketingWorkflow />
					<MarketingService />
					<ServiceDetailsFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
