
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ImageButton} from '../../../src/components';


test('', () => {

	let component = renderer.create(
		<ImageButton text="click me!"
					 img="/images/tux.png" />
	);

	expect(component.toJSON().children)
		.toEqual([
			{
				type: 'img',
				props: { className: 'image', src: '/images/tux.png' },
				/* tslint:disable-next-line:no-null-keyword */
				children: null
			},
			{
				type: 'span',
				props: { className: 'text' },
				children: [ 'click me!' ]
			}]
		);

	expect(component.toJSON()).toMatchSnapshot();

});
