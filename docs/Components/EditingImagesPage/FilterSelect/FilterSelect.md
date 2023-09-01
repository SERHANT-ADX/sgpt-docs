The `FilterSelect` component provides a customized select input with an optional info tooltip for displaying options to
the user.

### Props

- **name (`string`):** The name of the select input, used for identification and form handling.
- **label (`string`):** The label text that appears above the select input.
- **options (`array`):** An array of objects representing the available options for the select input. Each object must
  have a `value` and a `label`.
- **value (`string`):** The currently selected value for the select input.
- **onChange (`function`):** A callback function that is triggered when the value of the select input changes.
- **info (`string`, optional):** Additional information or description about the select input, shown as a tooltip when
  the info icon is hovered over.

### Usage Example

```jsx static
import FilterSelect from './FilterSelect'; // Import the component

const MyComponent = () => {
	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		// ... other options ...
	];

	const handleChange = (event) => {
		// Handle the change event here
	};

	return (
		<div>
			{/* ... other components ... */}
			<FilterSelect
				name="mySelect"
				label="Select an option"
				options={options}
				value="option1"
				onChange={handleChange}
				info="Select an option from the list"
			/>
			{/* ... other components ... */}
		</div>
	);
};
```

### Component Structure

The `FilterSelect` component is structured as follows:

- A `Box` component that contains the entire select input with label and info tooltip.
- Inside the `Box` component:
  - A `Typography` component to display the label text and an optional info tooltip icon.
  - A `Select` component for the select input itself.
    - The `Select` component is customized with various styling properties.
    - It uses the provided `options` array to render the available options as `MenuItem` components.

### Styling and Customization

- The select input's appearance is customized using inline styling with Material-UI's `sx` prop.
- The `Select` component uses the provided `options` array to render available options as menu items.
- The info tooltip is displayed if the `info` prop is provided.

### Functionality

- The `FilterSelect` component provides a select input with a label and an optional info tooltip.
- Users can choose an option from the available options.
- When the value of the select input changes, the `onChange` callback function is triggered.

### Considerations

- This component relies on Material-UI components and styles for its appearance and functionality.
