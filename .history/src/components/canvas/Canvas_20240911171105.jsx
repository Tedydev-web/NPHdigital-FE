import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import logoWhite2 from '../../../public/assets/imgs/logo/site-logo-white-2.png';
import Shape11 from '../../../public/assets/imgs/shape/11.png';
import Shape12 from '../../../public/assets/imgs/shape/12.png';
import Image from 'next/image';

const Canvas = ({ bladeMode = '', ofCanvasArea }) => {
	const [accordion, setAccordion] = useState(0);
	const [subAccordion, setSubAccordion] = useState(0);
	const headerTitle = useRef();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setTimeout(() => {
				if (headerTitle.current) {
					let rootParent = headerTitle.current.children;
					for (let i = 0; i < rootParent.length; i++) {
						let firstParent = rootParent[i].children;
						for (let j = 0; j < firstParent.length; j++) {
							if (firstParent[j].className.includes('header_title')) {
								let arr = firstParent[j].children[0].textContent.split('');
								let spanData = '';
								for (let k = 0; k < arr.length; k++) {
									if (arr[k] == ' ') {
										spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
									} else {
										spanData += `<span>${arr[k]}</span>`;
									}
								}
								let result = '<div className="menu-text">' + spanData + '</div>';
								firstParent[j].children[0].innerHTML = result;
							}
						}
					}
				}
			}, 10);
		}
	}, []);
	const openData = (data) => {
		setAccordion(data);
	};
	const openSubData = (data) => {
		setSubAccordion(data);
	};
	const closeCanvas = () => {
		ofCanvasArea.current.style.opacity = '0';
		ofCanvasArea.current.style.visibility = 'hidden';
		if (bladeMode) {
			let header_bg = bladeMode;
			header_bg.style.setProperty('mix-blend-mode', 'exclusion');
		}
	};
	return (
		<>
			<div
				className="offcanvas__area"
				ref={ofCanvasArea}>
				<div className="offcanvas__body">
					<div className="offcanvas__left">
						<div className="offcanvas__logo">
							<Link href="/trang-chu">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={logoWhite2}
									alt="Offcanvas Logo"
								/>
							</Link>
						</div>
						<div className="offcanvas__social">
							<h3 className="social-title">Theo dõi chúng tôi</h3>
							<ul class="example-2">
								<li class="icon-content">
									<a
										data-social="zalo"
										aria-label="Zalo"
										href="https://zalo.me/2599746016148700210?src=qr&f=1">
										<div class="filled"></div>
										<svg
											className="svgZalo"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="40"
											height="40"
											viewBox="0 0 48 48">
											<path
												fill="#2962ff"
												d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path>
											<path
												fill="#eee"
												d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path>
											<path
												fill="#2962ff"
												d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path>
											<path
												fill="#2962ff"
												d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path>
											<path
												fill="#2962ff"
												d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path>
											<path
												fill="#2962ff"
												d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
										</svg>
									</a>
									<div class="tooltip">Zalo</div>
								</li>
								<li class="icon-content">
									<a
										data-social="wechat"
										aria-label="WeChat"
										href="#">
										<di class="filled"></di>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="48"
											height="48"
											viewBox="0 0 48 48">
											<linearGradient
												id="Mmo7SUtG3BkDNtKK7Uc18a_g6K6MWJPKeyk_gr1"
												x1="2.874"
												x2="24.916"
												y1="5.771"
												y2="31.217"
												gradientUnits="userSpaceOnUse">
												<stop
													offset="0"
													stop-color="#33c481"></stop>
												<stop
													offset="1"
													stop-color="#21a366"></stop>
											</linearGradient>
											<path
												fill="url(#Mmo7SUtG3BkDNtKK7Uc18a_g6K6MWJPKeyk_gr1)"
												d="M18,6C9.2,6,2,12,2,19.5c0,4.3,2.3,8,6,10.5l-2,6l6.3-3.9C14,32.7,16,33,18,33	c8.8,0,16-6,16-13.5S26.8,6,18,6z"></path>
											<path
												d="M19,29c0,1.371,0.283,2.684,0.779,3.912C27.749,32.167,34,26.487,34,19.5	c0-0.845-0.104-1.668-0.279-2.469C33.481,17.021,33.243,17,33,17C25.28,17,19,22.383,19,29z"
												opacity=".05"></path>
											<path
												d="M19.5,29c0,1.35,0.289,2.641,0.793,3.846C28.014,31.908,34,26.335,34,19.5	c0-0.67-0.077-1.322-0.188-1.965C33.542,17.521,33.274,17.5,33,17.5C25.556,17.5,19.5,22.659,19.5,29z"
												opacity=".07"></path>
											<linearGradient
												id="Mmo7SUtG3BkDNtKK7Uc18b_g6K6MWJPKeyk_gr2"
												x1="20.478"
												x2="43.542"
												y1="17.541"
												y2="38.647"
												gradientUnits="userSpaceOnUse">
												<stop
													offset="0"
													stop-color="#f0f0f0"></stop>
												<stop
													offset="1"
													stop-color="#bbc1c4"></stop>
											</linearGradient>
											<path
												fill="url(#Mmo7SUtG3BkDNtKK7Uc18b_g6K6MWJPKeyk_gr2)"
												d="M46,29c0-6.1-5.8-11-13-11s-13,4.9-13,11s5.8,11,13,11c1.8,0,3.5-0.3,5-0.8l5,2.8l-1.4-4.8	C44.3,35.2,46,32.3,46,29z"></path>
											<path
												fill="#135d36"
												d="M14,15c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,13.9,14,15z M24,13c-1.1,0-2,0.9-2,2s0.9,2,2,2	s2-0.9,2-2S25.1,13,24,13z"></path>
											<path
												fill="#474747"
												d="M30,26.5c0,0.8-0.7,1.5-1.5,1.5S27,27.3,27,26.5s0.7-1.5,1.5-1.5S30,25.7,30,26.5z M37.5,25	c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S38.3,25,37.5,25z"></path>
										</svg>
									</a>
									<div class="tooltip">WeChat</div>
								</li>
								<li class="icon-content">
									<a
										data-social="facebook"
										aria-label="Facebook"
										href="https://www.facebook.com/nphdigital838">
										<div class="filled"></div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="48"
											height="48"
											viewBox="0 0 48 48">
											<linearGradient
												id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
												x1="9.993"
												x2="40.615"
												y1="9.993"
												y2="40.615"
												gradientUnits="userSpaceOnUse">
												<stop
													offset="0"
													stop-color="#2aa4f4"></stop>
												<stop
													offset="1"
													stop-color="#007ad9"></stop>
											</linearGradient>
											<path
												fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
												d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
											<path
												fill="#fff"
												d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
										</svg>
									</a>
									<div class="tooltip">Facebook</div>
								</li>
								<li class="icon-content">
									<a
										data-social="tiktok"
										aria-label="TikTok"
										href="#">
										<div class="filled"></div>
										<svg
											className="svgTiktok"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="48"
											height="48"
											viewBox="0 0 48 48">
											<path
												fill="#212121"
												fill-rule="evenodd"
												d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
												clip-rule="evenodd"></path>
											<path
												fill="#ec407a"
												fill-rule="evenodd"
												d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
												clip-rule="evenodd"></path>
											<path
												fill="#fff"
												fill-rule="evenodd"
												d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
												clip-rule="evenodd"></path>
											<path
												fill="#81d4fa"
												fill-rule="evenodd"
												d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
												clip-rule="evenodd"></path>
										</svg>
									</a>
									<div class="tooltip">TikTok</div>
								</li>
								<li class="icon-content">
									<a
										data-social="telegram"
										aria-label="Telegram"
										href="https://t.me/Nphdigital">
										<div class="filled"></div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="48"
											height="48"
											viewBox="0 0 48 48">
											<linearGradient
												id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
												x1="9.858"
												x2="38.142"
												y1="9.858"
												y2="38.142"
												gradientUnits="userSpaceOnUse">
												<stop
													offset="0"
													stop-color="#33bef0"></stop>
												<stop
													offset="1"
													stop-color="#0a85d9"></stop>
											</linearGradient>
											<path
												fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
												d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
											<path
												d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
												opacity=".05"></path>
											<path
												d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
												opacity=".07"></path>
											<path
												fill="#fff"
												d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
										</svg>
									</a>
									<div class="tooltip">TikTok</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="offcanvas__mid">
						<div className="offcanvas__menu-wrapper">
							<nav className="offcanvas__menu">
								<ul className="menu-anim title">
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/trang-chu">TRANG CHỦ</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/gioi-thieu">GIỚI THIỆU</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/dich-vu">DỊCH VỤ</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/portfolio">DỰ ÁN</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/team">ĐỘI NGŨ</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/blog">HOẠT ĐỘNG</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="header_title">
											<a href="/contact">LIÊN HỆ</a>
										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="offcanvas__right">
						<div className="offcanvas__search">
							<form action="#">
								<input
									type="text"
									name="search"
									placeholder="Tìm kiếm từ khoá"
								/>
								<button>
									<FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
								</button>
							</form>
						</div>
						<div className="offcanvas__contact">
							<h3>Liên hệ với chúng tôi</h3>
							<ul>
								<li>
									<a href="tel:02094980547">(+84) 777 018 333</a>
								</li>
								<li>
									<a href="mailto:hi@nphdigital.com">hi@nphdigital.com</a>
								</li>
								<li>Số 838, Ấp Vĩnh Bình, Xã An Vĩnh Ngãi, Tp Tân An, T Long An</li>
							</ul>
						</div>
						<Image
							priority
							style={{ width: 'auto', height: 'auto' }}
							src={Shape11}
							alt="shape"
							className="shape-1"
						/>
						<Image
							priority
							style={{ width: 'auto', height: 'auto' }}
							src={Shape12}
							alt="shape"
							className="shape-2"
						/>
					</div>
					<div className="offcanvas__close">
						<button
							type="button"
							onClick={closeCanvas}>
							<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Canvas;
