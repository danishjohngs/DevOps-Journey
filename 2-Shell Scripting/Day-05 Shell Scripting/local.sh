#!/bin/bash

read -r -p "Enter your nickname: " name
student()
{
local name="Xyaro"
echo "Local variable: $name"
}

student

echo "Global variable: $name"
