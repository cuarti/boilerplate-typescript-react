
import {basic} from './basic';
import {prodEnvPlugin, uglifyPlugin} from '../plugins';
import {scriptRule, prodStyleRule} from '../rules';


/*
 * Production
 * --------------
 *
 * postcss
 * css file
 * Remove empty modules
 */
export const prod = {

	...basic,

	name: 'prod',

	// TODO: Search best devtool for production
	// devtool: 'cheap-module-eval-source-map',

	entry: [
		'./index.prod.tsx'
	],

	output: {
		...basic.output,
		filename: 'bundle.min.js'
	},

	module: {
		rules: [
			scriptRule,
			prodStyleRule
		]
	},

	plugins: [
		...basic.plugins,
		prodEnvPlugin,
		uglifyPlugin
	]

};
