# Usage

### Mount the Deepdesk SDK

Instantiate the Deepdesk SDK and mount it on the agent's textarea in the customer engagement platform.

```jsx
// Instantiate the Deepdesk SDK
// With <accountname>.deepdesk.com
// OR <accountname>.staging.deepdesk.com.
const deepdeskSDK = new DeepdeskSDK({
    deepdeskUrl: 'https://<accountname>.deepdesk.com/api',
});

// Retrieve an existing conversation
// by platform's conversation/thread/case identifier.
// This assumes that the webhooks have been implemented.
await deepdeskSDK.getConversationBySessionId('123', {
    attempts: 3,
});

// Or, create a new conversation when webhook implementation is not possible.
await deepdeskSDK.createConversation({
    platform: 'example', // name of platform
    channel: 'chat', // 'chat' or 'messaging'
    sessionId: '123', // platform's conversation/thread/case identifier
    agentId: '456', // platform's agent identifier
});

// Set visitor info.
// Used to replace in in the placeholder variables in the suggestions
// "Goodmorning {vistor_name}!" -> "Goodmorning Anne!"
deepdeskSDK.setVisitorInfo({
    visitorName: 'Anne',
});

// Set agent info.
// Used to replace in in the placeholder variables in the suggestions
// "You are chatting with {agent_name}." -> "You are chatting with Sam."
// (Yes, {agent_name} uses `agentNickname` and not `agentName`)
deepdeskSDK.setAgentInfo({
    agentName: 'Sam de Pam',
    agentNickname: 'Sam',
});

// Get a reference to the agent's input element.
const inputElement = document.getElementById('textarea');

// Update the input field when user selects a suggestion.
// See 'Api Reference' > 'DeepdeskSDK' for more events.
deepdeskSDK.on('select-text-suggestion', suggestion => {
    inputElement.value = suggestion.text;
});

// Update the input field when user resets / undoes suggestion selection.
deepdeskSDK.on('reset', suggestion => {
    inputElement.value = suggestion.text;
});

// Mount the instance on the input element.
// Should be after async `createConversation` or `getConversationBySessionId`
// The SDK will render the tab completion and suggestions overlay.
// And it will start listening to events.
deepdeskSDK.mount(inputElement);
```

### Notify message submit and refresh suggestions

Because the SDK can't realiably determine when the agent submits a message, the platform has to notify the SDK when an agent successfully submits a message, **but before the text input is cleared**.

```jsx
// After an agent successfully submit's a message,
// but before the text input is emptied.
deepdeskSDK.notifySubmit();

// The `notifySubmit` resets the text suggestions.
// Refresh the suggestions after the message is sent to the platform's backend,
// AND the Deepdesk webhook as been called.
// Platform frontend --> platform backend --> Deepdesk webhook
deepdeskSDK.refresh();
```
