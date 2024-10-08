import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsAI from '@/components/development/DetailsAI';
import AIWorkflow from '@/components/workflow/AIWorkflow';
import AIService from '@/components/service/AIService';
import AIFaq from '@/components/faq/AIFaq';
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
					footer="footer3"
					defaultMode="dark">
					<DetailsAI />
					<AIWorkflow />
					<AIService />
					<AIFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
