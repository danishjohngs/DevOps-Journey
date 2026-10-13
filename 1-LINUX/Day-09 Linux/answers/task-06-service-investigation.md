# Task 6 – Service Investigation

## Objective
Investigate SSH and Cron, inspect loaded services, and identify failed systemd units.

## Commands Used

```bash
systemctl status ssh
systemctl is-active ssh
systemctl is-enabled ssh
systemctl status cron
systemctl is-active cron
systemctl is-enabled cron
systemctl list-units --type=service
systemctl --failed
```

## Findings

### 1. SSH Service
- **Active state:** Inactive (dead)
- **Enabled state:** Disabled
- **Observation:** The service is configured with `ssh.socket` as its activation trigger.
- **Conclusion:** SSH is not currently running as a persistent service. Its actual connection availability has not been tested.

### 2. Cron Service
- **Active state:** Active (running)
- **Enabled state:** Enabled
- **Observation:** The service has been running since October 12, 2026. The displayed logs show routine cron sessions opening and closing.
- **Conclusion:** Cron is running and configured to start automatically.

### 3. Loaded Services
The service listing shows several running services, including:
- Nginx
- Docker
- containerd
- Cron
- systemd-journald
- systemd-resolved

### 4. Failed Services
- **Failed unit:** `apache2.service`
- **Description:** The Apache HTTP Server
- **Observation:** The unit is loaded but its active and sub-states are both failed.
- **Conclusion:** Apache has failed, but its root cause must be determined by inspecting its status details and logs.

## Answers

### 1. What is systemd?
systemd is a Linux system and service manager responsible for starting and managing services and other system units.

### 2. Explain start, stop, restart, and reload.
- `start` starts a service.
- `stop` stops a service.
- `restart` stops and starts a service again.
- `reload` requests a configuration reload when supported by the service.

### 3. Why check failed services?
Failed services can reveal startup failures, configuration errors, missing dependencies, or other operational issues that require investigation.

## Resolution
No service changes were made during this investigation. Apache's failure and the intended SSH configuration require further investigation before remediation.

## Verification
The service states were verified using `systemctl status`, `systemctl is-active`, `systemctl is-enabled`, and `systemctl --failed`.

## Lessons Learned
- A service can be installed and loaded but still be in a failed state.
- An inactive service is not necessarily a failed service.
- Enabled and active describe different things: startup configuration and current runtime state.
- Logs and status details are needed to determine why a service failed.
- A running service does not automatically prove that its application is functioning correctly.

## Evidence
Screenshots of SSH status, Cron status, the loaded service list, and failed service units.</