#!/bin/bash

read -r -p "Enter txt file name: " file

cat "$file"

#total lines in the file

count=0

while read line
do
  ((count++))
done < "$file"

echo "$count"

if [ -f "$file" ]
then
    echo "File exists"
else
    echo "File doesn't exists"
fi
