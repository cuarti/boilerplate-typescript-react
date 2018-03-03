
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Button, GroupButton} from '../../../src/__lib__/react-components';

const theme = require('./StorybookGroupButton.scss');


storiesOf('GroupButton', module).add('default', () => (
	<GroupButton theme={theme}>
		<Button onClick={action('clicked Button1')}>Button1</Button>
		<Button onClick={action('clicked Button2')}>Button2</Button>
		<Button onClick={action('clicked Button3')}>Button3</Button>
	</GroupButton>
));
