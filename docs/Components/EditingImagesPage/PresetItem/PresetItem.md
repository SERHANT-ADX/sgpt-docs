The `PresetItem` component displays a single preset item with an optional edit icon, thumbnail image, and preset name.

### Props

- **preset (`object`):** The preset object containing information about the preset item, including `id`, `thumbnail`,
  and `name`.
- **handleClickEditPreset (`function`):** A callback function triggered when the edit icon is clicked. It typically
  opens an edit modal or triggers an editing action for the preset.
- **handleChoosePreset (`function`):** A callback function triggered when the preset item is clicked. It typically sets
  the chosen preset as the active preset for further use.

### Usage Example

```jsx static
import PresetItem from './PresetItem'; // Import the component

const MyComponent = () => {
	const preset = {
		id: 1,
		name: 'Cool Preset',
		thumbnail: 'path/to/thumbnail.png',
		// ... other preset properties ...
	};

	const handleClickEditPreset = (preset) => {
		// Handle edit preset action here
	};

	const handleChoosePreset = (preset) => {
		// Handle choose preset action here
	};

	return (
		<div>
			{/* ... other components ... */}
			<PresetItem
				preset={preset}
				handleClickEditPreset={handleClickEditPreset}
				handleChoosePreset={handleChoosePreset}
			/>
			{/* ... other components ... */}
		</div>
	);
};
```

### Component Structure

The `PresetItem` component is structured as follows:

- A `Box` component that contains the entire preset item.
- Inside the `Box` component:
  - An `IconButton` component that displays an edit icon. When clicked, it triggers the `handleClickEditPreset`
    function.
  - A `Box` component that wraps the thumbnail image. When clicked, it triggers the `handleChoosePreset` function.
    - Inside this `Box` component, a `ProgressiveImage` component displays the preset's thumbnail image.
  - A `Typography` component that displays the preset's name.

### Styling and Customization

- The styling of the preset item is customized using the `sx` prop from Material-UI.
- The edit icon, thumbnail image, and preset name are all displayed within the preset item.

### Functionality

- The `PresetItem` component displays preset information, including an optional edit icon, thumbnail image, and preset
  name.
- Clicking the edit icon triggers the `handleClickEditPreset` callback function.
- Clicking the thumbnail image triggers the `handleChoosePreset` callback function.

### Considerations

- This component relies on Material-UI components and styles for its appearance and functionality.
- Ensure that the required callback functions are properly defined and handle the intended actions.
  's structure and requirements."
