#!/usr/bin/env node
var greet = require('../lib/index');
var parseArgs = require('minimist');

var args = parseArgs(process.argv.slice(2));
console.log(greet(args._, args.drunk));