// Checkbox.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from './CheckBox.mdx';

const meta: Meta<typeof CheckBox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Checkbox',
  component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
  },
};