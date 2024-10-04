// src/components/VideoBackground.jsx
import React from 'react';

const VideoBackground = () => {
	return (
		<>
			<video
				crossorigin="anonymous"
				autoPlay
				playsInline
				loop
				muted
				style={{ display: 'none' }}>
				<source
					src="https://cdn.cuberto.com/cb/footer/1.mp4"
					media="(min-width:768px)"
				/>
				<source src="https://cdn.cuberto.com/cb/footer/1.mp4?2" />
			</video>
			<canvas
				data-engine="three.js r167"
				width="1669"
				height="840"
				style={{ display: 'block', width: '1669px', height: '840px' }}></canvas>
		</>
	);
};

export default VideoBackground;
