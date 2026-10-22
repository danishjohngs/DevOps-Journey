#!/bin/bash

for i in {1..10}
do
  echo "$i"
  if [ $i -eq 6 ]
  then
      break
  fi
done
