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
			<section className="development__area">
				<div className="container g-0 line pt-130 pb-150">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title animation__char_come"
									ref={charAnim}>
									Phát triển Mobile App
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi cung cấp dịch vụ quảng cáo số chuyên nghiệp giúp nâng cao nhận diện thương hiệu và thúc đẩy doanh thu.</p>
									<p>Mỗi chiến dịch quảng cáo số của chúng tôi đều được thiết kế đặc thù nhằm tối ưu hóa lợi ích cho khách hàng, sử dụng các giải pháp công nghệ tiên tiến nhất.</p>
								</div>
								<ul>
									<li>+ Phát triển ứng dụng gốc cho iOS và Android với Swift, Kotlin, Java</li>
									<li>+ Phát triển ứng dụng đa nền tảng với Flutter, React Native</li>
									<li>+ Tích hợp API và dịch vụ backend</li>
									<li>+ Bảo mật ứng dụng với mã hóa và xác thực an toàn</li>
									<li>+ Tối ưu hiệu suất ứng dụng</li>
									<li>+ Hỗ trợ bảo trì và cập nhật liên tục</li>
								</ul>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
							<div className="development__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbDev1}
									alt="Development Image"
									data-speed="auto"
								/>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<div className="development__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbDev2}
									alt="Development Image"
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
