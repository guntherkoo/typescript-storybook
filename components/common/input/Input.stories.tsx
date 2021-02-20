import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select} from '@storybook/addon-knobs';

import Input, {
	TypeState
} from './Input';

storiesOf('common/input', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		const [value, setValue] = useState('');
		const onChange = (value: string) => setValue(value);

		return (
			<Input
				name={text('name', 'company')}
				type={select('type', TypeState, TypeState.TEXT)}
				label={text('label', 'Company')}
				value={value}
				onChange={e => onChange(e)}
			/>
		);
	});