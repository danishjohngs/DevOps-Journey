# Task 9 – Website Down Scenario

## Objective
Investigate Nginx service status, review its logs, validate the configuration, and test local HTTP availability.

## Commands Used

```bash
systemctl status nginx
systemctl is-active nginx
journalctl -u nginx -n 10 --no-pager
sudo nginx -t
curl -I http://localhost
```

## Findings

### 1. Service Status
- **State:** Active (running)
- **Enabled:** Yes
- **Observation:** Nginx has been running since October 12, 2026.
- **Conclusion:** The Nginx service is running normally according to the captured status output.

### 2. Service Logs
- **Observation:** The displayed logs show successful Nginx startup and shutdown events.
- **Conclusion:** No startup failure is shown in the captured log excerpt.

### 3. Configuration Validation
- **Command:** `sudo nginx -t`
- **Result:** Configuration syntax is OK, and the configuration test is successful.
- **Conclusion:** Nginx's configuration passed the syntax test.

### 4. HTTP Availability
- **Command:** `curl -I http://localhost`
- **HTTP Status:** `200 OK`
- **Server:** Nginx 1.24.0 (Ubuntu)
- **Content Type:** `text/html`
- **Conclusion:** Nginx successfully returned an HTTP response to a local request.

## Answers

### 1. What is Nginx?
Nginx is a web server that can also act as a reverse proxy, load balancer, and cache.

### 2. How do you verify Nginx?
Check the service status, inspect its logs, validate its configuration using `nginx -t`, and test the HTTP endpoint using `curl`.

### 3. What if restarting Nginx fails?
Inspect its status and logs, validate the configuration, identify the reported error, investigate the underlying cause, apply an appropriate correction, and verify again.

## Root Cause
No Nginx failure was identified during this investigation. The service is active, the configuration test passed, and the local HTTP request returned `200 OK`.

## Resolution
No remediation was necessary because the checks did not identify an Nginx service failure.

## Verification
The service status, configuration validation, and local HTTP response were verified successfully.

## Lessons Learned
- Service status alone does not prove that a website is responding.
- Configuration validation helps detect syntax errors.
- An HTTP test provides evidence that a local endpoint responds.
- A successful local request does not independently verify external access or every application function.
- Investigate before restarting a healthy service.

## Evidence
Screenshots of the Nginx service status, service logs, configuration test, and HTTP response.