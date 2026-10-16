#!/bin/bash

read -r -p "Enter directory name: " dirname
echo

if [ -d $dirname ]
then
    echo "Directory Exists"
else
    echo "Directory Not Found"
fi