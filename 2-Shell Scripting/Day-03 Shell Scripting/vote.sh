#!/bin/bash

read -r -p "Enter your age: " age
echo
if [ $age -ge 18 ]
then 
    echo "Eligible to Vote"
else
    echo "Not Eligible to Vote"
fi