import React, { useState } from 'react';
import classnames from 'classnames/bind';
import Button, {
	ColorStates,
	VariantStates,
	SizeStates,
} from '../button';

import _styles from './Stepper.scss';

const styles = classnames.bind(_styles);

interface StepperProps {
	className?: string;
	items: object[];
	renderStepItem(item: object): React.ReactNode | JSX.Element;
	hidePrevButton?: boolean;
};

const Stepper: React.FC<StepperProps> = ({
	className,
	items,
	renderStepItem,
	hidePrevButton,
}) => {
	const [activeStep, setActiveStep] = useState(0);
	const composed_classname = classnames(
		styles('container'),
		className,
	);

	const handleNext = () => setActiveStep(prevStep => prevStep + 1);
	const handlePrev = () => setActiveStep(prevStep => prevStep - 1);

	return (
		<div className={composed_classname}>
			{renderStepItem(items[activeStep])}
			<div className={styles('actions')}>
				<Button
					text='Next'
					ariaLabel='Next Step'
					color={ColorStates.ROYAL_BLUE}
					variant={VariantStates.CONTAINED}
					size={SizeStates.MEDIUM}
					onClick={() => handleNext()}
					disabled={activeStep === items.length - 1}
				/>
				{(activeStep > 0 && !hidePrevButton) &&
					<Button
						text='Previous'
						ariaLabel='Previous Step'
						color={ColorStates.ROYAL_BLUE}
						variant={VariantStates.OUTLINED}
						size={SizeStates.MEDIUM}
						onClick={() => handlePrev()}
					/>
				}
			</div>
		</div>
	)
};

Stepper.defaultProps = {
	hidePrevButton: false,
};

export default Stepper;
