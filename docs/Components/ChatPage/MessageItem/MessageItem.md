The `MessageItem` component is responsible for displaying an individual message within a chat conversation. It includes
the sender's avatar, message content, and the option to copy the message content to the clipboard. This component is
used to represent messages exchanged between the user and the chatbot.

#### Props

- `message`: The message object containing information about the message, such as content and sender role.
- `profilePhoto`: The URL of the user's profile photo. Defaults to an empty string if not provided.

#### Return Value

The `MessageItem` component returns a JSX structure representing an individual chat message. It displays the sender's
avatar, the message content, and an option to copy the message content to the clipboard.

#### Usage

To use the `MessageItem` component, follow these steps:

1. Import the required components and utilities:

   ```jsx static
   import { Avatar, Box, IconButton } from '@mui/material';
   import { ContentCopy, LibraryAddCheck } from '@mui/icons-material';
   import chatGPTMessagePhoto from '../../../assets/logos/s-logo-for-chat.svg';
   import { sx } from './messageItem.sx';
   import { CopyToClipboard } from 'react-copy-to-clipboard/src';
   import { useEffect, useState, useCallback, memo } from 'react';
   ```

2. Define the `MessageItem` component:

   ```jsx static
   const MessageItem = ({ message, profilePhoto = '' }) => {
   	// ... message item component code ...
   };
   ```

3. Determine whether the sender is the user or not using the `senderIsUser` boolean:

   ```jsx static
   const senderIsUser = message.role === 'user';
   ```

4. Initialize the `isCopied` state to track whether the message content has been copied:

   ```jsx static
   const [isCopied, setIsCopied] = useState(false);
   ```

5. Define a handler to mark the message content as copied:

   ```jsx static
   const handleCopyGeneratedResponse = useCallback(() => {
   	setIsCopied(true);
   }, []);
   ```

6. Implement an effect to reset the `isCopied` state after a certain duration:

   ```jsx static
   useEffect(() => {
   	if (isCopied) {
   		const timer = setTimeout(() => {
   			setIsCopied(false);
   		}, 3000);

   		return () => clearTimeout(timer);
   	}
   }, [isCopied]);
   ```

7. Render the message item structure:

   ```jsx static
   return (
   	<Box sx={{ ...sx.container, ...(senderIsUser && sx.userMessageContainer) }}>
   		{/* ... avatar ... */}
   		<Box sx={{ ...sx.messageItem, ...(senderIsUser && sx.userMessageItem) }}>{/* ... message content ... */}</Box>
   		{!senderIsUser && (
   			<CopyToClipboard
   				text={message.content}
   				onCopy={handleCopyGeneratedResponse}
   			>
   				<IconButton sx={sx.copyIcon}>{/* ... copy icon ... */}</IconButton>
   			</CopyToClipboard>
   		)}
   	</Box>
   );
   ```

8. Export the component using `memo` for rendering optimization:

   ```jsx static
   export default memo(MessageItem);
   ```

#### Component Structure

The `MessageItem` component consists of the following sections:

- **Avatar**: Displays the sender's avatar, which varies based on whether the sender is the user or the chatbot.

- **Message Content**: Displays the message content. The color of the text changes based on the sender's role.

- **Copy Icon**: If the sender is not the user, this section contains an option to copy the message content to the
  clipboard. The icon changes to indicate that the content has been copied.

#### Example

Here's a basic example of how you can use the `MessageItem` component in a parent component:

```jsx static
import React from 'react';
import MessageItem from './MessageItem';

const ChatWindow = () => {
	const messages = [
		// ... list of message objects ...
	];

	return (
		<div>
			{messages.map((message) => (
				<MessageItem
					key={message.id}
					message={message}
				/>
			))}
		</div>
	);
};

export default ChatWindow;
```

This will render a list of `MessageItem` components, each representing an individual message in the chat window.
