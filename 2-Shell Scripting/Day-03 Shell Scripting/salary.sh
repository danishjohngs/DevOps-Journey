#!/bin/bash

read -r -p "Enter your salary: " salary
echo
if [ $salary -ge 50000 ]
then
    echo "High Salary"
else
    echo "Normal Salary"
fi