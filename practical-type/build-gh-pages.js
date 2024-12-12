const fs = require('fs');
let packageJSON = require('./package.json');
const PATCH = 'patch';
const MINOR = 'minor';
const MAJOR = 'major';
console.log(process.argv[process.argv.length - 1])
const lastArg = process.argv[process.argv.length - 1];

let version = packageJSON.version;
let versionArray = version.split('.');
let patch = versionArray[2];
let minor = versionArray[1];
let major = versionArray[0];

switch (lastArg) {
  case PATCH:
    console.log('patch');
    version = `${major}.${minor}.${parseInt(patch) + 1}`;
    break;
  case MINOR:
    console.log('minor');
    break;
  case MAJOR:
    console.log('major');
    break;
  default:
    console.log('default');
    version = `${major}.${minor}.${parseInt(patch) + 1}`;
    break;
}


packageJSON.version = version;

fs.writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2));

//increment version number
const currentVersion = packageJSON.version;
console.log(`The current version is ${currentVersion}`);
//increment version number

