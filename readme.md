# Overview

This app is a simple npm project that fetches the car engine state. The following has been done:

1. New npm project
2. HMKit module included
3. HMKit initialised with snippet from the Developer Center https://developers.high-mobility.com/
4. One example included to send a Telematics command to the car to get the engine state


# Install dependencies

```
$ npm install
```

# Run the app

Follow the steps in `src/app.js` and run the app using `npm`
```
$ npm start

> @ start /Users/allan/www/hm-node-scaffold
>  node_modules/.bin/babel src -d lib && node --napi-modules lib/index.js

src/app.js -> lib/app.js
src/index.js -> lib/index.js
(node:97243) Warning: N-API is an experimental feature and could change at any time.
Uint8Array [ 0, 53, 1, 1, 0, 1, 1 ]
EngineResponse { ignition: 'engine_on' }
```

# Windows

When using Windows, start the app with:

```
$ npm run start-windows
```
