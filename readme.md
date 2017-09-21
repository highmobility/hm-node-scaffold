#Install dependencies


```
$ yarn
// or
$ npm install
```

# Run the app

Follow the steps in `src/app.js` and run the app using `npm`
```
$ npm start

> @ start C:\dev\highmobility-hm-node
> babel src -d lib && node --napi-modules lib/index.js

src\app.js -> lib\app.js
src\index.js -> lib\index.js
(node:1212) Warning: N-API is an experimental feature and could change at any time.
Uint8Array [ 0, 53, 1, 1 ]
EngineResponse { engine: 'on' }  
```