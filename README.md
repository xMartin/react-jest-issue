# Demoing an issue with a React/Jest setup

## Install and run

```
npm install
npm test
```

## Issue

It fails to run with an error `...has no method 'getPooled'` which seems to be related to mocking things incorrectly.

If you remove the `testPathDirs` setting in `package.json`, it works. But we want that for a huge test run performance gain in large code bases.

The whole issue only occurs because we explicitly mock the `ReactTransitionGroup` in our test file. But if we don't do that, we get another error because Component B (a child of component A) is mocked and missing the `componentWillEnter` etc methods that `ReactTransitionGroup` injects. (We could not mock component B but the whole idea of that test setup is mocking as much as possible, right?)
