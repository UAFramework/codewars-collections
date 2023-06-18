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

## Instructions for submission

For your homework, we'll be using [**Test Driven Development**](https://medium.com/@adityaalifnugraha/test-driven-development-tdd-in-a-nutshell-b9e05dfe8adb) to check your answers. Test driven development (or TDD) is the practice of writing tests for your code first, and then write your code to pass those tests. This is a very useful way of writing good quality code and is used in a lot of industries. You don't have to worry about knowing how this works, but if you're curious, engage with a volunteer to find out more! :)

1. Fork from this repo.
2. In your own repo create a new branch for each `cyf-js-?-week-?` sub-folder.  
3. For each js file complete the challenge save it once you're happy with your solution. \
Then run testing script (see instructions above) to check the results against the tests - all tests should be PASSED if you completed the challenges correctly. 
If a test shows FAILED, find the associated test to identify which function failed and fix it.
4. Commit each file separately. At least one commit for a single file.
5. Once you're happy with the quality of your code raise a PR from your branch in your fork to the original repo which you forked. 
So, for task with `cyf-js-1-week-3` you supposed to have a branch: `feature/cyf-js-1-week-3` with at least 12 commits.

