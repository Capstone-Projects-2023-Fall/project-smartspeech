---
sidebar_position: 2
---

# System Block Diagram

![system_block_diagram](/img/SmartSpeech_High-Level_System_Diagram.png)

Figure 1: In this image, calls going into the the AWS Network (to backend servers) have blue arrows. Any traffic with an egress or returning destination is labeled a shade of orange. User inputs have black arrows. This image shows a drawing recognition request to backend. The backend will suggest a list of symbols to use.

<!--
> In this image, calls going into the the AWS Network (to backend servers) have orange arrows. Any traffic with an egress destination is labeled a shade of blue. User inputs have black arrows.

The backend is hosted on AWS while the user is served a Next.js frontend. Each image labeling request will enter the AWS network via an Internet Gateway. The Load Balancers will pass off the request to a viable[^1] node which will either _compute_ the image labels or send a request to another image recognition service like Azure or OpenAI. Since each worker node is in a private subnet of the VPC, a NAT gateway[^2] is required to send outbound requests. Since contacting external services may require API Keys, the AWS System Manager Parameter Store is used to hide secrets[^3].

The network and computational load is distributed among machines via a combination of Load Balancers and an Auto Scaling Group (ASG). This allows the ASG Manager to spawn more instances if nodes report a local resource overload.

[^1]: A "viable" node is a node that reports a healthy status on a node status check. A healthy status implies all systems (disk, connectivity, ...) are working. Checking for this status is done by the listeners on the Auto Scaling Group.

[^2]: You might be thinking "Why not just put the nodes in the public subnets?". The answer is simple, nodes in a private control plane cannot be connected to without going through the load balancer and even then you cannot initiate a connection to a machine behind a NAT device. In short, this architecture allows us to maintain server integrity by never allowing any entity to access the worker nodes directly.

[^3]: Secrets are protected by AWS KMS (Key Management Service) which allows only specified machines to decrypt encrypted keys via IAM (identity and Access Management) Rules
-->
