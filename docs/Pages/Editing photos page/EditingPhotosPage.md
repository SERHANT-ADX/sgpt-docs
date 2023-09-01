The `EditingPhotosPage` component provides users with an
interface to edit and generate new images using AI-based suggestions. Users can upload images for editing, view
suggestions, and apply various editing options.

### Imports

```jsx static
import React, {memo, useRef} from 'react';
import {sx} from './editingPhotosPage.sx';
import {Box, IconButton, Skeleton, Tooltip, Typography} from '@mui/material';
import {Upload, Download, Reply, Share} from '@mui/icons-material';
import {useEditingPhotosPage} from './EditingPhotosPageProvider';
import FileInput from '../../components/UI/FileInput/FileInput';
import {useAppProvider} from '../Layout/LayoutProvider';
import EditingMenu from '../../components/EditingImagesPage/EditingMenu/EditingMenu';
import GenerationContentModal from '../../components/Modals/GenerationContentModal/GenerationContentModal';
import ProgressiveImage from '../../components/UI/ProgressiveImage/ProgressiveImage';
import EditingPhotosPreview from '../../components/EditingImagesPage/EditingPhotosPreview/EditingPhotosPreview';
import SavePresetModal from '../../components/Modals/SavePresetModal/SavePresetModal';
```

### EditingPhotosPage Component

The `EditingPhotosPage` component allows users to upload and edit images using AI-generated suggestions.

#### Hooks

```jsx static
const inputRef = useRef(null);
const { isMobile } = useAppProvider();
const {
	isBasicMode,
	setIsBasicMode,
	itemForEditing,
	setItemForEditing,
	suggestionItems,
	isGeneratingImage,
	suggestionsAreLoading,
	suggestionsCountForShowing,
	handleDownloadImage,
	getImageToShow,
	handleUploadItemForEditing,
	progress,
	isItemGenerated,
	generatedItemsList,
	handleUndoClick,
	isPresetModalOpen,
	setIsPresetModalOpen,
	handleSavePreset,
	activePreset,
} = useEditingPhotosPage();
```

- `inputRef`: A reference to the input element for file uploads.
- `isMobile`: A boolean indicating whether the screen size is considered mobile.
- `isBasicMode`: A boolean indicating whether the page is in basic editing mode.
- `setIsBasicMode`: A function to set the editing mode.
- `itemForEditing`: The image item currently being edited.
- `setItemForEditing`: A function to set the image item for editing.
- `suggestionItems`: An array of AI-generated image suggestions.
- `isGeneratingImage`: A boolean indicating whether an image is being generated.
- `suggestionsAreLoading`: A boolean indicating whether suggestion items are loading.
- `suggestionsCountForShowing`: The number of suggestion items to display.
- `handleDownloadImage`: A function to initiate the download of the edited image.
- `getImageToShow`: A function to get the image to display.
- `handleUploadItemForEditing`: A function to handle uploading an image for editing.
- `progress`: The progress of the image generation process.
- `isItemGenerated`: A boolean indicating whether the edited item is generated.
- `generatedItemsList`: A list of generated items.
- `handleUndoClick`: A function to undo the last action.
- `isPresetModalOpen`: A boolean indicating whether the preset modal is open.
- `setIsPresetModalOpen`: A function to control the visibility of the preset modal.
- `handleSavePreset`: A function to save the current preset.
- `activePreset`: The currently active preset.

#### Rendering Logic

The component is structured into several sections:

1. **Generation Content Modal**: Displays a modal with generation progress when an image is being generated.
2. **Save Preset Modal**: Displays a modal for saving presets.
3. **Container**: The main container for the component.
4. **Controls**: Contains navigation and actions for editing.
5. **Main Content**: Contains either the editing preview or the image upload section.
6. **Editing Photos Preview**: Displays the edited image preview and options.
7. **Upload Section**: Displays image upload instructions and suggestion items.
8. **\"OR\" Block**: A visual separator between sections.
9. **Uploading Section**: Allows users to upload their own image for editing.
10. **Editing Menu**: Displays editing options.
11.

### Export

```jsx static
export default memo(EditingPhotosPage);
```

The `EditingPhotosPage` component is exported as a memoized component to optimize rendering performance.
This documentation provides a comprehensive overview of the `EditingPhotosPage` component's structure, usage of hooks,
handlers, and rendering logic. It serves as a key
component for users to edit images and generate new images using AI-generated suggestions.
