import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial31 from '../../../public/assets/imgs/testimonial/3/1.jpg';
import Testimonial32 from '../../../public/assets/imgs/testimonial/3/2.jpg';
import Testimonial33 from '../../../public/assets/imgs/testimonial/3/3.jpg';
import Testimonial34 from '../../../public/assets/imgs/testimonial/3/4.jpg';
import Testimonial35 from '../../../public/assets/imgs/testimonial/3/5.jpg';
import Testimonial36 from '../../../public/assets/imgs/testimonial/3/6.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Image from 'next/image';
const DigitalAgencyCTA = () => {
	const testimonialArea = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				gsap.set('.animation_image_zoom img', { opacity: 0, scale: 0.5 });

				gsap.to('.animation_image_zoom img', {
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
				function imageMoving(wrapper, image_list) {
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
									gsap.to(image_list, {
										x: 15,
										duration: 5,
										ease: 'power4.out',
									});
								} else {
									gsap.to(image_list, {
										x: -15,
										duration: 5,
										ease: 'power4.out',
									});
								}
								if (y > centerHeight) {
									gsap.to(image_list, {
										y: 15,
										duration: 5,
										ease: 'power4.out',
									});
								} else {
									gsap.to(image_list, {
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
				imageMoving(testimonialArea.current, '.testimonial__area-3 img');
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
				<div className="testimonial__images-3 animation_image_zoom">
					<Image
						priority
						width={170}
						height={200}
						src={Testimonial31}
						alt="testimonial Image"
						className="testimonial3__img"
					/>
					<Image
						priority
						width={90}
						height={100}
						src={Testimonial32}
						alt="testimonial Image"
						className="testimonial3__img-2"
					/>
					<Image
						priority
						width={110}
						height={130}
						src={Testimonial33}
						alt="testimonial Image"
						className="testimonial3__img-3"
					/>
					<Image
						priority
						width={330}
						height={430}
						src={Testimonial34}
						alt="testimonial Image"
						className="testimonial3__img-4"
					/>
					<Image
						priority
						width={245}
						height={278}
						src={Testimonial35}
						alt="testimonial Image"
						className="testimonial3__img-5"
					/>
					<Image
						priority
						width={140}
						height={160}
						src={Testimonial36}
						alt="testimonial Image"
						className="testimonial3__img-6"
					/>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyCTA;
