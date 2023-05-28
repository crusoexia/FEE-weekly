---
title: Conquer CLI
verticalSeparator: ^===$
theme: solarized
---

<!-- .slide: data-background="./images/the-matrix.png" -->

# Conquer Command-Line
<!-- .element: style="color: #fff" -->

Theory, Tools & Practice - be a unix hacker
<!-- .element: style="color: #fff" -->

---

# Humor, Play and Hack

![cowsay](./images/cowsay.png)
<!-- .element: style="height:160px;" -->

===

## So, why do you want to use it?

It is third decade in the 21th Century,

_why do people still invent apps and tools with CLI interface?_

Notes: GUI is good, but it is mainly for end users, has limitation for technique tasks.

===

## Example: Move file(s).

===

Move file(s) with GUI:

1. Open "finder"(or anything else) 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="1" -->
2. Click after clicks to get the place where the files locate 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="2" -->
3. Select the file 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="3" -->
4. Hold the ctrl + select another file 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="4" -->
5. Repeat this until all the files you want to move are selected
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="5" -->
6. Right click the mouse 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="6" -->
7. Select "cut" 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="7" -->
8. Open another "finder" 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="8" -->
9. Click after clicks to the target place 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="9" -->
10. Right click mouse 
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="10" -->
11. Select the "paste"
<!-- .element: style="font-size:28px;margin:5px" class="fragment" data-fragment="11" -->

===

Tedious! &#x1F44E;

Not to mention the "finder" is really __SUCKS__.
<!-- .element: class="fragment" data-fragment-index="1" -->

===

Move file(s) with CLI:

```sh
mv ~/Downloads/*snapshot.* ~/workspace/my-project/images/
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Clean & Elegant!
<!-- .element: class="fragment" data-fragment-index="2" -->

More important, it is repeatable.
<!-- .element: class="fragment" data-fragment-index="3" -->

===

__Command it__, be machine's master, not slave.

But it is not just that...
<!-- .element: class="fragment" data-fragment-index="1" -->

===

## Application cooperation
Leverage Effect

===

Imagine you want to do below task: 

1. Use a tool that generate a random humorous sentence. <!-- .element: class="fragment" data-fragment="1" -->
2. Wrapped the sentence in the bubble of a cow to make it more humorous. <!-- .element: class="fragment" data-fragment="2" -->
3. Copy it in clipboard so that you can paste it to your Wechat moments. <!-- .element: class="fragment" data-fragment="3" -->

===

With GUI applications

Suppose you have one app that generate humors, and one app to render a "cow" to wrap a sentence:
<!-- .element: class="fragment" data-fragment-index="1" -->

**Repeatly** _Double click to open app -> click to function -> copy / paste result_
<!-- .element: class="fragment" data-fragment-index="2" -->

Tedious! &#x1F44E;
<!-- .element: class="fragment" data-fragment-index="3" -->

===

With CLI:

```sh
fortune | cowsay | xclip -sel clip
```
<!-- .element: class="fragment" data-fragment-index="1" -->

&#x1F389;Voila!&#x1F389;
<!-- .element: class="fragment" data-fragment-index="2" -->

===

## Unlimited possibility - Magics from the future

===

The CLI applications would not only cooperate with each others, but they are also boost by the application which even not been created.

__Without a single-line change__.

===

Don't believe it? Check the [shell_gpt](https://github.com/TheR1D/shell_gpt)!

Now you have 10s of thousands of applications which have the world's best AI capability, __for free__!
<!-- .element: class="fragment" data-fragment-index="1" -->

===

## Other capabilities
* Scripting
* Automation

===

From here you could get idea of the power of the CLI.

===

## The deep reason that make CLI special and vibrant

1. Unified and simple input/output across the system. <!-- .element: class="fragment" data-fragment-index="1" -->
2. Each application focus on a small area. <!-- .element: class="fragment" data-fragment-index="2" -->
3. Most of the applications just "filter" the input. <!-- .element: class="fragment" data-fragment-index="3" -->
4. Application cooperation is encouraged and simply by "composition". <!-- .element: class="fragment" data-fragment-index="4" -->
-- The design principle of Unix <!-- .element: class="fragment" data-fragment-index="5" -->

===

&#x261D; Overral, the CLI is a UI created by the developers for developers, it opens a door for play and hacking.

---

# Theory - Unix File System

The fear comes from unfamiliar.

===

## Everything is a file(descriptor)

===

Documents, hard-drives, keyboard, screen, clipboards, printers, network streams... anything you can imagine, are files(with different types).

__So that the same set of tools, utilities and APIs can be used on them.__
<!-- .element: class="fragment" data-fragment-index="1" -->

===

For example

Observe the output of `ls`, `ls | cat` and `ls > list.txt && cat list.txt`

TODO: how would `cat` distinct the input from cli and from the pipe?

===

> In facts, _pipe_ (|) acts as a temporary file which hold the output of one command and exists until next command read it.

===

## Unix(like) file system hierarchy

Where to find the stuffs and where should you place them.

===

| Directory         | Description                                                               | Shareable |
|-------------------|---------------------------------------------------------------------------|-----------|
| /                 | Root of the filesystem tree                                               |           |
| /bin              | Essential user command binaries.                                          | Y         |
| /boot             | Static files of the boot loader                                           |           |
| /dev              | Device files                                                              |           |
| **/etc**          | Host-specific system configuration                                        |           |
| /etc/opt          | Configuration files for /opt                                              |           |
| /home             | User home directories                                                     |           |
| **/home/\<user>** | Login user home directory                                                 |           |
| /lib              | Essential shared libraries and kernel modules                             |           |
| **/mnt**          | Mount point for a temporarily mounted filesystem                          |           |
| **/opt**          | Add-on application software packages                                      | Y         |
| /root             | Home directory for the root user(system admin)                            |           |
| **/usr**          | Executables, libraries, and shared resources that are not system critical | Y         |
| /usr/bin          | The /bin is a symbolic link of /usr/bin                                   | Y         |
| **/tmp**          | Temporary files                                                           |           |
| /var              | Files that may change often – especially in size                          |           |
<!-- .element: style="font-size:20px" -->

Note: All data in Unix is organized into files. All files are organized into directories. These directories are organized into a tree-like structure called the file system.

===

/home/\<user>/ hierarchy

| Directory                | Description                                                                          |
|--------------------------|--------------------------------------------------------------------------------------|
| /home/\<user>/Documents/ | Your personal documents                                                              |
| /home/\<user>/Desktop/   | The files you place on your GUI desktop are all locate at there                      |
| /home/\<user>/Download/  | Files downloaded by user applications for example the browser.                       |
| /home/\<user>/Picture/   | Used by the photo applications and screen captures                                   |
| /home/\<user>/bin/       | Your private executables                                                             |
| /home/\<user>/.config/   | Configurations of applications                                                       |
| /home/\<user>/.local/    | Files installed by user applications other than the OS distribution package managers |
| /home/\<user>/.ssh/      | ssh keys                                                                             |
<!-- .element: style="font-size:20px" -->

---

# Theory - Unix privilege and User group

`sudo rm -rf /` &#x1F389;&#x1F389;&#x1F389;

===

## Caution!

Don't run above command in your terminal, otherwise the author of this slides don't responsible for any lost of doing so!

===

Unix is a multi-user multi-tasking OS, it has been born with consideration of dividing user's resource and privileges.

===

## Definition

* __User__ - Accounts tied either to people, or specific applications.
* __Group__ - Users within a group can read, write, or execute files owned by that group.

&#x261D; A user can be assigned to multiple groups.
<!-- .element: class="fragment" data-fragment-index="1" -->

===

Standard Users

| User   | UID | GID | Home Directory | Shell         |
|--------|-----|-----|----------------|---------------|
| root   | 0   | 0   | /root          | /bin/bash     |
| bin    | 1   | 1   | /bin           | /sbin/nologin |
| daemon | 2   | 2   | /sbin          | /sbin/nologin |
| adm    | 3   | 4   | /var/adm       | /sbin/nologin |
<!-- .element: style="font-size:.6em" -->

See the full list [here](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/4/html/reference_guide/s1-users-groups-standard-users).
<!-- .element: style="font-size:.6em" -->

===

Standard Groups

| Group  | GID | Members           |
|--------|-----|-------------------|
| root   | 0   | root              |
| bin    | 1   | root, bin, daemon |
| daemon | 2   | root, bin, daemon |
| sys    | 3   | root, bin, adm    |
| adm    | 4   | root, adm, daemon |
<!-- .element: style="font-size:.6em" -->

See the full list [here](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/4/html/reference_guide/s1-users-groups-standard-groups).
<!-- .element: style="font-size:.6em" -->

===

&#x261D; The "Minimal Privilege Principle" is applied to assign restricted actions to different `standard` user and groups.

===

```sh
$ id -Gn
cxia adm dialout cdrom floppy sudo audio dip video plugdev netdev docker
```

===

TODO: user group management tools

===

## File Permission

* Each file has 3 level of permission `read`, `write`, and `execute` separately for the `owner`, the `group`, and `others`.
* The file owner can be changed only by the root user.
* File access permissions can be changed by both the root user and the owner of the file.

===

&#x261D; The user who creates a file is the owner that file. The creator's primary group is the group owner of the file.

&#x261D; There are more advanced permission controls like `special permission` and `ACL`(Access control list), which are rarely needed for personal computor.
<!-- .element: class="fragment" data-fragment-index="1" -->

===

```sh
$ ls -l .local/bin/fd | clip.exe
lrwxrwxrwx 1 cxia cxia 15 Dec  3 21:52 .local/bin/fd -> /usr/bin/fdfind
```

===

TODO: Who runs the process?

---

# Boost CLI experience - Tools 

工欲善其事，必先利其器

===

## Terminal

The magician's servant.

The ability to summon your servant at any time.

===

## tmux
Terminal multiplexer

===

* Session management
  - Create Session
  - Attach Session
  - Switch Session
* Window management
  - Create Window
  - Window navigation
  - Search/Switch Window
  - Swap window
* Pane management
  - Create Pane
  - Pane navigation
  - Pane position

===

## oh-my-zsh

===

One downside of the CLI is you have to remember the commands and their options(usability). 

__Auto-completion__ can dramatically resolve this problem.
<!-- .element: class="fragment" data-fragment-index="1" -->

===

## auto-jump

---

# Boost CLI Experience - Configuration

===

## User configuration files

* .profile
* .*shrc
* .config/

---

# Practice - File System operation

===

## Symbolic link

===

* create directory
* create file
* change user and group
* change permission
  - absolute mode
  - symbolic mode

see: https://www.redhat.com/sysadmin/manage-permissions

---

# Practice - Browse history

---

# Practice - Networking

---

# Practice - Filters

---

# Practice - String

---

# Practice - Scripting

---

# Practice - Text Editor

The Holy War 

Note: (between emacs and vim)

===

## Introduction

See <the art of unix programming> p.328 - the "roguelike" pattern

---

# Practice - System management

---

# Practice - Git

---

# References
* [Filesystem Hierarchy Standard](https://www.pathname.com/fhs/)
* [Redhat Users and Groups](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/4/html/reference_guide/ch-users-groups)
