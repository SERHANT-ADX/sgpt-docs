The `MainPageProvider` component is responsible for providing context and data to the `MainPage` component. It
encapsulates the logic for fetching and handling listings data, managing filters, and handling pagination.

### Imports

```jsx static
import React, {createContext, memo, useContext, useMemo} from 'react';
import MainPage from './MainPage';
import useHandleListings from '../../hooks/useHandleListings/useHandleListings';
import {useAppProvider} from '../Layout/LayoutProvider';
```

- `createContext`: Creates a context for sharing data.
- `memo`: Memoizes the component for performance optimization.
- `MainPage`: The component that consumes the context provided by `MainPageProvider`.
- `useHandleListings`: A custom hook for fetching and handling listings data.
- `useAppProvider`: A custom hook for accessing application-level context from `LayoutProvider`.

### MainPageContext

```jsx static
const MainPageContext = createContext(null);
```

- `MainPageContext` is a context object created using the `createContext` function. It will hold the data shared across
  components within the `MainPageProvider`.

### MainPageProvider Component

```jsx static
const MainPageProvider = () => {
	//@@viewOn:hooks
	const {
		currentPage,
		rooms,
		setCurrentPage,
		setRooms,
		isFilterModalOpen,
		setIsFilterModalOpen,
		regions,
		setRegions,
		filterOptions,
	} = useAppProvider();

	const { data, isLoading, isFetching, error } = useHandleListings({
		filterOptions,
		currentPage,
		regions,
		rooms,
		setCurrentPage,
		setRooms,
	});
	//@@viewOff:hooks

	//@@viewOn:context
	const contextValue = useMemo(
		() => ({
			error,
			rooms,
			regions,
			setRegions,
			currentPage,
			setCurrentPage,
			isFilterModalOpen,
			setIsFilterModalOpen,
			isFetching: isLoading || isFetching,
			totalListings: data?.length || 0,
		}),
		[
			error,
			rooms,
			regions,
			setRegions,
			currentPage,
			setCurrentPage,
			isFilterModalOpen,
			setIsFilterModalOpen,
			isFetching,
			data,
		],
	);
	//@@viewOff:context

	return (
		<MainPageContext.Provider value={contextValue}>
			<MainPage />
		</MainPageContext.Provider>
	);
};
```

- The `MainPageProvider` component encapsulates the logic for fetching and managing listings data and provides it to
  the `MainPage` component through context.
- The component uses the `useAppProvider` hook to access context values and actions from the `LayoutProvider`.
- The `useHandleListings` hook is used to fetch and handle listings data based on filter options, current page, regions,
  rooms, and various actions.
- The `contextValue` object holds the data and actions that will be available to components consuming
  the `MainPageContext`.
- The `useMemo` hook memoizes the `contextValue` to prevent unnecessary re-rendering.
- The `MainPage` component is wrapped in the `MainPageContext.Provider` to provide the context data to its child
  components.

### useMainPageProvider Hook

```jsx static
const useMainPageProvider = () => {
	const context = useContext(MainPageContext);
	if (!context) {
		throw new Error('useMainPageProvider must be used within a MainPageProvider');
	}
	return context;
};
```

- The `useMainPageProvider` hook is used to access the context values provided by `MainPageProvider`.
- It uses the `useContext` hook to retrieve the context values from the nearest `MainPageContext.Provider` ancestor.
- If the hook is used outside the context provider, it throws an error.

### Export

```jsx static
export default memo(MainPageProvider);
export { useMainPageProvider };
```

- The `MainPageProvider` component is exported as a memoized component for performance optimization.
- The `useMainPageProvider` hook is also exported for components that need to access the context values
  from `MainPageProvider`.
