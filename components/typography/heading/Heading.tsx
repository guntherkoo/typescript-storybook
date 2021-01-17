import React from 'react';
import classnames from 'classnames/bind';
import Text, {
	FontStates,
	ColorStates,
	SizeStates,
} from '../text/Text';

import _styles from './Heading.scss';

const styles = classnames.bind(_styles);

export const HeadingColorStates = ColorStates;
export enum WeightStates {
	H1 = 'heading-1',
	H1_LIGHT = 'heading-1-light',
	H2 = 'heading-2',
	H2_LIGHT = 'heading-2-light',
	H3 = 'heading-3',
	H3_LIGHT = 'heading-3-light',
	H4 = 'heading-4',
	H4_LIGHT = 'heading-4-light',
	H5 = 'heading-5',
	H5_LIGHT = 'heading-5-light',
};

const getTextPropsByWeight = weight => {
	switch (weight) {
		case WeightStates.H1:
			return {
				size: SizeStates.HEADING_1,
				font: FontStates.BOLD,
			};

		case WeightStates.H1_LIGHT:
			return {
				size: SizeStates.HEADING_1,
				font: FontStates.LIGHT,
			};

		case WeightStates.H2:
			return {
				size: SizeStates.HEADING_2,
				font: FontStates.BOLD,
			};

		case WeightStates.H2_LIGHT:
			return {
				size: SizeStates.HEADING_2,
				font: FontStates.LIGHT,
			};

		case WeightStates.H3:
			return {
				size: SizeStates.HEADING_3,
				font: FontStates.BOLD,
			};

		case WeightStates.H3_LIGHT:
			return {
				size: SizeStates.HEADING_3,
				font: FontStates.LIGHT,
			};

		case WeightStates.H4:
			return {
				size: SizeStates.HEADING_4,
				font: FontStates.BOLD,
			};

		case WeightStates.H4_LIGHT:
			return {
				size: SizeStates.HEADING_4,
				font: FontStates.LIGHT,
			};

		case WeightStates.H5:
			return {
				size: SizeStates.HEADING_5,
				font: FontStates.BOLD,
			};

		case WeightStates.H5_LIGHT:
			return {
				size: SizeStates.HEADING_5,
				font: FontStates.LIGHT,
			};

		default:
			return null;
	}
}

type HeadingProps = {
	className?: string,
	children: React.ReactNode,
	weight?: WeightStates,
	color?: ColorStates,
	tag?: keyof JSX.IntrinsicElements,
};

const Heading: React.FC<HeadingProps> = ({
	className,
	children,
	weight,
	color,
	tag,
}) => {
	const text_props = getTextPropsByWeight(weight);

	const composed_classname = classnames(
		styles('heading', weight),
		className,
	);

	return (
		<Text
			{...text_props}
			tag={tag}
			color={color}
			className={composed_classname}
		>
			{children}
		</Text>
	)
};

Heading.defaultProps = {
	color: ColorStates.ALMOST_BLACK,
	weight: WeightStates.H1,
	tag: 'h1',
};

export default Heading;
