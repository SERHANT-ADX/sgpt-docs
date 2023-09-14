### EditingPhotosPageContext (Context)

A context used to provide data and functions related to the editing photos page to its child components.

### EditingPhotosPageProvider (Component)

A provider component that wraps the EditingPhotosPage component and provides context data and functions related to the
photo editing functionality.

### **Data and States**

- `isBasicMode`: A boolean state that determines whether the page is in basic mode or advanced mode for editing.
- `itemForEditing`: The image or item being edited.
- `suggestionItems`: List of suggested items for editing.
- `isLoadingChosenListings`: A boolean state indicating if the chosen listings are being loaded.
- `allListingsLoading`: A boolean state indicating if all listings are being loaded.
- `suggestionsAreLoading`: A boolean state indicating if the suggestion items are being loaded.
- `isPresetModalOpen`: A boolean state indicating if the preset modal is open.
- `presets`: List of saved presets.
- `presetsIsLoading`: A boolean state indicating if the presets are being loaded.
- `activePreset`: The currently active preset.
- `generatedItemsList`: List of generated items from editing.
- `isItemGenerated`: A boolean state indicating if an item has been successfully generated.
- `isGeneratingImage`: A boolean state indicating if an image is being generated.
- `progress`: Progress value of image generation.

### **Methods and Functions**

**`getImageToShow`**

**Functionality:**
This function determines the appropriate URL of the image to be displayed for editing, based on the `itemForEditing`
state and its properties. It handles different cases, including external URLs, media objects, and local file objects.

**Purpose:**
To provide the URL of the image that should be displayed for editing, considering various scenarios based on
the `itemForEditing` state.

**Props:**
None

**Return Value:**

- A URL string that points to the image to be displayed for editing.

**`handleGenerateImage`**

**Functionality:**
This function initiates the process of generating an edited image based on the provided filters. It constructs a message
containing filter settings and image URL to be sent for image generation.

**Purpose:**
To trigger the generation of an edited image using the provided filter settings and image URL.

**Props:**

- `filters` (Object): An object containing filter settings for generating an edited image.

**Return Value:**
None

**`handleSavePreset`**

**Functionality:**
This function saves or updates a preset with the provided values. It interacts with the `EditingImagesAPI` to perform
the save/update operation and updates related state variables.

**Purpose:**
To save or update a preset with the provided values, interacting with the API and managing state accordingly.

**Props:**

- `presetValues` (Object): An object containing values/settings for a preset.

**Return Value:**
None

**`handleClickEditPreset`**

**Functionality:**
This function prepares the preset editing modal by updating the state with the preset to be edited and opening the
modal.

**Purpose:**
To set up the preset editing modal and open it for a specific preset.

**Props:**

- `preset` (Object): The preset object that needs to be edited.

**Return Value:**
None

**`handleResetGeneratedItem`**

**Functionality:**
This function resets states related to generated items, specifically setting `isItemGenerated` to `false` and clearing
the `generatedItemsList`.

**Purpose:**
To reset state variables related to generated items, ensuring a clean state for the next operation.

**Props:**
None

**Return Value:**
None

**`handleUndoClick`**

**Functionality:**
This function handles the action of undoing changes, specifically by setting the `itemForEditing` state to `null` and
clearing generated items.

**Purpose:**
To undo changes made during editing, reverting to the original state.

**Props:**
None

**Return Value:**
None

**`handleUploadItemForEditing`**

**Functionality:**
This function handles the process of uploading an image for editing. It validates the uploaded file, saves it, and
updates relevant state variables.

**Purpose:**
To upload an image for editing, ensuring validity, and updating state.

**Props:**

- `e` (Event): The file input change event triggering the upload action.

**Return Value:**
None

**`handleChoosePreset`**

**Functionality:**
This function handles the selection of a preset by updating the `activePreset` state and switching the mode to advanced.

**Purpose:**
To choose a preset, updating state variables and adjusting the user interface.

**Props:**

- `preset` (Object): The preset object that has been selected.

**Return Value:**
None

**`handleDownloadImage`**

**Functionality:**
This function initiates the download of the edited image, retrieving the appropriate URL and triggering the download
process.

**Purpose:**
To enable the user to download the edited image.

**Props:**
None

**Return Value:**
None

Each of these functions plays a crucial role in the overall functionality of the `EditingPhotosPage` component. They
handle various aspects of image editing, preset management, and user interactions, ensuring a smooth and intuitive user
experience.

### Effects
**useAuthorization()** - provider hook that gives auth data

```js static
const { UID } = useAuthorization();
```


#### Effect for Resetting Generated Items

**Functionality:**
This effect is triggered whenever the `itemForEditing` state changes. If there is no image for editing (`itemForEditing`
is falsy), it resets the states related to generated items, specifically setting `isItemGenerated` to `false` and
clearing the `generatedItemsList`.

**Purpose:**
To ensure that when the image for editing changes, any previous generated items and related state variables are reset to
their initial values.

**Dependencies:**

- `itemForEditing`: The image being edited.
- `setIsItemGenerated`: A function to update the `isItemGenerated` state.
- `setGeneratedItemsList`: A function to clear the `generatedItemsList` state.

#### Effect for Managing Chosen Listings

**Functionality:**
This effect handles the retrieval and management of chosen listings for image editing suggestions. It fetches chosen
listings using `CreationAPI.getChosenListings`, and if there are not enough chosen listings, it supplements the
suggestions with additional listings from the user's available listings. The suggestions are then updated in the state.

**Purpose:**
To fetch and manage chosen listings for image editing suggestions, providing a mix of chosen and additional listings.

**Dependencies:**

- `UID`: The user's unique identifier.
- `setIsLoadingChosenListings`: A function to update the `isLoadingChosenListings` state.
- `setSuggestionItems`: A function to update the `suggestionItems` state.
- `chosenListings`: The array of chosen listings.
- `suggestionsCountForShowing`: The count of suggestions to display.
- `getAllListings`: A function to fetch all available listings.
- `CreationAPI.getChosenListings`: A function to fetch chosen listings.

**Cleanup:**
None

These three `useEffect` hooks work together to manage various aspects of the image editing page. They ensure that
generated items are reset when the editing image changes, manage the presets available for editing, and fetch and manage
chosen listings to provide suggestions for image editing.

#### useEditingPhotosPage()

A custom hook that allows components to access the context data and functions related to the editing photos page. It
should be used within a component wrapped by `EditingPhotosPageProvider`.

This component and context combination facilitates photo editing, saving presets, and handling various image
manipulation functionalities. Data is sourced from Firebase Realtime Database and other services for editing and
generating images. States are managed to track the editing process and provide suggestions.
