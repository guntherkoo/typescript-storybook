import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Button from './Button';

storiesOf('Button', module)
	.addDecorator(centered)
	.add('with text', () => {
		return <Button text='Hello World' />;
	})
	.add('with emoji', () => {
		return <Button text='😀 😎 👍 💯' />;
	});