The `ChangelogDialog` component is a dialog box that prompts the user to view the changelog or release notes for a new
version of the application. It provides options to either view the changelog or choose not to view it again in the
future.

### Props:

- `showChangelogDialog` (boolean): Indicates whether the dialog should be visible or hidden.
- `setShowChangelogDialog` (function): A function to toggle the visibility of the dialog.
- `setShowChangelogModal` (function): A function to open the changelog modal when the user agrees to view the changelog.

### Usage:

You can use the `ChangelogDialog` component as follows:

```javascript static
<ChangelogDialog
  showChangelogDialog={isChangelogDialogVisible}
  setShowChangelogDialog={setIsChangelogDialogVisible}
  setShowChangelogModal={setIsChangelogModalVisible}
/>
```

In this example, `isChangelogDialogVisible` is a boolean variable that controls whether the dialog is
displayed, `setIsChangelogDialogVisible` is a function to toggle the dialog's visibility,
and `setIsChangelogModalVisible` is a function to open the changelog modal.

### Dialog Content:

The dialog contains the following sections:

1. **Title Section:** Displays the title "Show new update changelog?" and includes a close button to dismiss the dialog.

2. **Content Section:** Provides a brief message informing the user about the availability of a new update and the
   option to check the changelog to see what has changed.

3. **Actions Section:** Includes two buttons:
    - "Don't Show Again": Clicking this button will hide the dialog and set a local storage flag to prevent the dialog
      from appearing again in the future.
    - "Show": Clicking this button will hide the dialog and open the changelog modal to display the detailed changelog
      content.

**Transition:**

The dialog uses a custom transition effect provided by the `Transition` component from Material-UI. It slides in from
the bottom when it is opened and slides out when closed.

**Closing the Dialog:**

The dialog can be closed by clicking the close button in the title section. It can also be closed by clicking the "Don't
Show Again" or "Show" buttons in the actions section. These buttons trigger the respective `handleDisagree`
and `handleAgree` functions to hide the dialog and perform the necessary actions.

**Local Storage:**

The component uses the `localStorage` API to store a flag (`showUpdateDialog`) that determines whether the dialog should
be displayed again in the future. If the user chooses "Don't Show Again," this flag is set to `'false'`, preventing the
dialog from reappearing.

### Overall Purpose:

The `ChangelogDialog` component serves as a user-friendly way to inform users about updates and changes in the
application. It provides a choice to view the changelog and the option to avoid future reminders about updates.