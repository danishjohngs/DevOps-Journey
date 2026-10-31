#!/bin/bash

if [ "$1" -gt 0 ]
then
    echo "Positive Number"
else
    echo "Negative number"
fi
if [ $(($1%2)) -eq 0 ]
then
    echo "Even Number"
else
    echo "Odd Number"
fi
if [ "$1" -gt 100 ]
then
    echo "Greater than 100"
else
    echo "Lesser than 100"
fi

