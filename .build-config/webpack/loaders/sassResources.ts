
import {resolve} from 'path';

import {SRC_DIR} from '../../variables';


export const sassResourcesLoader = {
	loader: 'sass-resources-loader',
	options: {
		resources: resolve(SRC_DIR, 'style', '_variables.scss')
	}
};

