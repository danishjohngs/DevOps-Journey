# Git & GitHub – Interview Questions and Answers

## 1. What is GitHub?

GitHub is a cloud-based platform where developers can store, manage, and collaborate on their code. It uses Git for version control and provides features like repositories, pull requests, issues, and project management.

## 2. Difference between Git and GitHub?

Git is a version control system that tracks changes in source code. GitHub is an online platform that hosts Git repositories and makes collaboration easier.

Simply put, Git manages the code history, while GitHub helps developers share and collaborate on that code.

## 3. What is a Remote Repository?

A remote repository is a version of a Git repository hosted somewhere outside your local computer, usually on platforms like GitHub.

It allows developers to share code, push their changes, and pull updates from others.

## 4. What does `git clone` do?

`git clone` downloads a copy of an existing remote repository to my local computer.

It also sets up the remote connection, usually named `origin`, so I can communicate with the original repository.

## 5. Difference between `git push` and `git pull`?

`git push` uploads my local commits to a remote repository, whereas `git pull` downloads remote changes and integrates them into my current branch.

In simple terms, push sends my changes, and pull brings other people's changes to my computer.

## 6. What is Forking?

Forking means creating my own copy of someone else's GitHub repository under my GitHub account.

I can make changes to my fork without directly modifying the original repository. If I want my changes included in the original project, I can submit a pull request.

## 7. What is a Pull Request?

A Pull Request, commonly called a PR, is a request to merge changes from one branch into another branch.

It allows other developers to review my code, suggest improvements, discuss changes, and approve them before merging.

## 8. What does `git remote -v` display?

It displays the remote repositories connected to my local Git repository, along with their URLs for fetching and pushing.

For example, it helps me check which GitHub repository my local project is connected to.

## 9. Why is GitHub important in DevOps?

GitHub is important in DevOps because it helps developers and operations teams collaborate and manage source code.

It also supports CI/CD automation through GitHub Actions, allowing teams to automate building, testing, and deploying applications.

## 10. Explain the standard GitHub workflow.

The standard workflow starts by cloning a repository or creating a new project.

Then I create a branch, make changes, stage them using `git add`, and save them using `git commit`.

After that, I push the branch to GitHub and create a Pull Request. Other developers review the changes, and once approved, the changes are merged into the main branch.

### Standard GitHub Workflow

```text
Clone Repository
       |
       v
Create Branch
       |
       v
Make Changes
       |
       v
git add
       |
       v
git commit
       |
       v
git push
       |
       v
Create Pull Request
       |
       v
Code Review
       |
       v
Merge into main
```

## 11. What happens if two developers push changes to the same repository?

If two developers push changes around the same time, Git checks whether their commits can be safely integrated.

If one developer pushes first and the other developer's push is based on an outdated version, the second push may be rejected with a non-fast-forward error.

The second developer needs to pull or fetch the latest changes, integrate them, resolve any merge conflicts if necessary, and push again.

## 12. Why is Pull Request approval important?

Pull Request approval is important because it allows other developers to review the code before it becomes part of the main branch.

It helps identify bugs, security issues, and coding mistakes. It also maintains code quality and makes collaboration safer.

## 13. What is the purpose of the `origin` keyword?

`origin` is the default nickname Git commonly gives to a remote repository.

Instead of repeatedly typing the full GitHub URL, I can use `origin` to refer to that repository.

For example:

```bash
git push origin main
```

Here, `origin` identifies the remote repository, and `main` identifies the branch.

## 14. Difference between Local and Remote Repository?

A local repository is stored on my computer, while a remote repository is hosted on another system, such as GitHub.

I can make commits locally without an internet connection and push those commits to the remote repository when I'm ready to share them.

## 15. Purpose of `git log --oneline`?

It displays the Git commit history in a compact format.

It shows each commit's short hash and commit message, making it easy to understand what changes were saved in the project.

Example:

```text
6b8e3ed add answers
a72c1f4 update README
c93d821 initial commit
```

---

# Bonus Practical Questions

## Q1. Show the command to remove a remote repository configuration.

```bash
git remote remove origin
```

This removes the remote connection named `origin` from the local repository. It does not delete the GitHub repository.

## Q2. Show the command to rename master → main.

```bash
git branch -M main
```

This renames the current branch to `main`.

## Q3. How can you check the current branch?

```bash
git branch --show-current
```

Alternative:

```bash
git branch
```

The asterisk `*` identifies the current branch.

## Q4. How can you view all branches?

Local branches:

```bash
git branch
```

Local and remote-tracking branches:

```bash
git branch -a
```

## Q5. How do you clone a repository into a custom folder name?

```bash
git clone https://github.com/username/repository.git my-project
```

Here, `my-project` becomes the local folder name instead of the repository's default name.
