The `SavePresetModal` component is designed to provide a user interface for saving or updating presets. It allows users
to enter preset information, including a name, advanced filter settings, and an optional thumbnail image. This component
is intended to be used within a modal dialog.

### Props

- `open` (boolean, required): Controls the visibility of the modal.
- `handleClose` (function, required): Callback function to handle the modal close event.
- `handleSavePreset` (function, required): Callback function to handle the save/update preset event.
- `activePreset` (object, optional): The currently active preset to be updated. If provided, the modal will be used for
  updating the preset.

### Component Structure

1. **Modal Container**: A `Modal` component that encapsulates the entire content of the modal.

   - The modal opens when `open` is `true` and closes using the `handleClose` callback.
   - The modal content is wrapped in a `form` element to enable form submission.

2. **Header**: Displays the title of the modal and a close icon.

   - The title is "Edit Preset" for updating an existing preset or "Save Preset" for creating a new preset.
   - The close icon triggers the `handleClose` callback when clicked.

3. **Content**: Contains sections for preset name, advanced filters, and preset image.

   - Each section is represented by a `Box` component with associated content.

4. **Preset Name Section**: Allows users to input the name of the preset.

   - A `TextField` component is used to capture the preset name.
   - Validation errors are displayed using `error` and `helperText` props.

5. **Advanced Filters Section**: Displays advanced filter settings.

   - The `AdvancedFiltersFormFields` component is used to present advanced filter options.
   - `setFieldValue` and other props are passed to handle advanced filter changes.

6. **Preset Image Section**: Manages preset thumbnail image.

   - The `FileInput` component is used to handle image selection and display.
   - The selected image is previewed, and the user can remove it or upload a new one.

7. **Preview Image Section**: Displays the preview of the selected image.

   - Shown only when an image is selected or when updating an existing preset.
   - Renders an `img` tag with the source set to the `previewImage` calculated using `useMemo`.

8. **Footer**: Contains buttons for canceling and saving the preset.
   - The "Cancel" button triggers the `handleClose` callback.
   - The "Save Preset" or "Update Preset" button triggers the `handleSubmit` callback.

### Handlers

- **`handleSubmitSavingPreset`**: Handles the form submission by calling the `handleSavePreset` callback with the form
  values.

- **`handleFileChange`**: Handles the file selection event for the preset image input.
  - Sets the selected image in the form values using the `setFieldValue` function.

### Effects

- **`useEffect` for Set Initial Values**: Sets the initial form values when an `activePreset` is provided.
  - This effect ensures that the modal is populated with the existing preset's data for updating.

### Main Logic

```javascript static
const initialFormValues = {
	image: null,
	name: '',
	...defaultAdvancedValues,
};

const activePresetInitialValues = useMemo(
	() => ({
		image: activePreset?.thumbnail,
		name: activePreset?.name,
		...getAdvancedFiltersFormValues(activePreset),
	}),
	[activePreset],
);
```

Here, you are initializing two objects that hold the initial form values for the `formik` form. Let's break down each
part:

1. **`initialFormValues`**:

   - This object represents the initial values for the form fields. It includes three properties: `image`, `name`, and
     properties from `defaultAdvancedValues`.
   - `image`: Initialized to `null`, representing no selected image.
   - `name`: An empty string, representing the preset's name.
   - `...defaultAdvancedValues`: This spread operator is used to incorporate properties from `defaultAdvancedValues`
     object. This could include advanced filter settings.

2. **`activePresetInitialValues`**:
   - This object is created using the `useMemo` hook to calculate the initial values when there's an `activePreset`.
   - It sets `image` to the `thumbnail` of the `activePreset`, `name` to the `name` of the `activePreset`, and other
     properties using `getAdvancedFiltersFormValues(activePreset)`.
   - The `activePreset` properties provide a default value for fields when editing a preset.

```javascript static
const handleSubmitSavingPreset = (values) => {
	handleSavePreset(values);
};

const formik = useFormik({
	initialValues: activePreset ? activePresetInitialValues : initialFormValues,
	onSubmit: handleSubmitSavingPreset,
});

const { handleSubmit, setFieldValue, values, errors } = formik;
```

1. **`handleSubmitSavingPreset`**:

   - This function handles the submission of the form. It receives the `values` object containing form field values and
     passes it to the `handleSavePreset` function, presumably to save or update a preset.

2. **`formik` Hook**:

   - The `useFormik` hook is used to manage form state and behavior.
   - `initialValues`: Determines the initial values for the form fields.
   - `onSubmit`: Specifies the function to be called when the form is submitted.

3. **Destructuring**:
   - The `formik` object is destructured to access key functions and properties.
   - `handleSubmit`: This function is triggered when the form is submitted. It manages form submission and validation.
   - `setFieldValue`: This function is used to set the value of a specific form field. In this case, it's used to
     update the selected image.
   - `values`: Represents the current form field values.
   - `errors`: Holds form validation error messages.

```javascript static
const handleFileChange = (e) => {
	const file = e.target.files[0];
	setFieldValue('image', file);
};

const previewImage = useMemo(() => {
	// Calculations to determine previewImage
}, [activePreset, values.image]);
```

1. **`handleFileChange`**:

   - This function is called when a file is selected using the file input.
   - It extracts the selected file and uses `setFieldValue` to update the `image` field in the form.

2. **`useMemo` for `previewImage`**:
   - This hook calculates the value of `previewImage` using complex logic based on various conditions.
   - It checks whether there's an image in `values`, whether it's a URL or a file, whether there's an `activePreset`
     with a thumbnail, and defaults to `progressiveImage` if no other conditions match.
   - The dependencies array `[activePreset, values.image]` ensures that this calculation is recomputed when these
     values change.

In summary, this code snippet initializes form values, sets up form handling using the `useFormik` hook, and manages
image selection, preview, and display logic using various handlers and hooks. The use of `useMemo` optimizes the
calculation of the `previewImage` based on changing dependencies."

### Overview

- The component uses the `useFormik` hook for form management.
- The `useMemo` hook is used to calculate the `previewImage` based on various conditions.
- The modal provides an interface for creating and updating presets with details and a thumbnail image.
- It enhances user experience by providing visual cues for form interactions and image upload.

This component helps users manage their presets efficiently within the application.
