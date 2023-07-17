
// node init - npm install package_name


// console.log("hello");


// visit---------node.js.org/api

// const a=5;  //can't reassign value of a as its constant

//jshint esversion:6
// const fs = require("fs"); //"fs"--module
// fs.copyFileSync("file1.txt","file2.txt");  //copy file content from source to destination file

//visit--npmjs for library files

var superheroes= require("superheroes");
var myheroname = superheroes.random();

console.log(myheroname);

//express --help to write less repetative code