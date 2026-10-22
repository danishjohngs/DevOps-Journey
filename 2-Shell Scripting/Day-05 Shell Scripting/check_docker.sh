#!/bin/bash

check_docker()
{
if command -v docker >/dev/null
then
    echo "Docker is installed"
else
    echo "Docker is missing"
fi
}

check_docker
