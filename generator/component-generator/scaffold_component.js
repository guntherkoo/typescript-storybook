#! /usr/bin/env node

const yeoman = require('yeoman-environment');
const env = yeoman.createEnv([], {
	cwd:'../components',
});

env.register(require.resolve('./component'), 'component');

env.run('component', {
	'skip-install': true,
}, err => {
	if (err) {
		throw err;
	}
});
