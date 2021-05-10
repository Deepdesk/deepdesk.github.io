# URLSuggestion

### Overview

```ts
/**
 * URLSuggestion
 */
type URLSuggestion = {
    /**
     * The url of the suggestion.
     * The url starts with `https://`
     */
    url: string;

    /**
     * Context text for the url suggestion.
     * The context text is placed above the url.
     * Or if the text contains `{url}` the url is interpolated in the text.
     */
    context?: string;

    /**
     * Optional image of fallback image.
     */
    image?: string;

    /**
     * Same as context (legacy)
     */
    summary?: string;

    /**
     * Optional title above the text or url.
     */
    title?: string;

    /**
     * The calculated score of the suggestion 0 - 1.
     */
    score?: number;
};
```