import React from 'react';

const VideoBackground = ({ videoSrcLarge, videoSrcSmall, canvasWidth = 1669, canvasHeight = 840 }) => {
	return (
		<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
			{/* Background Video */}
			<video
				crossorigin="anonymous"
				autoPlay
				playsInline
				loop
				muted
				style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
				<source
					src={videoSrcLarge}
					media="(min-width:768px)"
				/>
				<source src={videoSrcSmall} />
			</video>

			{/* Canvas */}
			<canvas
				data-engine="three.js r167"
				width={430}
				height={932}
				style={{ display: 'block', position: 'absolute', top: 0, left: 0, zIndex: -1 }}></canvas>
		</div>
	);
};

export default VideoBackground;
