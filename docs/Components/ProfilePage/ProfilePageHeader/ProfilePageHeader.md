The `ProfilePageHeader` component is a React functional component designed to display a header at the top of a user's
profile page. It includes the user's profile image, name, email, and navigation links to different sections of the
profile page.

### Dependencies

The `ProfilePageHeader` component relies on the following dependencies:

- **Material-UI:** It utilizes Material-UI components such as `Avatar`, `Box`, and `Typography`.

- **React Router:** It uses React Router's `useLocation` and `useNavigate` hooks to handle routing within the profile
  page.

### Props

The `ProfilePageHeader` component accepts the following prop:

- **`user` (Object):** An object containing user information, including `photoURL`, `displayName`, and `email`. This
  prop is used to display the user's profile image, name, and email.

### Component Structure

The `ProfilePageHeader` component is structured as follows:

1. **Profile Header (`header`):** This section contains the user's profile image and information.

    - **Profile Image (`profileImage`):** It displays the user's profile image using the `Avatar` component. The image
      source is obtained from the `user.photoURL` prop.

    - **Profile Info (`profileInfo`):** This box contains the user's display name and email.

        - **Display Name (`profileUserName`):** It displays the user's display name (full name) as a
          heading (`Typography` with variant "h3").

        - **Email Address (`profileUserEmail`):** It displays the user's email address as a paragraph (`Typography` with
          variant "p").

2. **Navigation (`navigation`):** This section contains navigation links to different sections of the profile page.

    - **Navigation Items (`navigationItem`):** Each navigation item represents a section of the profile page,
      including "Listings," "Generated Images," "Chats," and "Saved Filters."

        - **Active Navigation Item (`navigationItemActive`):** The active navigation item is visually differentiated
          using the `navigationItemActive` styles when the user is in the corresponding section.

    - **Navigation Item Labels (`Typography`):** Each navigation item label is displayed as a paragraph (`Typography`
      with variant "p"). Clicking on a navigation item triggers a change in the profile page view using
      the `handleChangeView` function.

### Functionality

- **`handleChangeView` Function:** This function is called when a navigation item is clicked. It uses the `navigate`
  function from React Router to change the route to the selected profile section.

### Usage

To use the `ProfilePageHeader` component, follow these steps:

1. Import the `ProfilePageHeader` component into your application.

   ```javascript static
   import ProfilePageHeader from './ProfilePageHeader';
   ```

2. Include the `ProfilePageHeader` component within your application's UI, typically at the top of the user's profile
   page.

   ```javascript static
   <ProfilePageHeader user={userData} />
   ```

3. Pass the `user` prop to the component with user information, including `photoURL`, `displayName`, and `email`.
