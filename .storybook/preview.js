// Import global styles here
import '../styles/global.scss';

// global decorators
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';

import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'; 
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});