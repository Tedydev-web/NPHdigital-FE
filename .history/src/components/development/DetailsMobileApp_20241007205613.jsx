import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/thumb/dev-1.jpg';
import ThumbDev2 from '../../../public/assets/imgs/thumb/dev-2.jpg';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsMobileApp = () => {
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
									<p>Chúng tôi cung cấp giải pháp phát triển ứng dụng di động toàn diện, từ việc lên ý tưởng, thiết kế giao diện UI/UX cho đến phát triển ứng dụng gốc và ứng dụng đa nền tảng.</p>
									<p>Với đội ngũ lập trình viên có kinh nghiệm và kỹ thuật tiên tiến, chúng tôi đảm bảo mang đến sản phẩm ứng dụng di động chất lượng cao, tương thích với iOS và Android, tối ưu hiệu suất, bảo mật cao và trải nghiệm người dùng vượt trội.</p>
								</div>
								<ul>
									<li>+ Phát triển ứng dụng gốc cho iOS và Android</li>
									<li>+ Phát triển ứng dụng đa nền tảng sử dụng Flutter và React Native</li>
									<li>+ Tích hợp API và dịch vụ backend</li>
									<li>+ Bảo mật và quản lý dữ liệu</li>
									<li>+ Cải tiến giao diện UI/UX</li>
									<li>+ Hỗ trợ và bảo trì ứng dụng dài hạn</li>
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

export default DetailsMobileApp;
