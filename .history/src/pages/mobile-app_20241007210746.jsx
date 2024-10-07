import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsMobileApp from '@/components/development/DetailsMobileApp';
import MobileAppWorkflow from '@/components/workflow/MobileAppWorkflow';
import MobileAppDetailsService from '@/components/service/MobileAppDetailsService';
import MobileAppFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Phát triển ứng dụng di động</title>
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
					<DetailsMobileApp />
					<MobileAppWorkflow />
					<MobileAppDetailsService />
					<MobileAppFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
