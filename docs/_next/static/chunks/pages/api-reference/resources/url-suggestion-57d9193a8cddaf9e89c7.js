_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{cq6K:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),s=n("Ff2n"),a=(n("q1tI"),n("7ljp")),o=n("CXQJ"),i=n.n(o),c=n("UY+1"),u=n("R9PV");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=function(e){return Object(c.withSSG)(i()({filename:"url-suggestion.md",route:"/api-reference/resources/url-suggestion",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"advanced",children:[{name:"custom-styling",route:"/advanced/custom-styling"},{name:"meta.json",meta:{"custom-styling":"Custom styling"}}],route:"/advanced"},{name:"api-reference",children:[{name:"classes",children:[{name:"deepdesk-api",route:"/api-reference/classes/deepdesk-api"},{name:"deepdesk-sdk",route:"/api-reference/classes/deepdesk-sdk"},{name:"input-mediator",route:"/api-reference/classes/input-mediator"},{name:"meta.json",meta:{"deepdesk-sdk":"DeepdeskSDK","deepdesk-api":"DeepdeskAPI","input-mediator":"InputMediator"}}],route:"/api-reference/classes"},{name:"resources",children:[{name:"conversation",route:"/api-reference/resources/conversation"},{name:"meta.json",meta:{conversation:"Conversation","text-suggestion":"TextSuggestion","url-suggestion":"URLSuggestion","sticky-message":"StickyMessage"}},{name:"sticky-message",route:"/api-reference/resources/sticky-message"},{name:"text-suggestion",route:"/api-reference/resources/text-suggestion"},{name:"url-suggestion",route:"/api-reference/resources/url-suggestion"}],route:"/api-reference/resources"}],route:"/api-reference"},{name:"getting-started",children:[{name:"examples",route:"/getting-started/examples"},{name:"installation",route:"/getting-started/installation"},{name:"meta.json",meta:{installation:"Installation",usage:"Usage",examples:"Examples"}},{name:"usage",route:"/getting-started/usage"}],route:"/getting-started"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction","getting-started":"Getting started",advanced:"Advanced","api-reference":"API reference"}}]},u.a))(e)};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.mdx)(p,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({components:t},n),Object(a.mdx)("h1",null,"URLSuggestion"),Object(a.mdx)("h3",null,"Overview"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{className:"language-ts",parentName:"pre"},"/**\n * URLSuggestion\n */\ntype URLSuggestion = {\n    /**\n     * The url of the suggestion.\n     * The url starts with `https://`\n     */\n    url: string;\n\n    /**\n     * Context text for the url suggestion.\n     * The context text is placed above the url.\n     * Or if the text contains `{url}` the url is interpolated in the text.\n     */\n    context?: string;\n\n    /**\n     * Optional image of fallback image.\n     */\n    image?: string;\n\n    /**\n     * Same as context (legacy)\n     */\n    summary?: string;\n\n    /**\n     * Optional title above the text or url.\n     */\n    title?: string;\n\n    /**\n     * The calculated score of the suggestion 0 - 1.\n     */\n    score?: number;\n};\n")))}m.isMDXComponent=!0,t.default=m},inXP:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference/resources/url-suggestion",function(){return n("cq6K")}])}},[["inXP",0,2,1,3]]]);