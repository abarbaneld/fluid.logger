[![fluid.logger for Node.js: a simple logger for your application]](https://www.npmjs.com/package/@fluid/logger)

# 🦒 Simple Logger for Node.js

> The best alternative to the console.log statement

## 🎁 Support:
> This project is **free**, **open source** and I try to provide excellent **free support**. 

## 📎 Menu
- 💡 [Features](#-features)
- 🚀 [How to use](#-installation)
- 📚 [Documentation](#-documentation)
- - 🧰 [Options](#-options)
- - 🔌 [Methods](#-methods)
- 👨‍💻 [Contributing](#-contributing)

## 💡 Features
* [✔️] Easy to use
* [✔️] MIT License
* [✔️] Palette (🎨 Customize colors)
* [✔️] The best alternative to the console.log statement

## 🚀 Installation
1. In your node project run: `npm install @fluid/logger --save`
2. Usage:
```javascript
const logger = require("@fluid/logger");
logger.info("message");
```

You can set `envs` to control logging level `export LOG_LEVEL=DEBUG` example:
```javascript
const logger = require("@fluid/logger");

logger.info("message");
```

See folder `tests`, run with `node run test`. Below is available a description of `envs` values.

## 🧰 Options

| Parameter | Description | Values | Default value | Available since |
| --- | --- | --- | --- | --- |
| LOG_LEVEL | Sets Log Level, ERROR, WARN, INFO, DEBUG | DEBUG | **v1.0.0** |

## 🔌 Methods

| Method | Description | Parameters |
| --- | --- | --- |
| **debug**(`message`) | `message`: Display debug log message | `message`: string (mandatory) |
| **info**(`message`) | `message`: Display info log message | `message`: string (mandatory) |
| **warn**(`message`) | `message`: Display warning log message | `message`: string (mandatory) |
| **error**(`message`) | `message`: Display errors log message | `message`: string (mandatory) |
| **log**(`message`) | `message`: Display log message | `message`: string (mandatory) |


## 💫 License
* Code and Contributions have **MIT License**

###### CopyRight (c) 2020 [Dan Abarbanel](https://fluidt.dev) <[contact@fluidt.dev](mailto:contact@fluidt,.dev)>
