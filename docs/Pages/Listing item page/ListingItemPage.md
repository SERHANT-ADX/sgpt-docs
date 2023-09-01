The `ListingItemPage` component is a React functional component designed to display detailed information about a real
estate listing. It is typically used to show the details of a specific listing when a user selects a listing from a list
of available listings. This component provides a title, such as the listing address, and displays additional details
about the listing.

### Dependencies

The `ListingItemPage` component depends on the following:

- **Material-UI:** It uses Material-UI components like `Box` and `Typography` for structuring and styling.

- **ProfileListingItem:** This is a custom component used to display detailed information about a real estate listing.
  The `ListingItemPage` component passes the `activeListing`, `handleToggleLikeListingItem`, `isMobile`,
  and `listingsIsLoading` props to `ProfileListingItem`.

- **Loader:** It uses the `Loader` component to display a loading indicator when the `listingsIsLoading` prop is `true`.

### Props

The `ListingItemPage` component receives the following props:

- **`activeListing` (Object):** The detailed information about the selected real estate listing. It includes data such
  as the address, property details, and any other relevant information.

- **`handleToggleLikeListingItem` (Function):** A function used to toggle the like status of the listing. When the user
  interacts with the "Like" button, this function is called to update the like status.

- **`isMobile` (Boolean):** A flag that indicates whether the application is being viewed on a mobile device. This flag
  is used to adjust the component's behavior and styling for mobile responsiveness.

- **`listingsIsLoading` (Boolean):** A flag that indicates whether the listing data is currently being loaded.
  When `true`, a loading indicator is displayed in place of the listing information.

### Component Structure

The `ListingItemPage` component is structured as follows:

1. **Container (`container`):** This `Box` component acts as the outer container for the entire listing item page.

2. **Title (`title`):** A `Typography` component displaying the title of the page, typically the address of the real
   estate listing.

3. **Content:** The content of the page depends on the `listingsIsLoading` prop:

    - **Loading Indicator (`Loader`):** When `listingsIsLoading` is `true`, a loading indicator is displayed, indicating
      that the listing data is being fetched.

    - **Listing Details (`ProfileListingItem`):** When `listingsIsLoading` is `false`, the `ProfileListingItem`
      component is rendered. It displays detailed information about the real estate listing, including property details
      and options to like the listing.

### Functionality

- **Like Listing (`handleToggleLikeListingItem` Function):** This function is called when the user interacts with the "
  Like" button in the `ProfileListingItem` component. It toggles the liked status of the listing, allowing users to mark
  listings as favorites.

### Usage

To use the `ListingItemPage` component, follow these steps:

1. Import the `ListingItemPage` component into your application.

   ```javascript static
   import ListingItemPage from './ListingItemPage';
   ```

2. Include the `ListingItemPage` component within your application's routing system or wherever you want to display the
   detailed information of a real estate listing.

   ```javascript static
   <ListingItemPage
     activeListing={/* Provide the listing data here */}
     handleToggleLikeListingItem={/* Provide the function to toggle liked status */}
     isMobile={/* Provide a flag for mobile responsiveness */}
     listingsIsLoading={/* Provide a flag to indicate loading state */}
   />
   ```
