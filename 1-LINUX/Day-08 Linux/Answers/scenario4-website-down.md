# Scenario 4 Website down

**1. What did I check?**

I checked the Nginx service status to determine whether the service was running, stopped, or in a failed state. I also checked recent service logs to investigate possible errors.
```
systemctl status nginx

journalctl -u nginx -n 20
```

**2. What did I observe?**

I observed the current state of the Nginx service and checked its recent logs for errors. I recorded whether the service was active, inactive, or failed and noted any relevant error messages.

**3. What does that observation tell me?**

If Nginx is inactive or failed, the website may be unavailable because the web server is not running. If Nginx is active but the website is still unavailable, the problem may involve configuration, network connectivity, or the application itself. Further investigation is required to confirm the root cause.

**4. What should I check or do next?**

I should validate the Nginx configuration, investigate any errors found in the logs, and check whether the required service is running correctly.
If Nginx is stopped or failed, and the cause has been investigated, I can attempt to start it:
```
sudo systemctl restart nginx
```
Then verify the service: `systemctl status nginx`