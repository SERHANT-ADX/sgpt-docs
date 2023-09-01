The `LayoutProvider` component serves as a provider for the application's context, which includes various states and
functions related to the layout and application state.

### Imports

```jsx static
import Layout from './Layout';
import AuthorizationLayer from '../AuthorizationLayer/AuthorizationLayer';
import { createContext, useContext, useMemo, useState } from 'react';
import useScreenSize from '../../hooks/useScreenSize/useScreenSize';
import { memo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';
import { getFilterOptionsBody } from '../../utils/listing/getPropertyTypesForFilter';
import RoomsAPI from '../../services/roomsAPI';
```

- `Layout`: The main layout component of the application.
- `AuthorizationLayer`: A component for handling user authorization and authentication.
- `createContext`: A function to create a new context.
- `useContext`: A hook to access the context.
- `useMemo`: A hook to memoize values and functions.
- `useState`: A hook to manage component state.
- `useScreenSize`: A custom hook to track the current screen size.
- `memo`: A function to memoize a component for performance optimization.
- `ToastContainer`: A component for displaying toast notifications.
- `useQuery`: A hook from the `react-query` library for making queries and caching data.
- `getFilterOptionsBody`: A function to generate filter options for listing properties.
- `RoomsAPI`: A service module for interacting with room-related API endpoints.

### AppContextProvider Context

```jsx static
const AppContextProvider = createContext(null);
```

- `AppContextProvider`: A context that holds the application-level state and functions.

### LayoutProvider Component

The `LayoutProvider` component serves as the main provider for the application's context. It encapsulates the `Layout`
component within the `AuthorizationLayer` and provides the context to child components.

#### Hooks and States

```jsx static
const screenSize = useScreenSize();
const isMobile = useMemo(() => screenSize === 'xs' || screenSize === 's', [screenSize]);

const [currentPage, setCurrentPage] = useState(1);
const [rooms, setRooms] = useState([]);

const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
const [isAddingModalOpen, setIsAddingModalOpen] = useState(false);
const [regions, setRegions] = useState(null);
const [filterOptions, setFilterOptions] = useState(null);
```

- `screenSize`: The current screen size, determined using the `useScreenSize` hook.
- `isMobile`: A boolean value indicating whether the screen size is considered mobile.
- `currentPage`: The current page number.
- `setCurrentPage`: A function to set the current page number.
- `rooms`: An array holding the current list of rooms.
- `setRooms`: A function to set the list of rooms.
- `isFilterModalOpen`: A boolean indicating whether the filter modal is open.
- `setIsFilterModalOpen`: A function to control the visibility of the filter modal.
- `isAddingModalOpen`: A boolean indicating whether the adding modal is open.
- `setIsAddingModalOpen`: A function to control the visibility of the adding modal.
- `regions`: A state to hold regions data.
- `setRegions`: A function to set the regions data.
- `filterOptions`: A state to hold filter options data.
- `setFilterOptions`: A function to set the filter options data.

#### useQuery Hook

```jsx static
useQuery({
	queryKey: ['getListingsRooms', { filterOptions: null, regions: null }],
	queryFn: async () => {
		const filterOptions = getFilterOptionsBody(null);

		const body = {
			filterOptions,
			regionsSelected: [],
		};
		return RoomsAPI.getRoomsPost(body);
	},
});
```

- The `useQuery` hook is used to fetch room data based on certain query conditions.
- `queryKey`: An array representing the query's unique key.
- `queryFn`: The function responsible for fetching data from the server.
- The `getFilterOptionsBody` function generates filter options, and the `RoomsAPI.getRoomsPost` method is used to fetch
  rooms data.

#### Context Value

```jsx static
const contextValue = useMemo(() => {
  return {
    isFilterModalOpen,
    setIsFilterModalOpen,
    isAddingModalOpen,
    setIsAddingModalOpen,
    regions,
    setRegions,
    filterOptions,
    setFilterOptions,
    isMobile,
    currentPage,
    setCurrentPage,
    rooms,
    setRooms,
  };
}, [...]);
```

- `contextValue`: A memoized object containing context values and functions.
- The context value includes the states and functions required for the application.

#### Rendering

```jsx static
return (
	<>
		<AppContextProvider.Provider value={contextValue}>
			<AuthorizationLayer>
				<Layout />
			</AuthorizationLayer>
		</AppContextProvider.Provider>
		<ToastContainer
			position="top-right"
			autoClose={6000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
	</>
);
```

- The `AppContextProvider.Provider` wraps the `AuthorizationLayer` component, which in turn wraps the `Layout`
  component.
- The `contextValue` is passed as the value of the context provider.
- The `ToastContainer` component is used for displaying toast notifications.

### useAppProvider Hook

```jsx static
const useAppProvider = () => {
	const context = useContext(AppContextProvider);
	if (!context) {
		throw new Error('useAppProvider must be used within a LayoutProvider');
	}
	return context;
};
```

- `useAppProvider` is a custom hook for conveniently accessing the context values from components.

### Export

```jsx static
export default memo(LayoutProvider);
export { useAppProvider };
```

- The `LayoutProvider` component is exported as a memoized component to optimize rendering performance.
- The `useAppProvider` hook is exported to provide easy access to the context values."
