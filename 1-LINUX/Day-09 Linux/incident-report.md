# Bonus Challenge — Production Incident Report

## Initial Scenario
- Reported disk usage: 98%
- Reported RAM usage: 95%
- Reported Nginx state: Failed
- Reported application state: Slow

These were scenario inputs, not confirmed measurements from the actual environment.

## Investigation Findings

### Disk Usage
`df -h` showed:
- Windows C: drive (`/mnt/c`): 421 GB used out of 427 GB, 99% usage, 6.1 GB available.
- Ubuntu root filesystem (`/`): 13 GB used out of 1007 GB, 2% usage, 943 GB available.

The C: drive is critically low on space, while the Ubuntu root filesystem has ample available space.

`du` showed approximately 629 MB in `/var/log`, including approximately 612 MB in the systemd journal. The cause of the Windows C: drive usage remains under investigation.

### Memory Usage
`free -h` showed approximately 710 MiB used, 6.9 GiB available, and zero swap usage. The captured measurements do not indicate the 95% memory usage described in the scenario.

### Nginx
Nginx was active, and `nginx -t` passed. A local HTTP request returned `200 OK` in approximately 0.003 seconds.

### Apache
Apache failed to start because port 80 was already in use. The current socket listing showed Nginx listening on port 80. This explains the Apache startup conflict.

### Application Performance
The local Nginx endpoint responded quickly during the test. The performance of any separate application or upstream service has not been independently established.

## Root Cause
- C: drive storage pressure: cause not yet confirmed.
- Memory pressure: not reproduced.
- Nginx failure: not reproduced.
- Apache startup failure: port conflict with the current Nginx listener on port 80.
- Application slowness: not reproduced by the local HTTP test.

## Resolution and Verification
No storage cleanup or memory remediation has yet been verified. Nginx was confirmed active and responding. Apache requires a deliberate web-server configuration decision before remediation.

## Lessons Learned
1. Identify the exact filesystem before investigating disk usage.
2. Distinguish simulated incident values from actual measurements.
3. Check available memory and swap instead of relying on a reported percentage alone.
4. Verify service state, logs, listening ports, and HTTP responses independently.
5. Do not restart healthy services or delete files without evidence.
6. Record unresolved causes honestly and verify every corrective action.