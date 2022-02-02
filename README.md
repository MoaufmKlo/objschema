<div align="center">
    <h1>urb</h1>
    <img alt="npm Version" src="https://img.shields.io/npm/v/urb?style=for-the-badge">
    <img alt="npm Downloads" src="https://img.shields.io/npm/dw/urb?style=for-the-badge">
    <br>
</div>

## Table of contents
- [Table of contents](#table-of-contents)
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Contributing](#contributing)

## About

Dead simple object schema validation for [Node.js](https://nodejs.org/).

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install urb:

```bash
npm install urb
```

## Usage

```javascript
const urb = require("urb");

const schema = {
    "required": {
        "one": "string",
        "two": "boolean",
        "three": {
            "four": "boolean"
        }
    },
    "optional": {
        "five": "string"
    }
}

const res = urb.validate(schema, {
    "one": "hello",
    "two": "world",
    "three": {
        "four": true
    }
});

console.log(res.valid); // false
```

The `res` object returned consists of the following:

```javascript
{
    "valid": false,
    "errors": [
        "two must be undefined"
    ]
}
```

# Types

- array
- boolean
- bson object id
- defined
- undefined
- email
- function
- nested schema (see [usage](#usage))
- number
- object
- string
- uuid

Is something missing or misbehaving? [Open an issue.](https://github.com/MoaufmKlo/urb/issues/new)

## Links

- [npm](https://www.npmjs.com/package/urb)
- [GitHub](https://github.com/MoaufmKlo/urb)

## Contributing

Pull requests are welcome. For major changes, please [open an issue]((https://github.com/MoaufmKlo/urb/issues/new)) first to discuss what you would like to change.