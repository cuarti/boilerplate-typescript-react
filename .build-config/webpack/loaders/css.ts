

export const devCssLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		camelCase: true,
		// TODO: Add sourcemap support
		// sourceMap: true,
		localIdentName: '[name]-[local]-[hash:base64:4]'
	}
};

export const prodCssLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		camelCase: true,
		minimize: true,
		// TODO: Add sourcemap support
		// sourceMap: true,
		localIdentName: '[hash:base64:16]'
	}
};
