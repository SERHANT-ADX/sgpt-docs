The `useScreenSize` hook is a custom React hook designed to track and provide information about the current screen size
category based on the window width.

### Return Value

The `useScreenSize` hook returns a string indicating the current screen size category:

- `'xl'`: Extra Large screen
- `'l'`: Large screen
- `'m'`: Medium screen
- `'s'`: Small screen
- `'xs'`: Extra small screen

### Details

- The hook calculates the screen size category based on the window width and returns the corresponding string value.
- It uses the window.innerWidth property to determine the width of the window and map it to screen size categories.
- The hook also listens for the resize event to update the screen size when the window is resized, ensuring accurate
  tracking of the screen size.

### Example Usage

```jsx static
import React from 'react';
import useScreenSize from './useScreenSize';

function ScreenSizeComponent() {
	const screenSize = useScreenSize();

	// Use the screenSize to conditionally render components
	// based on the detected screen size

	return <>// Your JSX components here</>;
}
```

In this example, the useScreenSize hook is used to detect the current screen size and conditionally render components
based on the detected screen size category.
