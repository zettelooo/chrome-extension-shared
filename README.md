# Zettel: Shared between Web & Chrome Extension

Shared implementations between Web and Chrome Extension.

## Installation

```bash
$ npm install @zettelyay/web-chrome-extension-shared
```

## Development

Clone the repository locally:


```bash
$ git clone https://github.com/zettelyay/web-chrome-extension-shared.git
```

Install the dependencies:

```bash
$ cd web-chrome-extension-shared
$ npm install
```

It's recommended to use **VS Code** to develop this project.
You need to have **Prettier** and **ESLint** extensions to be installed on your IDE.

> Linting will be called _automatically_ before committing. Any linting error will abort the process. Therefore, you possibly need to lint the staged changes manualy before trying to commit them yourself and fix all the errors and as much as possible of warnings first.

Lint check before commit:

```bash
$ npm run lint-staged   # Alternatively:   $ npm run .l
```

## Publication

Publish a new version of the NPM package:

- Push all the changes. The workspace needs to be cleaned.
- Make sure you're on `master` branch.

```bash
$ npm version patch   # / minor / major / any other valid semantic version
```

## Misc

Validate all peer dependencies:

```bash
$ npm run peers.validate
```

Upgrade all Zettel's official dependencies:

```bash
$ npm run zettel.upgrade   # Alternatively:   $ npm run .u
```

Check for all the updates available on the dependencies:

```bash
$ npm run updates.check
```

Upgrade all the dependencies to their very latest versions:

```bash
$ npm run updates.install
```

View GIT history visualized:

```bash
$ npm run gource
```

> You probably need to install `gource` locally first.<br/>
See [this link](https://gource.io/).

Summarize the size of the code base in lines of code:

```bash
$ npm run status
```

------------------

Copyright: **Zettel, 2020-23**
