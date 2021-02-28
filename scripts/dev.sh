#!/bin/bash
set -e
clear
cat logo.ascii
printf "\nStarting development instance …\n\n"
export NODE_ENV=development
ts-node-dev --compiler-options '{ "module": "commonjs" }' --notify --respawn src/index.ts --watch src/**/*.ts
