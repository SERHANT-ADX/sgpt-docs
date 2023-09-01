The `BasicFilters` component displays basic image filters and saved presets for editing photos. It allows users to
select a filter or choose a saved preset to apply to an image.

### Hooks

#### useEditingPhotosPage

- `isGeneratingImage`: A boolean indicating whether an image is currently being generated.
- `handleGenerateImage`: A function to generate an image based on the selected filter or preset.
- `presets`: An array of saved presets.
- `presetsIsLoading`: A boolean indicating whether presets are currently being loaded.
- `handleChoosePreset`: A function to choose a preset for editing.
- `handleClickEditPreset`: A function to edit a preset.

#### useAppProvider

- `isMobile`: A boolean indicating whether the current device is a mobile device.

### Handlers

- **handleImageClick:** A function that handles the click on an image filter. It generates an image using the selected
  filter and triggers a toast error if image generation is already in progress.

### Functionality

1. **Basic Filters:**

   - The component displays basic image filters under the "Basic filters" section.
   - Filters are represented by `BasicFilterItem` components.
   - If the device is mobile, filters are displayed in a slider format, otherwise as a list.

2. **Saved Presets:**
   - The component displays saved presets under the "Saved presets" section.
   - Presets are represented by `PresetItem` components.
   - If the device is mobile, presets are displayed in a slider format, otherwise as a list.
   - If presets are loading, placeholder `Skeleton` components are displayed until loading completes.

### Usage Example

```jsx static
import BasicFilters from './BasicFilters'; // Import the component

const EditingPhotosPage = () => {
	// ... other code ...

	return (
		<div>
			{/* ... other components ... */}
			<BasicFilters />
		</div>
	);
};
```

### Component Structure

The `BasicFilters` component is structured as follows:

- **Filters Section (`<Box>`):** Contains the basic image filters.
- **Saved Presets Section (`<Box>`):** Contains the saved presets, including placeholders during loading.

### Memoization

The `BasicFilters` component is not explicitly memoized. Consider using `memo` or other optimizations based on your
specific use case and performance needs.
