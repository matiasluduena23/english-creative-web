import React from 'react';
import ReactPlayerYoutube from 'react-player/youtube';

export default function Video() {
	return (
		<div>
			<ReactPlayerYoutube
				url="https://www.youtube.com/watch?v=lcU9OaWBWHs"
				controls
				width="100%"
				height="100%"
				style={{
					borderRadius: '30px',
					maxWidth: '740px',
					aspectRatio: 16 / 9,
				}}
			/>
		</div>
	);
}
