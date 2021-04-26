# Usage

### Mount the Deepdesk SDK

Instantiate the Deepdesk SDK and mount it on the agent's textarea in the customer engagement platform.

```jsx
// Instantiate the Deepdesk SDK
const deepdeskSDK = new DeepdeskSDK({
    deepdeskUrl: 'https://acme.deepdesk.com/api',
});

// Create a new conversation
await deepdeskSDK.createConversation({
    platform: 'example', // name of platform
    channel: 'chat', // 'chat' or 'messaging'
    sessionId: '123', // platform's conversation/thread/case identifier
    agentId: '456', // platform's agent identifier
});

// Or, retrieve an existing conversation
// by platform's conversation/thread/case identifier.
await deepdeskSDK.getConversationBySessionId('123');

// Update the input field when user selects a suggestion.
// See 'Api Reference' > 'DeepdeskSDK' for more events.
deepdeskSDK.on('select-text-suggestion', suggestion => {
    inputElement.value = suggestion.text;
});

// Update the input field when user resets / undoes suggestion selection.
deepdeskSDK.on('reset', suggestion => {
    inputElement.value = suggestion.text;
});

// Get a reference to the agent's input element.
const inputElement = document.getElementById('textarea');

// Mount the instance on the input element.
// The SDK will render the tab completion and suggestions overlay.
// And it will start listening to events.
deepdeskSDK.mount(inputElement);
```

### Notify message submit

Because the SDK can't realiably determine when the agent submits a message, the platform has to notify the SDK when an agent successfully submits a message, **but before the text input is cleared**.

```jsx
// After an agent successfully submit's a message,
// but before the text input is emptied.
deepdeskSDK.notifySubmit();
```
