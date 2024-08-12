#!/usr/bin/env node
import { getUserName } from "../src/cli.js";

let userName = '';

console.log("Welcome to the Brain Games!");

userName = getUserName();

console.log(`Hello, ${userName}!`);
