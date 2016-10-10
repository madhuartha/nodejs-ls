#!/usr/bin/env babel-node

require('./helper');

let fs = require('fs').promise
let path = require('path')
let {dir} = require('yargs')
    .default('dir', __dirname)
    .argv 
let recursiveFlag = require('yargs').argv.R

async function ls(directory) {
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
  		process.stdout.write(filePath+"\n")
  	} else{
  		if(recursiveFlag){
  		    ls(filePath)
  		}
  	}
  }
}

ls(dir)
