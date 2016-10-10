#!/usr/bin/env babel-node

require('./helper');

let fs = require('fs').promise
let dirName = require('yargs').argv

async function rm() {
	let stat = await fs.stat(dirName._[0])
	if(!stat.isDirectory()){
		console.log("Deleting file")
		await fs.unlink(dirName._[0])
	}else {

	}
	
}

function deleteFile(fName){
	await fs.unlink(fName)
}

function deleteDir(nameOfDir){
	awair fs.rmdir(nameOfDir)
}

async function rm(directory) {
  // Use 'await' inside 'async function's
  console.log('Executing ls function...')
  let stat = await fs.stat(directory)
  if(!stat.isDirectory()){
  	process.stdout.write("The dir passed "+directory+"is a file\n")
  	return
  }
  let promise = fs.readdir(directory)
  let fileNames = await promise
  for(let fileName of fileNames){
  	let filePath = path.join(directory, fileName)
  	let sampFile = await fs.stat(filePath)
  	if(!sampFile.isDirectory()){
  		process.stdout.write(fileName+"\n")
  	} else{
  		if(recursiveFlag){
  		    ls(filePath)
  		}
  	}
  }
}

rm(dirName._[0])