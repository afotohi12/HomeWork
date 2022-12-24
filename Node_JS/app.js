
//##import module 
//const log = require('./logger');
import log from './logger.js';
import fs from 'fs';
import path from 'path';

// const fs   = require('fs');
// const path = require('path');

// log('test');

//##Create Folder 
// fs.mkdir(path.join(__dirname,'Test'),{},(err) =>{
//     if(err) console.log(err);
//     console.log("Folder Created ...");
// });

// console.log(__filename);
// console.log(__dirname);

let a,b,c,rest;
[a,b,c, ...rest] = [100,200,300,400,500,600]

console.log(c);

const {name,age,city} = person;

console.log(name,age,city);