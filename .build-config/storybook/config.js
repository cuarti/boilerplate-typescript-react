// require('ts-node/register');

import {configure} from '@storybook/react';

// import {STORIES_DIR} from '../variables';


// configure(() => require(STORIES_DIR), module);
configure(() => require('../../test/stories'), module);
