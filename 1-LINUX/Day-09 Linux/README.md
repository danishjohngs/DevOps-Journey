# Linux Fundamentals Final Revision Assessment

## Production Server Health Audit & Troubleshooting

**Role:** Junior DevOps Engineer  
**Environment:** Ubuntu on WSL2  
**Hostname:** `void`  
**Username:** `xyaro`

## 1. Project Overview

This project demonstrates practical Linux administration and troubleshooting skills through a production-server-style assessment.

The assessment covers server health checks, filesystem investigation, file operations, permissions, process management, service management, log analysis, backups, and Nginx troubleshooting.

The goal is to investigate system behavior, collect evidence, interpret findings, and document appropriate remediation and verification steps.

## 2. Tasks Completed

| Task | Area | Status |
|---|---|---|
| 1 | Server Health Audit | Partially documented |
| 2 | Filesystem Investigation | Executed |
| 3 | File Operations | Executed |
| 4 | Users & Permissions | Verified |
| 5 | Process Troubleshooting | Awaiting recorded evidence |
| 6 | Service Investigation | Investigated |
| 7 | Log Analysis | Investigated |
| 8 | Storage & Backup | Awaiting verification evidence |
| 9 | Website / Nginx Investigation | Verified |
| 10 | Final DevOps Report | In progress |

Update the statuses as you complete and verify each task.

## 3. Server Health Summary

### System Information

- **Username:** `xyaro`
- **Hostname:** `void`
- **Uptime at inspection:** Approximately 10 hours and 29 minutes
- **Network interface:** `eth0`
- **Observed IPv4 address:** `172.20.235.248`

### Memory and CPU

The captured `free -h` output reported:

- Total memory: 7.6 GiB
- Used memory: 700 MiB
- Available memory: 6.9 GiB
- Swap used: 0 B

The captured `top` output showed 99.5% CPU idle, load averages of `0.02, 0.02, 0.00`, and zero zombie processes.

These results indicate low CPU and memory pressure at the time of inspection.

### Disk Usage

Disk usage must be documented using the actual output of `df -h`. No disk usage percentage is reported here because the relevant output has not been recorded in this report.

## 4. Filesystem and File Operations

Created the following project structure:

```text
company/
└── app/
    ├── backups/
    │   └── backup.log
    ├── config/
    │   └── config.env
    ├── deploy.sh
    ├── logs/
    │   └── app.log
    └── secrets.env
```

The directory structure and file operations were practised using Linux commands including `mkdir`, `mkdir -p`, `tree`, `touch`, `cp`, `mv`, and `rm`.

## 5. Permissions Verification

The permissions were verified using `ls -l`.

| File | Permission | Meaning |
|---|---|---|
| `deploy.sh` | `755` (`-rwxr-xr-x`) | Owner can read, write, and execute; group and others can read and execute |
| `secrets.env` | `600` (`-rw-------`) | Owner can read and write; group and others have no permission |

These permissions demonstrate basic access control and the principle of limiting access to sensitive configuration files.

## 6. Service Investigation

### SSH

- State observed: Inactive
- Enabled state observed: Disabled
- Socket activation trigger: `ssh.socket`

The service was not running persistently at the time of inspection. SSH connectivity was not tested, so availability remains unverified.

### Cron

- State: Active (running)
- Enabled state: Enabled

The captured logs showed routine cron sessions opening and closing.

### Apache HTTP Server

- Service: `apache2.service`
- State: Failed

The service logs repeatedly reported that the address was already in use on port 80.

### Nginx

- State: Active (running)
- Enabled state: Enabled

The configuration test and local HTTP request were successful, as detailed in the Nginx investigation section.

## 7. Log Analysis and Incident Findings

### Incident: Apache Startup Failure

**Observed symptoms**

Apache failed to start. Its logs included:

```text
Address already in use: AH00072
no listening sockets available, shutting down
Failed to start apache2.service
```

**Confirmed immediate cause**

Apache could not bind to port 80 because another process was already using that address and port.

**Further investigation required**

The process occupying port 80 must be identified before selecting a remediation. Although Nginx was running, its ownership of port 80 has not been independently confirmed.

**Resolution status:** Pending further investigation and an appropriate corrective action.

### Other Log Observations

The journal also contained WSL-related networking warnings, a missing PAM module warning, and time synchronization errors. These were recorded as separate observations; their impact has not been established.

## 8. Storage and Backup

The assessment includes creating an uncompressed archive and a gzip-compressed archive of the `company` project.

Planned verification includes:

- Inspecting archive sizes.
- Listing archive contents.
- Testing gzip integrity.
- Performing a test restoration where possible.

**Backup verification status:** Update this section after recording the actual command outputs and results.

## 9. Nginx Investigation and Verification

### Commands Used

```bash
systemctl status nginx
systemctl is-active nginx
journalctl -u nginx -n 10 --no-pager
sudo nginx -t
curl -I http://localhost
```

### Findings

- Nginx was active and running.
- The configuration test passed.
- The local HTTP request returned `HTTP/1.1 200 OK`.
- The response identified `nginx/1.24.0 (Ubuntu)` as the server.

### Conclusion

Nginx was functioning for the tested local HTTP endpoint at the time of inspection. This does not independently verify external connectivity or every application function.

No Nginx remediation was required based on these checks.

## 10. Lessons Learned

1. Establish a baseline before troubleshooting a system.
2. Use actual command output as evidence rather than relying on assumptions.
3. Distinguish active, inactive, disabled, and failed service states.
4. Inspect logs to understand the sequence of events leading to a failure.
5. Verify configuration and connectivity independently.
6. Apply the principle of least privilege when configuring file permissions.
7. Check archive contents and integrity before relying on a backup.
8. Confirm a root cause before changing production services.
9. Verify the result after every remediation.
10. Document unresolved issues honestly.

## 11. Evidence and Repository Structure

```text
linux-fundamentals-final-revision/
├── README.md
├── answers/
├── screenshots/
```

- `README.md`: Final assessment summary.
- `answers/`: Detailed answers and findings for each task.
- `screenshots/`: Terminal evidence for commands, observations, and verification.

## 12. Final Conclusion

This assessment provided hands-on practice with Linux filesystem operations, permissions, process inspection, service management, log analysis, backup creation, and web-server verification.

The investigation confirmed that Nginx was responding successfully to a local HTTP request and that Apache failed to start because port 80 was already occupied. The process responsible for the port conflict still requires confirmation before remediation.

The final submission should include the actual disk usage results, process troubleshooting evidence, backup verification results, and screenshots for all completed tasks.

**Environment note:** The commands were executed in Ubuntu on WSL2. Results describe that environment and should not be presented as measurements from an independent production server.