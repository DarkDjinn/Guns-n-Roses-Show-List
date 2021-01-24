const env = process.env.NODE_ENV || 'dev';

const dev = {
	IS_DEV: true,
	APP_PORT: 3423,
	API_URL: 'http://localhost:3423',
	publicPath: './',
};

const production = {
	IS_DEV: false,
	APP_PORT: 3423,
	API_URL: 'http://10.0.0.49:3423',
	publicPath: '/gnr/',
};

const config = { dev, production };
module.exports = {
	...config[env],
};
