---
title: Conquer CLI
verticalSeparator: ^===$
theme: solarized
highlightTheme: github
---

# Conquer Command-Line

Theory, Practice & Tools

---

# Humor, Play and Hack

![screenshot of milking]()

===

## Elephant In The Room

It is third decade in the 21th Century, Why do people still invent languages and tools with CLI interface?

(GUI is good, but it is mainly for end users, has limitation for technique tasks.)

===

Example: File system operation.

Copy file(s) with Graphic UI:

![screenshot of copy file with Graphic UI]()

===

Copy file(s) with CLI:

```sh [2]
j workspace
cp ~/Downloads/*snapshot.* ./
```

===

How clean and elegant!

And the most important: SIMPLE!(and repeatable)

===

But it is not the whole story.

TODO: An example to demonstrate the charactoristic of cli(composition).

===

Automation: The Must-Have ability for development tools and Pipeline.

===

## The deep reason that make CLI special and vibrant

1. Unified and simple input & output. <!-- .element: class="fragment" data-fragment-index="1" -->
2. Concentrate and self-contained individual module. <!-- .element: class="fragment" data-fragment-index="2" -->
3. Each module just "filter" the input. <!-- .element: class="fragment" data-fragment-index="3" -->
4. Compose the modules to accomplish complicate tasks.<!-- .element: class="fragment" data-fragment-index="4" -->
-- The design principle of Unix <!-- .element: class="fragment" data-fragment-index="5" -->

===

## Unlimited possibility

Boost the hundreds of thousands CLI applications with ChatGPT without a single-line code change. - The true power of the CLI.

===

## Overral, the CLI has a long history since 1960s. It is the UI created by the developers for developers.

---

# Theory - Unix File System

First thing first.

Note: Where to find the stuffs and where to place the stuffs(so that can find them later).

===

## Everything is a file(descriptor)

So that the same set of tools, utilities and APIs can be used on them.

===

Documents, hard-drives, keyboard, screen, printers, network streams etc. are all files.

Observe the output of `ls`, `ls | cat` and `ls > list.txt`

===

> In facts, _pipe_ (|) acts as a temporary file which hold the output of one command and exists until next command read it.

===

File system hierarchy

| Directory     | Description                                                               | Shareable |
|---------------|---------------------------------------------------------------------------|-----------|
| /             | Root of the filesystem tree                                               |           |
| /bin          | Essential user command binaries.                                          | Y         |
| /boot         | Static files of the boot loader                                           |           |
| /dev          | Device files                                                              |           |
| /etc          | Host-specific system configuration                                        |           |
| /etc/opt      | Configuration files for /opt                                              |           |
| /home         | User home directories                                                     |           |
| /home/\<user> | Login user home directory                                                 |           |
| /lib          | Essential shared libraries and kernel modules                             |           |
| /mnt          | Mount point for a temporarily mounted filesystem                          |           |
| /opt          | Add-on application software packages                                      | Y         |
| /root         | Home directory for the root user(system admin)                            |           |
| /usr          | Executables, libraries, and shared resources that are not system critical | Y         |
| /usr/bin      | The /bin is a symbolic link of /usr/bin                                   | Y         |
| /tmp          | Temporary files                                                           |           |
| /var          | Files that may change often – especially in size                          |           |
<!-- .element: style="font-size:20px" -->

Note: All data in Unix is organized into files. All files are organized into directories. These directories are organized into a tree-like structure called the file system.

---

# Practice - File System operation

---

# Practice - Unix user group

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

# Why do ppl still using command in 2023?

* Example - batch copy files
* pipeline, softwares composition

---

# Thanks!

---

# References
* [Filesystem Hierarchy Standard](https://www.pathname.com/fhs/)
