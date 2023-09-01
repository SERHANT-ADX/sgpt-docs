The `Header` component is responsible for rendering the header section of the application, including the logo, search
bar, user profile information, and navigation buttons.

### Props

The `Header` component doesn't accept any props.

### Usage Example

```jsx static
import Header from './Header'; // Import the component

const App = () => {
	return (
		<div>
			<Header />
			{/* ... other components ... */}
		</div>
	);
};
```

### Component Structure

The `Header` component is structured as follows:

- A `Box` component containing the entire header.
- Inside the `Box` component:
  - A clickable logo (`img`) displayed on the top-left corner. Clicking the logo navigates to the homepage.
  - A `ClickAwayListener` component to handle clicks outside the search results.
  - Inside the `ClickAwayListener` component:
    - A search input field (`Input`) with a search icon as the start adornment.
    - If `isSearching` is true, a list of search results (`Box` elements) is displayed underneath the search input.
  - A right section containing navigation buttons (`IconButton`) for the chat and image editor pages, and user profile
    information (`Typography`, `Avatar`, and `ArrowDropDownIcon`).
  - A user menu (`Menu`) that appears when the user clicks the profile section.

### Styling and Customization

- The styling of the header and its components is customized using the `sx` prop from Material-UI.
- Icons, images, and other UI elements are used to create the header's appearance.

### Functionality

- Displays the logo on the top-left corner, which is clickable and navigates to the homepage.
- Provides a search bar for users to search for specific listings by address.
- Displays a list of search results underneath the search bar when the user types a search query.
- Navigates to the chat and image editor pages when the respective navigation buttons are clicked.
- Displays user profile information, including the user's display name and avatar.
- Opens a user menu with options like logout when the user clicks on the user profile section.

### Logic Explanation

1. **State Declarations**: Initialize various state variables to manage user data, available rooms, search results,
   search input, and menu visibility.

2. **Authenticated User's UID**: `UID` holds the current user's unique identifier. The `open` variable manages the
   visibility of the user menu.

3. **Memoized Search State**: The `isSearching` variable indicates whether the user is actively searching based on
   certain conditions, such as the search input's length and the `isSearchingState`.

4. **Event Handlers**: Define functions to handle room clicks, menu clicks, logout, and clicks outside the search bar.

5. **Fetch Available Rooms Query**: Use the `useQuery` hook to fetch a list of available rooms. `isLoading` indicates
   whether the query is loading.

#### **Effects**

#### 1. Fetch User Data on Authentication Change

```jsx static
useEffect(() => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUserData(user.providerData[0]);
		}
	});
}, []);
```

This `useEffect` is responsible for fetching user data when the authentication state changes. It utilizes
the `onAuthStateChanged` function from Firebase's authentication library. Here's the breakdown:

- The `useEffect` function runs only once after the initial render. The empty dependency array (`[]`) ensures it doesn't
  re-run on subsequent renders.

- Within the `useEffect`, `onAuthStateChanged` is used to listen for changes in the authentication state. When a user
  logs in or out, this function is triggered.

- If the user is logged in (`user` is not `null`), the user's data is extracted from `user.providerData[0]` and stored
  in the `userData` state variable using `setUserData`.

#### 2. Search Logic

```jsx static
useEffect(() => {
	if (debouncedSearchValue.trim().length > 0) {
		const results = (allRooms || []).filter((room) => {
			return room.UnparsedAddress.toLowerCase().includes(debouncedSearchValue.toLowerCase());
		});
		setSearchResults(results);
	}
}, [debouncedSearchValue, allRooms]);
```

This `useEffect` manages the search functionality within the header. It responds to changes in the debounced search
value and updates the `searchResults` based on the filtered rooms' addresses. Here's the detailed breakdown:

- The `useEffect` is triggered whenever `debouncedSearchValue` or `allRooms` changes.

- The condition `debouncedSearchValue.trim().length > 0` checks whether the trimmed search value has a length greater
  than zero. If not, it doesn't execute the search logic.

- If the condition is met, it filters `allRooms` array using the `filter` function. For each room, it checks if the
  lowercased `UnparsedAddress` includes the lowercased `debouncedSearchValue`.

- The filtered `results` array is then set to the `searchResults` state using `setSearchResults`.

### Considerations

- This component relies on Material-UI components and styles for its appearance and functionality.
- Ensure that Firebase authentication is set up properly for user authentication and profile information.
- Make sure that routes for navigation (`/chat`, `/editing`, etc.) are defined in your routing setup.
