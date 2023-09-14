### ChatPageContext (Context)

A context used to provide data and functions related to the chat page to its child components.

### ChatPageProvider (Component)

A provider component that wraps the ChatPage component and provides context data and functions related to the chat
functionality.

#### Hooks 

**useAuthorization()** - get authorization data of a user
```js static
const { photoURL: profilePhoto, UID } = useAuthorization();
```

**useGetChatThreads()** - fetch and real-time update chat threads 
```jsx static
useGetChatThreads({
    chatThreads,
    setChatThreads,
    setChatThreadsIsLoading,
    UID,
    depsList: [id, UID, activeChatThread?.chatString?.length],
});
```

#### **Methods**

#### `scrollChatToBottom()`

Scrolls the chat messages to the bottom, ensuring the latest messages are visible.

#### `handleToggleChatThreads(value: boolean)`

Toggles the display of chat threads in the sidebar.

#### `handleChooseChatThread(chatThreadId: string)`

Navigates to a specific chat thread by its ID and closes the chat thread sidebar.

#### `handleCreateNewChatThread()`

Navigates to the chat page for creating a new chat thread.

#### `handleDeleteAllChatThreads()`

Deletes all chat threads associated with the user.

#### `handleUpdateChat(chatThreadForUpdate: object)`

Updates the chat thread with new messages and scrolls to the bottom.

#### `createNameForChatThread(chatThread: object, messages: array)`

Creates a name for the chat thread using existing messages and updates the chat thread.

#### `handleSendMessage(prompt: string)`

Handles sending a user message in the chat, triggers AI response, and updates the chat thread.

#### `handleRegenerateMessage()`

Generates an AI response based on the current chat context and updates the chat thread.

### **useChatPage()**
A custom hook that allows components to access the context data and functions related to the chat page.

### **ChatPage (Component)**
A component that displays the chat page interface.

### **useQueryActions (Custom hook)**
A utility custom hook that provides mutation functions for various API requests.


### **Detailed Explanation of Effects**

### Loading Active Chat Thread and Initial Data Fetch

This effect is triggered whenever the id parameter changes. It is responsible for fetching the active chat thread based
on the provided id and setting the corresponding state variables.

#### Description:

If the `id` parameter is present, the effect begins by setting the `isLoadingChatThread` state to true to indicate that
the chat thread is being loaded.
It then calls the `ChatAPI.getChatById` function with the user's `UID` and the provided id to fetch the chat thread
data.

After fetching the chat thread data, it checks whether the chat thread exists or not.
If the chat thread does not exist, it navigates the user to the chat page (/chat/) to ensure they have an active chat
thread.
If the chat thread exists, it updates the activeChatThread state with the fetched chat thread data.

Finally, the effect sets the `isLoadingChatThread` state to `false`, indicating that the chat thread loading is
complete.

### Auto-scrolling Chat Messages

This effect is responsible for automatically scrolling the chat messages container to the bottom, ensuring that new
messages are always visible to the user.

#### Description:

Whenever the `activeChatThread` or `chatMessagesRef` changes, the effect is triggered.

It first checks if the `chatMessagesRef.current` container exists.

If the container exists, the effect sets the scrollTop property of the container to scrollHeight, effectively scrolling
to the bottom.
This ensures that new messages are always `visible` to the user as they are added to the chat messages.

These effects work together to manage the chat functionality, loading chat threads, and ensuring a smooth user
experience by automatically scrolling chat messages.
