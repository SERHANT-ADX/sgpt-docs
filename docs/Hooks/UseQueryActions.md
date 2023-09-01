The `UseQueryActions` hook is a custom hook that encapsulates mutations using the `useMutation` hook from
the `@tanstack/react-query` library. It provides a centralized location for defining and handling mutation actions.

### Return Value

The `UseQueryActions` hook returns an object containing the following mutation functions:

- `getListingsRooms`: A mutation for fetching listings' room data.
- `createSocialPost`: A mutation for creating social media posts.
- `makeChatRequest`: A mutation for sending chat requests.

### Details

- The hook uses the useMutation hook to define mutations, including their mutation function, success handling, and error
  handling.
- Mutation functions are organized within the UseQueryActions hook, making them easily accessible and reusable across
  different components.
- These mutations can be called from your components, allowing you to interact with APIs and manage state updates
  efficiently.

### Example Usage

```jsx static
import React from 'react';
import useQueryActions from './useQueryActions';

function MutationsComponent() {
	const { getListingsRooms, createSocialPost, makeChatRequest } = useQueryActions();

	// Use the mutation functions in your component

	return <>// Your JSX components here</>;
}
```

In this example, the UseQueryActions hook is used to manage mutation actions in a component. The hook provides access to
various mutation functions, each representing a specific mutation action.
