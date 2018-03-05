
import * as React from 'react';

import {ImageButton} from './ImageButton';

import * as style from './App.scss';
// const style = require('./App.scss');


export class App extends React.Component<{}, {}> {

	public render(): JSX.Element {
		return (
			<div className={style.app}>
				<h1>boilerplate-typescript-react</h1>
				<p>Full boilerplate for react in typescript with webpack2 and hot module replacement</p>
				<ImageButton text="Click-me!" img="/images/tux.png" />
			</div>
		);
	}

}
