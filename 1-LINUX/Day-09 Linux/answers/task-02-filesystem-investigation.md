# Task 2 – Filesystem Investigation

## Objective
Create and verify the directory structure required for the company application.

## Commands Used

```bash
mkdir -p company/app/logs company/app/config company/app/backups
tree company
```

## Findings
The required directory structure consists of an application directory containing separate directories for logs, configuration files, and backups.

## Answers

### 1. Absolute Path vs Relative Path
An absolute path starts from the root directory `/`, whereas a relative path is interpreted from the current working directory.

### 2. Purpose of `mkdir -p`
The `-p` option creates missing parent directories automatically and prevents errors when the requested directories already exist.

### 3. Usefulness of `tree`
The `tree` command displays the directory hierarchy in a readable format and helps verify that the required structure exists.

## Verification
The directory structure will be considered verified after the `tree company` output confirms that `logs`, `config`, and `backups` exist under `company/app`.

## Evidence
Screenshot of the directory creation command and the resulting `tree company` output.