# Task 3 – File Operations

## Objective
Create the required application files and practise copying, renaming, and removing files.

## Commands Used

### File Creation
```bash
touch company/app/logs/app.log
touch company/app/config/config.env
touch company/app/backups/backup.log
```

### Copying
```bash
cp company/app/logs/app.log company/app/logs/app-copy.log
```

### Renaming
```bash
mv company/app/logs/app-copy.log company/app/logs/app-archive.log
```

### Removing
```bash
rm company/app/logs/app-archive.log
```

### Verification
```bash
ls -l company/app/logs
tree company
```

## Answers

### 1. `cp` vs `mv`
`cp` creates a copy while normally preserving the original file. `mv` moves a file or renames it.

### 2. `rm` vs `rmdir`
`rm` removes files and can recursively remove directory contents when instructed. `rmdir` removes empty directories.

### 3. Risks of `rm -rf`
The command recursively and forcibly removes the specified target. Incorrect paths can cause serious data loss. The target must always be checked before execution.

## Findings
The file operations demonstrate how to create, copy, rename, and remove files using Linux commands.

## Verification
Confirm that the original `app.log`, `config.env`, and `backup.log` remain in their expected locations and that `app-archive.log` has been removed.

## Evidence
Screenshots of file creation, copying, renaming, removal, and final directory verification.