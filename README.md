Requirize
=========

This is a small utility to require a directory of files and construct a hash representing the required files. eg.

Given a directory stucture such as:

```
dir
- cat.js
- dog.js
- fish.js
- index.js
- zebra.js
```

And we use requirize in index.js like:

```js
module.exports = require('requirize')(__dirname);
```

When requiring this directory we will be return an object like

```js
{
  "cat": <<module contents>>,
  "dog": <<module contents>>,
  "fish": <<module contents>>,
  "zebra": <<module contents>>
}