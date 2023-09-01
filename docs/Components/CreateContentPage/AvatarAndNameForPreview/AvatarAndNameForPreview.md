The `AvatarAndNameForPreview` component is a reusable UI component used to display an avatar, name, and status
information in a preview format. It's commonly used in user interfaces where user profiles need to be displayed.

#### Props

The `AvatarAndNameForPreview` component accepts the following props:

- `image` (optional): A URL pointing to the image of the avatar.
- `name`: The name of the user.
- `status`: The status information of the user.
- `socialMediaType` (optional): The social media type of the user, used to determine specific styling.

#### Example Usage

```jsx static
import AvatarAndNameForPreview from './AvatarAndNameForPreview'; // Import the component

const UserProfile = () => {
	const user = {
		name: 'John Doe',
		status: 'Active',
		image: 'https://example.com/user-avatar.jpg',
		socialMediaType: 'facebook', // or null
	};

	return (
		<div>
			<AvatarAndNameForPreview
				name={user.name}
				status={user.status}
				image={user.image}
				socialMediaType={user.socialMediaType}
			/>
		</div>
	);
};
```

#### Component Structure

The `AvatarAndNameForPreview` component is structured as follows:

1. **Root `Box` Container:** A `Box` component that serves as the main container for the avatar, name, and status
   information.

2. **Avatar Container:** A nested `Box` component that contains the avatar. It applies special styling if the social
   media type is TikTok.

3. **Avatar Component:** An `Avatar` component that displays the user's avatar. It takes the `image` prop and applies
   additional styling based on the `socialMediaType`.

4. **Name and Status Container:** A nested `Box` component that displays the user's name and status information.

5. **Name Typography:** A `Typography` component that displays the user's name. It takes the `name` prop and applies
   styling for font size, color, and font weight.

6. **Status Typography:** A `Typography` component that displays the user's status. It takes the `status` prop and
   applies styling for font size, color, and font weight.

#### Statics

- `isTiktok`: A boolean value that is `true` if the `socialMediaType` prop is equal to `SocialMediaTypes.TIKTOK`.

#### Styling

The component utilizes the Material-UI library's styling system. The `avatarSx` object from the `avatar.sx` module is
used to apply styling to the `Avatar` component based on the `socialMediaType`.

#### Memoization

The component is memoized using the `memo` function from React to optimize re-renders when the props do not change.

#### Overall Functionality

The `AvatarAndNameForPreview` component renders an avatar, user name, and status information in a visually appealing
format. It supports special styling for TikTok avatars and is optimized for performance through memoization.

This component is suitable for various scenarios where user profiles need to be displayed with consistent styling and
layout.
