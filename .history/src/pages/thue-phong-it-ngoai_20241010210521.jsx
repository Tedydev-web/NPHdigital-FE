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
				<title>Cho thuê phòng IT ngoài | NPH Digital</title>
				<meta
					name="description"
					content="Cho thuê nhân sự IT chuyên nghiệp, trang bị đầy đủ thiết bị máy tính, internet tốc độ cao và các công cụ cần thiết để xử lý các vấn đề IT của khách hàng."
				/>
				<meta
					name="keywords"
					content="Giải pháp kỹ thuật số, Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, Thuê ngoài IT, NPH Digital"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Giải Pháp kỹ thuật số toàn diện"
				/>
				<meta
					property="og:description"
					content="NPH Digital - Giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com"
				/>
				<meta
					property="og:image"
					content="/public/cover.png"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="NPH Digital | Giải Pháp kỹ thuật số toàn diện"
				/>
				<meta
					name="twitter:description"
					content="NPH Digital - Giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
				/>
				<meta
					name="twitter:image"
					content="/public/cover.png"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://www.nphdigital.com"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="/public/favicon.ico"
				/>
				<link
					rel="apple-touch-icon"
					href="/public/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/public/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/public/favicon-16x16.png"
					sizes="16x16"
				/>

				{/* Other Meta Tags */}
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=UTF-8"
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
