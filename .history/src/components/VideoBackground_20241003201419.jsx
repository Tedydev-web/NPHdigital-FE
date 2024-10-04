import React, { useEffect, useRef } from 'react';

const VideoBackground = ({ videoSrc }) => {
	const canvasRef = useRef(null);

	// Tự động điều chỉnh kích thước canvas theo cửa sổ trình duyệt
	useEffect(() => {
		const resizeCanvas = () => {
			if (canvasRef.current) {
				canvasRef.current.width = window.innerWidth;
				canvasRef.current.height = window.innerHeight;
			}
		};

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas(); // Điều chỉnh kích thước khi component được mount

		return () => window.removeEventListener('resize', resizeCanvas);
	}, []);

	return (
			{/* Video Background */}
			<video
				crossorigin="anonymous"
				autoPlay
				playsInline
				loop
				muted
				style={{
					// position: 'absolute',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
				}}>
				<source
					src={videoSrc}
					type="video/mp4"
				/>
			</video>
	);
};

export default VideoBackground;
