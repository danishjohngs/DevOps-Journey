#!/bin/bash

disk=85
if [ $disk -gt 80 ]
then
    echo "WARNING: Disk Usage High"
else
    echo "Disk Usage Normal"

fi