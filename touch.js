#!/usr/bin/env babel-node

require('./helper');

let fs = require('fs').promise
let fileName = require('yargs').argv

async function touch() {
	let fileDescriptor = await fs.open(fileName._[0],'r')
	fs.futimes(fileDescriptor,new Date(),new Date())
}

touch()