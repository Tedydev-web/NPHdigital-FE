import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsSystem from '@/components/development/DetailsSystem';
import SystemWorkflow from '@/components/workflow/SystemWorkflow';
import SystemService from '@/components/service/SystemService';
import SystemFaq from '@/components/faq/SystemFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>CRM - ERP - HRM - NPH Digital</title>
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
					<DetailsSystem />
					<SystemWorkflow />
					<SystemService />
					<SystemFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
