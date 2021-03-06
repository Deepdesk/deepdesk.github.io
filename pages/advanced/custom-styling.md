# Custom styling

The Deepdesk SDK's suggestions overlay and tab completion features are each composed of several components. Each component is composed of one or more html elements.

The components and their html elements are styled by class names and are shipped with a default styles.

The Deepdesk SDK offers a simpel interface which allows you to extend the class names with your own styling.

Each feature (eg. suggestions overlay) can take a custom styles object of which the keys are the component names.

### Suggestions overlay

Example of passing class names to the suggestions overlay components using BEM notation.

```js
const customStyles = {
    SuggestionsOverlay: {
        root: 'MySuggestionsOverlay',
        isCollapsed: 'MySuggestionsOverlay--isCollapsed', // modifier on root element
        collapsible: 'MySuggestionsOverlay__collapsible',
        toggleButton: 'MySuggestionsOverlay__toggleButton',
        hints: 'MySuggestionsOverlay__hints',
        hint: 'MySuggestionsOverlay__hint',
    },
    SuggestionList: {
        root: 'MySuggestionList'
    },
    Suggestion: {
        root: 'MySuggestion',
        isSelected: 'MySuggestion--isSelected', // modifier on root element
        animationAppear: 'MySuggestion__animationAppear',
        animationAppearActive: 'MySuggestion__animationAppearActive',
        animationAppearDone: 'MySuggestion__animationAppearDone',
    },
    TextSuggestion: {
        badge: 'MyTextSuggestion__badge',
        formattedText: 'MyTextSuggestion__formattedText',
    },
    KeyboardHint: {
        root: 'MyKeyboardHint',
        arrowUp: 'MyKeyboardHint__arrowUp',
        arrowDown: 'MyKeyboardHint__arrowDown',
        tab: 'MyKeyboardHint__tab',
        esc: 'MyKeyboardHint__esc',
        enter: 'MyKeyboardHint__enter',
    },
    Label: {
        root: 'MyLabel'
    },
    ToggleButton: {
        root: 'MyToggleButton',
        isCollapsed: 'MyToggleButton--isCollapsed', // modifier on root element
    },
};
```

The custom styles object is passed as argument when mounting the Deepdesk SDK:

```js
deepdeskSDK.mount(inputElement, {
    suggestionsOverlay: {
        customStyles
    }
});
```

### Tab completion

Example of passing class names to the tab completion components using BEM notation.

```js
const customStyles = {
    KeyboardHint: {
        root: 'MyKeyboardHint',
        arrowUp: 'MyKeyboardHint__arrowUp',
        arrowDown: 'MyKeyboardHint__arrowDown',
        tab: 'MyKeyboardHint__tab',
        esc: 'MyKeyboardHint__esc',
        enter: 'MyKeyboardHint__enter',
    },
    TabCompletion: {
        agentText: 'MyTabCompletion__agentText',
        tabText: 'MyTabCompletion__tabText',
        hint: 'MyTabCompletion__hint',
    }
};
```

The custom styles object is passed as argument when mounting the Deepdesk SDK:

```js
deepdeskSDK.mount(inputElement, {
    tabCompletion: {
        customStyles
    }
});
```