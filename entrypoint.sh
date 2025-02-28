#!/bin/sh

echo "Waiting for MongoDB to be ready..."
until nc -z mongo 27018; do
  echo "MongoDB is not ready, waiting..."
  sleep 5
done
echo "MongoDB is up and running!"

echo "Building the Node.js application..."
npm run build --prefix ./server

echo "Starting Node.js server..."
npm start --prefix ./server &  # Run Node.js in the background
