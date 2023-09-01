The `LoginPage` component represents the user login page where users can sign in using Microsoft authentication.

### Imports

```jsx static
import { sx } from './loginPage.sx';
import { Box, Button, Typography } from '@mui/material';
import Authorization from '../../firebase/authorization';
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import MicrosoftLogo from '../../assets/images/Microsoft_logo.png';
import { memo } from 'react';
```

- `sx`: Styles for the component, possibly defined using `@mui/system`.
- `Box`, `Button`, and `Typography`: Material-UI components for building the user interface.
- `Authorization`: A module for handling Microsoft authentication.
- `auth`: The authentication instance from Firebase.
- `onAuthStateChanged`: A function from Firebase that listens to authentication state changes.
- `useNavigate`: A hook from React Router for navigation.
- `MicrosoftLogo`: An image of the Microsoft logo.
- `memo`: A function to memoize a component for performance optimization.

### LoginPage Component

The `LoginPage` component consists of the following sections:

#### Hooks

```jsx static
const navigate = useNavigate();
```

- The `navigate` function is used to navigate to different routes.

#### Handlers

```jsx static
const handleLogin = (e) => {
	e.preventDefault();
	Authorization.loginWithMicrosoft();
};
```

- The `handleLogin` function is called when the "Authorize" button is clicked. It prevents the default behavior of form
  submission and calls the `loginWithMicrosoft` function from the `Authorization` module to initiate the Microsoft
  authentication process.

#### Effects

```jsx static
onAuthStateChanged(auth, (user) => {
	if (user) {
		navigate('/');
	}
});
```

- The `onAuthStateChanged` function listens for changes in the authentication state. When a user is authenticated (
  signed in), it stores the user information in the local storage and navigates to the root ("/") route.

#### UI Rendering

```jsx static
return (
	<Box sx={sx.container}>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'calc(100vh - 70px)',
				width: '360px',
				maxWidth: '90%',
			}}
		>
			<img
				style={{
					justifySelf: 'flex-start',
					width: '100%',
					marginBottom: '20px',
				}}
				src={MicrosoftLogo}
				alt="Microsoft Logo"
			/>
			<Typography
				variant="h4"
				sx={{
					marginBottom: 2,
					opacity: '0.7',
					width: '100%',
					textAlign: 'start',
				}}
			>
				Sign in with Microsoft
			</Typography>
			<Button
				variant="contained"
				color="primary"
				size="large"
				onClick={handleLogin}
			>
				Authorize
			</Button>
		</Box>
	</Box>
);
```

- The component renders a layout using Material-UI's `Box` component. It displays the Microsoft logo, a title, and an "
  Authorize" button.
- The image is sourced from the `MicrosoftLogo` imported image.
- The `handleLogin` function is called when the "Authorize" button is clicked.
- The `Typography` component displays the title "Sign in with Microsoft."
- The `Button` component triggers the `handleLogin` function and serves as the "Authorize" button.

### Export

```jsx static
export default memo(LoginPage);
```

The `LoginPage` component is exported as a memoized component to optimize rendering performance.
