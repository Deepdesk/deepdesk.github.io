# TextSuggestion

### Overview

```ts
/**
 * TextSuggestion
 */
type TextSuggestion = {
    /**
     * The suggestion text.
     * (after some variables have been interpolated in the backend)
     */
    text: string;

    /**
     * The original source of the suggestion, before any variable interpolation
     */
    sourceText: string;

    /**
     * A human readable text label.
     * Is used to indicate when a suggestion is provided from outside Deepdesk.
     */
    sourceLabel?: string;

    /**
     * The name of the algorithm which produced the suggestion.
     * Can be:
     *  - search - Full text search
     *  - gpt - GPT2 model
     *  - trie
     *  - trie-with-typos
     *  - semantic
     */
    source?: string;

    /**
     * The calculated score of the suggestion 0 - 1.
     */
    score?: number;

    /**
     * The name of AB test of the feature being tested.
     */
    abTestName?: string;

    /**
     * The name of the variant within the AB test. (A or B)
     */
    abVariant?: string;

    /**
     * Source(s) of the training job(s).
     */
    trainingJobs?: string[];
};
```