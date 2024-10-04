import Link from 'next/link';
import Testimonial31 from '../../../public/assets/imgs/testimonial/3/1.jpg';
import Testimonial32 from '../../../public/assets/imgs/testimonial/3/2.jpg';
import Testimonial33 from '../../../public/assets/imgs/testimonial/3/3.jpg';
import Testimonial34 from '../../../public/assets/imgs/testimonial/3/4.jpg';
import Testimonial35 from '../../../public/assets/imgs/testimonial/3/5.jpg';
import Testimonial36 from '../../../public/assets/imgs/testimonial/3/6.jpg';
const DigitalAgencyCTA = () => {
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
