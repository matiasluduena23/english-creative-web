'use client';

import { useMediaQuery } from '@/lib/hooks';
import NavLinks from './NavLinks';
import ToggleNavigation from './ToggleNavigation';

export default function Navigation() {
	const isDesktop = useMediaQuery('(min-width: 768px');

	return isDesktop ? <NavLinks /> : <ToggleNavigation />;
}
