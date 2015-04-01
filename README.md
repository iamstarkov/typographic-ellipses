# typographic-ellipses

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Avoid using periods and spaces

Micro module to help eliminate one of the [bad typewriter habits][bth].


## Install

```sh
npm install --save typograhic-ellipsis
```


## Usage

Main purpose for this module is replace three periods with correct ellipsis
character.
```js
var ellipses = require('typographic-ellipses');

ellipses('foo...bar'); // foo…bar
```


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)


[bth]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-ellipses
[npm-image]: http://img.shields.io/npm/v/typographic-ellipses.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-ellipses
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-ellipses.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-ellipses
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-ellipses.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-ellipses
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-ellipses.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-ellipses
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-ellipses/dev-status.svg
