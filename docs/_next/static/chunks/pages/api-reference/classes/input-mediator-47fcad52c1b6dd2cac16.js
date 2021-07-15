_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{bB9v:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference/classes/input-mediator",function(){return t("cmeB")}])},cmeB:function(e,n,t){"use strict";t.r(n);var a=t("rePB"),i=t("Ff2n"),s=(t("q1tI"),t("7ljp")),r=t("CXQJ"),o=t.n(r),d=t("UY+1"),p=t("R9PV");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var u=function(e){return Object(d.withSSG)(o()({filename:"input-mediator.md",route:"/api-reference/classes/input-mediator",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"advanced",children:[{name:"custom-styling",route:"/advanced/custom-styling"},{name:"meta.json",meta:{"custom-styling":"Custom styling"}}],route:"/advanced"},{name:"api-reference",children:[{name:"classes",children:[{name:"deepdesk-api",route:"/api-reference/classes/deepdesk-api"},{name:"deepdesk-sdk",route:"/api-reference/classes/deepdesk-sdk"},{name:"input-mediator",route:"/api-reference/classes/input-mediator"},{name:"meta.json",meta:{"deepdesk-sdk":"DeepdeskSDK","deepdesk-api":"DeepdeskAPI","input-mediator":"InputMediator"}}],route:"/api-reference/classes"},{name:"resources",children:[{name:"conversation",route:"/api-reference/resources/conversation"},{name:"meta.json",meta:{conversation:"Conversation","text-suggestion":"TextSuggestion","url-suggestion":"URLSuggestion","sticky-message":"StickyMessage"}},{name:"sticky-message",route:"/api-reference/resources/sticky-message"},{name:"text-suggestion",route:"/api-reference/resources/text-suggestion"},{name:"url-suggestion",route:"/api-reference/resources/url-suggestion"}],route:"/api-reference/resources"}],route:"/api-reference"},{name:"getting-started",children:[{name:"examples",route:"/getting-started/examples"},{name:"installation",route:"/getting-started/installation"},{name:"meta.json",meta:{installation:"Installation",usage:"Usage",examples:"Examples"}},{name:"usage",route:"/getting-started/usage"}],route:"/getting-started"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction","getting-started":"Getting started",advanced:"Advanced","api-reference":"API reference"}}]},p.a))(e)};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.mdx)(u,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({components:n},t),Object(s.mdx)("h1",null,"InputMediator Class"),Object(s.mdx)("p",null,"The InputMediator is a class that is used under the hood when mounting the DeepdeskSDK on an input element."),Object(s.mdx)("p",null,"The purpose of the InputMediator is to provide a consistent interface for the SDK to talk to the input element."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre"},"DeepdeskSDK <-> InputMediator <-> platform input\n")),Object(s.mdx)("p",null,"The DeepdeskSDK ships with two InputMediator types:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"TextAreaInput (for ",Object(s.mdx)("inlineCode",{parentName:"li"},"<textarea />")," elements)"),Object(s.mdx)("li",{parentName:"ul"},"ContentEditableInput (for ",Object(s.mdx)("inlineCode",{parentName:"li"},'<div contenteditable="true" />')," elements)")),Object(s.mdx)("p",null,"The correct InputMediator is chosen when mounting an SDK instance and in most cases this all works out of the box."),Object(s.mdx)("p",null,"When dealing with an input element which does not behaves as expected, you can choose to either extend the provided input mediators (TextAreaInput / ContentEditableInput) or write your own. And pass it along when mounting the DeepdeskSDK:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{className:"language-ts",parentName:"pre"},"class MyCustomInputMediatorClass implements InputMediator {\n    /* implementation details */\n}\n\ndeepdeskSDK.mount(element, {\n    InputMediator: MyCustomInputMediatorClass\n});\n")),Object(s.mdx)("h3",null,"Overview"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{className:"language-ts",parentName:"pre"},"abstract class InputMediator<HTMLElementType extends HTMLElement> {\n    /*\n     * Internal reference to HTML Element\n     */\n    protected element: HTMLElementType;\n\n    /*\n     * Instantiate the input mediator by pointing it to an element.\n     */\n    constructor(element: HTMLElementType);\n\n    /*\n     * Get the plain text from the input element\n     * To be implemented in inheriting class\n     */\n    abstract getText(): string;\n\n    /*\n     * Get the raw html from the input element\n     * To be implemented in inheriting class\n     */\n    abstract getHTML(): string;\n\n    /*\n     * Wrapper around a callback function which changes the contents of the input element.\n     * The callback is invoked immediatly.\n     * This method should prevent applied changes to bubble up as user changes.\n     * This methos is also responsible for repositioning the typing cursor.\n     * To be implemented in inheriting class\n     */\n    abstract applyChanges(callback: (element: HTMLElementType) => void): void;\n\n    /*\n     * Focus the input element\n     */\n    focus(): void;\n\n    /*\n     * Internally used to emit one of the InputEventMap events\n     */\n    emit<K extends keyof InputEventMap>(type: K, ...args: Parameters<InputEventMap[K]>): void;\n\n    /*\n     * Add event listener for one of the InputEventMap events.\n     * Returns a function which removes the listener.\n     */\n    on<K extends keyof InputEventMap>(type: K, handler: InputHandler<K>): void;\n\n    /*\n     * Ignore events from the input element.\n     */\n    deactivate(): void;\n\n    /*\n     * Continue listening to events from the input element.\n     * The input mediator starts as active.\n     */\n    activate(): void;\n\n    /*\n     * Cleanup all event listeners and changes made to the platform's DOM.\n     */\n    dispose(): void;\n}\n")),Object(s.mdx)("h3",null,"InputEventMap Interface"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{className:"language-ts",parentName:"pre"},'interface InputEventMap {\n    /**\n     * The InputMediator should emit a change event when a user changes the input directly\n     * or indirectly via the platform (eg. inserting an emoji from a dropdown).\n     */\n    change: (value: string) => void;\n\n    /**\n     * An updated event should be triggered when the input\'s contents has changed.\n     * Optionally providing the raw html.\n     */\n    updated: (plainText: string, rawHtml?: string) => void;\n\n    /**\n     * Fired when the input element receives a keydown event\n     */\n    keydown: (event: KeyboardEvent) => void;\n\n    /**\n     * Fired when the input element receives a paste event.\n     * The input mediator is responsible for providing the selected and pasted texts.\n     */\n    paste: (event: {\n        pastedText: string;\n        selectionText: string;\n    }) => void;\n\n    /**\n     * Fired when the input element receives a cut event.\n     * The input mediator is responsible for providing the selected text.\n     */\n    cut: (selectionText: string) => void;\n\n    /**\n     * Fired when the input element detects if the message is succesfully submitted.\n     * By default a mounted instance does not listen to input submit.\n     * Either manually trigger `deepdeskSDK.notifySubmit()` on successful submit. (Preferred)\n     * Or enable submit detection `deepdeskSDK.mount(element, { detectSubmit: true })`\n     */\n    submit: () => void;\n\n    /**\n     * Fired when the input element is disabled.\n     * Textarea: <textarea disabled />\n     * Content editable: <div contenteditable="false" />\n     */\n    disabled: () => void;\n\n    /**\n     * Fired when the input element is enabled after being disabled.\n     */\n    enabled: () => void;\n\n    /**\n     * Fired when the input element received a focus event\n     */\n    focus: () => void;\n\n    /**\n     * Fired when the input element received a blur event\n     */\n    blur: () => void;\n}\n')))}c.isMDXComponent=!0,n.default=c}},[["bB9v",0,2,1,3]]]);