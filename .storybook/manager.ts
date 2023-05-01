import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';

import testTheme from './testTheme';

// https://storybook.js.org/docs/react/configure/sidebar-and-urls

addons.setConfig({
    theme: testTheme,
    sidebar: {
        showRoots: false
    }
});