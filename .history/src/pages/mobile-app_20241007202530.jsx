import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsMobileApp from '@/components/development/DetailsMobileApp';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
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
					<ServiceDetailsWorkflow />
					<ServiceDetailsService />
					<ServiceDetailsFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
