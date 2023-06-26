#!/bin/sh
cd ./frontend
npm i

cd ../simple_api
npm i

cd ../frontend
npm run dev &

cd ../simple_api
node server.js &
