# Installation

### Install via NPM

1. Contact support@deepdesk.com for an access token for our private npm registry on GitHub.

2. Add the token to your `~/.npmrc` in **your home directory**:

```
//npm.pkg.github.com/:_authToken=TOKEN
```

3. Add the following line to `.npmrc` in the **root of your project**:

```
@deepdesk:registry=https://npm.pkg.github.com
```

4. Install the Deepdesk SDK npm package together with React (Or Preact)

```bash
npm install @deepdesk/deepdesk-sdk react react-dom
```

5. Use the DeepdeskSDK in your code

```js
import { DeepdeskSDK } from '@deepdesk/deepdesk-sdk';
```