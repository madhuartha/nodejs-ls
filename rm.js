#!/usr/bin/env babel-node

require('./helper');

let fs = require('fs').promise
let dirName = require('yargs').argv

async function rm(directory) {
  // Use 'await' inside 'async function's
  console.log('Executing rm function...')
  let stat = await fs.stat(directory)
  if(!stat.isDirectory()){
  	console.log("deleting file")
  	await fs.unlink(directory)
  	return
  }
  let promise = fs.readdir(directory)
  let fileNames = await promise
  for(let fileName of fileNames){
  	let filePath = path.join(directory, fileName)
  	let sampFile = await fs.stat(filePath)
  	if(!sampFile.isDirectory()){
  		await fs.unlink(filePath)
  	} else{
  		rm(filePath)
  	}
  }
  await fs.rmdir(directory)
}

rm(dirName._[0])