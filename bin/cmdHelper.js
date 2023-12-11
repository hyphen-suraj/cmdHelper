#!/usr/bin/env node
const program = require('commander');
const pkj = require('../package.json');

program
    .version(pkj.version)
    .command('cmd', 'Manage CLI Commands')
    .parse(process.argv);
