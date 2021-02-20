import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';

import _styles from './Input.scss';

const styles = classnames.bind(_styles);

export enum TypeState {
	TEXT = 'text',
	NUMBER = 'number',
	PASSWORD = 'password',
};

interface InputProps {
	className?: string;
	name: string;
	type: string;
	label: string;
	value: string;
	onChange(value: string): void;
};

const Input: React.FC<InputProps> = ({
	className,
	name,
	type,
	label,
	value,
	onChange,
}) => {
	const [onFocus, setOnFocus] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	useEffect(() => {
		if (value.length > 0) {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	}, [onFocus]);

	const composed_classname = classnames(
		styles('container', {
			'focused': onFocus,
			'filled': isFilled,
		}),
		className,
	);

	return (
		<div className={composed_classname}>
			<label
				htmlFor={name}
			>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={label}
				value={value}
				onFocus={() => setOnFocus(true)}
				onBlur={() => setOnFocus(false)}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	)
};

export default Input;
