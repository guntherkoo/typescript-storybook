import React from 'react';
import classnames from 'classnames/bind';

import _styles from './Button.scss';

const styles = classnames.bind(_styles);


export enum ColorStates {
	ROYAL_BLUE = 'royal-blue',
	DARK_NAVY = 'dark-navy',
	EMERALD = 'emerald',
};

export enum VariantStates {
	OUTLINED = 'outlined',
	CONTAINED = 'contained',
};

type ButtonProps = {
	className?: string,
	color: ColorStates,
	text: string,
	ariaLabel: string,
	variant: VariantStates,
};

const Button: React.FC<ButtonProps> = ({
	className,
	color,
	text,
	ariaLabel,
	variant,
}) => {
	const composed_classname = classnames(
		styles('btn', color, variant),
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

export default Button;
