#!/usr/bin/env node
import runGame from '../src/index.js';
import { calculateNumbers } from '../src/games/calc.js';

runGame(calculateNumbers);
