
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {ImageButton} from '../../../src/components';


storiesOf('ImageButton', module).add('default', () => (
	<ImageButton text="Click-me!"
				 img="/images/tux.png"
				 onClick={action('clicked')} />
));
