#!/usr/bin/env node
var greet = require('greet');
var parseArgs = require('minimist');

var args = parseArgs(process.argv.slice(2));
console.log(greet(args._, args.drunk));