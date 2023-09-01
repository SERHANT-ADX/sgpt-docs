The `useDebounce` hook is a custom React hook that assists in debouncing a value. Debouncing is a technique used to
delay the execution of a function until after a certain time period has passed since the last invocation. This hook is
particularly useful in scenarios where you want to limit the frequency of updates, such as in search input fields.

### Parameters

value (any): The value that you want to debounce.

delay (number): The delay time in milliseconds before the debounced value is updated.

### Return Value

The useDebounce hook returns the debounced value after the specified delay.

### Example

Here's an example of how you might use the useDebounce hook:

```jsx static
import React, { useState } from 'react';
import useDebounce from './useDebounce';

function SearchComponent() {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 300);
	// Assume you're using this debounced search term to fetch data or perform other actions
	// For instance:
	// fetchData(debouncedSearchTerm);
	return (
		<input
			type="text"
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
			placeholder="Search..."
		/>
	);
}
```
