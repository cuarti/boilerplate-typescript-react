
import {styleLoader, devCssLoader, prodCssLoader, sassLoader, sassResourcesLoader, typedCssLoader} from '../loaders';


// TODO: Add source-map-loader?
export const devStyleRule = {
	test: /\.scss$/,
	loaders: [
		styleLoader,
		typedCssLoader,
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
		typedCssLoader,
		prodCssLoader,
		sassLoader,
		sassResourcesLoader
	]
};
