
import {optimize} from 'webpack';

const {UglifyJsPlugin} = optimize;


export const uglifyPlugin = new UglifyJsPlugin({
	beautify: false,
	// mangle: {
	// 	screw_ie8: true,
	// 	keep_fnames: true
	// },
	// compress: {
	// 	screw_ie8: true
	// },
	comments: false
});
