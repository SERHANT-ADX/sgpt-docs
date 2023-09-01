### **CreateContentPageProvider (Component)**

A provider component that wraps the CreateContentPage component and provides context data and functions related to
creating content functionality.

#### **Methods**

**handleResponseUpdate**(prompt: string, promptAdjective: string, id: string, regenerate: boolean)
Handles updating the generated response for a given prompt. It triggers the createSocialPost mutation to generate AI
responses based on the provided prompt and adjective. If regenerate is true, it updates an existing response; otherwise,
it creates a new response.

- `prompt` (string): The text prompt to generate AI responses.
- `promptAdjective` (string): An adjective associated with the prompt.
- `id` (string): The ID of the listing for which the response is being updated.
- `regenerate` (boolean): Indicates whether to regenerate an existing response or create a new one.

**handleCreatePost**(promptAdjective: string)
Handles creating a new content post. It triggers the handleResponseUpdate function to generate and store AI responses
for the content post.

- `promptAdjective` (string): An adjective associated with the prompt.

**handleRegenerateResponse**(prompt: string, promptAdjective: string, id: string)
Handles regenerating a response for a content post. It triggers the handleResponseUpdate function to regenerate AI
responses for the content post based on the provided prompt and adjective.

- `prompt` (string): The text prompt to regenerate AI responses.
- `promptAdjective` (string): An adjective associated with the prompt.
- `id` (string): The ID of the listing for which the response is being regenerated.

### **Effects**

#### **Loading Initial Prompt Based on Social Media Type**

This effect runs whenever the `socialMediaType` state changes. It is responsible for setting the `initialPrompt` state
based
on the selected social media type. It retrieves the corresponding initial prompt value from the `initialPrompts` object
using the `socialMediaType` and updates the `initialPrompt` state accordingly.

#### **Loading Selected Listing Item**

This effect runs whenever the `id` parameter changes. It is responsible for setting the `chosenItem` state based on the
provided id. If there is a valid `id` value, it updates the `chosenItem` state with that value. This effect is useful
for
initializing the selected listing item when the component mounts or when the `id` parameter changes.

#### **Loading User's Chosen Listing and Updating**

This effect runs whenever there are changes to the `UID`, `data`, or `chosenItem`. It fetches and updates
data related to the user's chosen listings and responses from the Firebase Realtime Database. Here's a step-by-step
breakdown of what this effect does:

1. It creates a reference (`chosenListingsRef`) to the user's chosen listings in the Firebase Realtime Database using
   the user's `UID`.
2. It defines an `onDataChange` function that processes the snapshot of the chosen listings data.
3. Within the `onDataChange` function:

    - It retrieves the data from the snapshot and converts it into an array (`chosenListingsList`).
    - It searches for a listing within the array that matches the `chosenItem` (selected listing item) and retrieves its
      generated responses (if available).
    - It reverses the order of the generated responses (`reversedListingsList`) to display them in reverse chronological
      order.
    - It updates the `chosenItem` state with the selected listing's ID.
    - It updates the `generatedResponses` state with the reversed list of generated responses.
    - It updates the `chosenGeneratedResponse` state with the first generated response (if available) to display in the
      UI.

4. It subscribes to changes in the chosen listings data using the `onValue` function from Firebase and executes
   the `onDataChange` function accordingly.
5. It returns a cleanup function that unsubscribes from the chosen listings data changes using the `off` function from
   Firebase.

This effect ensures that the component always has up-to-date data about the chosen listings and their generated
responses from the Firebase Realtime Database.

#### **Loading User's Chosen Listings**

This effect runs whenever there is a change in the `UID`. It is responsible for fetching and updating the user's chosen
listings from the Firebase Realtime Database. Here's a step-by-step breakdown of what this effect does:

1. It starts by setting the `isLoadingListings` state to `true` to indicate that the chosen listings are being loaded.

2. It creates a reference (`chosenListingsRef`) to the user's chosen listings in the Firebase Realtime Database using
   the user's `UID`.

3. It defines an `onDataChange` function that processes the snapshot of the chosen listings data.

4. Within the `onDataChange` function:

    - It retrieves the data from the snapshot and converts it into an array (`chosenListingsList`).
    - It updates the `chosenListings` state with the array of chosen listings.
    - It sets the `isLoadingListings` state to `false`, indicating that the loading is complete.

5. It subscribes to changes in the chosen listings data using the `onValue` function from Firebase and executes
   the `onDataChange` function accordingly.

6. It returns a cleanup function that unsubscribes from the chosen listings data changes using the `off` function from
   Firebase.

This effect ensures that the component maintains an updated list of the user's chosen listings from the Firebase
Realtime Database. The loading state `isLoadingListings` helps manage the loading state of the chosen listings."

### **Context**

The `CreateContentPageProvider` component provides a context that contains various states, functions, and values related
to content creation. This context can be accessed using the `useCreateContentPage` hook within child components.

### **States**

`socialMediaType`: The selected social media type (e.g., "facebook", "twitter").

`showContentChoice`: A boolean indicating whether to show the content choice section.

`showListings`: A boolean indicating whether to show the listings section.

`promptAdjective`: The adjective associated with the current prompt.

`initialPrompt`: The initial text prompt for generating AI responses.

`generatedResponses`: An array of generated AI responses for the selected listing item.

`prevListings`: An array of the user's chosen listings.

`chosenItem`: The ID of the selected listing item.

`isLoading`: A boolean indicating whether data is currently being loaded.

`isError`: A boolean indicating whether an error occurred.

`chosenGeneratedResponse`: The currently chosen generated AI response.

`isAddingModalOpen`: A boolean indicating whether the adding modal is open.

`isLoadingListings`: A boolean indicating whether listing data is being loaded.

`isMobile`: A boolean indicating whether the current view is mobile.

### **Functions**

`socialMediaType related functions`:

- setSocialMediaType,
- setShowContentChoice,
- setShowListings,
- setPromptAdjective,
- setInitialPrompt.

`Listing related functions`:

- setChosenItem,
- setChosenGeneratedResponse.

`Content creation functions`:

- handleCreatePost,
- handleRegenerateResponse.

### **useCreateContentPage()**

A custom hook that allows components to access the context data and functions related to content creation.
