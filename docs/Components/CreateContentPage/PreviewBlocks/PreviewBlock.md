The `PreviewBlock` component is a versatile component used to display previews of various content types based on the
provided `type`. It dynamically renders different preview components depending on the given `type` prop.

#### Props

The `PreviewBlock` component accepts the following props:

- `type`: A string representing the type of content preview to display (e.g., `'facebook'`, `'twitter'`, `'instagram'`,
  etc.).
- `image`: An optional image URL to display in the preview.
- `text`: The content text to display in the preview.

#### Example Usage

```jsx static
import PreviewBlock from './PreviewBlock'; // Import the component
import image from '../../../assets/images/placeholderImg.png';

const ContentPreview = () => {
	const type = 'facebook';
	const text = 'Sample content text...';

	return (
		<div>
			<PreviewBlock
				type={type}
				image={image}
				text={text}
			/>
		</div>
	);
};
```

#### Component Structure

The `PreviewBlock` component is structured as follows:

1. **User and Profile Information:** The user's display name and profile photo are retrieved from the `auth.currentUser`
   object.

2. **Component Mapping:** The component uses a `componentMap` object to map different `type` values to their
   corresponding preview components. This mapping allows the component to dynamically determine which preview component
   to render based on the provided `type`.

3. **Rendering:** The component conditionally renders the selected preview component based on the `type`. If a matching
   component is found in the `componentMap`, it is instantiated and passed the necessary props for rendering. If no
   matching component is found, `null` is returned.

#### Components Used

The `PreviewBlock` component dynamically renders various content preview components, such
as `FacebookPreview`, `TwitterPreview`, `InstagramPreview`, `TiktokPreview`, `BlogPostPreview`, `EmailPreview`, `ListingDescription`,
and `VideoscriptPreview`. The choice of which component to render depends on the `type` prop.

#### Memoization

The component is memoized using the `memo` function from React to optimize re-renders when the props do not change.

#### Overall Functionality

The `PreviewBlock` component provides a flexible and reusable way to display different types of content previews. It
encapsulates the logic for selecting and rendering the appropriate preview component based on the provided `type`. This
component is well-suited for content creation applications and platforms where users can preview different types of
content before publishing.
