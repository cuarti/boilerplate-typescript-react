
import * as React from 'react';
import {PureComponent, ReactElement, cloneElement} from 'react';

import {Bind, Themr} from '../../util';
import {Button, ButtonTheme} from '../Button';

const theme = require('./GroupButton.scss');


export interface GroupButtonTheme extends ButtonTheme {
	groupButton: string;
}

export interface GroupButtonProps {
	theme?: GroupButtonTheme;
	children: ReactElement<Button>[];
}

@Themr('GroupButton', theme)
export class GroupButton extends PureComponent<GroupButtonProps> {

	public constructor(props?: GroupButtonProps, context?: any) {
		super(props, context);
	}

	public render(): JSX.Element {

		let {theme, children} = this.props;

		return (
			<div className={theme.groupButton}>
				{children.map(this.renderButton)}
			</div>
		);
	}

	@Bind()
	private renderButton(button: ReactElement<Button>, index: number): JSX.Element {
		return cloneElement(button, {key: index, theme: this.props.theme} as any);
	}

}
