import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text} from '@storybook/addon-knobs';

import <%= component_name %> from './<%= component_name %>';

storiesOf('<%= storybook_path %>', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<<%= component_name %>
				text={text('text', 'Hello world from <%= component_name %>!')}
			/>
		);
	});