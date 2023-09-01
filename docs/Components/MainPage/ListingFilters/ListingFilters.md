The `ListingFilters` component provides a user interface for filtering and controlling listing results. It includes
options to select regions and open a filter modal for more advanced filtering options.

### Props

- `isFetching` (boolean, optional): Indicates whether data is currently being fetched. When set to `true`, some elements
  may be disabled or styled differently to prevent user interactions.
- `regions` (array of strings, required): An array containing the selected regions for filtering listings.
- `setRegions` (function, required): A function to update the selected regions based on user interaction.
- `isFilterModalOpen` (boolean, required): Indicates whether the filter modal is currently open.
- `setIsFilterModalOpen` (function, required): A function to control the state of the filter modal (open or close).
- `isUsedInMainPage` (boolean, optional): Indicates whether the component is used in the main page layout. When set
  to `true`, the component's styles may be adjusted accordingly.

### Component Structure

The `ListingFilters` component is structured as follows:

1. **FilterModal**: A modal that provides more advanced filtering options. It is triggered by clicking the "Filter"
   button and can be opened and closed using the `isFilterModalOpen` and `setIsFilterModalOpen` props.

2. **Controllers**: This section contains the filter controls, including the region selection dropdown and the "Filter"
   button.

   - **Region Selection Dropdown**: A `TextField` component with a dropdown menu that allows users to select multiple
     regions for filtering listings. The selected regions are controlled by the `regions` and `setRegions` props.

   - **"Filter" Button**: An `Button` component that triggers the opening of the filter modal. It displays the "Filter"
     text and an icon indicating filtering.

### Example Usage

```jsx static
import ListingFilters from './ListingFilters';

// ...

const MyComponent = () => {
	const [regions, setRegions] = useState([]);
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

	return (
		<div>
			<ListingFilters
				regions={regions}
				setRegions={setRegions}
				isFilterModalOpen={isFilterModalOpen}
				setIsFilterModalOpen={setIsFilterModalOpen}
			/>
			{/* Other content */}
		</div>
	);
};

export default MyComponent;
```

### Overview

- This component supports controlling and updating the selected regions for filtering listings.
- It also provides a convenient way to open the filter modal for more advanced filtering options.
- The UI elements within the component are conditionally styled based on the provided props, such as `isFetching`
  and `isUsedInMainPage`.
- The `regions` and `setRegions` props allow users to select multiple regions from a dropdown menu.

Use the `ListingFilters` component to enhance user experience by providing a clear and user-friendly way to filter and
control listing results.
