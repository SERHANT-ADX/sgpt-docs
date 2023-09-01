The `ProgressiveImg` component is designed to display images progressively, starting with a placeholder image and
transitioning to the actual image once it's loaded. This component enhances user experience by reducing the perception
of slow loading times for images.

### Props

- `src` (string, required): The URL of the actual image to be displayed.
- `alt` (string, optional): The alternative text for the image.
- `style` (object, optional): Additional inline styles to be applied to the `img` element.

### Private Styles

- `loadingStyles`: Defines styles for when the placeholder image is displayed (opacity 0%).
- `loadedStyles`: Defines styles for when the actual image is loaded (opacity 100%).

### Component Structure

1. **Placeholder Wrapper**: A `Box` component serving as a wrapper for the placeholder and actual images.

2. **Placeholder Image**: The initial placeholder image displayed while the actual image is being loaded. It's shown
   using `loadingStyles`.

3. **Actual Image**: The actual image to be displayed once it's loaded. It's shown using `loadedStyles`.

### Example Usage

```jsx static
import ProgressiveImg from './ProgressiveImg';

// ...

const MyComponent = () => {
	const actualImageUrl = 'https://example.com/actual-image.jpg';

	return (
		<div>
			<ProgressiveImg
				src={actualImageUrl}
				alt="Example Image"
			/>
			{/* Other content */}
		</div>
	);
};

export default MyComponent;
```

### Overview

- The component utilizes the `useState` and `useEffect` hooks to manage the loading process.
- A placeholder image is initially displayed, followed by a smooth transition to the actual image.
- The `backgroundImage` CSS property is used to display the placeholder image for progressive loading.
- Once the actual image is loaded, it's displayed with a smooth opacity transition effect.
- The `src`, `alt`, and `style` props can be provided to customize the behavior and appearance of the component.

Use the `ProgressiveImg` component to create a seamless loading experience for images, enhancing the visual appeal and
responsiveness of the web application.
