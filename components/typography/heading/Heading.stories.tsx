import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text} from '@storybook/addon-knobs';

import Heading from './Heading';

storiesOf('typography/heading', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Heading
				text={text('text', 'Hello world from Heading!')}
			/>
		);
	});