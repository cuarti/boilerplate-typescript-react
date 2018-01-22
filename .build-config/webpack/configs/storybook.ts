
import {basic} from './basic';
import {devStyleRule, scriptRule} from '../rules';
import {devEnvPlugin, namedModulesPlugin} from '../plugins';


export const storybook = {

	name: 'storybook',

	// devtool: 'cheap-module-eval-source-map'

	module: {
		rules: [
			scriptRule,
			devStyleRule
		]
	},

	plugins: [
		...basic.plugins,
		namedModulesPlugin,
		devEnvPlugin
	],

};
