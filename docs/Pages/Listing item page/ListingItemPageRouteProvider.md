The `ListingItemPageRouteProvider` component is a middle component designed to facilitate the flow of data and actions between your router outlet context and the `ListingItemPage` component in a React application. It acts as a bridge to provide necessary data and functionality to the `ListingItemPage` component.

## Props

The `ListingItemPageRouteProvider` component does not have any specific props of its own. Instead, it relies on the following props from the `useListingsItemPage` hook:

- `activeListing` (Type: Any): The currently active listing that is being displayed.
- `isMobile` (Type: Boolean): A boolean value indicating whether the application is being viewed on a mobile device.
- `allListings` (Type: Array): An array containing all available listings.
- `listingsIsLoading` (Type: Boolean): A flag to indicate whether the listings data is still loading.
- `handleToggleLikeListingItem` (Type: Function): A function to toggle the "like" action on a listing item.

## Usage

To use the `ListingItemPageRouteProvider` component, follow these steps:

1. Import the `ListingItemPageRouteProvider` component in your application.

   ```javascript static
   import ListingItemPageRouteProvider from './ListingItemPageRouteProvider';
   ```

2. Incorporate the `ListingItemPageRouteProvider` component within your application's routing logic.

   ```javascript static
   // Inside your route configuration or component where routing is handled
   <ListingItemPageRouteProvider />
   ```

3. Ensure that the `useListingsItemPage` hook is correctly set up in your application. This hook provides the necessary data and functions to the `ListingItemPageRouteProvider` component.

4. The `ListingItemPageRouteProvider` component will pass the required data and actions to the `ListingItemPage` component, which can then use them to display and interact with listing details.

## Example

Here is an example of how the `ListingItemPageRouteProvider` component might be used within a routing setup:

```javascript static
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListingItemPageRouteProvider from './ListingItemPageRouteProvider';
import ListingItemPage from './ListingItemPage';

function App() {
  return (
    <Router>
      {/* Other routes */}
      <Route path="/listing/:id">
        <ListingItemPageRouteProvider />
        <ListingItemPage />
      </Route>
    </Router>
  );
}

export default App;
```

In this example, the `ListingItemPageRouteProvider` component is used to provide data and actions to the `ListingItemPage` component when the user navigates to a specific listing.
