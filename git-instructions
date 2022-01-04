## What is Git?
We will start by learning the Git Command-line tools.

Git is a **distributed version control system**. This means that the entire codebase and history of a project is available on every developer’s computer as a **local repository** , which allows for easy branching and merging.

This repository contains all of the information that the **remote repository** has, based on the last time that you synced those two together.

Even if you don't have access to the **remote repository**, you can still view all of the changes that have been made, and contributers can maintain a copy of this record on their own machines.

## What is GitHub?

Before we get started with installing and configuring Git, you must first create a profile on https://github.com.

GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.

GitHub is a **Git repository hosting service**, but it adds many of its own features. While Git is a *command line tool*, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.

## Installing and Configuring Git

Install gitbash: https://git-scm.com/downloads

Once you have successfully installed Git, you will need to configure it. The configuration values help us keep track of who is making what change within a project.

1. Right click on your desktop and click `Git Bash Here`.  Alternatively, open your terminal and run `git`.
2. Run the following commands in your terminal.  Substitute `"John Doe"` with your GitHub username, and `"johndoe@example.com"` with whatever email address you used to create your GitHub account.

```code
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Initialize a Repository From Existing Code
Let's say you've got an IDE project which you'd like to add to git. 
You may either use your IDE terminal or the command line (using the cd command to navigate to the project's folder.)
To begin tracking this folder with Git, we initialize a local repository by running the command `git init`.
A .git hidden folder has been created at this point.
The `.git` folder contains all the information that is necessary for your project in version control and all the information about commits, remote repository address, etc.
If we wanted to, we could remove this `.git` file with the command `rm -rf .git`, but we want to retain it so that we can track any changes made to our project.

## Committing to a Local Repository
We are now using git to track any files created in this directory, but we haven't commit anything yet.

### Tracking Files with `git status`
If within our directory we once more and run the command `git status`, we can see that we have several untracked files which will be listed in red.

### Working Directory, Staging Area, Repository

* Untracked and modified files will exisit within the **Working Directory**. The files in the **Working Directory** are listed when we run `git status`.

* The **Staging Area** is where we organize what we want to be commited to our repository.  The **Staging Area** allows us to pick and choose which files we want to commit and when.  Commits should be details regarding what changes were made in individual files.

1. To add files to the **Staging Area** individually we could run the commmand `git add <file-name>`. For now, we add all of the changes we've just made, run the following command.

```
$ git add .
```

When you run `git status` again, you should see the recently staged files in green.

2. To **commit** these changes run:
```
$ git commit -m "any commit message here"
```

## Committing to a Remote Repository
So far we have initialized a local repository to track changes made to our source code.  In order to connect this to a remote repository on GitHub, do the following.

1. Navigate to github.com. Make sure you're logged in as the same user that you configured in GitBash on your computer.

2. In the top right hand corner, under the `+` button, click `New Repository`.

3. Title your repository.  Do not initialize it with a README. Click `Create repository`.

4. Since we will be pushing the existing local repository from the command line using the `git remote add origin` command, click the clipboard icon next to the third option, as highlighted below.

5. within your ide or command prompt, we will add the origin as in this example `git remote add origin https://github.com/username/repository.git`

```
$ git remote add origin (repo link)
$ git push -u origin main
```

6. Now when you navigate to your remote repository on GitHub.com you will see that any changes you make will be reflected online.

#### Remember the steps you will take whenever commiting changes:
```
$ git add .
$ git commit -m "a message about changes"
$ git pull
$ git push
```

The `git pull` command is used to fetch and download content from a remote repository and immediately update the local repository to match that content, **before** you push your changes.

### References

* Git Cheat Sheet:(https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
* Git Pro eBook:(https://git-scm.com/book/en/v2)