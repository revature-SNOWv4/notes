# Intro to NPM

Node comes with Node Package Manager (npm). Npm is often used by developers to manage the dependencies that your code needs to run in Node. Package managers are useful, because it is not uncommon for a developer to require dozens if not hundreds of other packages written by other developers in order for his own program to function as intended. Manually maintaining all of these external packages is quite tedious, so have a tool do it for you will save a lot of time. Npm will also manage the versions of the dependencies for you and can be used to do perform many actions such as, installing new packages, uninstalling old packages, and upgrading packages to newer versions.

## Basic npm commands

create a package.json for your project:

```bash
    npm init
```

install packages that are described in your package.json:

```bash
    npm install
```

install a package called <package_name>:

```bash
    npm install <package_name>
```

install a package globally called <package_name>:

```bash
    npm install -g <package_name>
```

install a package called <package_name> as a dev dependency:

```bash
    npm install -D <package_name>
```

More Command Line Interface (CLI) commands can be found [here](https://devhints.io/npm)

# Node Projects

You can create a project in node using the `npm init` command. This will generate a file called `package.json`. A package.json is a JSON file that acts as the manifest for your project. It contains a lot of really important information regarding the dependencies that you imported into your project, the versions of these packages, other metadata bout your project, and certain scripts that your project uses. Here is an example of a package.json file:

```json
{
	"name": "1w-abcmartv3.0",
	"version": "1.0.0",
	"description": "",
	"main": "index.ts",
	"dependencies": {
		"@types/express-session": "^1.17.0",
		"body-parser": "^1.19.0",
		"express": "^4.17.1",
		"express-session": "^1.17.1",
		"forever": "^2.0.0",
		"jest": "^25.5.4",
		"pg": "^8.2.0"
	},
	"devDependencies": {
		"@types/express": "^4.17.6",
		"@types/jest": "^25.2.2",
		"@types/pg": "^7.14.3",
		"@types/supertest": "^2.0.9",
		"nodemon": "^2.0.4",
		"supertest": "^4.0.2",
		"ts-jest": "^25.5.1",
		"ts-node": "^8.10.1",
		"typescript": "^3.9.2"
	},
	"scripts": {
		"test": "jest",
		"test:coverage": "jest --coverage",
		"dev": "nodemon --exec ts-node src/index.ts",
		"build": "tsc -p .",
		"start": "ts-node src/index"
	},
	"repository": {
		"type": "git",
		"url": "git+https://gitlab.com/2005-javareact/trainingrepos/1w-abcmartv3.0.git"
	},
	"jest": {
		"transform": {
			"^.+\\.tsx?$": "ts-jest"
		},
		"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
		"moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"bugs": {
		"url": "https://gitlab.com/2005-javareact/trainingrepos/1w-abcmartv3.0/issues"
	},
	"homepage": "https://gitlab.com/2005-javareact/trainingrepos/1w-abcmartv3.0#readme"
}
```

- [package.json Documentation]https://docs.npmjs.com/files/package.json

## Running Scripts

Npm scripts can be used to help your quality of life to make it easier to call a series of commands related to your project. Suppose I had the following package.json file:

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"scripts": {
		"start": "node server.js",
		"test": "jest"
	},
	"devDependencies": {
		"jest": "^25.5.4",
		"nodemon": "^2.0.4"
	}
}
```

Notice there is a section in the package.json file above denoted as `scripts`. As a developer, you have the ability to write scripts that can perform behavior. Sometimes, you get scripts with built in behavior, for example, entering the command `npm start` will default to calling the `node server.js` command. We can add our own custom commands by adding a property in "scripts" with the name of the command that we want to execute and the value of the actual command that should be run. For example, maybe we want to run a command called `dev` that executes your server.js file using nodemon rather than node. If we modify our package.json as seen below, we can have the ability to run our server in development mode with nodemon using the command `npm run dev`.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"scripts": {
		"start": "node server.js",
		"test": "jest",
		"dev": "nodemon server.js"
	},
	"devDependencies": {
		"jest": "^25.5.4",
		"nodemon": "^2.0.4"
	}
}
```

# Sources/Useful Links

- [npm](https://docs.npmjs.com/about-npm/)