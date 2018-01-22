
import {typescriptLoader} from '../loaders';


// TODO: Add source-map-loader?
export const scriptRule = {
	test: /\.tsx?$/,
	loaders: [
		typescriptLoader
	]
};
