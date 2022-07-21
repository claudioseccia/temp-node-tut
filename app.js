//https://www.youtube.com/watch?v=Oe421EPjeBE
//https://www.johnsmilga.com/
//https://github.com/john-smilga/node-express-course
//
//******************************************* */
// GLOBAL - NO WINDOW!!!
// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (CommonJs)
// modules     - info about current module (file)
// process     - info about env where the program is being executed
//
//-----------------------------------------------------------------------------------------------------------------------------------------
//
//13- Event emitter
//
//npm: node package manager
//NPM allow us to 1)reuse our code in other projects 2)use code written by other developers 3)share our code with other developers
//https://www.npmjs.com/
//
//a typical node project will have many other packages installed through npm
//npm uses packages: a package is essentially a folder containing javascript code. package = module = dependency
//there's no quality control on npm registry, anyone can publish anything - a good indication of quality and robustness is the weekly download
//
//
// npm - global command, that comes with node
// npm --version //version of node package manager
//
// local dependency - use it only in this particular project
// npm i <packageName>
//
// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)
//
// to uninstall:npm uninstall bootstrap
//
// package.son - manifes file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
//
//ex. install lodash: npm i lodash (utility library)
//it will create a node_modules folder with the package lodash in it
//some other packages will have other dependencies, creating other folders within node_modules
//ex. if I install bootstrap: npm i bootstrap - it will install also jquery as a dependency or popperjs
/*
//
//ex.
//npm i lodash
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
//use the flatten deep method from lodash
const newItems = _.flattenDeep(items);
console.log(newItems); //[ 1, 2, 3, 4 ]

//flat vith vanilla js using the flat method
// const flatArrayVanilla = items.flat(Infinity); //num of levels ex items.flat(4), infinity is for any level
// console.log(flatArrayVanilla);
*/
//when committing to a git repo our code we won't submit the code in node_modules
