import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import Button, {
	SizeStates,
	ColorStates,
	VariantStates
} from './Button';

const handleOnClick = () => {
	alert('You clicked the button!');
};

storiesOf('common/button', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Button
				text={text('text', 'MainStreet')}
				ariaLabel={text('aria-label', 'Default Button')}
				onClick={() => handleOnClick()}
			/>
		);
	})
	.add('contained', () => {
		return (
			<Button
				text={text('text', 'MainStreet')}
				ariaLabel={text('aria-label', 'Contained Button')}
				color={select('color', ColorStates, ColorStates.ROYAL_BLUE)}
				variant={select('variant', VariantStates, VariantStates.CONTAINED)}
				size={select('size', SizeStates, SizeStates.LARGE)}
				onClick={() => handleOnClick()}
			/>
		);
	})
	.add('outlined', () => {
		return (
			<Button
				text={text('text', 'MainStreet')}
				ariaLabel={text('aria-label', 'Outlined Button')}
				color={select('color', ColorStates, ColorStates.ROYAL_BLUE)}
				variant={select('variant', VariantStates, VariantStates.OUTLINED)}
				size={select('size', SizeStates, SizeStates.LARGE)}
				onClick={() => handleOnClick()}
			/>
		);
	})
	.add('disabled', () => {
		return (
			<Button
				text={text('text', 'MainStreet')}
				ariaLabel={text('aria-label', 'Disabled Button')}
				color={select('color', ColorStates, ColorStates.ROYAL_BLUE)}
				variant={select('variant', VariantStates, VariantStates.CONTAINED)}
				size={select('size', SizeStates, SizeStates.LARGE)}
				onClick={() => handleOnClick()}
				disabled={boolean('disabled', true)}
			/>
		);
	});