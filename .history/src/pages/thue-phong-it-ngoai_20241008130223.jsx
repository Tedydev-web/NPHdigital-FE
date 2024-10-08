import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsIT from '@/components/development/DetailsIT';
import ITWorkflow from '@/components/workflow/ITWorkflow';
import ITService from '@/components/service/ITService';
import ITFaq from '@/components/faq/ITFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Cho thuê phòng IT - NPH Digital</title>
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
					<DetailsIT />
					<ITWorkflow />
					<ITService />
					<ITFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
