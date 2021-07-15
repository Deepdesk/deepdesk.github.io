# DeepdeskSDK Class

### Overview

```ts
class DeepdeskSDK {
    /**
     * Create an instance of the DeepdeskSDK for each conversation.
     */
    constructor(options: SDKOptions);

    /**
     * Get conversation id of current conversation.
     * Throws an error when there is no conversation loaded yet.
     */
    conversationId(): number;

    /**
     * Check if a conversation is loaded.
     */
    hasConversation(): boolean;

    /**
     * Create a conversation and set the conversationId
     * @param options - The create conversation options
     */
    createConversation(options: CreateConversationOptions): Promise<Conversation>;

    /**
     * Get a conversation by session ID and sets the conversationId
     * @param sessionId - A string with the conversation session ID.
     *  A session ID is local to the customer service platform, and identifies a
     *  conversation that takes place within a certain time frame.
     */
    getConversationBySessionId(sessionId: string): Promise<Conversation>;

    /**
     * Store the visitor information in memory
     * Is used to extract information for text placeholders
     */
    setVisitorInfo(visitorInfo: VisitorInfo): void;

    /**
     * Store the agent information in memory
     * Is used to extract information for text placeholders
     */
    setAgentInfo(agentInfo: AgentInfo): void;

    /**
     * Method to call when the conversation is updated, either by an incoming message
     * from the visitor, or a message sent by the agent.
     * Usually this method is not needed, because messages are updated via the backend webhooks. Only use this method when webhook implementation is not possible.
     */
    updateTranscript(transcriptPatch: Conversation['messages']): Promise<Conversation>;

    /**
     * Refresh suggestions based on the current conversation messages.
     * Use when agent or visitor has submitted a message and Deepdesk webhook is notified.
     * Be carefull not to refresh suggestions when the agent is already typing.
     */
    refresh(): void;

    /**
     * Start timing the interaction between agent and customer.
     * Is used to track the average handling time (AHT).
     */
    handlingTimeStart(): void;

    /**
     * Stop timing the interaction between agent and customer
     * Sends an analytics event to Deepdesk.
     */
    handlingTimeStop(): void;

    /**
     * Method to call when the agent has sent a message to the visitor
     * Sends an analytics event to Deepdesk.
     */
    notifySubmit(): void;

    /**
     * Emit an event
     */
    emit<K extends keyof SDKEventMap>(type: K, eventPayload: SDKEventMap[K]): void;

    /**
     * Attach listener to SDK event
     * Returns a method to remove the added event
     */
    on<K extends keyof SDKEventMap>(type: K, handler: SDKHandler<K>): () => void;

    /**
     * Remove listener from SDK
     * Similar to HTMLElement.removeListener
     */
    off<K extends keyof SDKEventMap>(type: K, handler: SDKHandler<K>): void;

    /**
     * Renders the tab completion and suggestions overlay and 2-way binds events
     * @param targetElement - the element to inject the deepdesk element in
     * @param options - optional tabcompletion and/or suggestion list options
     */
    mount(targetElement: HTMLElement, options?: MountOptions): void;

    /**
     * Unmounts a mounted DeepdeskSDK.
     */
    unmount(): void;

    /**
     * Injects the Deepdesk Widget element into the provided DOM element.
     * The widget will expand to a parent positioned relative, absolute of fixed.
     * @param containerElement - the element to inject the deepdesk element in
     * @param options - optional widget options
     * @param callback - default undefined
     */
    renderWidget(containerElement: HTMLElement, options?: WidgetOptions): void;
```

### `constructor`

```ts
new DeepdeskSDK(config: SDKConfig);
```

```ts
interface SDKConfig {
    /**
     * Base API URL for the Deepdesk backend,
     * e.g. https://acme.deepdesk.com/api
     */
    deepdeskUrl: string;

    /**
     * Optional base url for the Deepdesk broker backend
     * Only applicable if using autoflows or custom messages features.
     * e.g. https://acme.deepdesk.com/broker/api
     */
    brokerUrl?: string;

    /**
     * Set the language for all the UI labels.
     * Note: This has no effect on the language of the suggestions!
     * Default: en_US
     */
    locale?: 'en_US' | 'nl_NL';

    /**
     * Optional jwt token for Authorization: Bearer <...> header.
     * This is an alternative to the preferred SSO implementation.
     * Contact support@deepdesk.com for how to obtain a token.
     */
    token?: string;
}
```

### `createConversation`

Create or get conversation based on unique sessionId/agentId/channel/platform signature.

**Note:** Only use this method when there is no backend integration possible. The preferred route is to implement the Deepdesk backend webhooks for notifying Deepdesk of new messages (thus creating the conversation in the backend) and using `getConversationBySessionId` in the front end to get de correct conversation.

```ts
deepdeskSDK.createConversation(options: CreateConversationOptions);
```

```ts
interface CreateConversationOptions {
    /**
     * The platform's conversation/thread/case ID.
     */
    sessionId: string;

    /**
     * The platform's agent ID
     */
    agentId: string;

    /**
     * The messaging platform, e.g. 'liveengage'
     */
    platform: string;

    /**
     * Optional client profile code, e.g. 'b2b' or 'b2c'
     */
    profileCode?: string;
}
```

### `getConversationBySessionId`

Get the current conversation created by the Deepdesk backend via the Deepdesk webhooks.

Optionally add polling options when you are not sure if the webhook received the message in time.

```ts
deepdeskSDK.getConversationBySessionId(sessionId: string, options?: GetConversationBySessionIdOptions);
```

```ts
interface GetConversationBySessionIdOptions {
    /**
     * Number of attempts in the case the conversation is not created yet via the Deepdesk webhook.
     */
    attempts?: number;

    /**
     * Delay between attempts in miliseconds
     * Default: 1000(ms)
     */
    retryDelay?: number;
}
```

### `mount`

Get the current conversation created by the Deepdesk backend via the Deepdesk webhooks.

Optionally add polling options when you are not sure if the webhook received the message in time.

```ts
deepdeskSDK.mount(element: HTMLElement, options?: MountOptions);
```

```ts
interface MountOptions {
    /*
     * Enable or disable the suggestions overlay, or enable it with custom options.
     * Default: true
     */
    suggestionsOverlay?: boolean | SuggestionsOverlayOptions;

    /*
     * Enable or disable tab completion, or enable it with custom options.
     * Default: true
     */
    tabCompletion?: boolean | TabCompletionOptions;

    /*
     * Advanced: Provide you own InputMediator class.
     * DeepdeskSDK <-> InputMediator <-> platform input
     * Default: Deepdesk's TextAreaInput or ContentEditableInput depended on mount element.
     * See: https://deepdesk.github.io/api-reference/classes/input-mediator
     */
    InputMediator?: Constructable<InputMediator<HTMLElement>>;

    /*
     * Automatically detect when an agent submits a message.
     * Default: false
     *
     * Can be enabled instead of manually calling `DeepdeskSDK.notifySubmit()`.
     * Enabling this setting is discouraged, because it only works in ideal circumstances.
     * The algorithm assumes that if the textarea is cleared,
     * and it is not a result of user action (Delete, Backspace, Cut, etc.),
     * the text in the textarea must have been submitted.
     */
    detectSubmit?: boolean;
}
```

```ts
interface SuggestionsOverlayOptions {
    /*
     * Custom suggestion overlay styling
     * See: https://deepdesk.github.io/advanced/custom-styling
     */
    customStyles?: SuggestionsOverlayCustomStyles;

    /*
     * Enable or disable a toggle button to collapse the suggestions
     * Default: false
     */
    showToggleButton?: boolean;

    /*
     * Enable or disable hot keys (feature is broken at the moment)
     * Default: false
     */
    // showHotKeys?: boolean;

    /*
     * Enable or disable "hide on blur"
     * When enabled it only shows the suggestions overlay when the textarea is focused.
     * Default: false
     */
    hideOnBlur?: boolean;

    /*
     * Enable or disable text suggestions or provide max. number of suggestions.
     * Disabling makes no sence.
     * Default: true
     */
    showTextSuggestions?: boolean | number;
}
```

```ts
interface TabCompletionOptions {
    /*
     * Custom tab completion styling
     * See: https://deepdesk.github.io/advanced/custom-styling
     */
    customStyles?: TabCompletionCustomStyles;
}
```

### `setVisitorInfo`

Set visitor info, used for placeholder interpolation in the suggestions.

```ts
setVisitorInfo(visitorInfo: VisitorInfo): void;
```

```ts
interface VisitorInfo {
    /**
     * Platform's visitor id
     */
    visitorId?: string;

    /**
     * Visitor name. Visitor first name is often what you want to show in the suggestions.
     */
    visitorName?: string;

    /**
     * Visitor e-mail
     */
    visitorEmail?: string;

    /**
     * Visitor postal code
     */
    visitorPostalCode?: string;

    /**
     * Visitor house number
     */
    visitorHouseNumber?: string;
}
```

Placeholder replacements:

```ts
'{visitor_name}': visitorName,
'{postal_code}': visitorPostalCode,
'{street_number}': visitorHouseNumber,
'{house_number}': visitorHouseNumber,
'{postal_code_house_number}': `${visitorPostalCode} ${visitorHouseNumber}`,
'{postal_code_street_number}': `${visitorPostalCode} ${visitorHouseNumber}`,
'{subscription_name}': visitorName,
```

### `setAgentInfo`

Set agent info, used for placeholder interpolation in the suggestions.

```ts
setAgentInfo(agentInfo: AgentInfo): void;
```

```ts
interface AgentInfo {
    /**
     * Platform's agent id
     */
    agentId?: string;

    /**
     * Agent's nickname of first name
     */
    agentNickname?: string;

    /**
     * Agent's first name of full name
     */
    agentName?: string;

    /**
     * Agent's e-mail address
     */
    agentEmail?: string;
};
```

Placeholder replacements:

```ts
'{agent_name}': agentNickname,
```