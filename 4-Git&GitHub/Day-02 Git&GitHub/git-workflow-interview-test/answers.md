# PART B – INTERVIEW QUESTIONS

## 1. Explain the Git Commit Workflow.

The Git commit workflow is the process of tracking, staging, and saving changes in a Git repository.

It consists of three main stages:

1. **Working Directory:** Where we create or modify files.
2. **Staging Area:** Where we select changes that should be included in the next commit.
3. **Local Repository:** Where Git permanently records the staged changes as commits.

After committing, we can push the commits to a remote repository such as GitHub.

## 2. What is the purpose of `.gitignore`?

`.gitignore` is a configuration file that tells Git which untracked files and directories should be ignored.

Its purpose is to prevent unnecessary files from being added to the repository.

Examples include:
- Environment files (`.env`)
- Log files (`*.log`)
- Dependency directories (`node_modules/`)
- Temporary files
- Build outputs

**Important:** `.gitignore` does not automatically stop tracking files that are already tracked by Git.

## 3. Why should `.env` files not be committed?

`.env` files often contain sensitive information such as:
- Database passwords
- API keys
- Authentication tokens
- Cloud credentials
- Secret keys

Committing these files can expose sensitive credentials, potentially allowing unauthorized access to applications and infrastructure.

Instead, `.env` should be added to `.gitignore`, and a `.env.example` file containing placeholder values can be shared with other developers.

## 4. What is the difference between Tracked and Untracked files?

**Tracked Files:**
Files that Git already knows about. They may be unmodified, modified, or staged.

**Untracked Files:**
New files that exist in the working directory but have not yet been added to Git's tracking system.

| Tracked | Untracked |
|---|---|
| Already known to Git | Not yet tracked by Git |
| Changes are monitored | Changes are not monitored |
| Can be staged after modification | Must be added before being tracked |

## 5. Why are meaningful commit messages important?

Meaningful commit messages explain what changes were made and why.

They help developers:
- Understand project history.
- Identify specific changes.
- Troubleshoot bugs.
- Collaborate with team members.
- Review previous development work.

Example:

**Good:** `Add SSH authentication support`

**Bad:** `Update files`

## 6. What is a Git Tag?

A Git Tag is a reference that points to a specific commit in a repository.

Tags are commonly used to mark important points in project history, such as software releases and stable versions.

Examples:
- `v1.0.0`
- `v2.0.0`
- `v2.1.0`

Unlike branches, tags normally do not move when new commits are created.

## 7. Difference between Lightweight Tag and Release Version?

A **Lightweight Tag** is a simple reference to a specific commit. It does not contain additional tag metadata.

A **Release Version** is a published software version, often associated with a Git tag. On GitHub, a Release can include release notes, downloadable assets, and version information.

| Lightweight Tag | GitHub Release |
|---|---|
| Simple reference to a commit | Published version of software |
| Contains only a commit reference | Can include descriptions and release notes |
| Created inside Git | Published through GitHub |
| No additional metadata | Can include downloadable files |

Note: Git also supports annotated tags, which contain metadata such as the tagger, date, and message.

## 8. What does `git restore` do?

`git restore` is used to restore files in the working directory or staging area.

Its main uses are:

- Discarding unstaged changes in a file.
- Restoring a file from a specified source.
- Unstaging changes when used with `--staged`.

Example:

`git restore app.py`

This discards unstaged modifications to `app.py` and restores it to the version in the staging area.

## 9. Difference between `git restore` and `git reset`?

Both commands can be used to manage changes, but they serve different purposes.

| git restore | git reset |
|---|---|
| Primarily restores file contents | Primarily moves the current branch reference |
| Can discard unstaged changes | Can undo commits |
| Can unstage files with `--staged` | Can modify the staging area |
| Does not normally move the branch pointer | Can move the branch pointer |

## 10. What does `git restore --staged` do?

`git restore --staged` removes specified files from the staging area without deleting their modifications from the working directory.

Example:

`git restore --staged app.py`

After executing this command, the changes in `app.py` remain in the working directory but are no longer staged.

## 11. What is Soft Reset?

A Soft Reset moves the current branch pointer to an earlier commit while keeping the changes from the undone commits in the staging area.

Command:

`git reset --soft HEAD~1`

Real-world example:

A developer creates a commit but realizes that the commit message is incorrect. They can undo the latest commit, keep all its changes staged, and create a new commit with a corrected message.

## 12. What is Mixed Reset?

A Mixed Reset moves the current branch pointer to an earlier commit while keeping the changes in the working directory but removing them from the staging area.

Command:

`git reset --mixed HEAD~1`

It is the default reset mode when no reset option is specified.

Real-world example:

A developer wants to undo the latest commit and review or modify the changes before staging them again.

## 13. What is Hard Reset?

A Hard Reset moves the current branch pointer to an earlier commit and resets both the staging area and tracked working-directory files to match that commit.

Command:

`git reset --hard HEAD~1`

Real-world example:

A developer creates a commit containing unwanted changes and decides to completely discard those changes, returning the project to its previous committed state.

**Warning:** Hard Reset can permanently discard uncommitted tracked-file changes.

## 14. Which reset type is safest and why?

Soft Reset is generally the safest of the three reset types because it preserves all changes from the undone commits in the staging area.

It allows developers to modify, review, or recommit their work without losing those changes.

However, the safest choice depends on the situation. Mixed Reset is also non-destructive to working-file changes.

## 15. When should Hard Reset be avoided?

Hard Reset should be avoided when:

- There are important uncommitted changes.
- The developer is unsure which changes will be discarded.
- The commits have already been pushed and shared with other developers.
- The work may be needed later.

For shared commit history, `git revert` is generally safer because it creates a new commit that reverses previous changes instead of rewriting history.

## 16. What happens to the staging area after Mixed Reset?

After a Mixed Reset, the staging area is reset to match the target commit.

Changes introduced by the undone commits are removed from staging but remain in the working directory as unstaged modifications.

Command:

`git reset --mixed HEAD~1`

## 17. What command displays commit history in one line?

The following command displays the commit history in a compact, single-line format:

`git log --oneline`

It displays the abbreviated commit hash and commit message for each commit.

## 18. How do you view all tags in a repository?

Use:

`git tag`

This command lists all tags available in the local repository.

## 19. How do you inspect a specific tag?

Use:

`git show <tag-name>`

Example:

`git show v1.0.0`

It displays information about the tag and the associated commit.

## 20. Explain a real-world scenario where Git Tags are useful.

Imagine a development team is building an e-commerce application.

After completing development and testing, the team decides to release the first stable version.

They create a Git Tag named `v1.0.0` pointing to the commit representing that release.

Later, the team develops additional features and releases `v1.1.0`.

If a bug occurs in version `v1.0.0`, developers can use the tag to identify the exact commit associated with that release.

Git Tags are useful for:
- Marking software releases.
- Identifying stable versions.
- Tracking production deployments.
- Supporting bug fixes and rollbacks.
- Maintaining clear project history.

**Conclusion:** Git Tags provide a reliable way to identify important commits throughout the software development lifecycle.
