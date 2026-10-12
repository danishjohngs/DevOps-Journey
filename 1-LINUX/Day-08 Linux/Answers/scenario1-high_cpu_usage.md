# Scenario 1 — High CPU Usage

**1. What did I check?**

I checked which processes were using the most CPU by running `ps aux --sort=-%cpu | head`.

**2. What did I observe?**

The `containerd` process (PID 381) showed the highest visible CPU usage at 0.1%. The other displayed processes showed 0.0% CPU usage.

**3. What does that observation tell me?**

The output does not show high CPU usage at the time I checked. However, this is only one snapshot, so I cannot confirm whether CPU usage was high earlier or increases when the application becomes slow.

**4. What should I check or do next?**

I should use `top` to monitor CPU usage over time. If the application becomes slow again, I should check CPU usage during that period and identify any process consuming unusually high CPU.

**Status:** Investigating. Root cause not yet identified.