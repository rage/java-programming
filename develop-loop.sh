#!/bin/bash
while :
do
  echo "Spam [CTRL+C] to stop.."
  npm run develop || true
  sleep 1
done
