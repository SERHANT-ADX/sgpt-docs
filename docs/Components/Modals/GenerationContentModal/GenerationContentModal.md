The `GenerationContentModal` component displays a modal with a loading animation and progress bar. It is used to show
the progress of content generation, especially when generating images using AI. The modal contains a Lottie animation,
progress bar, and a percentage indicator.

### Props

- `isOpen`: A boolean indicating whether the modal is open. Default is `false`.
- `progress`: Progress value (number or 'incomplete') for the content generation.
- `isImageGenerating`: A boolean indicating whether image generation is in progress.

### How to Use

```jsx static
import GenerationContentModal from './GenerationContentModal';

// Inside your component
<GenerationContentModal
	isOpen={isModalOpen}
	progress={generationProgress}
	isImageGenerating={isGeneratingImage}
/>;
```

### Component Structure

- `Modal`: The outermost wrapper for creating the generation content modal.
  - `Box sx={...}`: Container for the modal content.
    - `Lottie`: Animation component displaying the AI generation animation.
    - Progress bar and percentage indicator are conditionally rendered based on the `isImageGenerating` prop.

### Hooks and State Management

- `useState`: To manage the width percentage of the progress bar.

### Effects

#### First `useEffect` Block

```jsx static
useEffect(() => {
	if (!isOpen || widthPercentage >= 100 || !isImageGenerating) return;

	let interval = setInterval(() => {
		const shouldIncreaseWidth = !(
			(progress && progress < widthPercentage - 6) ||
			(!progress && widthPercentage === 50)
		);

		if (shouldIncreaseWidth && widthPercentage < 100) {
			setWidthPercentage((prev) => (progress > widthPercentage ? progress : prev + 1));
		}
	}, 800);

	return () => {
		if (interval) clearInterval(interval);
	};
}, [isOpen, setWidthPercentage, progress, widthPercentage]);
```

This `useEffect` block is responsible for updating the progress bar during content generation. Here's a breakdown of its
functionality:

1. The effect is triggered whenever the values in the dependency
   array `[isOpen, setWidthPercentage, progress, widthPercentage]` change.
2. The effect checks several conditions before proceeding:
   - If the modal is not open (`isOpen` is `false`), or if the widthPercentage of the progress bar has reached
     100 (`widthPercentage >= 100`), or if image generation is not in progress (`!isImageGenerating`), then it returns
     early without performing any action.
3. Inside the effect, an interval is created using `setInterval`. This interval function updates the width percentage of
   the progress bar over time.
4. It checks whether the width should be increased based on the conditions:
   - If `progress` is defined and the progress is less than the current `widthPercentage - 6`, or if `progress` is not
     defined and the current `widthPercentage` is less than 50.
5. If the width should be increased (`shouldIncreaseWidth` is `true`) and the `widthPercentage` is less than 100,
   the `setWidthPercentage` function is called to increment the width.
6. The interval runs every 800 milliseconds.
7. A cleanup function is returned, which clears the interval when the component unmounts.

#### Second `useEffect` Block

```jsx static
useEffect(() => {
	if (!isOpen || !isImageGenerating || progress === 'incomplete') return;

	if (progress && typeof progress === 'number') {
		const newValue = progress > widthPercentage ? progress : widthPercentage;
		setWidthPercentage(newValue);
	}
}, [progress, widthPercentage, isOpen, isImageGenerating]);
```

This `useEffect` block updates the progress bar value when the progress value changes. Here's how it works:

1. The effect is triggered whenever the values in the dependency
   array `[progress, widthPercentage, isOpen, isImageGenerating]` change.
2. It checks several conditions before proceeding:
   - If the modal is not open (`isOpen` is `false`), or if image generation is not in progress (`!isImageGenerating`),
     or if the progress is 'incomplete', then it returns early without performing any action.
3. Inside the effect, it checks whether `progress` is defined and its type is a number.
4. If the conditions are met, it calculates a new value based on whether `progress` is greater than the
   current `widthPercentage` or not.
5. The new value is set as the `widthPercentage` using the `setWidthPercentage` function.

#### Third `useEffect` Block

```jsx static
useEffect(() => {
	return () => {
		setWidthPercentage(0);
	};
}, [isOpen]);
```

This `useEffect` block resets the `widthPercentage` to 0 when the modal is closed. Here's the breakdown:

1. The effect is triggered whenever the value of `isOpen` changes.
2. Inside the effect, a cleanup function is returned.
3. The cleanup function sets the `widthPercentage` to 0 using the `setWidthPercentage` function. This ensures that the
   progress bar is reset to 0 when the modal is closed.

These `useEffect` blocks work together to manage and update the progress bar's width based on different conditions and
user interactions. They help provide a smooth and informative experience to users during content generation."

### Static Variables

- `defaultOptions`: Default configuration for the Lottie animation.

### Example Usage

```jsx static
import { memo, useState } from 'react';
import GenerationContentModal from './GenerationContentModal';

const ParentComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [generationProgress, setGenerationProgress] = useState(0);
	const [isGeneratingImage, setIsGeneratingImage] = useState(false);

	// ... other logic ...

	return (
		// ... other JSX ...

		// Rendering the GenerationContentModal component
		<GenerationContentModal
			isOpen={isModalOpen}
			progress={generationProgress}
			isImageGenerating={isGeneratingImage}
		/>

		// ... other JSX ...
	);
};

export default memo(ParentComponent);
```

### Notes

- The `GenerationContentModal` component utilizes the `Lottie` library for animations.
- The progress bar is rendered when `isImageGenerating` is `true`. It shows the progress based on the `widthPercentage`
  state.
- The component provides a visual representation of content generation progress, making it more informative for users.
