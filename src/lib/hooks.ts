import { useEffect, useState } from 'react';

export function useShowNavigation() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		let previousScrollPosition = 0;
		let currentScrollPosition = 0;
		window.addEventListener('scroll', () => {
			currentScrollPosition = window.scrollY;
			currentScrollPosition > previousScrollPosition
				? setShow(false)
				: setShow(true);

			previousScrollPosition = currentScrollPosition;
		});
	}, []);
	return show;
}

export function useShadowNavigation() {
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			let currentScroll = window.scrollY;
			currentScroll > 100 ? setShadow(true) : setShadow(false);
		});
	}, []);

	return shadow;
}

export function useMediaQuery(query: string) {
	const [value, setValue] = useState(false);

	useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches);
		}

		const result = matchMedia(query);
		result.addEventListener('change', onChange);
		setValue(result.matches);

		return () => result.removeEventListener('change', onChange);
	}, [query]);

	return value;
}
