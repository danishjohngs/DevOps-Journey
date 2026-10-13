# Task 7 – Log Analysis

## Objective
Inspect system and service logs to investigate errors and identify the cause of a service failure.

## Commands Used

```bash
journalctl -n 20 --no-pager
journalctl -p err -n 20 --no-pager
journalctl -u apache2 -n 30 --no-pager
systemctl status apache2
journalctl -b --no-pager -n 30
```

## Findings

### 1. System Logs
Recent system logs contain Apache startup failures and warnings from the WSL Pro service.

### 2. Error-Level Logs
The error-level output contains Apache startup failures, WSL-related kernel messages, a missing PAM module warning, and time synchronization errors.

### 3. Apache Service Logs
Apache repeatedly failed to start. The logs report:

- `Address already in use` for `0.0.0.0:80`.
- `Address already in use` for `[::]:80`.
- `no listening sockets available, shutting down`.
- `Failed to start apache2.service`.

### 4. Root Cause
**Confirmed immediate cause:** Apache cannot bind to port 80 because the port is already occupied by another process.

**Further investigation required:** Identify the process listening on port 80 and determine whether the port conflict is expected.

Nginx was active in the earlier service listing, but its ownership of port 80 has not yet been verified.

## Resolution
No corrective change has been made yet. The process using port 80 must be identified before deciding whether to change Apache's listening port, adjust the web server configuration, or stop an unnecessary service.

## Verification
After an appropriate fix, verify that Apache starts successfully, inspect its service status, review its logs, and test the intended website or endpoint.

## Lessons Learned
- Logs help establish the sequence of events leading to a failure.
- `Address already in use` indicates a port-binding conflict.
- A failed service's root cause should be based on evidence, not assumptions.
- Multiple web servers may conflict if configured to listen on the same address and port.
- Remediation must preserve the intended application and web-server architecture.

## Evidence
Screenshots of recent logs, error-level logs, Apache service logs, and service status.