---
title: Conquer CLI
verticalSeparator: ^===$
theme: solarized
highlightTheme: github
---

<!-- .slide: data-background="./hacker.png" -->

# Conquer Command-Line
<!-- .element: style="color: #fff" -->

Theory, Practice & Tools
<!-- .element: style="color: #fff" -->

---

# Humor, Play and Hack

![screenshot of milking]()

===

## Elephant In The Room

It is third decade in the 21th Century, Why do people still invent languages and tools with CLI interface?

(GUI is good, but it is mainly for end users, has limitation for technique tasks.)

===

## Example: File operation.

===

Copy file(s) with Graphic UI:

![screenshot of copy file with Graphic UI]()

===

Copy file(s) with CLI:

```sh [2]
j workspace
cp ~/Downloads/*snapshot.* ./
```

===

Clean and elegant!

The most important: SIMPLE!(and repeatable)

===

But it is not the whole story.

TODO: An example to demonstrate the charactoristic of cli(composition).

===

## Unlimited possibility - Magics from the future

The CLI applications would not only coorperate with each others, but they are also boost by the application which even not been created, without a single-line code change.

Don't believe it? Check the [shell_gpt](https://github.com/TheR1D/shell_gpt)

===

Automation: The Must-Have ability for development tools and Pipeline.

===

## The deep reason that make CLI special and vibrant

1. Unified and simple input & output. <!-- .element: class="fragment" data-fragment-index="1" -->
2. Concentrate and self-contained individual application. <!-- .element: class="fragment" data-fragment-index="2" -->
3. Each module just "filter" the input. <!-- .element: class="fragment" data-fragment-index="3" -->
4. Applications can easily coorperate with each other by composition. <!-- .element: class="fragment" data-fragment-index="4" -->
-- The design principle of Unix <!-- .element: class="fragment" data-fragment-index="5" -->

===

&#x261D; Overral, the CLI is a UI created by the developers for developers, and other applications.

---

# Theory - Unix File System

First thing first.

===

## Everything is a file(descriptor)

So that the same set of tools, utilities and APIs can be used on them.

===

Documents, hard-drives, keyboard, screen, printers, network streams etc. are all files(with different types).

===

For example

Observe the output of `ls`, `ls | cat` and `ls > list.txt && cat list.txt`

===

> In facts, _pipe_ (|) acts as a temporary file which hold the output of one command and exists until next command read it.

===

## Unix(like) file system hierarchy

Where to find the stuffs and where to place the stuffs.

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

---

# Practice - File System operation

---

# Practice - Browse history

---

# Practice - Networking

---

# Tools - Filter Utilities

---

# Tools - Shell

---

# Tools - Terminal

---

# Tools - Text Editor

---

# Tools - Git

---

# Thanks!

---

# References
* [Filesystem Hierarchy Standard](https://www.pathname.com/fhs/)
