# Examples

## Vanilla js

```html
<form id="form">
    <textarea id="input"></textarea>
    <button type="submit">Submit</button>
</form>
```

```js
import { DeepdeskSDK } from '@deepdesk/deepdesk-sdk';

const formElement = document.getElementById('form');
const inputElement = document.getElementById('input');
const deepdeskSDK = new DeepdeskSDK({
    deepdeskUrl: 'https://<accountname>.deepdesk.com/api',
});

deepdeskSDK.getConversationBySessionId('123', {
    attempts: 5,
    retryDelay: 500,
});

deepdeskSDK.setVisitorInfo({
    visitorName: 'Anne',
});

deepdeskSDK.setAgentInfo({
    agentName: 'Sam de Pam',
    agentNickname: 'Sam',
});

deepdeskSDK.mount(inputElement);

deepdeskSDK.on('select-text-suggestion', suggestion => {
    element.value = suggestion.text;
});

deepdeskSDK.on('reset', suggestion => {
    element.value = suggestion.text;
});

formElement.addEventListener('submit', async event => {
    event.preventDefault();

    await sendMessageToYourBackend(); // Handle submit ...

    deepdeskSDK.notifySubmit();
    element.value = '';

    // Refresh suggestions
    deepdeskSDK.refresh();
});

```

## React Textarea

```jsx
import { DeepdeskSDK } from '@deepdesk/deepdesk-sdk';

const ControlledTextarea = () => {
    const ref = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        const deepdeskSDK = new DeepdeskSDK({
            deepdeskUrl: 'https://<accountname>.deepdesk.com/api',
        });

        deepdeskSDK.getConversationBySessionId('123', {
            attempts: 5,
            retryDelay: 500,
        });

        deepdeskSDK.setVisitorInfo({
            visitorName: 'Anne',
        });

        deepdeskSDK.setAgentInfo({
            agentName: 'Sam de Pam',
            agentNickname: 'Sam',
        });

        deepdeskSDK.mount(ref.current);

        deepdeskSDK.on('select-text-suggestion', suggestion => {
            setValue(suggestion.text);
        });

        deepdeskSDK.on('reset', suggestion => {
            setValue(suggestion.text);
        });
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        await sendMessageToYourBackend(); // Handle submit ...

        deepdeskSDK.notifySubmit();
        element.value = '';

        // Refresh suggestions
        deepdeskSDK.refresh();
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                ref={ref}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
```

## React DraftJs

```jsx
import { DeepdeskSDK } from '@deepdesk/deepdesk-sdk';
import { ContentState, Editor, EditorState } from 'draft-js';

const DraftJSInput = () => {
    const ref = useRef(null);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createWithContent(ContentState.createFromText('')),
    );

    useEffect(() => {
        const deepdeskSDK = new DeepdeskSDK({
            deepdeskUrl: 'https://<accountname>.deepdesk.com/api',
        });

        deepdeskSDK.getConversationBySessionId('123', {
            attempts: 5,
            retryDelay: 500,
        });

        deepdeskSDK.setVisitorInfo({
            visitorName: 'Anne',
        });

        deepdeskSDK.setAgentInfo({
            agentName: 'Sam de Pam',
            agentNickname: 'Sam',
        });

        deepdeskSDK.mount(ref.current);

        deepdeskSDK.on('select-text-suggestion', suggestion => {
            const content = ContentState.createFromText(suggestion.text);
            setEditorState(EditorState.createWithContent(content));
        });

        deepdeskSDK.on('reset', suggestion => {
            const content = ContentState.createFromText(suggestion.text);
            setEditorState(EditorState.createWithContent(content));
        });
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        await sendMessageToYourBackend(); // Handle submit ...

        deepdeskSDK.notifySubmit();
        element.value = '';

        // Refresh suggestions
        deepdeskSDK.refresh();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div ref={ref}>
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
```