import { PlayIcon } from 'lucide-react';
import { useState } from 'react';
import ReactPlayerYoutube from 'react-player/youtube';

export default function Video() {
	const [playing, setPlaying] = useState(false);
	const handleClick = () => {
		setPlaying(!playing);
	};

	return (
		<div className="">
			<ReactPlayerYoutube
				light={<Thumbnail handleClick={handleClick} />}
				playing={playing}
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

function Thumbnail({ handleClick }: { handleClick: () => void }) {
	return (
		<div className="relative">
			<img src="/thumbnail.jpg" loading="eager" alt="Thumbnail" />
			<button className="absolute left-1/2 top-1/2 -translate-y-1/3 -translate-x-1/2 bg-darkOrange p-2 rounded-full z-20 hover:scale-125 transition-transform">
				<PlayIcon className="text-background " onClick={handleClick} />
			</button>
		</div>
	);
}
