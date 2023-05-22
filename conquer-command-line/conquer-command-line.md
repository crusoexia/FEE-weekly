---
title: Conquer CLI
verticalSeparator: ^===$
theme: solarized
---

<!-- .slide: data-background="./images/the-matrix.png" -->

# Conquer Command-Line
<!-- .element: style="color: #fff" -->

Theory, Tools & Practice
<!-- .element: style="color: #fff" -->

---

# Humor, Play and Hack

![cowsay](./images/cowsay.png)
<!-- .element: style="height:160px;" -->

===

## Elephant In The Room

It is third decade in the 21th Century, besides the obvious reasons like the servers don't have GUI, 
<!-- .element: class="fragment" data-fragment-index="1" -->

_Why do people still invent languages and tools with CLI interface?_
<!-- .element: class="fragment" data-fragment-index="1" -->

Notes: GUI is good, but it is mainly for end users, has limitation for technique tasks.

===

## Example: File operation.

===

Copy file(s) with Graphic UI:

![screenshot of copy file with Graphic UI]()

Tedious! &#x1F44E;
<!-- .element: class="fragment" data-fragment-index="1" -->

===

Copy file(s) with CLI:

```sh [2]
j workspace
cp ~/Downloads/*snapshot.* ./
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Clean and elegant!
<!-- .element: class="fragment" data-fragment-index="2" -->

The most important: SIMPLE!(and repeatable)
<!-- .element: class="fragment" data-fragment-index="2" -->

===

But not only...

===

## Example: Application cooperation

===

Imagine you want to do below task: 

Use a tool that generate a random humorous sentence and wrapped the sentence in the bubble of a cow to make it more humorous and copy it in clipboard so that you can paste it to your Wechat moments.

===

With GUI applications:

**Repeatly** _Double click to open app -> click to function -> copy / paste result_
<!-- .element: class="fragment" data-fragment-index="1" -->

Tedious! &#x1F44E;
<!-- .element: class="fragment" data-fragment-index="2" -->

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

Don't believe it? Check the [shell_gpt](https://github.com/TheR1D/shell_gpt).

Now you have 10s of thousands of applications which have the world's best AI capability, __for free__.
<!-- .element: class="fragment" data-fragment-index="1" -->

===

From here you could get the idea of the magician's secret: The power of the CLI.

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

/home/\<user> hierarchy

---

# Theory - Unix privilege and User group

`sudo rm -rf /` &#x1F389;&#x1F389;&#x1F389;

===

## Caution!

Don't run above command in your terminal, otherwise the author of this slides don't responsible for any lost of doing so!

===

Refs
* [Redhat Users and Groups](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/4/html/reference_guide/ch-users-groups)
* [https://csguide.cs.princeton.edu/account/groups](https://csguide.cs.princeton.edu/account/groups)
* [https://www.redhat.com/sysadmin/manage-permissions](https://www.redhat.com/sysadmin/manage-permissions)
* [https://steflan-security.com/linux-privilege-escalation-exploiting-user-groups/](https://steflan-security.com/linux-privilege-escalation-exploiting-user-groups/)
* [https://reboare.gitbooks.io/booj-security/content/general-linux/privilege-escalation.html](https://reboare.gitbooks.io/booj-security/content/general-linux/privilege-escalation.html)

---

# Tools - Boost CLI experience

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

# Practice - File System operation

---

# Practice - Browse history

---

# Practice - Networking

---

# Tools - Filter Utilities

---

# Tools - String manipulating

---

# Tools - Shell

---

# Tools - Text Editor

The Holy War 

(between emacs and vim)

---

# Tools - Git

---

# Thanks!

---

# References
* [Filesystem Hierarchy Standard](https://www.pathname.com/fhs/)
