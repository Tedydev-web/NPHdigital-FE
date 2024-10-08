import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsUIUX from '@/components/development/DetailsUIUX';
import UIUXWorkflow from '@/components/workflow/UIUXWorkflow';
import UIUXService from '@/components/service/UIUXService';
import UIUXFaq from '@/components/faq/UIUXFaq';
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
					defaultMode="dark">
					<DetailsUIUX />
					<UIUXWorkflow />
					<UIUXService />
					<UIUXFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
