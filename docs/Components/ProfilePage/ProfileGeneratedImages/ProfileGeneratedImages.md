The `ProfileGeneratedImages` component is a React functional component designed to display a list of generated images
associated with a user's profile. It also provides a loading indicator during data retrieval and an empty state view
when no generated images are available. Users can interact with each generated image, and the component allows them to
toggle their liking status on each image.

### Dependencies

The `ProfileGeneratedImages` component relies on the following dependencies:

- **`useProfilePage` Hook:** It imports the `useProfilePage` hook from the `ProfilePageProvider` to access generated
  image data, loading status, and the ability to toggle the liking status of images.

- **Material-UI:** It utilizes Material-UI components such as `Box`, icons, and `Loader`.

- **`GeneratedImageItem` Component:** It uses the `GeneratedImageItem` component to display individual generated images.

- **`ProfileEmptyView` Component:** It uses the `ProfileEmptyView` component to display a message and icon when no
  generated images are found.

- **`useDocumentTitle` Hook:** It uses the `useDocumentTitle` hook from the `usehooks-ts` library to dynamically set the
  document title.

### Props

The `ProfileGeneratedImages` component does not accept any props directly. Instead, it relies on the data obtained from
the `useProfilePage` hook to render the list of generated images and manage their liking status.

### Component Structure

The `ProfileGeneratedImages` component is structured as follows:

1. **Document Title (`useDocumentTitle`):** It uses the `useDocumentTitle` hook to dynamically set the document title
   to "Profile Generated Images | S.GPT" to provide users with a clear page title.

2. **Loader (Loading Indicator):** If `generatedImagesIsLoading` is `true`, it displays a loading indicator (`Loader`)
   to inform users that data is being loaded. This ensures a smooth user experience during data retrieval.

3. **Generated Items List (`generatedItemsList`):** This section displays the list of generated images.

    - **Generated Image Items:** Each generated image is rendered as a `GeneratedImageItem` component. The component
      iterates through the `generatedImages` array and displays each generated image along with liking and viewing
      options.

4. **Profile Empty View (`ProfileEmptyView`):** If there are no generated images (`!generatedImages?.length`),
   the `ProfileEmptyView` component is rendered with a message ("No generated images found") and an
   icon (`ImageNotSupported`) indicating that no images are available.

### Usage

To use the `ProfileGeneratedImages` component, follow these steps:

1. Import the `ProfileGeneratedImages` component into your application.

   ```javascript static
   import ProfileGeneratedImages from './ProfileGeneratedImages';
   ```

2. Include the `ProfileGeneratedImages` component within your application's UI, typically within the user's profile page
   or any route where generated images should be displayed.

   ```javascript static
   <ProfileGeneratedImages />
   ```

3. The `ProfileGeneratedImages` component will render a list of generated images, each with options to toggle liking
   status and view the image. If there are no generated images, it will display a message and icon indicating that no
   images are available.