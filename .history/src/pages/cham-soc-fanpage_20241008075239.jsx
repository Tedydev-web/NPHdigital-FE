import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsFanpage from '@/components/development/DetailsFanpage';
import FanpageWorkflow from '@/components/workflow/FanpageWorkflow';
import FanpageService from '@/components/service/FanpageService';
import FanpageFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Chăm sóc Fanpage - NPH Digital</title>
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
					<DetailsFanpage />
					<FanpageWorkflow />
					<FanpageService />
					<ServiceDetailsFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
