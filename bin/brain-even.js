#!/usr/bin/env node
import greetUser from '../src/cli.js';
import defineEvenOdd from '../src/evenOdd.js';

console.log('Welcome to the Brain Games!');
const userName = greetUser();
defineEvenOdd(userName);
