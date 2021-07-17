# typescript-jsdoc-sandbox

Demonstrate how to have a (potentially published) library that is type-checked, but not transpiled, in such a way that a typescript consumer can benefit from the types.

```
npm run workspace:install
npm test
```

The library is deliberately stored in a manually maintained node_modules as top level, to keep this repo independent of any publishing.
