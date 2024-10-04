import { useEffect, useRef } from 'react';
import Story1 from '../../../public/assets/imgs/story/1.jpg';
import Story2 from '../../../public/assets/imgs/story/2.jpg';
import Story3 from '../../../public/assets/imgs/story/3.jpg';
import Story4 from '../../../public/assets/imgs/story/4.jpg';
import Image from 'next/image';

const AboutStory = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Import GSAP dynamically, so it only loads on the client-side
			import('gsap').then((gsap) => {
				import('gsap/ScrollTrigger').then(() => {
					gsap.registerPlugin(ScrollTrigger);

					const mm = gsap.matchMedia();

					mm.add('(min-width: 1024px)', () => {
						// Animation for desktop
						gsap.fromTo(
							videoRef.current,
							{ opacity: 0, scale: 0.8 },
							{
								opacity: 1,
								scale: 1,
								duration: 2,
								ease: 'power2.out',
								scrollTrigger: {
									trigger: videoRef.current,
									start: 'top 80%',
									end: 'top 50%',
									scrub: true,
								},
							}
						);
					});

					mm.add('(max-width: 1023px)', () => {
						// Animation for mobile and tablet
						gsap.fromTo(
							videoRef.current,
							{ opacity: 0 },
							{
								opacity: 1,
								duration: 1,
								ease: 'power2.out',
								scrollTrigger: {
									trigger: videoRef.current,
									start: 'top 90%',
									end: 'top 70%',
									scrub: true,
								},
							}
						);
					});

					return () => {
						mm.revert(); // Clean up GSAP animations when the component unmounts
					};
				});
			});
		}
	}, []);

	return (
		<>
			<section className="story__area">
				<div className="container g-0 line pt-140">
					<span className="line-3"></span>
					<div className="sec-title-wrapper">
						<div className="row">
							<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
								<h2 className="sec-sub-title title-anim">NPH Digital</h2>
								<h3 className="sec-title title-anim">Lịch sử phát triển</h3>
							</div>
							<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
								<div className="story__text">
									<p style={{ textAlign: 'justify' }}>Hơn bao giờ hết, kỷ nguyên Công nghệ thông tin ngày nay đang dần chiếm ưu thế và trở thành xu hướng toàn cầu. Công nghệ giúp chúng ta có thể giao tiếp và kết nối với nhau một cách dễ dàng, tiết kiệm được nhiều chi phí, đồng thời là một nguồn lưu trữ dữ liệu khổng lồ giúp cho con người không ngừng phát triển.</p>
									<p style={{ textAlign: 'justify' }}>Nắm bắt được những cơ hội đó, Đối tác dịch vụ Công nghệ thông tin “NPH Digital” đã được thành lập. Chúng tôi không ngừng nỗ lực phát triển với sứ mệnh cung cấp những giải pháp công nghệ thông tin, dịch vụ tốt nhất tới tay khách hàng. Qua một chặng đường xây dựng và phát triển, NPH Digital đã dần khẳng định được vị trí của mình trong ngành công nghệ thông tin. Đến với NPH Digital, các bạn không chỉ yên tâm về sản phẩm, dịch vụ mà còn cảm nhận được sự nhiệt huyết đam mê công nghệ của đội ngũ nhân viên có trình độ, kinh nghiệm từ chúng tôi.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
							<div
								className="pin-spacer"
								style={{ width: '1456px', height: '630px', position: 'relative' }}>
								<div
									className="cb-overview-offset"
									style={{ width: '1455.5px', height: '630.023px' }}>
									<div className="cb-overview-figure -offsetable">
										<div className="cb-overview-figure-bg -v1"></div>
										<div className="cb-overview-figure-media -sm">
											<video
												ref={videoRef}
												autoPlay
												playsInline
												loop
												muted>
												<source
													data-src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
													type="video/webm"
													src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
												/>
												<source
													data-src="https://cdn.cuberto.com/cb/hello/overview/2.mp4"
													type="video/mp4"
													src="https://cdn.cuberto.com/cb/hello/overview/2.mp4"
												/>
											</video>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutStory;
