The `AddingListingsModal` component is responsible for displaying a modal that allows users to add listings to content
creation. It includes filters, a list of available rooms, and navigation controls for infinite scrolling.

### Props

The `AddingListingsModal` component does not accept any props.

### How to Use

```jsx static
import AddingListingsModal from './AddingListingsModal';

// Inside your component
<AddingListingsModal />;
```

### Component Structure

- `SwipeableDrawer`: The outermost wrapper that creates a swipeable drawer modal.
  - `Box sx={sx.container}`: Container for the modal content.
    - `Box sx={sx.modalHeader}`: Header section of the modal.
      - `Typography sx={sx.headerTitle}`: Title of the modal.
      - `Close` icon: Icon to close the modal.
    - `Box sx={sx.modalContent}`: Content section of the modal.
      - Filters section (if filters are applied):
        - `Box sx={sx.chipsContainer}`: Container for filter chips.
          - `Typography`: Display "Filters:" label.
          - Filter chips using `Chip` component.
      - Available rooms section:
        - InfiniteScroll component for lazy loading and infinite scrolling.
          - `Box sx={sx.roomsList}`: Container for displaying room items.
          - Loading indicator (Loader) during data fetching.
          - Scroll top button (if all items are loaded).
    - `Box sx={sx.modalFooter}`: Footer section of the modal.
      - Close button to dismiss the modal.

### Hooks and Data Fetching

- `useAppProvider`: Custom hook to manage global state for the modal.

  - Manages current page, rooms, filter options, regions, and modal open state.

- `useHandleListings`: Custom hook to fetch room listings and handle pagination.
  - Accepts `filterOptions`, `currentPage`, `regions`, and `rooms` as dependencies.
  - Returns `data` (room listings) and `isLoading` status.

### Handlers and Actions

- `scrollToTop`: Function to scroll to the top of the room listings.
- `handleCloseAddingModal`: Function to close the modal.
- `handleAddListing`: Function to handle adding a listing and navigating to the creation page.
- `handleDeleteFilterField`: Function to remove a filter field (region or filter option).

### Static Variables

- `UID`: Current user's UID obtained from Firebase authentication.
- `totalListings`: Total number of room listings from the fetched data.
- `filterChipsList`: A list of filter chips generated from filter options and regions.

### Example Usage

```jsx static
import { memo } from 'react';
import AddingListingsModal from './AddingListingsModal';

const ParentComponent = () => {
	// ... other logic ...

	return (
		// ... other JSX ...

		// Rendering the AddingListingsModal component
		<AddingListingsModal />

		// ... other JSX ...
	);
};

export default memo(ParentComponent);
```

### Notes

- The `AddingListingsModal` component integrates with other custom hooks and services to fetch and display room
  listings, handle filters, and manage the state of the modal.
- It utilizes various Material-UI components for styling, interaction, and layout.
- The component is structured in a modular way, separating the modal content into different sections for filters, rooms,
  and footer.
