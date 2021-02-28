#!/bin/bash
set -e
clear
cat logo.ascii
printf "\nStarting production instance …\n\n"
export NODE_ENV=production
node --experimental-modules dist/index.mjs
