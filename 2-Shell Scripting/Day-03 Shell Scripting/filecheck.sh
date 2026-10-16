#!/bin/bash

read -r -p "Enter the file name: " fname
echo

if [ -f $fname ]
then
    echo "File Found"
else
    echo "File Not Found"
fi