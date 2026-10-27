#!/bin/bash

# Backup folder

today()
{
    date +"%Y-%m-%d_%H-%M-%S"
}
today=$(today)
while true
do

read -r -p "Enter the backup folder/path: " backup_dir
echo
if [ -d "$backup_dir" ]
then
    echo "Directory exists..."
    break
else
    echo "Directory doesn't exists..."
    echo
    read -r -p "Do you want to create the directory? (y/n): " choice
    if [ "$choice" == "y" ]
    then
        mkdir -p "$backup_dir"
        if [ -d "$backup_dir" ]
        then
            echo "Directory created successfully..."
            break
        else
            echo "Directory created failed. Try again..."
        fi
    else
        echo "Please enter the correct directory path again..."
    fi
fi
done

# Source folder

while true
do

read -r -p "Enter the source folder/path: " source_dir
echo
if [ -d "$source_dir" ]
then
    echo "Directory exists..."
    break
else
    echo "Directory doesn't exists..."
    echo
    echo "Please enter the correct directory path again..."

fi
done

# logs folder

while true
do

read -r -p "Enter the logs folder/path: " logs_dir
echo
if [ -d "$logs_dir" ]
then
    echo "Directory exists..."
    break
else
    echo "Directory doesn't exists..."
    echo
    read -r -p "Do you want to create the directory? (y/n): " choice
    if [[ $choice == "y" ]]
    then
        mkdir -p "$logs_dir"
        if [ -d "$logs_dir" ]
        then
            echo "Directory created successfully..."
            break
        else
            echo "Directory created failed. Try again..."
        fi
    else
        echo "Please enter the correct directory path again..."
    fi
fi
done

# Copy all files to the backup folder

cp -r "$source_dir"/* "$backup_dir"

# compress

tar -czf "$backup_dir/backup-$today.tar.gz" "$source_dir"

#write log

echo "Backup started: $today" >> "$logs_dir/backup.log"
echo "Source: $source_dir" >> "$logs_dir/backup.log"
echo "Backup archive: $backup_dir/backup-$today.tar.gz" >> "$logs_dir/backup.log"
echo "Backup process completed at: $today" >> "$logs_dir/backup.log"
echo "----------------------------------------" >> "$logs_dir/backup.log"
echo "Backup Completed..."
echo "Log updated..."