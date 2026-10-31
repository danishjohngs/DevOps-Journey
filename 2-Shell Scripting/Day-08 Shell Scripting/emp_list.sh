#!/bin/bash

read -r -p "Enter the file name: " file
echo "=====EMPLOYEE NAMES====="
count=0
while read line
do
  echo "NAME: $line"
  ((count++))
done < "$file"
echo
echo "Total employees processed: $count"