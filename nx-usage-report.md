# Nx Usage Report

## What is it?

Task orchestrator

### Similar Tools

* Turborepo
* grunt
* gulp

Compare with Turborepo: https://nx.dev/more-concepts/turbo-and-nx

### What is it not?

* vite
* turbopack
* webpack

## Why do we reconsider a tool like it after years using `npm script`?

* Unified mechanism(easy) to share fundamental tasks.
* Task dependency management in monorepo is tedious.
* Monorepo ci creep - cache speed up.

## Capability:

* Task management
   - Dependent package/task management
* Cache
   - Inputs / Outputs
   - Dependency watch
   - namedInputs
   - runtimeCacheInputs
   - remote cache
* Customize plugin
   - Generator
   - Executor

## Demo

1. configuration
   *  nx.json
   *  project.json
   *  "nx" in package.json
   *  run-commands executor
   *  other built-in executors: https://nx.dev/extending-nx/registry
2. run task
   * from root - run-many; run specific task of specific project
   * from project
   * from script
   * note: interactive task cannot work via project.json(jest watch)
3. cache

## More to mention

* Put all the cacheable targets in the project.json file
* project targets can be either included in project.json or package.json
* How does cache works
* Local package link and cache
