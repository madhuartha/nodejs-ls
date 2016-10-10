#!/usr/bin/env babel-node
require('./helper');


let strPrint = require('yargs').argv 

async function echo() {
	process.stdout.write(strPrint._[0]+"\n");
}

echo()
