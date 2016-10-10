#!/usr/bin/env babel-node

require('./helper');

let fs = require('fs').promise
let dirName = require('yargs').argv

async function mkdir() {
	let dirPath = dirName._[0].split("/")
	let constructPath = ""

	for (var i = 1; i <= dirPath.length - 1; i++) {
		constructPath = constructPath + dirPath[i] + "/"
		if(i === 1){
			await fs.mkdir(constructPath)
		} else{
			await fs.mkdir("./"+constructPath)
		}
	}
}

mkdir()