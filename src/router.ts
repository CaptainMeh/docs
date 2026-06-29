// Tiny hash-based router (no react-router dependency). Routes:
//   #/            -> home
//   #/<slug>      -> article page

import { useEffect, useState } from 'react';

export function currentSlug(): string {
  const h = window.location.hash.replace(/^#\/?/, '');
  return decodeURIComponent(h.trim());
}

export function navigate(slug: string): void {
  window.location.hash = `#/${slug}`;
}

export function useRoute(): string {
  const [slug, setSlug] = useState(currentSlug());
  useEffect(() => {
    const onHash = () => {
      setSlug(currentSlug());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return slug;
}
