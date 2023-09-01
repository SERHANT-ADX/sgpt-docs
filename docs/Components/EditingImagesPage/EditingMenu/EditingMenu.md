The `EditingMenu` component is responsible for rendering the appropriate filters section based on the current editing
mode and device type.

### Hooks Used

- **useAppProvider (`function`):** A hook from the `LayoutProvider` that provides information about the current device
  type (`isMobile`).

- **useEditingPhotosPage (`function`):** A hook from the `EditingPhotosPageProvider` that provides information about the
  currently selected item for editing (`itemForEditing`) and the editing mode (`isBasicMode`).

### Usage Example

```jsx static
import EditingMenu from './EditingMenu'; // Import the component

const EditingPhotosPage = () => {
	// ... other code ...

	return (
		<div>
			{/* ... other components ... */}
			<EditingMenu />
		</div>
	);
};
```

### Component Structure

The `EditingMenu` component is structured as follows:

- **Conditional Rendering (`{}`):** Conditionally renders either the `BasicFilters` component or the `AdvancedFilters`
  component based on the current editing mode.
  - If `isBasicMode` is true, the `BasicFilters` component is rendered.
  - If `isBasicMode` is false, the `AdvancedFilters` component is rendered.

### Functionality

- The component determines whether to display the filters based on the editing mode (`isBasicMode`) and the presence of
  an item for editing (`itemForEditing`).
- If the device is mobile and there is no item for editing (`itemForEditing`), the component returns `null`, effectively
  not rendering anything.
- Depending on the editing mode, either the `BasicFilters` component or the `AdvancedFilters` component is rendered.

### Memoization

The `EditingMenu` component doesn't involve complex state or props manipulation, so memoization might not be necessary.
However, you can consider using `memo` or other optimizations based on your specific use case and performance needs.
