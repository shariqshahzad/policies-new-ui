# Non trivial solutions used in the project

## Environment variables
There is a few .env files, each for different environment.The files are loaded by nginx.conf on the piepline and transformed into public/config.json file.

The config.json file is asynchronously loaded within bootstrap.tsx file and is available in the whole application as a global variable window.reactQiwaConfig.