# PART C – NETWORK ANALYSIS

## Scenario 1

**Question:**  
Laptop IP: `192.168.1.25`

Is it Public or Private? Explain.

**Answer:**

It is a **Private IP Address** because `192.168.1.25` belongs to the private IPv4 range `192.168.0.0/16`. It is used for communication within private networks and is not directly accessible over the public internet.

---

## Scenario 2

**Question:**  
Mobile receives `192.168.1.100` after connecting to Wi-Fi.

Which service assigned it? Explain.

**Answer:**

The **DHCP (Dynamic Host Configuration Protocol)** service assigned the IP address automatically. DHCP provides devices with network configuration such as IP address, subnet mask, default gateway, and DNS server.

---

## Scenario 3

**Question:**  
Server IP: `49.205.100.25`

Can Internet users directly access it? Why?

**Answer:**

Yes, it can be directly reachable from the internet because `49.205.100.25` is a public IPv4 address. However, actual access depends on firewall rules, routing, security groups, and whether the required service is listening.

---

## Scenario 4

**Question:**  
Laptop cannot access websites outside the local network.

Which network component should be checked first? Explain.

**Answer:**

The **Default Gateway (Router)** should be checked first because it forwards traffic from the local network to external networks. Incorrect gateway configuration or router connectivity problems can prevent internet access.

---

## Scenario 5

**Question:**  
A DevOps Engineer deploys an EC2 Instance, Docker Container, and Kubernetes Pod.

Why does each require an IP Address?

**Answer:**

Each requires an IP address for network communication and identification.

- **EC2 Instance:** Uses an IP address to communicate with other cloud resources and external networks.
- **Docker Container:** Uses an IP address to communicate with other containers and network services.
- **Kubernetes Pod:** Uses an IP address to communicate with other Pods and services within the Kubernetes cluster.