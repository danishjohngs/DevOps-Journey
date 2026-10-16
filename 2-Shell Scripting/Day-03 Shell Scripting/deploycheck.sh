#!/bin/bash

read -r -p "Enter the filename: " fname
echo
if [ -x $fname ]
then
    echo "Deploy Script Ready"
else
    chmod +x $fname
    echo "Execute Permission Added"
fi