## 1. Check SSH Availability

**Command:**
```bash
ssh
```

**Actual output:**
```text
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]
           [-b bind_address] [-c cipher_spec] [-D [bind_address:]port]
           [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
           [-i identity_file] [-J destination] [-L address] [-l login_name]
           [-m mac_spec] [-O ctl_cmd] [-P tag] [-p port]
           [-Q query_option] [-R address] [-S ctl_path] [-W host:port]
           [-w local_tun:remote_tun] destination [command [argument ...]]
```

**Explanation:** SSH is installed and available. Running `ssh` without a destination displays its usage information.

## 2. Verify GitHub SSH Authentication

**Command:**
```bash
ssh -T git@github.com
```

**Initial output before configuring the SSH key:**
```text
The authenticity of host 'github.com (4.187.247.160)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
git@github.com: Permission denied (publickey).
```

**Successful output after generating the key and adding the public key to GitHub:**
```text
Hi danishjohngs! You've successfully authenticated, but GitHub does not provide shell access.
```

**Explanation:** Initially, GitHub could not authenticate the computer because a registered SSH key was not yet being used. After generating the key pair and adding the public key to GitHub, authentication succeeded. The message about no shell access is normal: this command tests authentication; it does not open an interactive shell on GitHub.

## 3. List SSH Files

**Command:**
```bash
ls -la ~/.ssh
```

**Actual output after generating the key pair:**
```text
total 24
drwx------  2 xyaro xyaro 4096 Nov 11 22:44 .
drwxr-x--- 16 xyaro xyaro 4096 Nov  8 01:09 ..
-rw-------  1 xyaro xyaro  419 Nov 11 22:34 id_ed25519
-rw-r--r--  1 xyaro xyaro  106 Nov 11 22:34 id_ed25519.pub
-rw-------  1 xyaro xyaro  978 Nov 11 22:44 known_hosts
-rw-r--r--  1 xyaro xyaro  142 Nov 11 21:12 known_hosts.old
```

| File | Purpose |
|---|---|
| `id_ed25519` | Private key; keep secret. |
| `id_ed25519.pub` | Public key; this is the key added to GitHub. |
| `known_hosts` | Stores SSH server host keys that this computer has accepted. |
| `known_hosts.old` | Previous copy of the known-hosts file. |

## 4. Generate a New SSH Key

**Command:**
```bash
ssh-keygen -t ed25519 -C "danish.sec.dev@gmail.com"
```

**Actual output:**
```text
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/xyaro/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/xyaro/.ssh/id_ed25519
Your public key has been saved in /home/xyaro/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:BpkVV8Cg0F3MnzNqODhOZNRYEIamAM1hqOj9UuJ7oKc danish.sec.dev@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
| .=o.. ++O+o.    |
|..+  oo*.+       |
|o . ==o  . .     |
|o  . ...   =     |
|. .    S. . o    |
|. .+     . o     |
| o = .   .       |
| . + o           |
|  Eo.+           |
+----[SHA256]-----+
```

**Explanation:** `ssh-keygen` generates the key pair; `-t ed25519` selects the Ed25519 algorithm; `-C` adds an identifying comment (the email address). The private key is saved as `id_ed25519`, and the public key as `id_ed25519.pub`.

**Passphrase note:** The prompts were left blank, so this key was generated without a passphrase. A passphrase is recommended because it adds local protection if someone obtains the private-key file.

## 5. Start SSH Agent

**Command:**
```bash
eval "$(ssh-agent -s)"
```

**Actual output:** Output is `Agent pid 1999`; the process ID varies.

**Explanation:** Starts the SSH agent and sets the environment so SSH tools can communicate with it. The agent can hold unlocked private keys for use by SSH clients.

## 6. Add SSH Key to Agent

**Command:**
```bash
ssh-add ~/.ssh/id_ed25519
```

**Actual output:**
```text
Identity added: /home/xyaro/.ssh/id_ed25519 (danish.sec.dev@gmail.com)
```

The loaded-key list was also checked using:
```bash
ssh-add -l
```

**Actual output:**
```text
256 SHA256:BpkVV8Cg0F3MnzNqODhOZNRYEIamAM1hqOj9UuJ7oKc danish.sec.dev@gmail.com (ED25519)
```

**Explanation:** `ssh-add` adds the private key to the running SSH agent. `ssh-add -l` lists identities currently loaded in the agent, including the key fingerprint.

## 7. Display Public Key

**Command:**
```bash
cat ~/.ssh/id_ed25519.pub
```

**Actual output (key shortened in this report):**
```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI...
```

**First few characters:**
```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5
```

**Explanation:** The `.pub` file contains the public key. It can be added to GitHub under **Settings → SSH and GPG keys**. The private key file `id_ed25519` must remain secret.

## 8. Check HTTPS Response

**Command:**
```bash
curl -I https://google.com
```

**Actual output:**
```text
HTTP/2 301
location: https://www.google.com/
content-type: text/html; charset=UTF-8
content-security-policy-report-only: object-src 'none';base-uri 'self';script-src 'nonce-FtqluU5eW5FgFx3Wf5CZtg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
date: Wed, 11 Nov 2026 19:35:30 GMT
expires: Fri, 11 Dec 2026 19:35:30 GMT
cache-control: public, max-age=2592000
server: gws
content-length: 220
x-xss-protection: 0
x-frame-options: SAMEORIGIN
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

**Status code:** `301 – Moved Permanently`.

**Explanation:** Google redirects the request to `https://www.google.com/`. `curl -I` requests response headers without downloading the response body.

## 9. Compare HTTP and HTTPS

**HTTP command:**
```bash
curl -I http://google.com
```

**Actual output:**
```text
HTTP/1.1 301 Moved Permanently
Location: http://www.google.com/
Content-Type: text/html; charset=UTF-8
Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-FBLUFlMvrT4EtQ2N3phupw' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
Date: Wed, 11 Nov 2026 19:36:48 GMT
Expires: Fri, 11 Dec 2026 19:36:48 GMT
Cache-Control: public, max-age=2592000
Server: gws
Content-Length: 219
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN
```

**HTTPS command:**
```bash
curl -I https://google.com
```

**Two differences:**
1. HTTP does not use TLS encryption by default, whereas HTTPS uses TLS to protect data exchanged between the client and server.
2. HTTP normally uses TCP port `80`, whereas HTTPS normally uses TCP port `443`.

**Observation:** Both requests returned status code `301` and redirected to their respective `www` URLs. The shown HTTP response used HTTP/1.1, while the HTTPS response used HTTP/2. This is an observation about these particular requests, not a universal difference between HTTP and HTTPS.

## 10. AWS EC2 SSH Connection Command

**Given:** EC2 public IP `54.234.xxx.xxx`; private key file `mykey.pem`.

For an Amazon Linux instance:
```bash
ssh -i mykey.pem ec2-user@54.234.xxx.xxx
```

For an Ubuntu EC2 instance, the username is usually `ubuntu`:
```bash
ssh -i mykey.pem ubuntu@54.234.xxx.xxx
```

`ssh` starts the connection; `-i` specifies the private-key file; `ec2-user` or `ubuntu` is the remote operating-system username; the IP is the instance's public address.


## 11. What is SSH?

SSH stands for **Secure Shell**. It is a network protocol used to securely communicate with and manage remote computers over a network. It supports encrypted remote login, command execution and secure file transfer.

## 12. Why is SSH Required in DevOps?

SSH is used in DevOps to securely access and manage remote servers. It helps engineers manage Linux servers remotely, deploy and maintain applications, execute commands on remote machines, transfer files securely and automate server-administration tasks.

## 13. Which Port Does SSH Use?

SSH normally uses **TCP port 22**.

## 14. What is SSH Key Authentication?

SSH key authentication verifies identity using a mathematically related public and private key pair. The private key stays with the user, while the corresponding public key is registered on the remote system. The client proves possession of the private key by signing an authentication challenge, and the server verifies the signature using the public key.

## 15. Difference Between Public Key and Private Key

| Public Key | Private Key |
|---|---|
| Can be shared. | Must remain secret. |
| Registered with GitHub or stored on the remote server. | Kept securely on the user's computer. |
| Used to verify a digital signature. | Used to create a digital signature. |
| In this OpenSSH key pair, the filename ends in `.pub`. | Usually has no `.pub` extension. |

## 16. What is SSL?

SSL stands for **Secure Sockets Layer**. It is an older cryptographic protocol designed to secure communication over a network. SSL is obsolete and should not be used in modern systems.

## 17. What is TLS?

TLS stands for **Transport Layer Security**. It is the modern cryptographic protocol used to secure network communication. It provides confidentiality through encryption, integrity protection and authentication. HTTPS uses TLS to secure HTTP communication.

## 18. Difference Between SSL and TLS

| SSL | TLS |
|---|---|
| Older security protocol. | Modern successor to SSL. |
| SSL versions are obsolete and insecure. | TLS 1.2 and TLS 1.3 are commonly used today. |
| Should not be enabled in modern applications. | Recommended for modern secure communication. |

## 19. Why is HTTPS More Secure Than HTTP?

HTTPS uses TLS to protect communication between a client and a server. It provides:
1. **Confidentiality:** Encrypts data so unauthorized parties cannot easily read it.
2. **Integrity:** Helps detect data modification during transmission.
3. **Authentication:** Uses digital certificates to help verify the server's identity.

HTTP alone does not provide these TLS protections.

## 20. Which Port Does HTTPS Use?

HTTPS normally uses **TCP port 443**.

## 21. What is an SSL/TLS Certificate?

An SSL/TLS certificate is a digital certificate that helps authenticate a website or server. It binds a domain name or other identity to a public key and is digitally signed by a Certificate Authority (CA) or another trusted issuer.

## 22. What Information is Stored Inside a Certificate?

An X.509 certificate commonly contains:
- Subject identity, such as a domain name.
- Issuer or Certificate Authority name.
- Subject public key.
- Serial number.
- Validity period.
- Signature algorithm.
- Certificate Authority's digital signature.
- Subject Alternative Names (SANs), which can list additional domain names.

A certificate does **not** contain the server's private key.

## 23. What Does "Connection is Secure" Mean in a Browser?

It indicates that the browser has established an HTTPS connection protected by TLS and has validated the certificate according to its trust rules. This protects the connection, but it does not guarantee that the website itself is honest, safe or free from malicious content.

## 24. Explain the SSL/TLS Handshake Flow

The TLS handshake establishes security parameters and shared session keys between a client and server.

1. **Client Hello:** The client sends supported TLS versions, cryptographic options and key-share information.
2. **Server Hello:** The server selects the TLS version and cryptographic parameters and responds with its key-share information.
3. **Certificate:** The server sends its certificate to identify itself.
4. **Verification:** The client checks the certificate's hostname, validity period and trust chain.
5. **Key Exchange:** The client and server establish shared session secrets using the negotiated key-exchange mechanism.
6. **Encrypted Session:** Both sides derive session keys and begin protected communication.

**Simplified flow:**
```text
Client (Browser)
      |
      | Client Hello
      v
Server
      |
      | Server Hello
      | Certificate
      v
Client verifies certificate
      |
      | Key Exchange / Shared Secret
      v
Secure Session Established
      |
      | Encrypted Communication
      v
Server Response
```

This is a simplified explanation. The exact message sequence differs by TLS version; TLS 1.3 integrates key exchange and authentication into a specific handshake sequence.

## 25. Explain the Production Flow

**Flow:**
```text
User
  |
  v
DNS
  |
  v
HTTPS
  |
  v
Load Balancer
  |
  v
Nginx
  |
  v
Docker Container
  |
  v
Database
  |
  v
Response
  |
  v
User
```

**Explanation:**
1. **User:** Enters the website's domain name in a browser.
2. **DNS:** Resolves the domain name to the appropriate destination, such as a load balancer's IP address.
3. **HTTPS:** The browser establishes a secure TLS connection to the website endpoint.
4. **Load Balancer:** Distributes incoming requests across available backend servers or targets.
5. **Nginx:** Acts as a web server or reverse proxy and forwards requests to the application.
6. **Docker Container:** Runs the application in an isolated container environment.
7. **Database:** Stores and retrieves application data when required.
8. **Response:** The application sends the result back through the infrastructure to the browser.

The browser receives the response and displays the requested content.

## 26. Explain the Output of `curl -I https://google.com`

**Command:**
```bash
curl -I https://google.com
```

**Important output:**
```text
HTTP/2 301
location: https://www.google.com/
content-type: text/html; charset=UTF-8
date: Wed, 11 Nov 2026 19:35:30 GMT
server: gws
content-length: 220
```

**Explanation:**
- `curl`: Command-line tool for transferring data using network protocols.
- `-I`: Requests response headers only.
- `https://google.com`: The requested HTTPS URL.
- `HTTP/2`: Protocol version used for the response.
- `301`: Permanent redirect status code.
- `location`: Destination URL for the redirect.
- `content-type`: Describes the response content type.
- `date`: Date and time of the response.
- `server`: Server identifier supplied in the response.
- `content-length`: Response body length in bytes.

**Conclusion:** Google returned HTTP status `301` and redirected the request to `https://www.google.com/`.

## 27. Compare the Outputs of HTTP and HTTPS Requests

| Feature | HTTP request | HTTPS request |
|---|---|---|
| Command | `curl -I http://google.com` | `curl -I https://google.com` |
| Response protocol shown | HTTP/1.1 | HTTP/2 |
| Status code | 301 | 301 |
| Redirect destination | `http://www.google.com/` | `https://www.google.com/` |
| TLS encryption | Not used | Used |

**Conclusion:** Both requests returned 301 redirects. HTTPS uses TLS encryption, whereas HTTP does not. The protocol versions shown are specific to these responses.

## 28. List Three Real-World Uses of SSH in DevOps

1. **Remote Server Management:** Securely access and administer Linux servers.
2. **Application Deployment:** Connect to remote servers and execute deployment commands.
3. **Secure File Transfer:** Use SCP or SFTP to transfer application files, backups and configuration files.

## 29. List Three Real-World Uses of SSL/TLS in Modern Applications

1. **Secure Websites:** HTTPS uses TLS to protect communication between browsers and web servers.
2. **Secure APIs:** TLS protects data exchanged between applications and API servers.
3. **Cloud Service Communication:** TLS protects communication between cloud services, applications and clients.

## 30. Explain the Complete Process of Connecting to an AWS EC2 Instance Securely Using SSH Keys

**Step 1 – Launch an EC2 instance:** Create an EC2 instance and select an operating system such as Amazon Linux or Ubuntu.

**Step 2 – Create or select a key pair:** Create an EC2 key pair and download the private key file (`.pem`). The corresponding public key is configured on the instance.

**Step 3 – Configure the security group:** Allow inbound SSH traffic using TCP port `22`, with the source restricted to your trusted public IP address.

**Step 4 – Set private-key permissions:**
```bash
chmod 400 mykey.pem
```
This restricts access to the private-key file.

**Step 5 – Connect to EC2:**

For Amazon Linux:
```bash
ssh -i mykey.pem ec2-user@54.234.xxx.xxx
```

For Ubuntu:
```bash
ssh -i mykey.pem ubuntu@54.234.xxx.xxx
```

**Step 6 – SSH authentication:** The SSH client uses the private key to prove possession of the corresponding key. The EC2 instance verifies the authentication using the configured public key.

**Step 7 – Secure connection established:** After successful authentication, the user receives access to the EC2 instance's terminal and can execute commands remotely.

**Complete flow:**
```text
Local Computer
      |
      | SSH command + Private Key
      v
AWS EC2 Public IP
      |
      | Security Group checks TCP port 22
      v
SSH Server on EC2
      |
      | Public Key Verification
      v
Authentication Successful
      |
      v
Secure SSH Session
      |
      v
Remote Linux Terminal
```
