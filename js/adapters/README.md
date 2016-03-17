# Adapters

Adapters allow the dashboard to get build information from multiple sources

### Current adapters

Circle CI

### In progress adapters

Travis CI

### Making an adaptor

The adaptor needs to return project information in this format:

```json
[{
  "reponame": "Project reponame",
  "master": {
    "author": "",
    "authorInitials": "",
    "branch": "",
    "buildLength": "",
    "lastRun": "",
    "reponame": "",
    "status": ""
  },
  "branches": [{
    "...": "same as master"
  }]
}]
```
