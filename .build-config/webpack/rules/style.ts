
import {styleLoader, devCssLoader, prodCssLoader, sassLoader, sassResourcesLoader} from '../loaders';


// TODO: Add source-map-loader?
export const devStyleRule = {
	test: /\.scss$/,
	loaders: [
		styleLoader,
		devCssLoader,
		sassLoader,
		sassResourcesLoader
	]
};

// TODO: Add source-map-loader?
export const prodStyleRule = {
	test: /\.scss$/,
	loaders: [
		styleLoader,
		prodCssLoader,
		sassLoader,
		sassResourcesLoader
	]
};
