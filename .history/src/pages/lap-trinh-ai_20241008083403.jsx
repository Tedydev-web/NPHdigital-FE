import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import AI from '@/components/development/ServiceDetailsDevelopment';
import AIWorkflow from '@/components/workflow/MobileAppWorkflow';
import AIService from '@/components/service/MobileAppDetailsService';
import AIFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Lập trình AI - NPH Digital</title>
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
					<ServiceDetailsDevelopment />
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
