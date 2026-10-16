#!/bin/bash

read -r -p "Enter your age: " age
echo
if [ $age -ge 18 ] && [ $age -le 60 ]
then
    echo "Eligible for Employment"
else
    echo "Not Eligible"
fi