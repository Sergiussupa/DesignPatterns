class Configuration {

	static instance;
	constructor(config) {
		if(Configuration.instance) {
			return Configuration.instance;
		}

		this.config = config;
		Configuration.instance = this;
	}

	static getInstance(config) {
		if (!Configuration.instance) {
			new Configuration(config);
		}
		return Configuration.instance;
	}
}

module.exports = Configuration;
