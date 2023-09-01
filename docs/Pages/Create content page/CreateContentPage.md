The `CreateContentPage` component provides users with a user interface to create and preview content using various
options. It includes features like selecting a social media platform, generating responses from prompts, choosing
listings, and previewing the generated content.

### Imports

```jsx static
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import ListingItem from '../../components/CreateContentPage/ListingItem/ListingItem';
import { socialMediaButtonsProps } from '../../utils/creationContent/socialMediaTypes';
import { AddBoxOutlined } from '@mui/icons-material';
import sx from './createContentPage.sx';
import SocialMediaToggleCard from '../../components/CreateContentPage/SocialMediaToggleCard/SocialMediaToggleCard';
import { memo, useCallback, useMemo } from 'react';
import PreviewBlock from '../../components/CreateContentPage/PreviewBlocks/PreviewBlock';
import GenerationContentModal from '../../components/Modals/GenerationContentModal/GenerationContentModal';
import GeneratedResponseCard from '../../components/CreateContentPage/GeneratedResponseCard/GeneratedResponseCard';
import AddingListingsModal from '../../components/Modals/AddingListingsModal/AddingListingsModal';
import { getRandomPromptAdjective, promptAdjectives } from '../../utils/creationContent/promptAdjectives';
import ChosenListingsSkeleton from '../../components/Skeletons/ChosenListingsSkeleton';
import GeneratedResponseSkeleton from '../../components/Skeletons/GeneratedCardSkeleton';
import Loader from '../../components/UI/Loader/Loader';
import { useCreateContentPage } from './CreateContentPageProvider';
```

### CreateContentPage Component

The `CreateContentPage` component allows users to create and preview content with various options.

#### Hooks

```jsx static
const {
	socialMediaType,
	setSocialMediaType,
	showContentChoice,
	setShowContentChoice,
	showListings,
	setShowListings,
	prevListings,
	initialPrompt,
	generatedResponses,
	setInitialPrompt,
	handleCreatePost,
	handleRegenerateResponse,
	isLoading,
	chosenItem,
	chosenGeneratedResponse,
	setChosenGeneratedResponse,
	setIsAddingModalOpen,
	promptAdjective,
	setPromptAdjective,
	setChosenItem,
	isLoadingListings,
	isMobile,
} = useCreateContentPage();
```

- `socialMediaType`: The selected social media type (e.g., Facebook, Twitter).
- `setSocialMediaType`: A function to update the selected social media type.
- `showContentChoice`: A boolean indicating whether the content type choices are visible.
- `setShowContentChoice`: A function to toggle the visibility of content type choices.
- `showListings`: A boolean indicating whether the listings are visible.
- `setShowListings`: A function to toggle the visibility of listings.
- `prevListings`: An array of previous listings to choose from.
- `initialPrompt`: The initial prompt for generating content.
- `generatedResponses`: An array of generated responses based on the prompt.
- `setInitialPrompt`: A function to set the initial prompt.
- `handleCreatePost`: A function to create content based on the prompt.
- `handleRegenerateResponse`: A function to regenerate a response.
- `isLoading`: A boolean indicating whether content is being generated.
- `chosenItem`: The chosen listing item.
- `chosenGeneratedResponse`: The chosen generated response.
- `setChosenGeneratedResponse`: A function to set the chosen generated response.
- `setIsAddingModalOpen`: A function to open the "Adding Listings" modal.
- `promptAdjective`: The selected prompt adjective (e.g., "positive", "random").
- `setPromptAdjective`: A function to set the selected prompt adjective.
- `setChosenItem`: A function to set the chosen listing item.
- `isLoadingListings`: A boolean indicating whether listings are being loaded.
- `isMobile`: A boolean indicating whether the screen size is considered mobile.

#### Handlers

```jsx static
const chosenItemPhoto = useMemo(() => {
	const chosenItemObj = prevListings.find((listing) => listing.Id === chosenItem);
	return chosenItemObj?.Media[0];
}, [chosenItem, prevListings]);

const handleSocialMediaToggle = useCallback(
	(type) => {
		setSocialMediaType(type);
	},
	[setSocialMediaType],
);

const isLoadingListingsMemoized = useMemo(() => isLoadingListings, [isLoadingListings]);
const chosenGeneratedResponseMemoized = useMemo(() => chosenGeneratedResponse, [chosenGeneratedResponse]);
```

- `chosenItemPhoto`: A memoized value of the media associated with the chosen listing item.
- `handleSocialMediaToggle`: A callback function to toggle the selected social media type.
- `isLoadingListingsMemoized`: A memoized value indicating whether listings are loading.
- `chosenGeneratedResponseMemoized`: A memoized value of the chosen generated response.

#### View Rendering

```jsx static
return (
	<>
		<AddingListingsModal />
		<GenerationContentModal isOpen={isLoading} />
		<Box sx={sx.container}>
			<Box sx={sx.content}>
				{/* Listings Block */}
				<Box sx={sx.listingsBlock}>{/* ... (listings content) ... */}</Box>

				{/* Create Content Block */}
				<Box sx={sx.createContentBlock}>{/* ... (create content section) ... */}</Box>

				{/* Preview Content Block */}
				<Box sx={sx.previewContentBlock}>{/* ... (preview content section) ... */}</Box>
			</Box>
		</Box>
	</>
);
```

The component is divided into several blocks:

1. **Listings Block**: Displays the listings, toggle to show/hide, and an "Add listing" button.
2. **Create Content Block**: Displays content creation options including content type choice, initial prompt, and
   generated responses.
3. **Preview Content Block**: Displays a preview of the generated content.

#### Listings Block

```jsx static
<Box sx={sx.listingsBlock}>{/* ... (listings content) ... */}</Box>
```

The Listings Block includes the listing items, a button to add new listings, and an "Adding Listings" modal.

#### Create Content Block

```jsx static
<Box sx={sx.createContentBlock}>{/* ... (create content section) ... */}</Box>
```

The Create Content Block includes options for content creation, such as content type choice, initial prompt, and
generated responses.

#### Preview Content Block

```jsx static
<Box sx={sx.previewContentBlock}>{/* ... (preview content section) ... */}</Box>
```

The Preview Content Block displays a preview of the generated content.

### Export

```jsx static
export default memo(CreateContentPage);
```

The `CreateContentPage` component is exported as a memoized component to optimize rendering performance.

This documentation provides a comprehensive overview of the `CreateContentPage` component's structure, usage of hooks,
handlers, and rendering logic. It serves as a key component for users to generate and preview content based on various
options.
