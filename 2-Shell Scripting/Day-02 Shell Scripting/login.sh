#!/bin/bash

read -r -p "Enter username: " usrname
read -s -r -p "Password for $usrname: " pass
echo
echo "Login Successfully"

echo "$usrname@system:~$"