
import {DefinePlugin} from 'webpack';


export const devEnvPlugin = new DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('development')
});

export const prodEnvPlugin = new DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('production')
});
