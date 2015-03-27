# typographic-ellipsis

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Replace three periods with an ellipsis character

Micro module to help eliminate one of the [bad typewriter habits][bth].


## Install

```sh
npm install --save typograhic-ellipsis
```


## Usage

Main purpose for this module is replace three periods with correct ellipsis
character.
```js
var ellipsis = require('typographic-ellipsis');

ellipsis('foo...bar'); // foo…bar
```


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)


[bth]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-ellipsis
[npm-image]: http://img.shields.io/npm/v/typographic-ellipsis.svg?style=flat

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-ellipsis
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-ellipsis.svg?style=flat

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-ellipsis
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-ellipsis.svg?style=flat
[depstat-url]: https://david-dm.org/matmuchrapna/typographic-ellipsis
									https://david-dm.org/babel/babel-library-boilerplate.svg
[depstat-image]: http://img.shields.io/david/matmuchrapna/typographic-ellipsis.svg?style=flat

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-ellipsis
[depstat-dev-image]: http://img.shields.io/david/dev/matmuchrapna/typographic-ellipsis.svg?style=flat
