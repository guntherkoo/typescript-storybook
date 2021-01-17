const Generator = require('yeoman-generator');
const rename = require('gulp-rename');

module.exports = class extends Generator {

	async prompting() {
		this.answers = await this.prompt([
			{
				type: 'input',
				name: 'component_name',
				message: 'What is the name of the new component? (example: BeautifulText)',
				validate: input => {
					const regexp = /([A-Z]+[a-z0-9]+)+/;
					if (input.search(regexp) < 0) {
						return 'Please input a name in TitleCase';
					}

					return true;
				},
			},
			{
				type: 'input',
				name: 'component_subpath',
				message: 'What is the path of the new component? (example: /subpath)',
				default: '/',
				validate: input => {
					const regexp = /^[A-Za-z0-9/]+$/;
					if (input.search(regexp) < 0) {
						return 'Only lowercase letters, numbers and slashes are allowed.';
					}

					return true;
				},
			},
		]);
	}

	writing() {
		const {
			component_name,
			component_subpath,
		} = this.answers;

		const component_namespace = component_name.toLowerCase();
		const component_path = `${component_subpath}/${component_namespace}`
			.split('/').filter(x => x).join('/');

		const storybook_path = component_path;
		
		const destination = `./${component_path}`;

		this.registerTransformStream(rename(path =>{
			path.basename = path.basename.replace(/Example/g, component_name);
		}));

		this.fs.copyTpl(
			this.templatePath('**/*'),
			this.destinationPath(destination),
			{
				component_name,
				storybook_path,
			},
			null,
			{
				globOptions: {
					dot: true,
				},
			},
		);
	}

	end() {
		this.log('All done. Now you are good to start!');
	}
};
