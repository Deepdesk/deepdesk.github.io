# Installation

---

### Install via NPM

1. Contact info@deepdesk.com for an access token for our private npm registry on GitHub.

2. Add the following line to `.npmrc` in the root of your project:

```
@deepdesk:registry=https://npm.pkg.github.com
```

3. Install the Deepdesk SDK npm package which comes with TypeScript support.

```bash
npm install @deepdesk/deepdesk-sdk
```

4. Use the DeepdeskSDK in your code

```js
import { DeepdeskSDK } from '@deepdesk/deepdesk-sdk';
```

### Import via CDN

1. Import the Deepdesk SDK via a script tag.

```handlebars
<script type="application/javascript" src="https://deepdesk.github.io/lib/deepdesk-sdk-v4.2.6.min.js"></script>
```

2. Use the DeepdeskSDK in your code

```js
const { DeepdeskSDK } = window.DeepdeskSDK;
```
