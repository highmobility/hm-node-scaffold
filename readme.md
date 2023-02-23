# Overview

This app is a simple npm project that fetches the car engine state. The following is included:

1. New npm project
2. HMKit module
3. HMKit to be initialised with snippet from the Console -> https://console.high-mobility.com/
4. The example sends a Telematics command to the car to get the engine state

# Configuration

Before running the app, make sure to install dependencies with the following command:

```
$ npm install
```

Then follow the steps in `src/app.js`, adding the Client Certificate and Access Token where necessary.

# Run the app

To run the app using `npm`, type the following command:

```
$ npm start

> @ start /Users/allan/www/hm-node-scaffold
>  node_modules/.bin/babel src -d lib && node --napi-modules lib/index.js

src/app.js -> lib/app.js
src/index.js -> lib/index.js
(node:97243) Warning: N-API is an experimental feature and could change at any time.
Uint8Array [12, 0, 53, 1, 1, 0, 15, 1, 0, 1, 1, 2, 0, 8, 0, 0, 1, 119, 17, 52, 180, 129, 2, 0, 15, 1, 0, 1, 1, 2, 0, 8, 0, 0, 1, 115, 230, 245, 65, 200, 3, 0, 15, 1, 0, 1, 2, 2, 0, 8, 0, 0, 1, 118, 70, 243, 5, 254]
IgnitionResponse {
  status: {
    timestamp: 2021-01-17T16:36:42.753Z,
    data: { value: 'on' } },
  accessoriesStatus: {
    timestamp: 2020-08-13T08:34:59.656Z,
    data: { value: 'on' }
  },
  state: {
    timestamp: 2020-12-09T10:01:40.606Z,
    data: { value: 'on' }
  }
}
```

# Questions or Comments ?

If you have questions or if you would like to send us feedback, join our [Slack Channel](https://slack.high-mobility.com/) or email us at [support@high-mobility.com](mailto:support@high-mobility.com).
