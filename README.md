# globalThis

A cross engine globalThis, fully inspired by https://mathiasbynens.be/notes/globalthis

  * ESM as `import '@ungap/global-this'`
  * CJS as `require('@ungap/global-this');`
  * JS as `<script src="//unpkg.com/@ungap/global-this"></script>`

Compatible with IE9 and above, plus all other engines/browsers.

For IE8 support, simply put the following on top of your page:

```html
<!--[if IE 8]><script>this.globalThis=this</script><![endif]-->
```
