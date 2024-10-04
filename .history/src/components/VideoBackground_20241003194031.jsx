import React, { useEffect, useRef } from 'react';

const VideoBackground = ({ videoSrcLarge, videoSrcSmall }) => {
	const canvasRef = useRef(null);

	// Automatically resize the canvas to fit the screen size
	useEffect(() => {
		const resizeCanvas = () => {
			if (canvasRef.current) {
				canvasRef.current.width = window.innerWidth;
				canvasRef.current.height = window.innerHeight;
			}
		};

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas(); // Initialize size on mount

		return () => window.removeEventListener('resize', resizeCanvas);
	}, []);

	return (
		<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
			{/* Background Video */}
			<video
				crossorigin="anonymous"
				autoPlay
				playsInline
				loop
				muted
				style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, object-position: 'center center' }}>
				<source
					src={videoSrcLarge}
					media="(min-width:768px)"
				/>
				<source src={videoSrcSmall} />
			</video>

			{/* Canvas */}
			<canvas
				ref={canvasRef}
				style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>
		</div>
	);
};

export default VideoBackground;
