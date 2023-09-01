The `BasicFilterItem` component represents an individual basic image filter. It displays an image associated with the
filter and its title, allowing users to click on it to apply the filter.

### Props

- **filter (`object`):** An object representing the filter.

  - `type`: The type of the filter.
  - `prompt`: The positive prompt associated with the filter.
  - `image`: The image URL representing the filter.
  - `title`: The title of the filter.

- **handleImageClick (`function`):** A function to handle the click event when the user clicks on the filter. It applies
  the selected filter by generating an image using the associated positive prompt.

### Usage Example

```jsx static
import BasicFilterItem from './BasicFilterItem'; // Import the component
import { filterBuildingsTypes } from './filterBuildingTypes';

const BasicFiltersSection = () => {
	// ... other code ...

	return (
		<div>
			{/* ... other components ... */}
			{filterBuildingsTypes.map((filter) => (
				<BasicFilterItem
					key={filter.type}
					filter={filter}
					handleImageClick={handleImageClick}
				/>
			))}
		</div>
	);
};
```

### Component Structure

The `BasicFilterItem` component is structured as follows:

- **Filter Item (`<Box>`):** Contains the image and title of the filter.
  - **Image (`<ProgressiveImage>`):** Displays the filter image and handles the click event.
  - **Title (`<Typography>`):** Displays the title of the filter.

### Functionality

- The component displays the image associated with the filter and its title.
- When the user clicks on the filter image, the `handleImageClick` function is triggered, which generates an image using
  the positive prompt associated with the filter.

### Memoization

The `BasicFilterItem` component is not explicitly memoized. Consider using `memo` or other optimizations based on your
specific use case and performance needs.
