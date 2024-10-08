import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsUIUX from '@/components/development/DetailsUIUX';
import UIUXWorkflow from '@/components/workflow/UIUXWorkflow';
import UIUXService from '@/components/service/UIUXService';
import ServiceDetailsFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Thiết kế UI/UX - NPH Digital</title>
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
					<DetailsUIUX />
					<UIUXWorkflow />
					<UIUXService />
					<ServiceDetailsFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
