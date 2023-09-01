The `GeneratedResponseCard` component is a reusable UI component used to display a generated response along with action
buttons for copying, regenerating, and choosing the generated content.

#### Props

The `GeneratedResponseCard` component accepts the following props:

- `response`: An object containing the generated response information.
- `setChosenGeneratedResponse`: A function to set the chosen generated response.
- `handleRegenerateResponse`: A function to regenerate the response.

#### Example Usage

```jsx static
import GeneratedResponseCard from './GeneratedResponseCard'; // Import the component

const ContentGenerator = () => {
	const response = {
		id: 1,
		text: 'This is a generated response.',
		prompt: 'Generate',
		promptAdjective: 'short',
	};

	const setChosenGeneratedResponse = (response) => {
		// ... logic to set the chosen response ...
	};

	const handleRegenerateResponse = (prompt, adjective, id) => {
		// ... logic to regenerate the response ...
	};

	return (
		<div>
			<GeneratedResponseCard
				response={response}
				setChosenGeneratedResponse={setChosenGeneratedResponse}
				handleRegenerateResponse={handleRegenerateResponse}
			/>
		</div>
	);
};
```

#### Component Structure

The `GeneratedResponseCard` component is structured as follows:

1. **Card Container:** A `Card` component that serves as the main container for the generated response card. It applies
   styling for width, padding, and layout.

2. **Typography:** A `Typography` component that displays the generated response text. It takes the `response.text` prop
   and applies styling for line height.

3. **Action Buttons Container:** A `Box` component that contains the action buttons for copying, regenerating, and
   choosing the generated content.

4. **Regenerate Button:** An `IconButton` component with a tooltip that regenerates the response when clicked. It takes
   the `handleRegenerateResponse` function as a click handler and applies styling for the icon button.

5. **Copy Button:** An `IconButton` component with a tooltip that copies the response to the clipboard. It takes
   the `handleCopyGeneratedResponse` function as a copy handler and applies styling for the icon button. The button icon
   changes based on whether the content was copied or not.

6. **Choose Button:** An `IconButton` component with a tooltip that allows choosing the generated content. It takes
   the `setChosenGeneratedResponse` function as a click handler and applies styling for the icon button.

#### Hooks

- `isCopied`: A state variable managed by the `useState` hook to track whether the response text was copied to the
  clipboard.

#### Handlers

- `handleCopyGeneratedResponse`: A function that sets the `isCopied` state variable to `true`, indicating that the
  response text was copied.

#### Effects

- The `useEffect` hook is used to automatically reset the `isCopied` state variable to `false` after a delay when the
  response text is copied.

#### Styling

The component utilizes the Material-UI library's styling system. It applies styling for various components such as
the `Card`, `Typography`, and `IconButton` using the provided `sx` styles.

#### Memoization

The component is memoized using the `memo` function from React to optimize re-renders when the props do not change.

#### Overall Functionality

The `GeneratedResponseCard` component provides a user-friendly way to display generated responses along with action
buttons for copying, regenerating, and choosing the content. It offers visual cues such as changing icons for copied
content and tooltips for each action. The component is suitable for content generation interfaces and other scenarios
where generated responses need to be managed.
