The `ProfilePage` component is a React functional component designed to display a user's profile page. It serves as a
container for various profile-related content, including user information, active views (such as chats, saved filters,
generated images, and listings), and a header displaying the user's profile information.

### Props

The `ProfilePage` component does not receive any props directly. Instead, it relies on hooks to fetch and manage data
related to the user's profile and active listings. Here are some of the key hooks and their purposes:

- **useProfilePage:** This hook is responsible for fetching and managing the user's profile data, including the user
  object, active listing, and various profile-related functions and states.

### Hooks

#### `useProfilePage`

This hook, imported from `'./ProfilePageProvider'`, provides the following data and functions:

- **user:** An object representing the user's profile information.
- **activeListing:** An object representing the currently active listing.
- **setActiveListing:** A function to set the active listing.
- **isMobile:** A boolean indicating whether the page is being viewed on a mobile device.
- **handleToggleLikeListingItem:** A function for handling the toggling of "like" on a listing item.

### Dependencies

The `ProfilePage` component relies on several external dependencies:

- **@mui/material:** This library provides the `Box` component and styling capabilities for building the user interface.

- **react:** This library is the core of the React application, enabling the creation of functional components, hooks,
  and routing.

- **react-router-dom:** Used for routing within the application. It provides the `useLocation` hook for accessing the
  current URL and the `Outlet` component for rendering nested routes.

### Component Structure

The `ProfilePage` component is structured as follows:

- **ProfilePageHeader:** This is a custom component imported
  from `'../../components/ProfilePage/ProfilePageHeader/ProfilePageHeader'`. It displays the user's profile information
  at the top of the profile page.

- **Active View Container:** This container holds the content related to the currently active view. The content changes
  based on the selected view, such as "Chats," "Saved Filters," "Generated Images," "Listings," or a specific listing.

- **Label:** This section displays a label indicating the current active view or the details of the active listing. The
  label changes dynamically based on the user's navigation within the profile page.

- **Outlet:** The `Outlet` component from `react-router-dom` is used to render nested routes within this component. It
  receives context related to the active listing, the ability to set the active listing, toggling "like" on listing
  items, and the mobile device status.

### Usage

To use the `ProfilePage` component, follow these steps:

1. Import the `ProfilePage` component into your application.

   ```jsx static
   import ProfilePage from './ProfilePage';
   ```

2. Place the `ProfilePage` component within your application's routing system to ensure that it is displayed when the
   user navigates to their profile page.

   ```jsx static
   // Example of routing configuration using react-router-dom
   <Route path="/profile" component={ProfilePage} />
   ```

3. Ensure that the `ProfilePageProvider` is correctly set up to provide the necessary data and functions to
   the `ProfilePage` component.

4. When the user accesses their profile page, the `ProfilePage` component will render with the appropriate user
   information and active view content based on the URL and user interactions.

This component provides a flexible and dynamic way to display a user's profile information and related content, adapting
to different active views and user interactions within the profile page.