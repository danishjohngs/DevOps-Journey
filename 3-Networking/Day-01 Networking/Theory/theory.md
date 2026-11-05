# PART A

## 1. What is Networking?

**Networking is the communication between different computers.**

## 2. Explain LAN, WAN, and Internet.

**LAN: Local Area Network, Network with small area like home, office, lab, school (under a Wifi).**

**WAN: Wide Area Network, Network that connects multiple LAN accross different cities, states or countries.**

**Internet: The world's largest network that connects millions of LANs and WANs together.**

## 3. What is the OSI Model?

**OSI model (Open Source Interconnection) that creates a standardize communication between systems.**

## 4. Explain the 7 layers of the OSI Model.

**7. Application layer**
```
The device/application that can interact with user.
```
**6. Presentation layer**
```
The data traslate, compress here (Encryption).
```
**5. Session layer**
```
This layer maintain the connection with the server.
```
**4. Transport layer**
```
It will controll the delivery using TCP, UDP.
```
**3. Network layer**
```
Routing happens, uses: IP address.
```
**2. Data link layer**
```
Uses: MAC address, inside local network.
```
**1. Physical layer**
```
Cables, Fiber, Wifi signals.

```
## 5. What is the TCP/IP Model?

**TCP/IP model is the model that everyone uses for practical or real world. It has only 4 layers (Application, Transport, Internet, Network Interface).**

## 6. Difference between OSI and TCP/IP.

**OSI and TCP/IP models are 2 important models that helps to create a standardize communication between systems. But in theories OSI model is there, but comming in real world the TCP/IP model uses for everything.**

## 7. What is an IP Address?

**IP address is the unique address for a system that gets from the router. And in inside a network, a IP address only gets for a system, every systems have different IP address. It helps to communicate each other.**

## 8. What is DNS?

**DNS (Domain Name System) it converts the domain name into an IP address. It translate human readable website names into machine relatable IP addresses.**

## 9. What is ICMP?

**ICMP (Internet Control Message Protocol) ICMP (Internet Control Message Protocol) is a network layer protocol used by routers and devices to report errors and diagnose network communication issues.**

## 10. Why is Networking important in DevOps?

**Networking serves as the backbone of DevOps.**


# PART B

## 1. What does ping do?

**Tests connectivity between the computer and another device or server by sending ICMP echo requests and measuring response time.**

## 2. What does curl do?

**Transfers data to or from a server using protocols such as HTTP and HTTPS. Commonly used to test APIs and access websites from the terminal.**

## 3. What does ip a do?

**Displays network interfaces, their IP addresses, MAC addresses, and interface status.**

## 4. What does hostname -I do?

**Displays the IP addresses assigned to your system's network interfaces.**

## 5. What does nslookup do?

**Queries DNS servers to resolve domain names into IP addresses and retrieve DNS records.**

## 6. What does traceroute do?

**Shows the network path (routers or hops) that packets take to reach a destination and helps identify network delays or routing problems.**

# PART C

## 1. Public IP Address

**A Public IP Address is an IP address used to identify a network or device on the public internet. It is globally routable and assigned by an Internet Service Provider (ISP) or another address allocation authority.
Example: 117.206.142.113**

## 2. Private IP Address

**A Private IP Address is an IP address used within a private network, such as a home, office, or internal virtual network. It is not directly routable across the public internet.**

## 3. Difference Between Public IP and Private IP

| Public IP                                                                 	| Private IP                                                           	|
|---------------------------------------------------------------------------	|----------------------------------------------------------------------	|
| Used for communication over the public internet.                          	| Used within private networks.                                        	|
| Globally unique while assigned and in use.                                	| Can be reused in different private networks.                         	|
| Assigned by an ISP or provider.                                           	| Usually assigned by a router or DHCP server.                         	|
| Routable across the public internet.                                      	| Not directly routable across the public internet.                    	|
| Can be accessed from the internet when routing and firewall rules permit. 	| Usually requires NAT, VPN, or another mechanism for external access. 	|
| Example: 117.206.142.113                                                  	| Example: 192.168.1.33                                                	|
