import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Portfilio31 from '../../../public/assets/imgs/service/5/service 1@4x.jpg';
import Portfilio32 from '../../../public/assets/imgs/service/5/service 2@4x.jpg';
import Portfilio33 from '../../../public/assets/imgs/service/5/service 3@4x.jpg';
import Portfilio34 from '../../../public/assets/imgs/service/5/service 4@4x.jpg';
import Portfilio35 from '../../../public/assets/imgs/service/5/service 5@4x.png';
import Portfilio36 from '../../../public/assets/imgs/service/5/service 6@4x.png';
import Portfilio37 from '../../../public/assets/imgs/service/5/service 7@4x.png';
import Portfilio38 from '../../../public/assets/imgs/service/5/service 8@4x.png';
import Portfilio39 from '../../../public/assets/imgs/service/5/service 9@4x.png';
import Portfilio40 from '../../../public/assets/imgs/service/5/service 10@4x.png';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import animationCharCome from '@/lib/utils/animationCharCome';

const PortfolioElementV4 = () => {
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
	}, []);
	return (
		<>
			<section className="portfolio__area-3 portfolio-v4">
				<div className="container pt-100 pb-150">
					<div className="row pb-150">
						<div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title-2 animation__char_come"
									ref={charAnim}
									style={{ lineHeight: '1.2' }}>
									Dịch vụ của <br />
									NPH Digital
								</h2>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
							<div className="blog__text">
								<p>Chúng tôi hiểu rằng mỗi dự án độc đáo đều đòi hỏi sự sáng tạo. Vì thế, NPH Digital không ngừng nỗ lực lắng nghe, học hỏi nhằm mang đến những giá trị tốt nhất dành cho bạn.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-sub-title title-anim">
									Dịch vụ
									<br />
									của chúng tôi
								</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xxl-12 portfolio__slider-3">
							<Swiper
								modules={[Navigation, Pagination, Autoplay, EffectFade]}
								effectfade="true"
								loop={true}
								speed={1500}
								autoplay={{
									delay: 500000,
									disableOnInteraction: false,
								}}
								navigation={{
									prevEl: '.pp-prev',
									nextEl: '.pp-next',
								}}
								pagination={{ el: '.swiper-pagination', type: 'fraction' }}>
								<div className="swiper-wrapper">
									{/* Phát triển ứng dụng di động */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Phát triển <span>ứng dụng</span>di động
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio31}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Thiết kế & Phát triển Website */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Thiết kế <span>& Phát triển</span>Website
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio32}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Digital Marketing */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Digital <span>Marketing</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio33}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Thiết kế UI/UX */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Thiết kế <span>UI/UX</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio34}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Chăm sóc Fanpage */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Chăm sóc <span>Fanpage</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio35}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Tương tác số */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">Tương tác số</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio36}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Setup sàn thương mại điện tử */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Setup sàn<span>thương mại</span>điện tử
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio37}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Phát triển hệ thống CRM, ERP, HRM */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Phát triển<span>hệ thống</span>CRM, ERP, HRM
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio38}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Lập trình AI tự động hoá */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Lập trình AI<span>tự động hoá</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio39}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Thuê Phòng IT ngoài */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="#">
												<h3 className="portfolio__title-3">
													Thuê Phòng <span>IT ngoài</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio40}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>
								</div>

								<div className="swiper-pagination"></div>

								<div className="swiper-btn">
									<div
										style={{ cursor: 'pointer' }}
										className="pp-prev">
										<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="pp-next">
										<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
									</div>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioElementV4;
