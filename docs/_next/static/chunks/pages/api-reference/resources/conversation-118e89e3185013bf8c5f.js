_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{CAuP:function(e,n,t){"use strict";t.r(n);var r=t("rePB"),s=t("Ff2n"),i=(t("q1tI"),t("7ljp")),a=t("CXQJ"),o=t.n(a),u=t("UY+1"),l=t("R9PV");function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var c=function(e){return Object(u.withSSG)(o()({filename:"conversation.md",route:"/api-reference/resources/conversation",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"advanced",children:[{name:"custom-styling",route:"/advanced/custom-styling"},{name:"meta.json",meta:{"custom-styling":"Custom styling"}}],route:"/advanced"},{name:"api-reference",children:[{name:"classes",children:[{name:"deepdesk-api",route:"/api-reference/classes/deepdesk-api"},{name:"deepdesk-sdk",route:"/api-reference/classes/deepdesk-sdk"},{name:"input-mediator",route:"/api-reference/classes/input-mediator"},{name:"meta.json",meta:{"deepdesk-sdk":"DeepdeskSDK","deepdesk-api":"DeepdeskAPI","input-mediator":"InputMediator"}}],route:"/api-reference/classes"},{name:"resources",children:[{name:"conversation",route:"/api-reference/resources/conversation"},{name:"meta.json",meta:{conversation:"Conversation","text-suggestion":"TextSuggestion","url-suggestion":"URLSuggestion","sticky-message":"StickyMessage"}},{name:"sticky-message",route:"/api-reference/resources/sticky-message"},{name:"text-suggestion",route:"/api-reference/resources/text-suggestion"},{name:"url-suggestion",route:"/api-reference/resources/url-suggestion"}],route:"/api-reference/resources"}],route:"/api-reference"},{name:"getting-started",children:[{name:"examples",route:"/getting-started/examples"},{name:"installation",route:"/getting-started/installation"},{name:"meta.json",meta:{installation:"Installation",usage:"Usage",examples:"Examples"}},{name:"usage",route:"/getting-started/usage"}],route:"/getting-started"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction","getting-started":"Getting started",advanced:"Advanced","api-reference":"API reference"}}]},l.a))(e)};function m(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.mdx)(c,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({components:n},t),Object(i.mdx)("h1",null,"Conversation"),Object(i.mdx)("h3",null,"Overview"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{className:"language-ts",parentName:"pre"},"/**\n * Conversation object containing meta data and the chat transcript.\n */\ntype Conversation = {\n    id: number;\n    profileId: number;\n    channel: string | null;\n    platform: string;\n    agentId: string;\n    agentName: string | null;\n    agentEmail: string | null;\n    agentRole: string | null;\n    engagementType: string | null;\n    engagementId: string | null;\n    engagementName: string | null;\n    engagementSkill: string | null;\n    agentNote: string | null;\n    surveyEmail: string | null;\n    surveyName: string | null;\n    surveyPhone: string | null;\n    visitorId: string | null;\n    visitorName: string | null;\n    visitorDevice: string | null;\n    visitorBrowser: string | null;\n    visitorOs: string | null;\n    visitorCountry: string | null;\n    visitorState: string | null;\n    visitorCity: string | null;\n    visitorIsp: string | null;\n    visitorOrganization: string | null;\n    visitorIpAddress: string | null;\n    chatStartTime: number | null;\n    sessionStartTime: number | null;\n    visitStartTime: string | null;\n    sessionId: string;\n    messages: Record<\n        string, // timestamp\n        {\n            source: 'agent' | 'visitor';\n            author: string;\n            id: string;\n            plainText: string;\n            text: string;\n            textType: string;\n            agentId?: string;\n            agentName?: string;\n            agentEmail?: string;\n        }\n    > | null;\n    tags: Record<string, string | number> | null;\n    hasActiveProfile: boolean;\n    created: string;\n    updated: string;\n};\n")))}m.isMDXComponent=!0,n.default=m},qQHX:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference/resources/conversation",function(){return t("CAuP")}])}},[["qQHX",0,2,1,3]]]);