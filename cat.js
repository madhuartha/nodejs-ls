#!/usr/bin/env babel-node

require('./helper');

let fs = require('fs').promise
let fileName = require('yargs').argv

async function cat() {
	let fileContent = await fs.readFile(fileName._[0],'utf8')
	process.stdout.write(fileContent.toString());
}

cat()