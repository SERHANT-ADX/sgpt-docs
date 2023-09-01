The `AdvancedFilters` component provides a user interface for applying and generating advanced image filters. It allows
users to modify various filter settings and generate the filtered image based on the selected filters. Users can also
save and edit presets for the advanced filters.

#### Props

The `AdvancedFilters` component does not accept any props.

#### Functionality

1. **Initialization:**

   - The initial form values for the filters are set using the `defaultAdvancedValues` object.
   - The `useEditingPhotosPage` hook is used to access necessary functions and data from
     the `EditingPhotosPageProvider`.

2. **Form Handling:**

   - The `formik` library is used for form handling, including form validation.
   - The initial form values are set based on the active preset's values or the default values.
   - The `handleSubmitFilters` function is used to handle form submission and generate the filtered image using the
     selected filters.

3. **Preset Handling:**

   - If there's an active preset, its name is displayed as the title; otherwise, the title is set to 'Advanced
     filters'.
   - The 'Edit Preset' button is displayed if there's an active preset; otherwise, the 'Save Preset' button is shown.
     Clicking these buttons opens the preset editing modal.

4. **Form Fields:**

   - The `AdvancedFiltersFormFields` component is used to display the form fields for selecting filter settings.
   - The `setFieldValue`, `errors`, and `values` props are passed to `AdvancedFiltersFormFields` for handling the form
     fields.

5. **Resetting Preset:**

   - The 'Reset preset' button is used to reset the form values to their initial state (active preset or default
     values) and clear any errors.

6. **Generating Image:**

   - The 'Generate' button is used to initiate the generation of the filtered image based on the selected filters.

7. **Error Handling:**
   - When form errors occur during submission, the `react-toastify` library is used to display an error toast with
     details about the first error encountered.

#### Usage Example

```jsx static
import AdvancedFilters from './AdvancedFilters'; // Import the component

const EditingPhotosPage = () => {
	// ... other code ...

	return (
		<div>
			{/* ... other components ... */}
			<AdvancedFilters />
		</div>
	);
};
```

#### Component Structure

The `AdvancedFilters` component is structured as follows:

1. **Container (`<Box>`):** Contains the entire component content.

2. **Form (`<form>`):** Contains the form for selecting filter settings and generating the filtered image.

   - **Title Box (`<Box>`):** Displays the title and preset action button.
   - **Form Group (`<Box>`):** Contains the form fields (`AdvancedFiltersFormFields` component).
   - **Bottom Buttons (`<Box>`):** Contains the 'Reset preset' and 'Generate' buttons.

3. **AdvancedFiltersFormFields Component:** Displays the individual filter settings.

#### Memoization

The `AdvancedFilters` component is memoized using the `memo` function from React to optimize re-renders when the props
do not change.
