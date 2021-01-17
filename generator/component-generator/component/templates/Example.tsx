import React from 'react';
import classnames from 'classnames/bind';

import _styles from './<%= component_name %>.scss';

const styles = classnames.bind(_styles);

type <%= component_name %>Props = {
	className?: string,
	text: string,
};

const <%= component_name %>: React.FC<<%= component_name %>Props> = ({
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

export default <%= component_name %>;
