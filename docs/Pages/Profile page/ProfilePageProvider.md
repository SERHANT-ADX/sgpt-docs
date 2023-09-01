The `ProfilePageProvider` component is a React context provider that manages the state and logic related to a user's
profile page. It encapsulates various pieces of functionality and data that are used within the `ProfilePage` component,
making them available to all the child components of `ProfilePage`. The component utilizes hooks, statics, and effects
to achieve its functionality.

### Statics:

- `user` and `UID`: These static variables are extracted from the `auth` object to get the current user's information
  and unique identifier (`UID`).

### Hooks:

- `screenSize` and `isMobile`: These hooks utilize the `useScreenSize` custom hook to determine the screen size and
  whether the user is on a mobile device.

- `navigate`: This hook is used to programmatically navigate the user to different routes within the application.

- `useParams`: This hook retrieves parameters from the URL route.

- `useState`: Several state variables are managed using this hook,
  including `chatThreads`, `chatThreadsIsLoading`, `presets`, `presetsIsLoading`, `generatedImages`, `generatedImagesIsLoading`, `favoriteListings`,
  and `activeListing`.

- `useFavoriteListings`: This custom hook is used to fetch the user's favorite listings based on their `UID`.

- `useQuery`: This hook is from the `react-query` library and is used to fetch data asynchronously with caching and
  invalidation.

### Effects:

#### `useEffect` for Managing Favorite Listings

```jsx static
useEffect(() => {
  const favoriteListings = allListings?.filter((listing) => (favoriteListingsIds || []).includes(listing.Id));
  setFavoriteListings(favoriteListings || []);
}, [allListings, UID, favoriteListingsIds]);
```

**Purpose:** This effect is responsible for updating the `favoriteListings` state, which contains a list of listings
that the user has marked as favorites. It filters `allListings` based on the `favoriteListingsIds` array, which stores
the unique IDs of the user's favorite listings. The filtered list is then set as the new value of `favoriteListings`.

**Dependencies:**

- `allListings`: An array of all available listings.
- `UID`: The unique identifier of the user.
- `favoriteListingsIds`: An array of unique IDs representing the user's favorite listings.

#### `useEffect` for Loading Initial Chat Threads List

```jsx static
useEffect(() => {
  if (chatThreads.length === 0) {
    ChatAPI.getChats(UID).then((chats) => {
      setChatThreads(chats || []);
    });
  }

  const chatThreadsRef = ref(db, `chatHistory/${UID}/`);
  const onDataChange = (snapshot) => {
    const data = snapshot.val();
    const chatThreads = Object.values(data || {});

    setChatThreads(chatThreads || []);
    setChatThreadsIsLoading(false);
  };

  onValue(chatThreadsRef, onDataChange);

  return () => {
    off(chatThreadsRef, onDataChange);
  };
}, [UID, setChatThreads, setChatThreadsIsLoading]);
```

**Purpose:** This effect serves multiple purposes related to chat threads. It initially checks if `chatThreads` is empty
and, if so, fetches chat data using `ChatAPI.getChats(UID)`. It also sets up a real-time listener for changes in chat
data stored in Firebase using `onValue`. When chat data changes, the listener updates the `chatThreads` state and
indicates that loading is complete by setting `setChatThreadsIsLoading` to `false`.

**Dependencies:**

- `UID`: The unique identifier of the user.
- `setChatThreads`: A function to set the chat threads.
- `setChatThreadsIsLoading`: A function to indicate whether chat threads are still loading.

#### `useEffect` for Managing Presets

```jsx static
useEffect(() => {
  if (!presets?.length) {
    EditingImagesAPI.getPresets(UID).then((presets) => {
      setPresets(presets || []);
    });
  }

  const presetsRef = ref(db, `presets/${UID}/`);
  const onDataChange = (snapshot) => {
    const data = snapshot.val();
    const newPresets = Object.values(data || {});

    setPresets(newPresets || []);
    setPresetsIsLoading(false);
  };

  onValue(presetsRef, onDataChange);

  return () => {
    off(presetsRef, onDataChange);
  };
}, [UID, setPresets, setPresetsIsLoading]);
```

**Purpose:** This effect manages user presets for image editing. It checks if `presets` is empty and, if so, fetches
presets data using `EditingImagesAPI.getPresets(UID)`. It also sets up a real-time listener for changes in preset data
stored in Firebase. When preset data changes, the listener updates the `presets` state and indicates that loading is
complete by setting `setPresetsIsLoading` to `false`.

**Dependencies:**

- `UID`: The unique identifier of the user.
- `setPresets`: A function to set the user's presets.
- `setPresetsIsLoading`: A function to indicate whether presets are still loading.

#### `useEffect` for Managing Generated Images

```jsx static
useEffect(() => {
  if (!generatedImages?.length) {
    EditingImagesAPI.getGeneratedImages(UID).then((generatedImages) => {
      setGeneratedImages(generatedImages || []);
    });
  }

  const generatedImagesRef = ref(db, `generatedImages/${UID}/`);
  const onDataChange = (snapshot) => {
    const data = snapshot.val();
    const newGeneratedImages = Object.values(data || {});

    setGeneratedImages(newGeneratedImages || []);
    setGeneratedImagesIsLoading(false);
  };

  onValue(generatedImagesRef, onDataChange);

  return () => {
    off(generatedImagesRef, onDataChange);
  };
}, [UID, setGeneratedImages, setGeneratedImagesIsLoading]);
```

**Purpose:** This effect manages generated images associated with the user. It checks if `generatedImages` is empty and,
if so, fetches generated image data using `EditingImagesAPI.getGeneratedImages(UID)`. It also sets up a real-time
listener for changes in generated image data stored in Firebase. When generated image data changes, the listener updates
the `generatedImages` state and indicates that loading is complete by setting `setGeneratedImagesIsLoading` to `false`.

**Dependencies:**

- `UID`: The unique identifier of the user.
- `setGeneratedImages`: A function to set the user's generated images.
- `setGeneratedImagesIsLoading`: A function to indicate whether generated images are still loading.

#### `useEffect` for Managing Active Listing

```jsx static
useEffect(() => {
  if (id) {
    const currentActiveListing = allListings?.find((listing) => listing.Id === id);

    if (!currentActiveListing) {
      setActiveListing(null);
      return;
    }

    if (id !== currentActiveListing.Id) {
      setActiveListing(null);
      return;
    }

    const activeListingsWithFilteredMedia =
      currentActiveListing?.Media?.length > 1
        ? {
          isLiked: favoriteListingsIds.includes(currentActiveListing.Id),
          ...currentActiveListing,
          ...(currentActiveListing && { Media: currentActiveListing?.Media.slice(1, 6) }),
        }
        : {
          isLiked: favoriteListingsIds.includes(currentActiveListing.Id),
          ...currentActiveListing,
          ...(currentActiveListing && { Media: currentActiveListing?.Media }),
        };
    setActiveListing(activeListingsWithFilteredMedia);
  }
}, [id, allListings, favoriteListingsIds]);
```

**Purpose:** This effect is responsible for managing the active listing based on the provided `id`. It first attempts to
find the listing with the given `id` within the `allListings` array. If found, it filters the listing's media to include
only a subset of it, updating the `activeListing` state with additional information like whether it's liked (`isLiked`).
If the listing is not found or the `id` doesn't match the listing's `Id`, it sets the `activeListing` to `null`.

**Dependencies:**

- `id`: The ID of the currently active listing.
- `allListings`: An array of all available listings.
- `favoriteListingsIds`: An array of unique IDs representing the user's favorite listings.

These `useEffect` hooks collectively manage various aspects of the user's profile data

### Handlers:

- `handleApplyFilter`: This handler is called when a filter is applied. It sets the initial saved filter and navigates
  the user to the editing page.

- `handleToggleLikePreset`: This handler is used to toggle the "like" status of an editing preset.

- `handleToggleLikeGeneratedImage`: This handler is used to toggle the "like" status of a generated image.

- `handleToggleLikeListingItem`: This handler is used to toggle the "like" status of a favorite listing.

### Context Value:

The `contextValue` is a combination of the various state variables, handlers, and other relevant data mentioned above.
It provides these values to child components through the `ProfilePageContext.Provider`.

### Custom Hook:

- `useProfilePage`: This custom hook allows other components to easily access the context values provided by
  the `ProfilePageProvider`. It throws an error if used outside the scope of the provider.

### Usage:

1. The component fetches and manages data related to chat threads, presets, generated images, and favorite listings.
2. It handles the navigation between different pages, like applying filters and toggling "like" status.
3. It encapsulates the above logic and makes it available to its child components using the React context API.

Overall, the `ProfilePageProvider` is a complex component that centralizes the state management and logic related to a
user's profile page, making it easier to maintain and provide a consistent experience across different parts of the
application.