  # Scenario 3 Disk full

**1. What did I check?**

I checked filesystem usage using `df -h` to identify any filesystem that was running out of disk space.

**2. What did I observe?**

I need to identify the filesystem showing 100% usage or very little available space and record its total size, used space, and available space.

**3. What does that observation tell me?**

If the filesystem is at 100% usage, there is no available space reported for normal writes on that filesystem. This may cause deployment failures if the deployment needs to create or modify files there. The root cause still needs to be investigated.

**4. What should I check or do next?**

I should investigate which directories and files are consuming the space, check for growing logs or old backups, and identify a safe corrective action. After resolving the issue, I should verify disk usage again and consider preventive measures such as log rotation and disk-space monitoring.