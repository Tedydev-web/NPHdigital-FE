import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsTuongTacSo from '@/components/development/DetailsTuongTacSo';
import TuongTacSoWorkflow from '@/components/workflow/MobileAppWorkflow';
import ServiceDetailsService from '@/components/service/MobileAppDetailsService';
import ServiceDetailsFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Tương tác số - NPH Digital</title>
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
					<DetailsTuongTacSo />
					<TuongTacSoWorkflow />
					<ServiceDetailsService />
					<ServiceDetailsFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
