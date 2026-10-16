#!/bin/bash

read -r -p "Enter your role: " role
echo

if [ "$role" = "admin" ] || [ "$role" = "root" ]
then
    echo "Acess Granted"
else
    echo "Access Denied"
fi