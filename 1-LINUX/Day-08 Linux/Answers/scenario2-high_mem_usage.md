# Scenario 2 High Memory Usage

**1. What did I check?**

I checked the processes consuming the most memory using `ps aux --sort=-%mem | head` and checked the overall RAM and swap usage using `free -h`.

**2. What did I observe?**

The `dockerd` process (PID 456) showed the highest visible memory usage at `1.0%`. The system had 7.6 GiB total RAM, 670 MiB used, 5.5 GiB free, and 6.9 GiB available. Swap usage was 0 B out of 2.0 GiB.

**3. What does that observation tell me?**

The output does not indicate obvious memory pressure at the time of inspection. A large amount of memory was available, and no swap was being used. However, this snapshot cannot rule out temporary memory issues.

**4. What should I check or do next?**

I should monitor memory usage over time using `top` and check again if the application becomes slow. I should investigate any process whose memory usage increases unusually and determine whether it affects application performance.