The `ListingItem` component is a reusable UI component used to display a single listing item with its details. It is
often used in a list of properties or listings.

#### Props

The `ListingItem` component accepts the following props:

- `listing`: An object containing the listing details.
- `isChosen`: A boolean indicating whether the listing is currently chosen (default is `false`).
- `setChosenItem`: A function to set the chosen item's identifier.

#### Example Usage

```jsx static
import ListingItem from './ListingItem'; // Import the component

const ListingsPage = () => {
	const listing = {
		Id: 123,
		City: 'Example City',
		ListPrice: 500000,
		Media: ['url-to-image'],
		StateOrProvince: 'Example State',
		UnparsedAddress: '123 Example St',
	};

	const setChosenItem = (itemId) => {
		// ... logic to set the chosen item ...
	};

	return (
		<div style={{ width: '350px' }}>
			<ListingItem
				listing={listing}
				isChosen={false}
				setChosenItem={setChosenItem}
			/>
		</div>
	);
};
```

#### Component Structure

The `ListingItem` component is structured as follows:

1. **Container:** A `Box` component that serves as the main container for the listing item. It applies styling for
   layout, background, border, and cursor.

2. **Image Container:** A `Box` component that contains the listing image. It takes the `Media[0]` URL and uses
   the `ProgressiveImage` component to display a progressive image with styling for width, height, and border radius.

3. **Details Stack:** A `Stack` component that displays the listing details in a vertical stack. It contains
   two `Typography` components for displaying the address and list price.

#### Hooks

- `useNavigate`: A hook from `react-router-dom` used to navigate to another page when the listing item is clicked.

#### Statics

- The `listing` object is destructured to retrieve properties such
  as `Id`, `City`, `ListPrice`, `Media`, `StateOrProvince`, and `UnparsedAddress`.

#### Handlers

- `handleChooseItem`: A function that navigates to the create content page for the chosen item and updates the chosen
  item identifier using the `setChosenItem` function.

#### Styling

The component utilizes the Material-UI library's styling system. It applies styling for various components such as
the `Box`, `Stack`, and `Typography` using the provided `sx` styles.

#### Memoization

The component is memoized using the `memo` function from React to optimize re-renders when the props do not change.

#### Overall Functionality

The `ListingItem` component provides an organized and visually appealing way to display listing details, including the
property address and list price. It also allows users to choose a listing item and navigate to a related content
creation page. The component is suitable for use in property listing pages, real estate applications, and other
scenarios where individual listing details need to be displayed.
