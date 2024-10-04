import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyCTA = () => {
	const testimonialArea = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				gsap.set('.animation_video_zoom video', { opacity: 0, scale: 0.5 });

				gsap.to('.animation_video_zoom video', {
					scrollTrigger: {
						trigger: '.testimonial__area-3',
						start: 'top center+=200',
						markers: false,
					},
					opacity: 1,
					scale: 1,
					x: 20,
					ease: 'power2.out',
					duration: 2.5,
					stagger: {
						each: 0.3,
					},
				});
				function videoMoving(wrapper, video_list) {
					let container = wrapper;
					try {
						if (container) {
							container.addEventListener('mousemove', (e) => {
								var x = e.clientX;
								var y = e.clientY;
								let viewportWidth = window.innerWidth;
								let viewportHeight = window.innerHeight;
								let center = viewportWidth / 2;
								let centerHeight = innerHeight / 2;

								if (x > center) {
									gsap.to(video_list, {
										x: 15,
										duration: 5,
										ease: 'power4.out',
									});
								} else {
									gsap.to(video_list, {
										x: -15,
										duration: 5,
										ease: 'power4.out',
									});
								}
								if (y > centerHeight) {
									gsap.to(video_list, {
										y: 15,
										duration: 5,
										ease: 'power4.out',
									});
								} else {
									gsap.to(video_list, {
										y: -15,
										duration: 5,
										ease: 'power4.out',
									});
								}
							});
						}
					} catch (err) {
						console.log(err);
					}
				}
				videoMoving(testimonialArea.current, '.testimonial__area-3 video');
			});
			return () => tHero.revert();
		}
	}, []);

	return (
		<>
			<section className="cta__area">
				<div className="container line pb-110">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="cta__content">
								<p className="cta__sub-title">Liên hệ</p>
								<h2 className="cta__title title-anim">Chúng tôi rất vui khi được lắng nghe những ý tưởng của bạn</h2>
								<div className="btn_wrapper">
									<Link
										href="/contact"
										className="wc-btn-primary btn-hover btn-item">
										<span></span>Liên hệ với <br /> chúng tôi <i className="fa-solid fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="testimonial__area-3"
				ref={testimonialArea}>
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div>
								<Swiper
									modules={[Navigation, FreeMode]}
									spaceBetween={0}
									slidesPerView={1}
									freeMode={true}
									loop={true}
									speed={2000}
									navigation={{
										prevEl: '.prev-button',
										nextEl: '.next-button',
									}}
									className="testimonial__slider-3">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="testimonial__slide-3">
												<p>Chúng tôi tin rằng sự hài lòng của khách hàng là chỉ số thành công tối thượng tại NPH Digital. Cam kết của chúng tôi là cung cấp các giải pháp công nghệ tiên tiến, hiệu quả và dễ sử dụng, giúp các đối tác đạt được mục tiêu kinh doanh. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và không ngừng cải thiện chất lượng dịch vụ để đáp ứng mọi mong đợi..</p>
												<h2 className="client__name-3">Mr. YURI KC</h2>
												<h3 className="client__role-3">CEO NPH Digital</h3>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonial__slide-3">
												<p>Chúng tôi tin rằng sự hài lòng của khách hàng là chỉ số thành công tối thượng tại NPH Digital. Cam kết của chúng tôi là cung cấp các giải pháp công nghệ tiên tiến, hiệu quả và dễ sử dụng, giúp các đối tác đạt được mục tiêu kinh doanh. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và không ngừng cải thiện chất lượng dịch vụ để đáp ứng mọi mong đợi..</p>
												<h2 className="client__name-3">Mr. YURI KC</h2>
												<h3 className="client__role-3">CEO NPH Digital</h3>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonial__slide-3">
												<p>Chúng tôi tin rằng sự hài lòng của khách hàng là chỉ số thành công tối thượng tại NPH Digital. Cam kết của chúng tôi là cung cấp các giải pháp công nghệ tiên tiến, hiệu quả và dễ sử dụng, giúp các đối tác đạt được mục tiêu kinh doanh. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và không ngừng cải thiện chất lượng dịch vụ để đáp ứng mọi mong đợi..</p>
												<h2 className="client__name-3">Mr. YURI KC</h2>
												<h3 className="client__role-3">CEO NPH Digital</h3>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonial__slide-3">
												<p>Chúng tôi tin rằng sự hài lòng của khách hàng là chỉ số thành công tối thượng tại NPH Digital. Cam kết của chúng tôi là cung cấp các giải pháp công nghệ tiên tiến, hiệu quả và dễ sử dụng, giúp các đối tác đạt được mục tiêu kinh doanh. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và không ngừng cải thiện chất lượng dịch vụ để đáp ứng mọi mong đợi..</p>
												<h2 className="client__name-3">Mr. YURI KC</h2>
												<h3 className="client__role-3">CEO NPH Digital</h3>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="testimonial__slide-3">
												<p>Chúng tôi tin rằng sự hài lòng của khách hàng là chỉ số thành công tối thượng tại NPH Digital. Cam kết của chúng tôi là cung cấp các giải pháp công nghệ tiên tiến, hiệu quả và dễ sử dụng, giúp các đối tác đạt được mục tiêu kinh doanh. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và không ngừng cải thiện chất lượng dịch vụ để đáp ứng mọi mong đợi..</p>
												<h2 className="client__name-3">Mr. YURI KC</h2>
												<h3 className="client__role-3">CEO NPH Digital</h3>
											</div>
										</SwiperSlide>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="next-button swipper-btn">
										<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="prev-button swipper-btn">
										<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonial__videos-3 animation_video_zoom">
					<video
						autoplay=""
						playsinline=""
						loop=""
						muted="">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoplay=""
						playsinline=""
						loop=""
						muted="">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoplay=""
						playsinline=""
						loop=""
						muted="">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoplay=""
						playsinline=""
						loop=""
						muted="">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoplay=""
						playsinline=""
						loop=""
						muted="">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoplay=""
						playsinline=""
						loop=""
						muted="">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyCTA;
