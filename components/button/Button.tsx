import * as React from 'react';
import classnames from 'classnames/bind';

import _styles from './Button.scss';

const styles = classnames.bind(_styles);

type Props = {
	text: string;
};

export default ({ text }: Props) => {
	return (
		<button
			className={styles('btn')}
			type='button'
		>
			{text}
		</button>
	);
};