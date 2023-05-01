import type { Meta, StoryObj } from '@storybook/react';

import { Introduction } from './Introduction';

// 👇 Imports the required stories
// import * as PageLayout from './PageLayout.stories';
// import * as DocumentHeader from './DocumentHeader.stories';
// import * as DocumentList from './DocumentList.stories';

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
};

export default meta;
type Story = StoryObj<typeof Introduction>;

export const Simple: Story = {
  args: {
    // user: PageLayout.Simple.args.user,
    // document: DocumentHeader.Simple.args.document,
    // subdocuments: DocumentList.Simple.args.documents,
  },
};