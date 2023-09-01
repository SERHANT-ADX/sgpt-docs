The `useGenerateImage` hook is a custom React hook that facilitates the process of generating images through an API
service. It manages the image generation, progress tracking, and related state updates.

### Parameters

- `setItemForEditing` (function): A function to set the item that will be edited.
- `setIsItemGenerated` (function): A function to set the flag indicating whether an item has been generated.
- `setGeneratedItemsList` (function): A function to set the list of generated item URLs.

### Return Value

The `useGenerateImage` hook returns an object containing the following:

- `isGeneratingImage` (boolean): Indicates whether image generation is in progress.
- `progress` (number|string): Tracks the progress of image generation (0 to 100) or 'incomplete'.
- `startImageGeneration` (function): Initiates the image generation process.

### Details

The hook handles the image generation process, including the following steps:

- Initiates image generation through the API.
- Periodically checks the generation progress and updates state accordingly.
- Updates the component's state once the image is fully generated.
- Handles errors and updates UI accordingly.

### Example Usage

```jsx static
import React from 'react';
import useGenerateImage from './useGenerateImage';

function ImageGenerationComponent() {
	const { isGeneratingImage, progress, startImageGeneration } = useGenerateImage({
		setItemForEditing,
		setIsItemGenerated,
		setGeneratedItemsList,
	});

	return (
		<div>
			<button
				onClick={() => startImageGeneration('Your message here')}
				disabled={isGeneratingImage}
			>
				Generate Image
			</button>
			{isGeneratingImage && <p>Generating...</p>}
			{progress !== 'incomplete' && <p>Progress: {progress}%</p>}
		</div>
	);
}
```
