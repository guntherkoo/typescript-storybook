import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select} from '@storybook/addon-knobs';

import Text, {
	FontStates,
	ColorStates,
	SizeStates,
} from './Text';

storiesOf('typography/text', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Text
				tag='p'
				font={select('font', FontStates, FontStates.REGULAR)}
				color={select('color', ColorStates, ColorStates.ALMOST_BLACK)}
				size={select('size', SizeStates, SizeStates.MEDIUM)}
			>
				{text('text', 'Get started with MainStreet')}
			</Text>
		);
	});