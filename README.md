# Boilerplate for private NPM Modules
Boilerplate for npm module. Write with ES6.

# Installation
Just clone this repo and remove `.git` folder.
```Shell
$ git clone git@github.com:Worldremit/npm-boilerplate.git my-new-module-name
$ cd my-new-module-name
$ rm -rf .git
```
* Open the `package.json` file with your editor and edit the following fields (name, description, repository).
* Initialize your git repository
* Install all `devDependencies`
```Shell
$ yarn install
```

# Features
* Build with [Babel](https://babeljs.io). (ES6 -> ES5)
* Test with [mocha](https://mochajs.org).
* Cover with [istanbul](https://github.com/gotwarlost/istanbul).
* Check with [eslint](eslint.org).

# Commands
- `yarn run clean` - Remove `bin/` directory
- `yarn test` - Run tests. Tests can be written with ES6. Executes coverage as well.
- `yarn develop` - Watches changes to `src` and re-transpile code.
- `yarn run lint` - Use's `airbnb` eslint config
- `yarn run build` - Use of babel to transpile ES6 to ES5.
- `yarn run prepublish` - Hook for npm. Build before publish.
