#!/bin/bash

echo "$(date) Backup Completed Successfully" >> backup.log

# cronjob: 0 0 * * * /home/xyaro/devops/shell/day6/backup.sh