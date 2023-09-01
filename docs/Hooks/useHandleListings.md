The `useHandleListings` hook is a custom React hook designed to manage and handle the retrieval of listings for display.
It utilizes the `useQuery` hook from the `@tanstack/react-query` library to fetch and manage the data.

### Parameters

- `regions` (array): An array of selected regions for filtering listings.
- `rooms` (array): An array of rooms retrieved for display.
- `currentPage` (number): The current page number being displayed.
- `filterOptions` (object): Options for filtering listings.
- `setCurrentPage` (function): A function to set the current page number.
- `setRooms` (function): A function to set the retrieved rooms for display.

### Return Value

The `useHandleListings` hook returns an object containing the following:

- `isLoading` (boolean): Indicates whether the data is currently being loaded.
- `isFetching` (boolean): Indicates whether the data is currently being refetched.
- `data` (any): The fetched data, which includes room listings.
- `error` (Error): An error object if the data fetch encounters an error.

### Details

- The hook uses the useQuery hook to fetch room listing data based on the provided parameters.
- It manages pagination by slicing the retrieved data into chunks based on the current page and the specified number of
  listings per page.
- The hook sets the initial listing data on successful fetch, updates the listing data on each page change, and manages
  loading and error states.

### Example Usage

```jsx static
import React from 'react';
import useHandleListings from './useHandleListings';

function ListingsComponent() {
	const { isLoading, isFetching, data, error } = useHandleListings({
		regions,
		rooms,
		currentPage,
		filterOptions,
		setCurrentPage,
		setRooms,
	});

	// Display loading, data, or error components based on the hook results

	return <>// Your JSX components here</>;
}
```

In this example, the useHandleListings hook is used to manage listing data retrieval for a listings component. The hook
handles data fetching, pagination, and updates to the rooms state based on user interactions.
