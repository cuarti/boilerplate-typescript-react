
import {basic} from './basic';
import {devStyleRule, scriptRule} from '../rules';
import {devEnvPlugin, namedModulesPlugin} from '../plugins';


export const storybook = {

	name: 'storybook',

	// mode: 'development',

	// devtool: 'cheap-module-eval-source-map'

	resolve: basic.resolve,

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
	]

};
