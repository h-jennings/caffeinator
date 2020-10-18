import { useEffect } from 'react';

export function ScrollToTopOnMount(): null {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
