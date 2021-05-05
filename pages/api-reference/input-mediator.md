# InputMediator

The InputMediator is a class that is used under the hood when mounting the DeepdeskSDK on an input element.

The purpose of the InputMediator is to provide a consistent interface for the SDK to talk to the input element.

The DeepdeskSDK ships with two InputMediator types:
 * TextAreaInput (for `<textarea />` elements)
 * ContentEditableInput (for `<div contenteditable="true" />` elements)

The correct InputMediator is chosen when mounting an SDK instance and in most cases this all works out of the box.

When dealing with an input element which does not behaves as expected, you can choose to either extend the provided input mediators (TextAreaInput / ContentEditableInput) or write your own. And pass it along when mounting the DeepdeskSDK:

```ts
class MyCustomInputMediatorClass implements InputMediator {
    /* implementation details */
}

deepdeskSDK.mount(element, {
    InputMediator: MyCustomInputMediatorClass
});
```

### InputMediator Class

```ts
abstract class InputMediator<HTMLElementType extends HTMLElement> {
    /*
     * Internal reference to HTML Element
     */
    protected element: HTMLElementType;

    /*
     * Instantiate the input mediator by pointing it to an element.
     */
    constructor(element: HTMLElementType);

    /*
     * Get the plain text from the input element
     * To be implemented in inheriting class
     */
    abstract getText(): string;

    /*
     * Get the raw html from the input element
     * To be implemented in inheriting class
     */
    abstract getHTML(): string;

    /*
     * Get the raw html from the input element
     * To be implemented in inheriting class
     */
    abstract applyChanges(callback: (element: HTMLElementType) => void): void;

    /*
     * Focus the input element
     */
    focus(): void;

    /*
     * Internally used to emit one of the InputEventMap events
     */
    emit<K extends keyof InputEventMap>(type: K, ...args: Parameters<InputEventMap[K]>): void;

    /*
     * Add event listener for one of the InputEventMap events.
     * Returns a function which removes the listener.
     */
    on<K extends keyof InputEventMap>(type: K, handler: InputHandler<K>): void;

    /*
     * Ignore events from the input element.
     */
    deactivate(): void;

    /*
     * Continue listening to events from the input element.
     * The input mediator starts as active.
     */
    activate(): void;

    /*
     * Cleanup all event listeners and changes made to the platform's DOM.
     */
    dispose(): void;
}
```

### InputEventMap Interface

```ts
interface InputEventMap {
    /**
     * The InputMediator should emit a change event when a user changes the input directly
     * or indirectly via the platform (eg. inserting an emoji from a dropdown).
     */
    change: (value: string) => void;

    /**
     * An updated event should be triggered when the input's contents has changed.
     * Optionally providing the raw html.
     */
    updated: (plainText: string, rawHtml?: string) => void;

    /**
     * Fired when the input element receives a keydown event
     */
    keydown: (event: KeyboardEvent) => void;

    /**
     * Fired when the input element receives a paste event.
     * The input mediator is responsible for providing the selected and pasted texts.
     */
    paste: (event: {
        pastedText: string;
        selectionText: string;
    }) => void;

    /**
     * Fired when the input element receives a cut event.
     * The input mediator is responsible for providing the selected text.
     */
    cut: (selectionText: string) => void;

    /**
     * Fired when the input element detects if the message is succesfully submitted.
     * By default a mounted instance does not listen to input submit.
     * Either manually trigger `deepdeskSDK.notifySubmit()` on successful submit. (Preferred)
     * Or enable submit detection `deepdeskSDK.mount(element, { detectSubmit: true })`
     */
    submit: () => void;

    /**
     * Fired when the input element is disabled.
     * Textarea: <textarea disabled />
     * Content editable: <div contenteditable="false" />
     */
    disabled: () => void;

    /**
     * Fired when the input element is enabled after being disabled.
     */
    enabled: () => void;

    /**
     * Fired when the input element received a focus event
     */
    focus: () => void;

    /**
     * Fired when the input element received a blur event
     */
    blur: () => void;
}
```