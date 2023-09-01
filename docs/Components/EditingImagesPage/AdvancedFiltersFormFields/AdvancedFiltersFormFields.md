The `AdvancedFiltersFormFields` component displays the form fields for selecting advanced image filter settings. It
includes various filter options, such as engine, version, aspect ratio, chaos level, positive prompts, negative prompts,
seed, weirdness, and quality.

#### Props

- `setFieldValue`: A function to set the form field value.
- `values`: An object containing the current form field values.
- `errors`: An object containing any form field validation errors.
- `itemsPositioningInRaw`: A boolean indicating whether the form fields should be positioned in a row (default
  is `false`).

#### Functionality

1. **Styling and Structure:**

   - The component's styling and layout are determined by the `sectionStyles` variable based on the value
     of `itemsPositioningInRaw`.
   - The version label is derived from the `engine` value, and it is transformed to a human-readable format.

2. **Engine and Version Selection:**

   - The `FilterSelect` component is used to select the engine and version.
   - The `values.engine` value determines the version label's text transformation.

3. **Aspect Ratio Selection:**

   - A list of aspect ratio buttons is rendered using the `filterFieldsOptions.aspectRatio` array.
   - Each button represents an aspect ratio option and highlights if chosen.

4. **Chaos Level Selection:**

   - The `FilterSelect` component is used to select the chaos level, with an additional info tooltip.

5. **Positive and Negative Prompts:**

   - Two `TextField` components allow users to input positive and negative prompts.
   - Info tooltips provide explanations about the prompts' purposes.

6. **Seed and Weirdness Selection:**

   - The `TextField` component is used to input the seed value.
   - The `handleChangeNumericInput` utility function is used to handle numeric input changes.
   - The `FilterSelect` component is used to select the weirdness level, with an additional info tooltip.

7. **Quality Selection:**
   - The `FilterSelect` component is used to select the image quality, with an additional info tooltip.

#### Usage Example

```jsx static
import AdvancedFiltersFormFields from './AdvancedFiltersFormFields'; // Import the component

const AdvancedFilters = () => {
	// ... other code ...

	return (
		<div>
			{/* ... other components ... */}
			<AdvancedFiltersFormFields
				setFieldValue={setFieldValue}
				values={values}
				errors={errors}
			/>
		</div>
	);
};
```

#### Component Structure

The `AdvancedFiltersFormFields` component is structured as follows:

- **Engine and Version Section (`<Box>`):** Contains the `FilterSelect` components for engine and version selection.
- **Aspect Ratio and Chaos Level Section (`<Box>`):** Contains the aspect ratio buttons and the `FilterSelect` component
  for chaos level selection.
- **Prompts Section (`<Box>`):** Contains the positive and negative prompts `TextField` components with info tooltips.
- **Seed and Weirdness Section (`<Box>`):** Contains the seed `TextField` component and the `FilterSelect` component for
  weirdness selection.
- **Quality Section (`<Box>`):** Contains the `FilterSelect` component for image quality selection.

#### Memoization

The `AdvancedFiltersFormFields` component is memoized using the `memo` function from React to optimize re-renders when
the props do not change.
