#!/bin/bash

servers=("Web1" "Web2" "Web3" "Web4" "Web5")

count=0

for web in ${servers[@]}
do
  echo "Checking SERVER: $web"

  ((count++))
  sleep 0.5
done

echo "Total checked servers: $count"