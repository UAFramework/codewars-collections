# CYF collections at Codewar

Check [this](https://www.codewars.com/collections?q=cyf&created_by=everyone&order_by=name%20asc) link for the full list of collections.

## Setting up your code editor

There are some tools that will help you to write code. One of these, [Prettier](https://prettier.io/), formats your code, making it easier for you and others to read.

### 1. Install prettier

- In Visual Studio open the extensions panel (see https://code.visualstudio.com/docs/editor/extension-gallery#_browse-and-install-extensions)
- Search for `Prettier - Code formatter`
- Click install on the top result

### 2. Enable formatting on save

- In Visual Studio open User settings (see https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
- Search for `editor format`
- Set `editor.formatOnSave` and `editor.formatOnPaste` to true

### 3. Make Git Bach console default in VS Code

- In Visual Studio open User settings (see https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
- Search for `terminal.integrated.shellArgs` for your OS
- Set value to `Git Bash` from the available drop down

## Running the code/tests

- Once you have cloned the repository, run `npm install` in the terminal to install any necessary dependencies for running tests in JS.
- To run only the tests for the a particular collection, run `npm run test -- ./cyf-js-1-week-3/*.js`
- To run a single test file (for example `cyf-js-1-week-3/1-Is-String.js`), \
  run `npm test -- ./cyf-js-1-week-3/1-Is-String.js`

For more information about tests, look here:
[CYF Syllabus / Guides / Intro To Tests](https://syllabus.codeyourfuture.io/guides/intro-to-tests)
