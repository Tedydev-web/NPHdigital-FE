import { useEffect, useRef } from 'react';
import ThumbAds1 from '../../../public/assets/imgs/thumb/ads-1.jpg';
import ThumbAds2 from '../../../public/assets/imgs/thumb/ads-2.jpg';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsDigital = () => {
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
	}, []);
	return (
		<>
			<section className="advertisement__area">
				<div className="container g-0 line pt-130 pb-150">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title animation__char_come"
									ref={charAnim}>
									Dịch Vụ Quảng Cáo Số
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="advertisement__wrapper">
								<div className="advertisement__content">
									<p>
										Quảng cáo số là công cụ mạnh mẽ giúp doanh nghiệp tiếp cận đúng đối tượng khách hàng, nâng cao độ nhận diện thương hiệu và tăng trưởng doanh thu.
										Tại NPH Digital, chúng tôi cung cấp giải pháp toàn diện với mục tiêu gia tăng lợi nhuận bền vững cho đối tác.
									</p>
									<p>
										Quy trình của chúng tôi bao gồm việc phân tích thị trường, xác định chiến lược quảng cáo tối ưu và triển khai chiến dịch hiệu quả nhằm mang lại kết quả tốt nhất cho khách hàng.
									</p>
								</div>
								<ul>
									<li>+ Quảng cáo Google Ads</li>
									<li>+ Quảng cáo Facebook</li>
									<li>+ Quảng cáo Instagram</li>
									<li>+ Quảng cáo YouTube</li>
									<li>+ Tối ưu hóa công cụ tìm kiếm (SEO)</li>
									<li>+ Quảng cáo hiển thị đa kênh (Display Ads)</li>
								</ul>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
							<div className="advertisement__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbAds1}
									alt="Advertisement Image"
									data-speed="auto"
								/>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<div className="advertisement__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbAds2}
									alt="Advertisement Image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailsDigital;
