const Configuration = require('./Configuration');

describe('Singleton Pattern - Configuration Class', () => {
	test('should return the same instance', () => {
		const config1 = Configuration.getInstance({db: 'localhost',
			port: 3000});
		const config2 = Configuration.getInstance({db: 'localhost',
			port: 3001});

		expect(config1).toBe(config2);
	});

	test('should retain the original configuration', () => {
		
		const config1 = Configuration.getInstance({db: 'localhost',
			port: 3000});
		const config2 = Configuration.getInstance({db: 'localhost',
			port: 3001});

		expect(config1.config).toEqual({db: 'localhost',
			port: 3000});
		expect(config2.config).toEqual({db: 'localhost',
			port: 3000});
	});
});
