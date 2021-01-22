const path = require('path');

module.exports = {
	stories: ['../components/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-actions',
		'@storybook/addon-a11y',
		'@storybook/addon-viewport',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	// Add nextjs preset
	presets: [path.resolve(__dirname, './next-preset.js')],
};