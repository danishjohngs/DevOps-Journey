# Scenario 6 — Permission Denied

## 1. What did I check?

I checked the permissions and ownership of `demo.txt` and its parent directory, `devops-proj`, to understand why access might be denied.

**Commands used:**
- `ls -l devops-proj/demo.txt`
- `ls -ld devops-proj`

## 2. What did I observe?

I inspected the file's owner, group, and permission settings, along with the directory's permissions.

The actual cause will be determined after reviewing the command output and reproducing the permission error.

## 3. What does that observation tell me?

The permissions and ownership information helps determine whether the affected user has the required access to `demo.txt`. The user may also lack permission to enter or traverse the `devops-proj` directory.

## 4. What should I check or do next?

I should identify the user experiencing the problem, inspect the file and directory permissions, and compare them with the required access. After identifying the cause, I should apply the smallest appropriate permission or ownership change and verify that access works as expected without granting unnecessary privileges.

**Status:** Investigating — root cause not yet confirmed.