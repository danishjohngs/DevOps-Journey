# Task 4 – Users & Permissions

## Objective
Create a deployment script and a sensitive configuration file, then apply the required Linux permissions.

## Commands Used

### Create the Files
```bash
touch company/app/deploy.sh
touch company/app/secrets.env
```

### Set Permissions
```bash
chmod 755 company/app/deploy.sh
chmod 600 company/app/secrets.env
```

### Verify Permissions
```bash
ls -l company/app/deploy.sh company/app/secrets.env
```

## Answers

### 1. Why is `755` used for `deploy.sh`?
The owner receives read, write, and execute permissions. The group and others receive read and execute permissions. This allows the owner to modify the script while other users can read and execute it, subject to other access requirements.

### 2. Why is `600` used for `secrets.env`?
The owner receives read and write permissions, while the group and others receive no permissions. This reduces unnecessary access to potentially sensitive configuration data.

### 3. What is the difference between `chmod` and `chown`?
`chmod` changes permissions, whereas `chown` changes file ownership and can also change group ownership.

### 4. Explain `rwxr-xr-x`.
The owner has read, write, and execute permissions. The group and others have read and execute permissions but cannot write through these permission bits.

## Findings
The deployment script was assigned permission mode `755`, and the sensitive configuration file was assigned mode `600`.

## Verification
The `ls -l` output should show `-rwxr-xr-x` for `deploy.sh` and `-rw-------` for `secrets.env`.

## Evidence
Screenshots of file creation, permission changes, and the final `ls -l` output.