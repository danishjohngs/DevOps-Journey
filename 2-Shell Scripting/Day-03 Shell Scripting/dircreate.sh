#!/bin/bash

read -r -p "Enter directory name: " dname
echo

if [ -d $dname ]
then
    echo "Directory Exists"
else
    mkdir $dname
    echo "Directory Created | $dname"
fi