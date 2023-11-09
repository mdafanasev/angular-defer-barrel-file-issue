# Angular defer barrel file issue

This repository demonstrates the incorrect behavior of the defer syntax when a component is loaded from a barrel file (`index.ts` with re-exports)

[Link to the issue](https://github.com/angular/angular/issues/52554)

## Description of issue

**Steps to reproduce:**

- Run `npm run build`

**Expected behavior** (refer to the build from the [without-barrel](https://github.com/mdafanasev/angular-defer-barrel-file-issue/tree/without-barrel) branch):

- There should be a lazy chunk with OneComponent in the dist directory.

**Actual behavior**:

- There are no lazy chunks; OneComponent is bundled into the main chunk.

