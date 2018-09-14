# github.gs
Github API wrapper for Google Scripts

# Usage as library

1. In toolbar, Resources -> Library -> Add `1LMl6pyG9YqJksQNCdFF3BMLJ_iOitixeKjD_50dRjHl8AkJY5nI0uUq3`
2.
```js
var gh = new Github.Github({
    username: "tetreum",
    repo: "mytestrepos",
    token: "65ey6r7jruhgnh" // How to get a user token: https://github.com/settings/tokens
  });
var comments = gh.getIssueComments(4);
Logger.log(comments);
```

# Self hosted usage

1. Copy the code on your project
2. 
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
