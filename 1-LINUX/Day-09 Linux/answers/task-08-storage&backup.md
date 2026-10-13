# Task 8 – Storage & Backup

## Objective
Create and inspect backups of the company project using tar and gzip compression.

## Commands Used

### Inspect the Project
```bash
tree company
```

### Create a Backup Directory
```bash
mkdir -p linux-assessment-backups
```

### Create an Uncompressed Archive
```bash
tar -cvf linux-assessment-backups/company-backup.tar company/
```

### Create a Compressed Archive
```bash
tar -czvf linux-assessment-backups/company-backup.tar.gz company/
```

### Compare Archive Sizes
```bash
ls -lh linux-assessment-backups/
```

### Inspect Archive Contents
```bash
tar -tzvf linux-assessment-backups/company-backup.tar.gz
```

### Test Gzip Integrity
```bash
gzip -t linux-assessment-backups/company-backup.tar.gz
```

## Answers

### 1. tar vs zip
`tar` combines files into an archive and supports optional compression. `zip` creates an archive that normally compresses individual entries.

### 2. Why are backups important?
Backups support recovery from accidental deletion, corruption, system failure, and other incidents. They should be protected and tested through restoration.

### 3. What is rsync used for?
`rsync` synchronizes files and directories efficiently between locations and can reduce unnecessary data transfer by copying changes.

## Findings
- **Uncompressed archive:** Pending verification.
- **Compressed archive:** Pending verification.
- **Archive contents:** Pending inspection.
- **Integrity test:** Pending execution.

## Verification
The backup will be considered verified after the archive contents and gzip integrity have been checked. A test restoration provides stronger evidence that the backup is recoverable.

## Lessons Learned
- Archives consolidate project files for easier backup and transfer.
- Compression can reduce storage requirements.
- Listing archive contents helps confirm what was included.
- Integrity checks and test restorations help establish backup reliability.
- Backups should be stored separately from the source data for better protection.

## Evidence
Screenshots of archive creation, archive sizes, archive contents, and the integrity test.