# Task 1 – Server Health Audit

## 1. Current Logged-in User
- **Command:** `whoami`
- **Finding:** The current logged-in user is `xyaro`.

## 2. Server Hostname
- **Command:** `hostname`
- **Finding:** The hostname is `void`.

## 3. Server Uptime
- **Command:** `uptime`
- **Finding:** The system had been running for approximately 10 hours and 29 minutes when the command was executed.

## 4. RAM Usage
- **Command:** `free -h`
- **Total RAM:** 7.6 GiB
- **Used RAM:** 700 MiB
- **Free RAM:** 5.5 GiB
- **Available RAM:** 6.9 GiB
- **Swap Used:** 0 B
- **Finding:** Memory usage was low at the time of inspection, with substantial available memory and no swap usage.

## 5. Disk Usage
- **Command:** `df -h`
- **Finding:** Pending. Disk usage must be recorded from the actual command output.

## 6. IP Address
- **Command:** `ip a`
- **Interface:** `eth0`
- **IP Address:** `172.20.235.248`
- **Finding:** The WSL network interface `eth0` has an IPv4 address of `172.20.235.248`.

## 7. CPU and Process Overview
- **Command:** `top`
- **CPU Idle:** 99.5%
- **Load Average:** 0.02, 0.02, 0.00
- **Zombie Processes:** 0
- **Finding:** The captured snapshot showed low CPU activity and no zombie processes.

## Conclusion
The initial health audit showed low CPU and memory utilization. Disk usage remains unverified until the `df -h` output is recorded. These results describe the WSL environment at the time of inspection and do not independently establish the health of a separate production server.

## Evidence
Screenshots of the executed commands are stored in the `screenshots/` directory.