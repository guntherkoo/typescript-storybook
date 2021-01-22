import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, object} from '@storybook/addon-knobs';

import Stepper from './Stepper';

const items = [
	{
		name: 'item 1',
		question: 'Do you have a pet cat?'
	},
	{
		name: 'item 2',
		question: 'Do you have a pet dog?'
	},
	{
		name: 'item 3',
		question: 'Do you have a pet goldfish?'
	}
]

const renderStepItem = item => {
	return (
		<div>
			<h1>
				{item.name}
			</h1>
			<h2>
				{item.question}
			</h2>
		</div>
	)
}

storiesOf('common/stepper', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Stepper
				items={object('items', items)}
				renderStepItem={renderStepItem}
			/>
		);
	})
	.add('hide previous button', () => {
		return (
			<Stepper
				items={object('items', items)}
				renderStepItem={renderStepItem}
				hidePrevButton={boolean('hide prev', true)}
			/>
		);
	});