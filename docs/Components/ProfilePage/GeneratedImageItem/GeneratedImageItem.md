The `GeneratedImageItem` component is a React functional component designed to display detailed information about a
generated image. It is typically used to showcase a generated image along with its associated details, such as prompts,
technical specifications, and user interactions like liking and viewing in a lightbox.

### Props

The `GeneratedImageItem` component accepts the following props:

- **generatedItem:** An object representing the generated image and its associated details.

- **handleToggleLikeGeneratedImage:** A function for toggling the "like" status of the generated image. When called,
  this function updates the like status of the image, allowing the user to add or remove it from their favorites.

### Component Structure

The `GeneratedImageItem` component has the following structure:

1. **Lightbox Modal:** A modal component that displays an image viewer when the user clicks on a generated image. It
   uses the `Lightbox` component from the `react-awesome-lightbox` library.

2. **Container:** The main container for the generated image and its details.

    - **Images (`images`):** This section displays the generated images in a carousel.

        - **Carousel Wrapper (`carouselWrapper`):** A container for the image carousel.

        - **Carousel (`Carousel`):** A carousel component from the `react-material-ui-carousel` library that displays
          the generated images with options for navigation, indicators, and full-screen viewing.

    - **Actions (`actions`):** This section provides interaction buttons for viewing the image in a lightbox and
      toggling the like status.

3. **Info:** This section displays detailed information about the generated image, including prompts and technical
   specifications.

    - **Detailed Info Item (`detailedInfoItem`):** A container for each specific detail, such as prompts and technical
      specifications.

    - **Detailed Info (`detailedInfo`):** A container for displaying technical specifications of the generated image,
      including engine, version, aspect ratio, chaos, weirdness, and quality.

### Usage

To use the `GeneratedImageItem` component, follow these steps:

1. Import the `GeneratedImageItem` component into your application.

   ```jsx static
   import GeneratedImageItem from './GeneratedImageItem';
   ```

2. Pass the necessary `generatedItem` object and the `handleToggleLikeGeneratedImage` function as props to
   the `GeneratedImageItem` component. This will render the generated image and its associated details.

   ```jsx static
   <GeneratedImageItem
     generatedItem={/* Pass the generated item object here */}
     handleToggleLikeGeneratedImage={/* Pass the function to toggle the like status */}
   />
   ```

3. The `GeneratedImageItem` component will render the generated image, its prompts, and technical details in an
   interactive and visually appealing format. Users can view the image in a lightbox, like or unlike it, and access
   technical specifications.
