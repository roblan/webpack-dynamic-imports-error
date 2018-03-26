# Sample repo for [webpack error](https://github.com/webpack/webpack/issues/6871)
Dynamic imports 'interfere' with each other (leading to errors) when loading multiple webpack bundles.


# How to reproduce
```
git clone https://github.com/roblan/webpack-dynamic-imports-error.git
cd webpack-dynamic-imports-error
npm install
npm start
```
go to http://localhost:8080


# What' wrong?
* `dynamicB.js` request in `B.js` resolves to `dynamicA.js` content
* `dynamicC.js` request in `C.js` return error (in webpack 3)
* `dynamicB.js` and `dynamicB.js` request ends when `dynamicA.js` is loaded
