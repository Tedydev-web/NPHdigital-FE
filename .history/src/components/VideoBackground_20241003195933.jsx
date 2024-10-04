import React, { useEffect, useRef } from 'react';

const VideoBackground = ({ videoSrc }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const resizeCanvas = () => {
			if (canvasRef.current) {
				canvasRef.current.width = window.innerWidth;
				canvasRef.current.height = window.innerHeight;
			}
		};

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();

		return () => window.removeEventListener('resize', resizeCanvas);
	}, []);

	return (
		<div
			className="hide-on-mobile"
			style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}>
			<video
				crossorigin="anonymous"
				autoPlay
				playsInline
				loop
				muted
				style={{
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
		</div>
	);
};

export default VideoBackground;
