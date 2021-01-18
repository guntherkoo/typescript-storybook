import React from 'react';
import classnames from 'classnames/bind';

import _styles from './Text.scss';

const styles = classnames.bind(_styles);

export enum ColorStates {
	INHERIT = 'inherit-color',
	WHITE = 'white',
	OFFWHITE = 'off-white',
	LIGHTER_GRAY = 'lighter-gray',
	LIGHT_GRAY = 'light-gray',
	GRAY = 'gray',
	DARK_GRAY = 'dark-gray',
	DARKER_GRAY = 'darker-gray',
	ALMOST_BLACK = 'almost-black',
	BLACK = 'black',
	ROYAL_BLUE = 'royal-blue',
	EMERALD = 'emerald',
	DARK_NAVY = 'dark-navy',
};

export enum FontStates {
	INHERIT = 'inherit-font',
	LIGHT = 'light',
	ALL_CAPS_LIGHT = 'all-caps-light',
	REGULAR = 'regular',
	ALL_CAPS_REGULAR = 'all-caps-regular',
	BOLD = 'bold',
	ALL_CAPS_BOLD = 'all-caps-bold',
};

export enum SizeStates {
	INHERIT = 'inherit-size',
	DEFAULT = 'default',
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
	HEADING_1 = 'heading-1',
	HEADING_2 = 'heading-2',
	HEADING_3 = 'heading-3',
	HEADING_4 = 'heading-4',
	HEADING_5 = 'heading-5',
};

interface TextProps {
	className?: string;
	children: React.ReactNode;
	color?: ColorStates;
	font?: FontStates;
	size?: SizeStates;
	tag?: keyof JSX.IntrinsicElements;
};

const Text: React.FC<TextProps> = ({
	className,
	children,
	color,
	font,
	size,
	tag,
}) => {
	const Tag = tag as keyof JSX.IntrinsicElements;

	const composed_classname = classnames(
		styles('text', color, font, size),
		className,
	);

	return (
		<Tag className={composed_classname}>
			{children}
		</Tag>
	)
};

Text.defaultProps = {
	color: ColorStates.ALMOST_BLACK,
	font: FontStates.REGULAR,
	size: SizeStates.DEFAULT,
	tag: 'p',
};

export default Text;
