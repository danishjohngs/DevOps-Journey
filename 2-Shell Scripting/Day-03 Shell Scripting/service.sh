#!/bin/bash

if command -v nginx >/dev/null 2>&1;
then
    echo "Nginx Installed"
else
    echo "Nginx Not Installed"

fi