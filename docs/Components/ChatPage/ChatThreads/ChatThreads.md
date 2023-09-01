### ChatThreads Component

The `ChatThreads` component is responsible for displaying a list of chat threads categorized by date. It allows users to
select and manage chat threads. This component is used in the chat interface to provide an overview of available chat
conversations.

#### Props

The `ChatThreads` component does not receive any external props.

#### Return Value

The `ChatThreads` component returns a JSX structure representing the chat threads interface. It displays a list of chat
threads organized by date, along with buttons for clearing threads and creating new chats.

#### Usage

To use the `ChatThreads` component, follow these steps:

1. Import the required components and utilities:

   ```jsx static
   import { sx } from './chatThreads.sx';
   import { Box, Button, IconButton, Typography } from '@mui/material';
   import { AddBoxOutlined, CloseOutlined, Delete } from '@mui/icons-material';
   import { createTimeCategoriesForChats } from '../../../utils/chat/createTimeCategoriesForChats';
   import { useMemo } from 'react';
   import { useChatPage } from '../../../pages/ChatPage/ChatPageProvider';
   import { memo } from 'react';
   ```

2. Define the `ChatThreads` component:

   ```jsx static
   const ChatThreads = () => {
   	// Hooks and usage
   	// ... chatThreads component code ...
   };
   ```

3. Retrieve necessary data and functions from the `useChatPage` context using the `useChatPage` hook:

   ```jsx static
   const {
   	activeChatThread,
   	chatThreads = [],
   	handleChooseChatThread,
   	isMobile = false,
   	handleToggleChatThreads,
   	handleCreateNewChatThread,
   	handleDeleteAllChatThreads,
   } = useChatPage();
   ```

4. Calculate time-based categories for chat threads using `createTimeCategoriesForChats` utility function:

   ```jsx static
   const dateChatCategories = useMemo(() => {
   	return createTimeCategoriesForChats(chatThreads);
   }, [chatThreads]);
   ```

5. Filter out empty date categories:

   ```jsx static
   const filteredDateChatCategories = useMemo(() => {
   	return Object.entries(dateChatCategories).filter(([_, chatThreads]) => chatThreads.length > 0);
   }, [dateChatCategories]);
   ```

6. Render the component structure with categorized chat threads:

   ```jsx static
   return (
   	<Box sx={sx.chatThreadsWrapper}>
   		<Box sx={sx.content}>
   			{/* ... header block ... */}
   			<Box sx={sx.chatThreads}>
   				{filteredDateChatCategories.map(([date, chats]) => (
   					<Box key={date}>
   						{/* ... time group label ... */}
   						{chats.map((chatThread) => (
   							<Box
   								key={chatThread.id}
   								onClick={() => handleChooseChatThread(chatThread.id)}
   								sx={sx.chatThreadItem}
   							>
   								{/* ... chat thread item ... */}
   							</Box>
   						))}
   					</Box>
   				))}
   			</Box>
   		</Box>
   		<Box sx={sx.chatThreadsControls}>{/* ... clear and create buttons ... */}</Box>
   	</Box>
   );
   ```

7. Finally, export the component using `memo` to optimize rendering:

   ```jsx static
   export default memo(ChatThreads);
   ```

#### Component Structure

The `ChatThreads` component consists of the following sections:

- **Header Block**: Displays the title "Chat threads" and a close button if viewed on mobile devices.

- **Chat Threads**: Lists chat threads categorized by date. Each date category contains a list of chat threads.

- **Chat Thread Item**: Represents an individual chat thread. It displays the truncated chat name and highlights the
  active chat thread.

- **Chat Threads Controls**: Contains buttons for clearing all chat threads and creating a new chat thread.

#### Example

Here's a basic example of how you can use the `ChatThreads` component in a parent component:

**Important!** You can use this component only within ChatPageProvider Component

```jsx static
import React from 'react';
import ChatThreads from './ChatThreads';

const ChatPage = () => {
	// ... other code ...

	return (
		<div>
			{/* ... other components ... */}
			<ChatThreads />
		</div>
	);
};

export default ChatPage;
```
