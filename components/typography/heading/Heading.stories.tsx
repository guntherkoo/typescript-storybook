import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select} from '@storybook/addon-knobs';

import Heading, {
	WeightStates,
	HeadingColorStates,
} from './Heading';

const example_text = 'Welcome to MainStreet!';
const weights = Object.entries(WeightStates);

storiesOf('typography/heading', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Heading
				tag='h1'
				weight={select('weight', WeightStates, WeightStates.H1)}
				color={select('color', HeadingColorStates, HeadingColorStates.DARK_NAVY)}
			>
				{text('text', example_text)}
			</Heading>
		);
	})
	.add('weights', () => {
		return (
			<>
				{weights.map(weight => (
					<Heading
						key={weight[1]}
						weight={weight[1]}
						color={HeadingColorStates.ALMOST_BLACK}
					>
						{example_text}
					</Heading>
				))}
			</>
		);
	});