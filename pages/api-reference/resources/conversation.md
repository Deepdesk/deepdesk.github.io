# Conversation

### Overview

```ts
/**
 * Conversation object containing meta data and the chat transcript.
 */
type Conversation = {
    id: number;
    profileId: number;
    channel: string | null;
    platform: string;
    agentId: string;
    agentName: string | null;
    agentEmail: string | null;
    agentRole: string | null;
    engagementType: string | null;
    engagementId: string | null;
    engagementName: string | null;
    engagementSkill: string | null;
    agentNote: string | null;
    surveyEmail: string | null;
    surveyName: string | null;
    surveyPhone: string | null;
    visitorId: string | null;
    visitorName: string | null;
    visitorDevice: string | null;
    visitorBrowser: string | null;
    visitorOs: string | null;
    visitorCountry: string | null;
    visitorState: string | null;
    visitorCity: string | null;
    visitorIsp: string | null;
    visitorOrganization: string | null;
    visitorIpAddress: string | null;
    chatStartTime: number | null;
    sessionStartTime: number | null;
    visitStartTime: string | null;
    sessionId: string;
    messages: Record<
        string, // timestamp
        {
            source: 'agent' | 'visitor';
            author: string;
            id: string;
            plainText: string;
            text: string;
            textType: string;
            agentId?: string;
            agentName?: string;
            agentEmail?: string;
        }
    > | null;
    tags: Record<string, string | number> | null;
    hasActiveProfile: boolean;
    created: string;
    updated: string;
};
```