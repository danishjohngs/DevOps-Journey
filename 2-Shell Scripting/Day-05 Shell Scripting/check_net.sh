#!/bin/bash

check_net()
{
if ping -c 1 google.com >/dev/null 2>&1
then
    echo "You have internet"
else
    echo "You don't have internet"
fi
}

check_net
