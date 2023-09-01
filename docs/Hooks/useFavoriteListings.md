The `useFavoriteListings` hook is a custom React hook designed to simplify the process of managing a list of favorite
listings associated with a user. It handles fetching the initial list of favorite listings from a Firebase Realtime
Database and keeps it in sync with any changes made to the user's favorite listings in real-time.

### Usage

#### Importing the Hook

To use the `useFavoriteListings` hook, you need to import it into your React component file:

```jsx static
import useFavoriteListings from 'path-to-useFavoriteListings';
```

#### Initializing the Hook

You can initialize the hook by calling it within a functional component and passing an object with the `UID` (User ID)
as a parameter:

```jsx static
const { favoriteListingsIds } = useFavoriteListings({ UID });
```

#### Parameters

The `useFavoriteListings` hook accepts a single parameter as an object:

- `UID` (string, required): The User ID for which you want to fetch and manage favorite listings.

#### Return Value

The hook returns an object with the following property:

- `favoriteListingsIds` (array): An array containing the IDs of the user's favorite listings. Initially, it's an empty
  array and will be updated when data is fetched from Firebase or when there are real-time updates.

### Implementation Details

The `useFavoriteListings` hook performs the following tasks:

1. **Fetching Initial Data**: It fetches the initial list of favorite listings associated with the provided `UID` using
   the `ProfileAPI.getFavoriteListings` method. The fetched data is then stored in the `favoriteListingsIds` state.

2. **Real-time Updates**: It sets up a real-time listener on the Firebase Realtime Database to listen for changes to the
   user's favorite listings. When there are updates, such as additions or deletions, the `favoriteListingsIds` state is
   updated to reflect the changes.

3. **Cleanup**: When the component unmounts or when the `UID` changes, it cleans up the real-time listener to avoid
   memory leaks.

### Example Usage

Here's an example of how you might use the `useFavoriteListings` hook in a React component:

```jsx static
import React from 'react';
import useFavoriteListings from 'path-to-useFavoriteListings';

function UserProfile({ UID }) {
  const { favoriteListingsIds } = useFavoriteListings({ UID });

  return (
    <div>
      <h1>User Profile</h1>
      <p>Favorite Listings:</p>
      <ul>
        {favoriteListingsIds.map((listingId) => (
          <li key={listingId}>{listingId}</li>
        ))}
      </ul>
    </div>
  );
}
```

In this example, the `UserProfile` component uses the `useFavoriteListings` hook to fetch and display the user's
favorite listings in real-time.

### Dependencies

The `useFavoriteListings` hook relies on the following dependencies:

- React: This hook is designed to work with React functional components.
- Firebase Realtime Database: It assumes you have a Firebase project set up with a Realtime Database and the necessary
  configuration.

### Note

Make sure to handle Firebase authentication and provide the correct `UID` to the `useFavoriteListings` hook for the
desired user's data to be fetched and synchronized. Additionally, you should ensure proper error handling and security
rules in your Firebase setup to protect user data.