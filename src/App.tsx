import React from 'react';
import { useRoute } from './router';
import { pageBySlug } from './content';
import { DocsLayout } from '../components/DocsLayout';
import { PageRenderer } from '../components/PageRenderer';
import { Home } from '../components/Home';

export function App(): React.ReactElement {
  const slug = useRoute();
  const page = slug ? pageBySlug.get(slug) : undefined;

  return (
    <DocsLayout activeSlug={slug}>
      {!slug ? (
        <Home />
      ) : page ? (
        <PageRenderer page={page} />
      ) : (
        <div className="notfound">
          <h1>Page not found</h1>
          <p>
            No page with slug <code>{slug}</code>. <a href="#/">Back to home</a>.
          </p>
        </div>
      )}
    </DocsLayout>
  );
}
