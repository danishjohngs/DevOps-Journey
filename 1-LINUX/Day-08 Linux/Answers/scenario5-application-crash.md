### Scenario 5 — Application Crash

**1. What did I check?**

I checked the Docker service status using `systemctl status docker` and reviewed its recent logs using `journalctl -u docker -n 20`. I also checked recent system error logs using `journalctl -p err -n 20`.

**2. What did I observe?**

The Docker service was active and running. Its logs showed that the Docker daemon initialized successfully. However, the system error logs showed that `apache2.service` failed to start. Other messages included WSL networking errors and a missing `pam_lastlog.so` module.

**3. What does that observation tell me?**

The Docker service itself appears to be running normally in the captured output. However, Apache failed to start, which could be relevant if the application depends on Apache. The logs do not yet confirm the root cause of an application crash.

**4. What should I check or do next?**

I should inspect the status and recent logs of `apache2.service` to understand why it failed. I should also determine whether the application runs through Apache or inside a Docker container. If it runs in a container, I should inspect the container's status and application logs before deciding on a corrective action.

**Status:** Investigating — root cause not yet confirmed.