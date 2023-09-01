The `RoomMainListItem` component represents a single listing item in a list. It displays essential information about the
room and provides options to navigate, create content, and more.

### Props

- `room` (object, required): An object containing details about the room, such
  as `Id`, `City`, `ListPrice`, `Media`, `StateOrProvince`, and `UnparsedAddress`.
- `allowShrinking` (boolean, optional): Indicates whether the component should use a smaller layout, suitable for modals
  or condensed views.
- `handleAddListing` (function, optional): A function to handle adding a listing. If provided, it overrides the default
  behavior for creating content.

### Component Structure

The `RoomMainListItem` component is structured as follows:

1. **Carousel Wrapper**: A container for the image carousel that displays the listing photos. The carousel allows
   navigation between images and supports responsive layout.

2. **Carousel**: The image carousel component from `react-material-ui-carousel`. It displays listing photos using
   progressive loading and provides navigation controls.

3. **Room Information**: A container displaying room information, including the address and price.

   - **Room Name**: A `Typography` component that displays the room's address, city, and state/province.

   - **Room Price**: A `Typography` component that displays the room's price in a formatted manner.

4. **"Create Content" Button**: A button that triggers the action to create content for the selected room. It's
   customizable based on the `handleAddListing` prop. If the prop is provided, the button uses the `handleAddListing`
   function; otherwise, it uses the default `handleCreatePostClick` function.

### Example Usage

```jsx static
import RoomMainListItem from './RoomMainListItem';

// ...

const MyComponent = () => {
	const room = {
		Id: '123',
		City: 'New York',
		ListPrice: 1000000,
		Media: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
		StateOrProvince: 'NY',
		UnparsedAddress: '123 Main St',
	};

	const handleAddListing = (selectedRoom) => {
		// Custom logic for adding a listing
		console.log('Add listing for room:', selectedRoom);
	};

	return (
		<div>
			<RoomMainListItem
				room={room}
				handleAddListing={handleAddListing}
			/>
			{/* Other content */}
		</div>
	);
};

export default MyComponent;
```

### Overview

- The component supports both standard and condensed layouts, based on the `allowShrinking` prop.
- It provides a carousel for displaying listing images with navigation controls.
- The room's address, city, and state/province are displayed using the `Typography` component.
- The "Create Content" button triggers the creation of content for the selected room. It can be customized using
  the `handleAddListing` prop.

Use the `RoomMainListItem` component to present listing details effectively and provide options for users to navigate
and create content related to the selected room.
