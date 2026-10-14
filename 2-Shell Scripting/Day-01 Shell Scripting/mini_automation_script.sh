#!/bin/bash

echo "=====SERVER REPORT====="

date_time=$(date)
user=$(whoami)
sys_uptime=$(uptime)
disk_usage=$(df -h)

echo "Current Date & Time: $date_time"
echo "Current User: $user"
echo "System Uptime: $sys_uptime"
echo "Disk Usage:"
echo "$disk_usage"