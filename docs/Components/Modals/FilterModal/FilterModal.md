The `FilterModal` component is responsible for displaying a modal that allows users to apply filters to room listings.
It provides options for filtering by property type, beds and bathrooms count, price range, and square footage.

### Props

- `setFilterModalOpen`: Function to control the visibility of the filter modal.
- `isOpen`: A boolean indicating whether the filter modal is currently open.

### How to Use

```jsx static
import FilterModal from './FilterModal';

// Inside your component
<FilterModal
	setFilterModalOpen={setFilterModalOpen}
	isOpen={isFilterModalOpen}
/>;
```

### Component Structure

- `Modal`: The outermost wrapper for creating the filter modal.
  - `Box sx={filterModalSx.modal}`: Container for the modal content.
    - `Box sx={filterModalSx.modalHeader}`: Header section of the modal.
      - `Typography sx={filterModalSx.headerTitle}`: Title of the modal.
      - `IconButton`: Icon button to close the modal.
    - `form`: Form element to handle filter submission and reset.
      - `Box sx={filterModalSx.filterBlock}`: Container for each filter block.
        - Filter components for Beds & Bathrooms, Price range, Property type, and Square footage.
    - Popper components (error messages) for validation errors in each filter block.

### Hooks and Data Management

- `useAppProvider`: Custom hook to manage global state for the modal.
  - Manages filter options, regions, and whether the device is in mobile mode.

### Handlers and Actions

- `handleSubmitFilters`: Function to handle filter submission.
- `handleChangeNumericInput`: Utility function to handle numeric input changes.
- `setFieldValue`, `values`, `errors`, `resetForm`: Formik hooks for form handling.

### Static Variables

- `initialFormValues`: Initial values for the filter form.
- `defaultPopperOptions`: Default configuration for the Popper component.

### Example Usage

```jsx static
import { memo, useState } from 'react';
import FilterModal from './FilterModal';

const ParentComponent = () => {
	const [isFilterModalOpen, setFilterModalOpen] = useState(false);

	// ... other logic ...

	return (
		// ... other JSX ...

		// Rendering the FilterModal component
		<FilterModal
			setFilterModalOpen={setFilterModalOpen}
			isOpen={isFilterModalOpen}
		/>

		// ... other JSX ...
	);
};

export default memo(ParentComponent);
```

### Notes

- The `FilterModal` component integrates with other custom components and utility functions to provide a user-friendly
  filtering experience for room listings.
- It utilizes Material-UI components for styling, interaction, and layout.
- The component is structured in a modular way, with separate sections for each filter type and error messages
  associated with input validation.
