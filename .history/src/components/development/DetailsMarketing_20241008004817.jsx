import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/thumb/dev-1.jpg';
import ThumbDev2 from '../../../public/assets/imgs/thumb/dev-2.jpg';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsMarketing = () => {
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
	}, []);
	return (
		<>
			<section className="marketing__area">
				<div className="container g-0 line pt-130 pb-150">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title animation__char_come"
									ref={charAnim}>
									Quảng cáo số chuyên nghiệp
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="marketing__wrapper">
								<div className="marketing__content">
									<p>Tại NPH Digital, chúng tôi cung cấp dịch vụ quảng cáo số chuyên nghiệp, giúp doanh nghiệp của bạn tiếp cận đúng đối tượng mục tiêu, tối ưu chi phí, và nâng cao hiệu quả chiến lược tiếp thị trực tuyến. Chúng tôi không chỉ tạo ra các chiến dịch quảng cáo hiệu quả, mà còn giúp doanh nghiệp xây dựng thương hiệu bền vững trong môi trường số cạnh tranh.</p>
									<p>Chúng tôi tuân thủ quy trình quảng cáo chuyên nghiệp, từ nghiên cứu đối tượng, tạo nội dung quảng cáo, đến việc phân phối trên các nền tảng và tối ưu hóa liên tục. Đội ngũ chuyên gia của chúng tôi luôn đảm bảo các chiến dịch mang lại hiệu quả tối đa với ngân sách được sử dụng một cách hiệu quả nhất.</p>
								</div>
								<ul>
									<li>+ Xây dựng chiến lược quảng cáo đa kênh: Google Ads, Facebook Ads, Instagram Ads</li>
									<li>+ Tối ưu hóa quảng cáo để đạt ROI cao nhất</li>
									<li>+ Nghiên cứu và phân tích hành vi đối tượng mục tiêu</li>
									<li>+ Sử dụng các công cụ đo lường hiệu quả như Google Analytics, Facebook Pixel</li>
									<li>+ Tạo nội dung quảng cáo hấp dẫn và tối ưu hóa chuyển đổi</li>
									<li>+ Hỗ trợ bảo trì và cập nhật chiến dịch liên tục</li>
								</ul>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
							<div className="marketing__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbDev1}
									alt="Marketing Image"
									data-speed="auto"
								/>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<div className="marketing__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbDev2}
									alt="Marketing Image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailsMarketing;
