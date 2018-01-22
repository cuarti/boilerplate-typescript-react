
import * as React from 'react';
import {ReactChild} from 'react';

import {Button} from '../../__lib__/react-components';

const styles = require('./ImageButton.scss');


export interface ImageButtonProps {
	text: string | ReactChild;
	img: string;
	onClick?: () => void;
}

// TODO: Eliminar este ejemplo
export function ImageButton(props: ImageButtonProps): JSX.Element {
	return (
		<Button onClick={props.onClick}>
			<img className={styles.image} src={props.img}/>
			<span className={styles.text}>{props.text}</span>
		</Button>
	);
}
