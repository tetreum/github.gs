/***
Repo: https://github.com/tetreum/github.gs
Usage:
var gh = new Github({
    username: "tetreum",
    repo: "mytestrepos",
    token: "65ey6r7jruhgnh" // How to get a user token: https://github.com/settings/tokens
  });
var comments = gh.getIssueComments(4);
Logger.log(comments);
****/
Github = (function(config) {
  
  var domain = "https://api.github.com/";
  var repo = config.username + "/" + config.repo;
  
  var getIssueComments = function(id) {
    validate(id, "number");
    
    return curl('repos/' + repo + '/issues/' + id + "/comments");
  };
  
  var closePR = function (id) {
    validate(id, "number");
    
    return curl('repos/' + repo + '/pulls/' + id, {
                method: "PATCH", 
                payload: {"state": "closed"}
           });
  }
  
  var mergePR = function(id) {
    validate(id, "number");
    
    return curl('repos/' + repo + '/pulls/' + id + '/merge', {method: "put"});
  };
  
  var validate = function (val, type) {
    if (typeof val !== type) {
      throw "Invalid value type for " + val + "expecting " + type;
    }
  }
  
  var curl = function (route, options) {
    if (typeof options === "undefined" || options === null) {
      options = {};
    }
    options.headers = {"Authorization": "Basic " + Utilities.base64Encode(config.username + ":" + config.token)};
    
    if (typeof options.payload !== "undefined" && typeof options.payload !== "string") {
      options.payload = JSON.stringify(options.payload);
    }

    return JSON.parse(UrlFetchApp.fetch(domain + route, options));
  };
  
  return {
    mergePR: mergePR,
    getIssueComments: getIssueComments,
    closePR: closePR
  }
});
