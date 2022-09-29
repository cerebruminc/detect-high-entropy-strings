<div align="center">
  <img width="200" height="200" src="binoculars-pngrepo-com.png">
  <br>
  <br>

  <h1>D H E S</h1>

  <p>
    A module for detecting high entropy strings
  </p>
  <br>
  <br>
</div>

> Q: What is a high entropy string?

A high entropy string is a string that is close to random noise, with little to no structure. API keys, passwords, and hashed data are often high entropy strings.

> Q: Why is this useful?

By being able to detect high entropy strings, you can automatically flag them, or redact them, preventing secrets from being leaked, for example by being committed to a public repository or logged to a file or service.

## Installation

```bash
npm i detect-high-entropy-strings
```

## Usage

```js
const DHES = require('detect-high-entropy-strings')

const detector = new DHES()

const result = detector.isHighEntropyString("051cd83bef009e738bddbdbaac373d20");

if (result) {
  console.log("This is a high entropy string!")
} else {
  console.log("This is not a high entropy string.")
}
```

## License

The icon at the top of this file is provided by
[pngrepo.com](https://www.pngrepo.com/svg/56112/binoculars) and is
licensed under [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/).




