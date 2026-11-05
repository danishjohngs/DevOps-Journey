# PART B – LINUX PRACTICAL TASKS

# Networking Practical Tasks

## Task 1 – Find Your Private IP

**Command:**

```bash
hostname -I
```

**Output:**

```text
172.20.235.248 172.17.0.1
```

**Answer:**

Both are Private IP addresses.

- `172.20.235.248` – WSL Ubuntu network interface IP.
- `172.17.0.1` – Docker bridge gateway IP.

Both belong to private IPv4 address ranges and are not directly routable over the public internet.

---

## Task 2 – Display Complete Network Configuration

**Command:**

```bash
ip a
```

**Answer:**

The command displays network interfaces, IP addresses, MAC addresses, and interface status.

| Interface Name | IPv4 Address | CIDR Notation |
|---|---|---|
| `lo` | `127.0.0.1` | `/8` |
| `lo` | `10.255.255.254` | `/32` |
| `eth0` | `172.20.235.248` | `/20` |
| `docker0` | `172.17.0.1` | `/16` |

---

## Task 3 – Find the Default Gateway

**Command:**

```bash
ip route
```

**Output:**

```text
default via 172.20.224.1 dev eth0 proto kernel
```

**Answer:**

- **Gateway Address:** `172.20.224.1`
- **Interface:** `eth0`

The default gateway is the device or interface that forwards traffic from the local network to other networks when no more specific route exists.

In this setup, `172.20.224.1` is the Windows WSL virtual network interface.

---

## Task 4 – Find Your Public IP

**Command:**

```bash
curl ifconfig.me
```

**Output:**

```text
117.242.238.197
```

**Answer:**

My public IPv4 address is `117.242.238.197`.

Websites can see this address because outgoing internet traffic reaches them through my internet connection's public-facing IP address.

It is assigned by my Internet Service Provider (ISP), either directly to my connection or through its network infrastructure.

---

## Task 5 – Public vs Private IP Comparison

| Feature | Public IP | Private IP |
|---|---|---|
| Visibility | Visible on the public internet | Used within private networks |
| Assigned By | ISP or network provider | Router or DHCP server |
| Usage | Communication over the internet | Communication within local networks |
| Internet Accessibility | Globally routable | Not directly routable over the public internet |
| Example | `117.242.238.197` | `192.168.1.33` |

**Conclusion:**

Public and private IP addresses are both used for network communication. Private IP addresses identify devices within local networks, while public IP addresses enable communication across the internet. NAT allows devices with private IP addresses to access the internet through a public-facing IP address.