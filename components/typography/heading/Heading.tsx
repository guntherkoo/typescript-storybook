import React from 'react';
import classnames from 'classnames/bind';

import _styles from './Heading.scss';

const styles = classnames.bind(_styles);

type HeadingProps = {
	className?: string,
	text: string,
};

const Heading: React.FC<HeadingProps> = ({
	className,
	text,
}) => {
	const composed_classname = classnames(
		styles('text'),
		className,
	);

	return (
		<h1 className={composed_classname}>
			{text}
		</h1>
	)
};

export default Heading;
