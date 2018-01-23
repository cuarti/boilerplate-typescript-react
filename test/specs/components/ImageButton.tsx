
import * as renderer from 'react-test-renderer';

import {ImageButton} from '../../../src/components';


test('', () => {

	let component = renderer.create(
		<ImageButton text="Click-me!"
					 img="/images/tux.png" />
	);

});
