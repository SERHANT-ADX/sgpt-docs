The `ChangelogModal` component is a modal dialog that displays the changelog or release notes for a new version of the
application. It is used to inform users about updates, changes, and new features in the application.

### Props:

- `showChangelogModal` (boolean): Indicates whether the modal should be visible or hidden.
- `setShowChangelogModal` (function): A function to toggle the visibility of the modal.

### Usage:

You can use the `ChangelogModal` component as follows:

```javascript static
<ChangelogModal
  showChangelogModal={isChangelogModalVisible}
  setShowChangelogModal={setIsChangelogModalVisible}
/>
```

In this example, `isChangelogModalVisible` is a boolean variable that controls whether the modal is displayed,
and `setIsChangelogModalVisible` is a function to toggle the modal's visibility.

### Modal Content:

The modal contains the following sections:

1. Header Section: Displays the title "VERSION UPDATE" and includes a close button to dismiss the modal.

2. Content Section: Displays the changelog content, which is fetched from a remote source. The content is rendered using
   the `ReactMarkdown` component to support Markdown formatting.

3. Footer Section: Contains a "Close" button to dismiss the modal.

#### Fetching Changelog Content:

The `useEffect` hook is used to fetch the changelog content from a remote source specified by `backendUrl`. It sends a
GET request to retrieve the content and updates the `mainMdContent` state variable with the fetched Markdown content.

#### Closing the Modal:

The modal can be closed by clicking the close button in the header or the "Close" button in the footer. Both buttons
trigger the `setShowChangelogModal` function to hide the modal.

#### Styling:

The modal is styled using the Material-UI `Box` component with various CSS styles to position and format the content. It
is centered on the screen and has a responsive design to fit different screen sizes.

#### Toasts:

The component uses the `react-toastify` library to display toast notifications in case of an error while fetching the
changelog content. If there is an error, a toast with an error message is shown to the user.

### Overall Purpose:

The `ChangelogModal` component serves as a user-friendly way to inform users about updates and changes in the
application. It provides a structured and visually appealing presentation of changelog information, allowing users to
stay informed about the latest developments in the software.