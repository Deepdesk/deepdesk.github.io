# Usage

### Mount the Deepdesk SDK

Instantiate the Deepdesk SDK and mount it on the agent's textarea in the customer engagement platform.

```jsx
const inputElement = document.getElementById('textarea');

const deepdeskSDK = new DeepdeskSDK({
    deepdeskUrl: 'https://acme.deepdesk.com/api',
    platform: 'example',
});

await deepdeskSDK.createConversation({
    platform: 'example', // name of platform
    channel: 'chat', // chat or messaging
    sessionId: '123', // platform's conversation identifier
    agentId: '456', // platform's agent identifier
});

deepdeskSDK.mount(inputElement);
```
