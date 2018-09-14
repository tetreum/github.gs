# github.gs
Github API wrapper for Google Scripts

# Usage

```js
var gh = new Github({
    username: "tetreum",
    repo: "mytestrepos",
    token: "65ey6r7jruhgnh" // How to get a user token: https://github.com/settings/tokens
  });
var comments = gh.getIssueComments(4);
Logger.log(comments);
```

# Available methods

- mergePR(id)
- getIssueComments(id)
- closePR(id)
