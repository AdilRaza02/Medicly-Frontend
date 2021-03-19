import React from 'react';
import Page from '~/components/theme/Page';
import ReadMdFile from '~/components/theme/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function AnalyticsView() {
  return (
    <Page title="Analytics">
      <ReadMdFile content={content} />
    </Page>
  );
}
