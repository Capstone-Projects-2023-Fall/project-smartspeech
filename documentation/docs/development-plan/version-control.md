---
sidebar_position: 5
---

# Version Control

Version control is maintained by `git` and `GitHub`. The standard workflow for any story / task is to create a branch with the `issue_id` in the name. The team follows the `[dev_name]/[issue_id]` to create branches[^1]. 

Deployment[^2] stems from the `main` branch of the repository. The main branch is protected from merges via *branch-protections*: 

![branch-protection](/img/screenshots/branch-protection.png)

Additionally, a workflow will be established where only code with a 80% or higher code coverage will be merged in with the `main` branch.  



[^1]: Example: `john/SS-42`
[^2]: For both the backend and frontend