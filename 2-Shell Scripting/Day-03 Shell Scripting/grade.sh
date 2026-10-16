#!/bin/bash

read -r -p "Enter your mark: " mark
echo
if [ $mark -ge 90 ]
then 
    echo "A grade"
elif [ $mark -ge 75 ]
then   
    echo "B grade"
elif [ $mark -ge 50 ]
then   
    echo "C grade"
else
    echo "Fail"
fi