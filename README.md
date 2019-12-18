# Log Util

[![Travis][travis-badge]][travis-link]
[![npm][npm-badge]][npm-link]

[![Dependabot Status][dependabot-badge]][dependabot-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]

A dead simple logging utility I use in my tool configs. 

## Usage

```js
const log = require("log-util");

log.info("Unwinding the flux hydralics...")
log.warn("It's taking a long time...")
log.ok("All done!")
```

## Available methods

### `log.ok`
### `log.info`
### `log.warn`
### `log.fail`
### `log.skip`

[travis-badge]: https://img.shields.io/travis/com/eliasnorrby/log-util?style=for-the-badge
[travis-link]: https://travis-ci.com/eliasnorrby/log-util
[npm-badge]: https://img.shields.io/npm/v/@eliasnorrby/log-util?style=for-the-badge
[npm-link]: https://www.npmjs.com/package/@eliasnorrby/log-util
[dependabot-badge]: https://api.dependabot.com/badges/status?host=github&repo=eliasnorrby/log-util
[dependabot-link]: https://dependabot.com
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-link]: https://github.com/semantic-release/semantic-release
