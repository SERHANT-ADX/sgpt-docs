The `ChatPage` component represents the main user interface for the chat functionality in the application. It displays
the chat threads, active chat messages, and provides controls to create new chat threads and send messages.

### Imports

```jsx static
import { Box, IconButton } from '@mui/material';
import { sx } from './chatPage.sx';
import { Menu, Add } from '@mui/icons-material';
import MessageItem from '../../components/ChatPage/MessageItem/MessageItem';
import EmptyChat from '../../components/ChatPage/EmptyChat/EmptyChat';
import ChatThreads from '../../components/ChatPage/ChatThreads/ChatThreads';
import ChatControls from '../../components/ChatPage/ChatControls/ChatControls';
import ChatThreadsSkeleton from '../../components/Skeletons/SkeletonChatThreads';
import ChatMessagesSkeleton from '../../components/Skeletons/ChatMessagesSkeleton';
import { useChatPage } from './ChatPageProvider';
import { memo } from 'react';
```

### ChatPage Component

The `ChatPage` component renders the chat interface, including chat threads and messages.

#### Hooks

```jsx static
const {
	handleToggleChatThreads,
	handleCreateNewChatThread,
	chatThreadsIsLoading,
	profilePhoto,
	showChatThreads,
	activeChatThread = null,
	isLoadingChatThread,
	chatMessagesRef,
	isMobile,
} = useChatPage();
```

The component uses the `useChatPage` hook to retrieve various state and functions required for the chat functionality.

- `handleToggleChatThreads`: A function to toggle the visibility of chat threads.
- `handleCreateNewChatThread`: A function to create a new chat thread.
- `chatThreadsIsLoading`: A boolean indicating whether chat threads are currently loading.
- `profilePhoto`: The profile photo of the user.
- `showChatThreads`: A boolean indicating whether to show chat threads.
- `activeChatThread`: The currently active chat thread.
- `isLoadingChatThread`: A boolean indicating whether chat messages for the active chat thread are loading.
- `chatMessagesRef`: A reference to the DOM element for chat messages.
- `isMobile`: A boolean indicating whether the screen size is considered mobile.

#### View Rendering

```jsx static
return (
	<>
		{isMobile && (
			<Box sx={sx.chatMobileThreadsControls}>
				<IconButton
					sx={{}}
					onClick={() => handleToggleChatThreads(true)}
				>
					<Menu sx={{}} />
				</IconButton>
				<IconButton onClick={() => handleCreateNewChatThread()}>
					<Add sx={{}} />
				</IconButton>
			</Box>
		)}
		<Box sx={sx.container}>
			<Box sx={sx.content}>
				{showChatThreadsForAll && <>{chatThreadsIsLoading ? <ChatThreadsSkeleton /> : <ChatThreads />}</>}
				{isLoadingChatThread ? (
					<ChatMessagesSkeleton />
				) : (
					<Box sx={sx.chat}>
						{activeChatThread ? (
							<Box
								sx={sx.chatMessages}
								ref={chatMessagesRef}
							>
								{(activeChatThread ? activeChatThread?.chatString : []).map((message) => (
									<MessageItem
										profilePhoto={profilePhoto}
										key={message.timeStamp + message.content}
										message={message}
									/>
								))}
							</Box>
						) : (
							<EmptyChat />
						)}
						<ChatControls />
					</Box>
				)}
			</Box>
		</Box>
	</>
);
```

The component's rendering logic consists of the following:

1. If `isMobile` is `true`, it renders a mobile version of the chat thread controls with a menu button to toggle the
   chat threads and an "Add" button to create a new chat thread.
2. It renders the main content of the chat interface inside a container.
3. If `showChatThreadsForAll` is `true`, it either renders a skeleton of chat threads or the actual chat threads
   depending on whether they are loading or not.
4. If `isLoadingChatThread` is `true`, it renders a skeleton for chat messages. Otherwise, it renders the active chat
   thread's messages along with chat controls.
5. If there's an `activeChatThread`, it maps through the `chatString` array of the thread to render
   individual `MessageItem` components.
6. If there's no `activeChatThread`, it renders the `EmptyChat` component, indicating that no chat thread is selected.
7. Finally, it renders the `ChatControls` component, allowing users to send messages.

### Export

```jsx static
export default memo(ChatPage);
```

The `ChatPage` component is exported as a memoized component to optimize rendering performance.

This documentation provides an overview of the `ChatPage` component's structure, usage of hooks, and rendering logic. It
forms the core of the chat functionality in the application, providing users with a seamless chat experience.
