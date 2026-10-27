#!/bin/bash

log_file="logs/user_management.log"

create_user()
{

username=$1

if id "$username" >/dev/null 2>&1
then
    echo "$username already exists..."
    echo "$username already exists | $(date)" >> "$log_file"
else
    sudo useradd "$username"
    if id "$username" >/dev/null 2>&1
    then
        echo "$username created..."
        echo "$username created | $(date)" >> "$log_file"
    else
        echo "Creating $username failed..."
        echo "Creating $username failed | $(date)" >> "$log_file"

    fi
fi

}

read -r -p "How many users you wanna create: " count

for ((i=1;i<=count;i++))
do
  read -r -p "Enter username: " username
  create_user "$username"
done

echo "User creation completed..."