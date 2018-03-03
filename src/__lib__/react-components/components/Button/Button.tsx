
import * as React from 'react';
import {PureComponent, ReactNode} from 'react';

import {Themr} from '../../util';
import {ButtonProps} from './Button';

const theme = require('./Button.scss');


export interface ButtonTheme {
	button: string;
}

export interface ButtonProps {
	theme?: ButtonTheme;
	onClick?: () => void;
	children?: ReactNode;
}

@Themr('Button', theme)
export class Button extends PureComponent<ButtonProps> {

	public render(): JSX.Element {

		let {theme, onClick, children} = this.props;

		return (
			<button className={theme.button} onClick={onClick}>
				{children}
			</button>
		);
	}

}
