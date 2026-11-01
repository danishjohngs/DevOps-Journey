#!/bin/bash

echo "Enter folder name: $1"

if [[ ! -n "$1" ]]
then
    echo "Sorry no arguments provided."
else
    echo "Backup Start $(date)"
    echo "Backup Folder: $1"
    sleep 2
    echo "Backup successfully completed"
fi
