#!/bin/bash

read -r -p "Enter your username: " name
echo
if [ $name = "admin" ]
then
    echo "Login Successful"
else
    echo "Invalid User"
fi