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
