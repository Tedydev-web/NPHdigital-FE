import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import RootLayout from '@/components/common/layout/RootLayout';
import AboutCounter from '@/components/counter/AboutCounter';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import AboutHero from '@/components/hero/AboutHero';
import AboutStory from '@/components/story/AboutStory';
// import AboutTeam from '@/components/team/AboutTeam';
import AboutTestimonial from '@/components/testimonial/AboutTestimonial';
import Head from 'next/head';

const About = () => {
	return (
		<div className="dark-theme">
			<Head>
				<title>Giới thiệu - NPH Digital</title>
				<meta
					name="description"
					content="Giới thiệu về NPH Digital - Dịch vụ kỹ thuật số hàng đầu, cung cấp giải pháp sáng tạo và hiệu quả."
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
					content="Giới thiệu - NPH Digital"
				/>
				<meta
					property="og:description"
					content="Giới thiệu về NPH Digital - Dịch vụ kỹ thuật số hàng đầu, cung cấp giải pháp sáng tạo và hiệu quả."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/gioi-thieu"
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
					content="Giới thiệu - NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Giới thiệu về NPH Digital - Dịch vụ kỹ thuật số hàng đầu, cung cấp giải pháp sáng tạo và hiệu quả."
				/>
				<meta
					name="twitter:image"
					content="https://www.nphdigital.com/images/twitter-image.jpg"
				/>
				<style jsx>{`
					.dark-theme {
						background-color: black;
						color: #ffffff;
					}

					.dark-theme a {
						color: #bb86fc;
					}

					.dark-theme .button {
						background-color: #bb86fc;
						color: #121212;
					}
				`}</style>
			</Head>
			<main>
				<RootLayout defaultMode={mode}>
					<AboutHero />
					<AboutStory />
					<AboutCounter />
					{/* <AboutTeam /> */}
					<DigitalAgencyBrand />
					<AboutTestimonial />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</div>
	);
};

export default About;
