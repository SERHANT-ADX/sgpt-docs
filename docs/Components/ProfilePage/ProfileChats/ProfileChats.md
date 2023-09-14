The `ProfileChats` component is a React functional component responsible for rendering a list of chat threads associated
with a user's profile. It displays information about each chat thread, including the initial prompt, a link to view the
conversation, and the number of responses. If no chat threads exist, it also displays an empty view with a message and
an icon.

### Dependencies

The `ProfileChats` component relies on the following dependencies:

- **Material-UI:** It utilizes Material-UI components such as `Box`, `Link`, `Typography`, and icons.

- **`useProfilePage`:** It imports the `useProfilePage` hook from the `ProfilePageProvider` to access chat thread data.

- **`ProfileEmptyView` Component:** It uses the `ProfileEmptyView` component to display a message and icon when no chat
  threads are found.

- **`useDocumentTitle` Hook:** It uses the `useDocumentTitle` hook from the `usehooks-ts` library to dynamically set the
  document title.

### Props

The `ProfileChats` component does not accept any props directly. Instead, it relies on the `chatThreads` and `chatThreadsIsLoading` data obtained
from the `useProfilePage` hook to render the list of chat threads.

`chatThreads` - array of chat objects

`chatThreadsIsLoading` - boolean
### Component Structure

The `ProfileChats` component is structured as follows:

1. **Document Title (`useDocumentTitle`):** It uses the `useDocumentTitle` hook to dynamically set the document title
   to "Profile Chats | S.GPT" to provide users with a clear page title.

2. **Chats List (`chatsList`):** This section displays the list of chat threads.

    - **Chat List Item (`chatListItem`):** Each chat thread is rendered as a separate list item within the chats list.

        - **Chat Label (`chatLabel`):** A label indicating "INITIAL PROMPT" to denote the start of the conversation.

        - **Initial Prompt (`initialPrompt`):** The initial message or prompt that initiated the chat thread.

        - **Chat Link (`chatLink`):** A link to view the full conversation. Clicking on this link redirects the user to
          the chat thread page.

        - **Chat Length (`chatLength`):** Displays the number of responses in the chat thread, excluding the initial
          prompt.

3. **Profile Empty View (`ProfileEmptyView`):** If there are no chat threads (`chatThreads.length` is zero),
   the `ProfileEmptyView` component is rendered with a message ("No existing chats found") and an
   icon (`SpeakerNotesOff`) indicating that no chats are available.

### Usage

To use the `ProfileChats` component, follow these steps:

1. Import the `ProfileChats` component into your application.

   ```jsx static
   import ProfileChats from './ProfileChats';
   ```
 
2. Include the `ProfileChats` component within your application's UI, typically within the user's profile page or any
   route where chat threads should be displayed.

   ```jsx static
   <ProfileChats />
   ```

3. The `ProfileChats` component will render a list of chat threads, each displaying the initial prompt, a link to view
   the full conversation, and the number of responses. If no chat threads exist, it will display a message and icon
   indicating that no chats are available.