import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select, color } from '@storybook/addon-knobs';

import Button, {ColorStates, VariantStates} from './Button';

storiesOf('Button', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('contained', () => {
		return (
			<Button
				color={select('color', ColorStates, ColorStates.DARK_NAVY)}
				text={text('text', 'MainStreet')}
				variant={select('variant', VariantStates, VariantStates.CONTAINED)}
				ariaLabel={text('aria-label', 'Button')}
			/>
		);
	})
	.add('outlined', () => {
		return (
			<Button
				color={select('color', ColorStates, ColorStates.ROYAL_BLUE)}
				text={text('text', 'MainStreet')}
				variant={select('variant', VariantStates, VariantStates.OUTLINED)}
				ariaLabel={text('aria-label', 'Button')}
			/>
		);
	});