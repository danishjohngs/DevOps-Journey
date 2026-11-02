#!/bin/bash

log_file="/home/xyaro/devops/shell/mini-projects/Disk_Monitor_Alert/monitor.log"
today=$(date +"%Y-%m-%d %H:%M:%S")

check_usage()
{
usage=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
echo "Current usage is $usage%"

if [ "$usage" -ge 80 ]
then
    echo "ALERT : DISK USAGE IS ABOVE 80%"
    echo "$today - ALERT - DISK USAGE IS: $usage%" >> "$log_file"
else
    echo "$today - NORMAL - DISK USAGE IS: $usage%" >> "$log_file"
fi
}

check_usage