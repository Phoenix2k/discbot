#!/bin/bash
set -e
clear
cat logo.ascii
printf "\nRunning pre-release scripts …\n"
npx dotenv release-it --verbose
