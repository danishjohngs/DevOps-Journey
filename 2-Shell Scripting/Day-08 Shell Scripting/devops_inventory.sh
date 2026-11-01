#!/bin/bash

echo "Let's open the DevOps Inventory"

servers=("WebServer01" "WebServer02" "Database01" "Database02" "AppServer01" "AppServer02" "LoadBalancer01" "BackupServer01" "MonitoringServer01" "DevServer01")
 # OPTIONS GIVING

while true
do

echo "Add Servers      (a)"
echo "View Servers     (v)"
echo "Search Servers   (s)"
echo "Count Servers    (c)"
echo "Exit Application (q)"
echo
read -r -p "Choose any one: " choice
echo

# ADD SERVER


if [[ "$choice" == "a" ]]
then
        while true
        do
            read -r -p "Enter the name of the server (or type done to stop): " add
            if [[ "$add" == "done" ]]
            then
                break
            else
                servers+=("$add")
            fi
        done

    elif [[ "$choice" == "v" ]]
    then
        echo "=====SERVERS====="
        for view in "${servers[@]}"
        do
        echo "$view"
        done
    echo "================="
    echo

    elif [[ "$choice" == "s" ]]
    then
    read -r -p "Enter server name: " server_name
    found=false
    for search in "${servers[@]}"
    do
    if [[ "$search" == "$server_name" ]]
    then
        found=true
        break
    fi
    done

    if [[ $found == "true" ]]
    then
        echo "---------------------------"
        echo "SERVER EXISTS: $server_name"
        echo "---------------------------"
        echo
    else
        echo "-----------------------------------"
        echo "SERVER DOES NOT EXIST: $server_name"
        echo "-----------------------------------"
        echo
    fi


    elif [[ "$choice" == "c" ]]
    then
        echo "------------------"
        echo "TOTAL SERVERS: ${#servers[@]}"
        echo "------------------"
        echo
    elif [[ "$choice" == "q" ]]
    then
        echo "--------"
        echo "Good bye"
        echo "--------"
        break

    else
        echo "Invalid option"
        echo
fi

done