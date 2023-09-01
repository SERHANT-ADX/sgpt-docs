The `ProfileSavedFilters` component is a React functional component designed to display a list of saved filters in a
user's profile. It allows users to view, apply, and like saved filters, and also provides detailed information about
each saved filter.

### Dependencies

The `ProfileSavedFilters` component relies on the following dependencies:

- **Material-UI:** It utilizes Material-UI components such as `Box`, `IconButton`, and `Typography`.

- **Material-UI Icons:** It uses Material-UI icons like `Favorite`, `FavoriteBorder`, and `FilterAltOff`.

- **ProgressiveImage:** It uses the `ProgressiveImage` component for displaying filter thumbnails.

- **React Router:** It may not directly depend on React Router, but it assumes that routing and navigation to filter
  details pages are handled by the application.

- **usehooks-ts:** It uses the `useDocumentTitle` hook from the `usehooks-ts` library to dynamically set the document
  title.

### Props

The `ProfileSavedFilters` component does not accept any props.

### Component Structure

The `ProfileSavedFilters` component is structured as follows:

1. **Loader for Loading State (`Loader`):** When `presetsIsLoading` is `true`, it displays a loader to indicate that the
   saved filters are being loaded.

2. **List of Saved Filters (`presetsList`):** This section displays the list of saved filters once they are loaded.

    - **Saved Filter Item (`presetItem`):** Each saved filter is rendered as a box containing filter-related
      information.

        - **Filter Image (`presetImage`):** This box displays the filter thumbnail using the `ProgressiveImage`
          component. It also includes action buttons for applying the filter and liking the filter.

            - **Apply Filter Button (`presetImageButton`):** An `IconButton` with an icon that represents applying the
              filter.

            - **Like Filter Button (`presetImageButton`):** An `IconButton` with a heart icon that represents liking the
              filter. The icon's color changes depending on whether the filter is liked or not.

        - **Filter Information (`presetInfo`):** This box displays detailed information about the filter, including
          filter name, engine, engine version, aspect ratio, chaos, weirdness, quality, and seed.

3. **Empty State (`ProfileEmptyView`):** If there are no saved filters (`presets.length === 0`), it displays an empty
   state view with a message and an icon.

### Functionality

- **Apply Filter (`handleApplyFilter` Function):** When the "Apply Filter" button is clicked, this function is called to
  apply the selected filter. The `preset` object is passed to it, and it typically triggers an action in the application
  to apply the filter.

- **Like Filter (`handleToggleLikePreset` Function):** When the "Like Filter" button is clicked, this function is called
  to toggle the liked state of the selected filter. It receives the current liked state (`preset.isLiked`) and
  the `preset.id` as arguments. The function typically triggers an action in the application to update the liked state
  of the filter.

### Usage

To use the `ProfileSavedFilters` component, follow these steps:

1. Import the `ProfileSavedFilters` component into your application.

   ```javascript static
   import ProfileSavedFilters from './ProfileSavedFilters';
   ```

2. Include the `ProfileSavedFilters` component within your application's UI, typically in the user's profile page.

   ```javascript static
   <ProfileSavedFilters />
   ```
