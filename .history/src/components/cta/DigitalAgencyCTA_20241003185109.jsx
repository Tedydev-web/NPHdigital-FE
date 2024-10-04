import Link from 'next/link';

const DigitalAgencyCTA = () => {
	return (
		<>
			<section className="cta__area">
				<VideoBackground
					videoSrcLarge="https://cdn.cuberto.com/cb/footer/1.mp4"
					videoSrcSmall="https://cdn.cuberto.com/cb/footer/1.mp4?2"
				/>
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
		</>
	);
};

export default DigitalAgencyCTA;
