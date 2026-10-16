#!/bin/bash

read -r -p "Enter Environment name: " env_name
echo

if [ -z $env_name ]
then
    echo "Cannot Be Empty"
else
    echo "ENVIRONMENT: $env_name"

fi