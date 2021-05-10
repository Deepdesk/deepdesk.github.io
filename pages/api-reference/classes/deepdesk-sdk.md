# DeepdeskSDK Class

### Overview

```ts
class DeepdeskSDK {
    /**
     * Deepdesks internal reference to the conversation
     * Not to be confused with sessionId which is the platform's conversation identifier.
     */
    conversationId: number | null;

    /**
     * Create an instance of the DeepdeskSDK for each conversation.
     */
    constructor(options: SDKOptions);

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
     * Usually this method is not needed, because messages are updates via the backend webhooks.
     */
    updateConversationTranscript(transcriptPatch: Conversation['messages']): Promise<Conversation>;

    /**
     * Refresh suggestions based on the current conversation messages
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