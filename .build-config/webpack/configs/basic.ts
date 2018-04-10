
import {SRC_DIR, PUB_DIR} from '../../variables';
import {typescriptCheckerPlugin, notifierPlugin} from '../plugins';


export const basic = {

	context: SRC_DIR,

	output: {
		filename: 'bundle.js',
		path: PUB_DIR,
		publicPath: '/'
	},

	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
	},

	node: false,

	plugins: [
		typescriptCheckerPlugin
	]

};
