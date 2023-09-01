The `ProfileListingItem` component is a React functional component designed to display detailed information about a real
estate listing. It provides an interactive and visually appealing presentation of key details related to the listing,
such as property images, features, price, and description.

### Props

The `ProfileListingItem` component accepts the following props:

- **listing:** An object representing the details of the real estate listing to be displayed.
- **isLiked:** A boolean indicating whether the user has marked this listing as a favorite.
- **handleToggleLikeListingItem:** A function for toggling the "like" status of the listing.

### Component Structure

The `ProfileListingItem` component is structured as follows:

1. **Lightbox Modal:** A modal component that displays an image viewer when the user clicks on a listing image. It uses
   the `Lightbox` component from the `react-awesome-lightbox` library.

2. **Container:** The main container for the listing details. It's divided into two sections: `photosAndDetails`
   and `mapAndDescription`.

    - **Photos and Details Section (`photosAndDetails`):** This section contains information related to the listing's
      images, basic details, listing details, and features.

        - **Images Wrapper (`imagesWrapper`):** A container for the listing images.

            - **Main Image Wrapper (`mainImageWrapper`):** A container for the main listing image with options to view
              in a lightbox and like the listing.

            - **Images Gallery (`imagesGallery`):** A gallery of additional listing images.

        - **Details Block (`detailsBlock`):** A block containing various details about the listing, including the number
          of rooms, bedrooms, bathrooms, and living rooms.

        - **Listing Information (`listingInfoItem`):** A block of information about the listing, including the listing
          price, property subtype, living area, and listing ID.

        - **Features (`featuresList`):** A list of features associated with the listing.

3. **Map and Description Section (`mapAndDescription`):** This section displays a map showing the location of the
   listing and provides a description of the property.

    - **Map Wrapper (`mapWrapper`):** A container for the interactive map that displays the listing's location.

    - **Description Wrapper (`descriptionWrapper`):** A container for the property description.

### Usage

To use the `ProfileListingItem` component, follow these steps:

1. Import the `ProfileListingItem` component into your application.

   ```jsx static
   import ProfileListingItem from './ProfileListingItem';
   ```

2. Pass the necessary `listing` object and optional props (`isLiked` and `handleToggleLikeListingItem`) to
   the `ProfileListingItem` component. This will render the listing details within your application.

   ```jsx static
   <ProfileListingItem
     listing={/* Pass the listing object here */}
     isLiked={/* Pass whether the listing is liked by the user (optional) */}
     handleToggleLikeListingItem={/* Pass the function to toggle the like status (optional) */}
   />
   ```

3. The component will render the listing details, including images, key information, a map, and a property description,
   providing a comprehensive view of the real estate listing.

The `ProfileListingItem` component enhances the user experience by allowing them to explore the listing's images, toggle
its like status, and access detailed property information, all within a visually appealing and user-friendly interface.