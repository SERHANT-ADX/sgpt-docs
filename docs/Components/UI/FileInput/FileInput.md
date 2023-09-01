The `FileInput` component is designed to provide a user-friendly interface for uploading files, specifically images. It
supports both manual selection and drag-and-drop functionality.

### Props

- `image` (object, optional): The currently selected image file.
- `setImage` (function, required): A callback function to set the selected image.
- `handleFileChange` (function, required): A callback function to handle the file change event.

### Component Structure

1. **Container**: A `Box` component that serves as the container for the file input section.

   - Width, display, alignment, spacing, and styling are defined using inline styles.
   - The background color changes when a file is being dragged (`isDragging` state).

2. **Image Display Section**: Displayed when an image is selected.

   - Displays the selected image's name and a delete button.
   - On clicking the delete button, the image is removed.

3. **Upload Button Section**: Displayed when no image is selected.

   - An icon button triggers the file input dialog when clicked.
   - A button with custom styling and text "Upload image" is also provided.
   - A message "or drop files to upload" is shown below the buttons.

4. **Hidden File Input**: An `input` element with a style set to `display: none`.
   - This element is used to capture file selection events and trigger the `handleFileChange` callback.

### Handlers

- `handleFileRemove`: Removes the currently selected image by calling the `setImage` callback with `null`.

- `handleDragEnter`: Called when a file is dragged over the container. Updates the `isDragging` state.

- `handleDragOver`: Called when a file is dragged over the container. Prevents the default behavior to allow dropping.

- `handleDragLeave`: Called when a file is dragged out of the container. Updates the `isDragging` state.

- `handleDrop`: Called when a file is dropped into the container.
  - Updates the `isDragging` state.
  - Extracts the selected file from the event data and calls the `setImage` callback.

### Example Usage

```jsx static
import FileInput from './FileInput';

// ...

const MyComponent = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		setSelectedImage(selectedFile);
	};

	return (
		<div>
			<FileInput
				image={selectedImage}
				setImage={setSelectedImage}
				handleFileChange={handleFileChange}
			/>
			{/* Other content */}
		</div>
	);
};

export default MyComponent;
```

### Overview

- The component employs the `useState`, `useRef`, and `memo` hooks for optimized rendering.
- It provides a visual indication when a file is being dragged over the container.
- The `handleFileChange` callback handles the actual image file selection.
- Users can also select an image by clicking the provided buttons.

This component enhances the user experience for uploading images in your application.
