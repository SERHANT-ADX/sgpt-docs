The `ProfileEmptyView` component is a React functional component designed to provide a visually appealing and
informative message along with an icon when there is no data or content to display on a page. It serves as a
user-friendly way to communicate to the user that no data is available for the current view.

### Props

The `ProfileEmptyView` component accepts the following props:

- **text:** A string representing the message or text to be displayed to the user when no data is available. This text
  should convey a clear message explaining why there is no data.

- **Icon:** An icon component that serves as a visual element accompanying the message. This icon helps convey the
  context or nature of the empty state to the user.

### Component Structure

The `ProfileEmptyView` component is structured as follows:

1. **Empty Wrapper (`emptyWrapper`):** The main container for the empty view message and icon.

    - **FadeWrapper:** This is a wrapper component that adds a fade-in animation effect to the content inside it. It
      provides a smooth and visually appealing transition when the empty view is displayed.

    - **Content:** The content of the `ProfileEmptyView` component consists of an icon and a message.

        - **Icon:** An icon component (e.g., `Icon`) that is rendered in gray and is typically used to visually
          represent the context or reason for the empty state.

        - **Message (`text`):** A Typography component displaying the text message passed as a prop. This message should
          be clear and informative, explaining why there is no data available.

### Usage

To use the `ProfileEmptyView` component, follow these steps:

1. Import the `ProfileEmptyView` component into your application.

   ```javascript static
   import ProfileEmptyView from './ProfileEmptyView';
   ```

2. Include the `ProfileEmptyView` component within your application's UI at the appropriate location where you want to
   inform users about the absence of data.

   ```javascript static
   <ProfileEmptyView
     text="No Saved images found"
     Icon={/* Icon component, e.g., an icon from Material-UI */}
   />
   ```

3. Customize the `text` prop to provide a clear and informative message that explains why there is no data available.
   Additionally, choose an appropriate icon (`Icon`) that visually represents the context or reason for the empty state.