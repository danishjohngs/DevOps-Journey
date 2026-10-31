#!/bin/bash

students=("Danish" "John" "Xyaro" "Dany" "Daynee")

echo "All students: ${students[@]}"

echo "Total student count: ${#students[@]}"

for std in "${students[@]}"
do
  echo "NAME: $std"
done

read -r -p "Enter student name: " student
found=false

for std in "${student[@]}"
do
  if [[ "$std" == "$student" ]]
  then
      found=true
  fi
done

if [[ $found == true ]]
then
    echo "Student Found"
else
    echo "Student Not Found"
fi