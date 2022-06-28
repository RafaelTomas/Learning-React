import React, { useEffect, useState } from 'react';
import { useDebugValue } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue('Query');

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };
    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export const App = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const background = huge ? 'green' : 'black';
  return <div style={{ fontSize: '60px', background }}>Oi</div>;
};
