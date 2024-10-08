import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceHero from '@/components/hero/ServiceHero';
import Service1 from '@/components/service/Service1';
import ServiceElementV5 from '@/components/service/ServiceElementV5';
import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceV5 = () => {
	return (
		<>
			<Head>
				<title>Dịch vụ - NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ của NPH Digital - Cung cấp giải pháp kỹ thuật số sáng tạo và hiệu quả."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="keywords"
					content="NPH Digital, dịch vụ kỹ thuật số, giải pháp sáng tạo, hiệu quả, công nghệ"
				/>
				<meta
					property="og:title"
					content="Dịch vụ - NPH Digital"
				/>
				<meta
					property="og:description"
					content="Dịch vụ của NPH Digital - Cung cấp giải pháp kỹ thuật số sáng tạo và hiệu quả."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/dich-vu"
				/>
				<meta
					property="og:image"
					content="https://www.nphdigital.com/images/og-image.jpg"
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="Dịch vụ - NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Dịch vụ của NPH Digital - Cung cấp giải pháp kỹ thuật số sáng tạo và hiệu quả."
				/>
				<meta
					name="twitter:image"
					content="https://www.nphdigital.com/images/twitter-image.jpg"
				/>
				<link
					rel="canonical"
					href="https://www.nphdigital.com/dich-vu"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main>
				<RootLayout
					header="header3"
					footer="footer3">
					<ServiceHero />
					<Service1 />
					<ServiceElementV5 />
					<DigitalAgencyBrand />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceV5;
