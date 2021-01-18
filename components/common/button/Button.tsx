import React from 'react';
import classnames from 'classnames/bind';

import _styles from './Button.scss';

const styles = classnames.bind(_styles);

export enum SizeStates {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

export enum ColorStates {
	ROYAL_BLUE = 'royal-blue',
	DARK_NAVY = 'dark-navy',
	EMERALD = 'emerald',
};

export enum VariantStates {
	OUTLINED = 'outlined',
	CONTAINED = 'contained',
};

interface ButtonProps {
	className?: string;
	text: string;
	ariaLabel: string;
	color?: ColorStates;
	size?: SizeStates;
	variant?: VariantStates;
};

const Button: React.FC<ButtonProps> = ({
	className,
	ariaLabel,
	color,
	text,
	size,
	variant,
}) => {
	const composed_classname = classnames(
		styles('btn', color, variant, size),
		className,
	);

	return (
		<button
			type='button'
			className={composed_classname}
			aria-label={ariaLabel}
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	size: SizeStates.MEDIUM,
	color: ColorStates.DARK_NAVY,
	variant: VariantStates.CONTAINED,
}

export default Button;
