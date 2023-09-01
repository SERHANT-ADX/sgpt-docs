The `ProfileListings` component is a React functional component designed to display a list of favorite listings
associated with a user's profile. It also provides a loading indicator during data retrieval and an empty state view
when no favorite listings are available.

### Dependencies

The `ProfileListings` component relies on the following dependencies:

- **`useProfilePage` Hook:** It imports the `useProfilePage` hook from the `ProfilePageProvider` to access favorite
  listing data and loading status.

- **Material-UI:** It utilizes Material-UI components such as `Box`, icons, and `Loader`.

- **`RoomMainListItem` Component:** It uses the `RoomMainListItem` component to display individual favorite listings.
  This component is likely used to display room-related data.

- **`ProfileEmptyView` Component:** It uses the `ProfileEmptyView` component to display a message and icon when no
  favorite listings are found.

- **`useDocumentTitle` Hook:** It uses the `useDocumentTitle` hook from the `usehooks-ts` library to dynamically set the
  document title.

### Props

The `ProfileListings` component does not accept any props directly. Instead, it relies on the data obtained from
the `useProfilePage` hook to render the list of favorite listings.

### Component Structure

The `ProfileListings` component is structured as follows:

1. **Document Title (`useDocumentTitle`):** It uses the `useDocumentTitle` hook to dynamically set the document title
   to "Profile Favorite Listings | S.GPT" to provide users with a clear page title.

2. **Loader (Loading Indicator):** If `listingsIsLoading` is `true`, it displays a loading indicator (`Loader`) to
   inform users that data is being loaded. This ensures a smooth user experience during data retrieval.

3. **Generated Items List (`generatedItemsList`):** This section displays the list of favorite listings.

    - **Favorite Listing Items:** Each favorite listing is rendered as a `RoomMainListItem` component. The component
      iterates through the `favoriteListings` array and displays each favorite listing as a room item with liking
      status.

4. **Profile Empty View (`ProfileEmptyView`):** If there are no favorite listings (`!favoriteListings?.length`) and the
   loading has completed (`!listingsIsLoading`), the `ProfileEmptyView` component is rendered with a message ("No
   favorite listings found") and an icon (`DomainDisabled`) indicating that no listings are available.

### Usage

To use the `ProfileListings` component, follow these steps:

1. Import the `ProfileListings` component into your application.

   ```javascript static
   import ProfileListings from './ProfileListings';
   ```

2. Include the `ProfileListings` component within your application's UI, typically within the user's profile page or any
   route where favorite listings should be displayed.

   ```javascript static
   <ProfileListings />
   ```

3. The `ProfileListings` component will render a list of favorite listings, each with liking status. If there are no
   favorite listings, it will display a message and icon indicating that no listings are available.
