
import {styleLoader, devCssLoader, prodCssLoader, postcssLoader, sassLoader, sassResourcesLoader} from '../loaders';


// TODO: Add source-map-loader?
export const devStyleRule = {
	test: /\.scss$/,
	loaders: [
		styleLoader,
		devCssLoader,
		postcssLoader,
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
		postcssLoader,
		sassLoader,
		sassResourcesLoader
	]
};
