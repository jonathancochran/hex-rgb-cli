#!/usr/bin/env node
'use strict';

var meow = require('meow');
var hexRgb = require('hex-rgb');
var clip = require('cliparoo');
var output;

var cli = meow({
	help: [
		'Usage',
		'  $ rgb [input]',
		'  $ rgba [input]',
		'',
		'Examples',
		'  $ rgb #000',
		'  rgb(0, 0, 0)',
		'',
		'  $ rgba #000',
		'  rgba(0, 0, 0, .5)'
	]
});

var input = cli.input[0];

if (input && input.slice(0, 4) === 'rgba') {
	output = 'rgba(' + hexRgb(cli.input[0]).join(', ') + ', .5)';
} else if (input && input.slice(0, 3) === 'rgb') {
	output = 'rgb(' + hexRgb(cli.input[0]).join(', ') + ')';
} else {
	output = cli.help;
}

console.log(output);
clip(output);
