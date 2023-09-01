"Sure, here's the detailed documentation for the `SocialMediaToggleCard` component:

### SocialMediaToggleCard Component

The `SocialMediaToggleCard` component represents a card that can be toggled to activate or deactivate a specific social
media platform. It displays the social media platform's icon, label, and visual indication of its activation status.

#### Props

The `SocialMediaToggleCard` component accepts the following props:

- `card`: An object containing information about the social media platform.

  - `type`: A string representing the type of the social media platform (e.g., `'facebook'`, `'twitter'`, etc.).
  - `label`: The label or name of the social media platform.
  - `image`: An optional image URL representing the platform's icon.

- `isActive`: A boolean indicating whether the social media platform is currently active.

- `handleSocialMediaToggle`: A callback function to handle the toggle action when the card is clicked.

#### Example Usage

```jsx static
import SocialMediaToggleCard from './SocialMediaToggleCard'; // Import the component
import image from '../../../assets/images/placeholderImg.png'; // random photo for example

const SocialMediaCardExample = () => {
	const card = {
		type: 'facebook',
		label: 'Facebook',
		image,
	};
	const isActive = true;

	const handleSocialMediaToggle = (type) => {
		// Handle the toggle action
	};

	return (
		<div>
			<SocialMediaToggleCard
				card={card}
				isActive={isActive}
				handleSocialMediaToggle={handleSocialMediaToggle}
			/>
		</div>
	);
};
```

#### Component Structure

The `SocialMediaToggleCard` component is structured as follows:

1. **Common Styles:** Common styles are defined as objects for consistent styling across the component.

2. **Card Component:** The card is created using the `Card` component from the `@mui/material` library. It represents
   the container for the social media toggle card.

3. **Card Click Handling:** The `onClick` event of the card is connected to the `handleSocialMediaToggle` callback
   function, which is triggered when the card is clicked.

4. **Conditional Styling:** The styling of the card is dynamically adjusted based on the `isActive` prop. If the
   platform is active, a border color of `#131176` is applied; otherwise, a border color of `#D0D0D0` is applied.

5. **Icon and Label:** The card contains a box for displaying the platform's icon and label. If an `image` URL is
   provided, an icon image is displayed; otherwise, this section is omitted. The label is displayed in uppercase and
   with specific styling.

#### Memoization

The component is memoized using the `memo` function from React to optimize re-renders when the props do not change.

#### Overall Functionality

The `SocialMediaToggleCard` component provides a visual representation of a social media platform's toggle status. Users
can click the card to activate or deactivate the platform. This component is useful for scenarios where users can manage
their chosen social media platforms for content sharing.
