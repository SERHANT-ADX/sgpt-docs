The `Layout` component defines the main layout structure of the application. It includes a header, a router outlet for
rendering nested routes, and a footer for the main page.

### Imports

```jsx static
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { memo } from 'react';
```

- `Outlet`: A component from `react-router-dom` used for rendering nested routes.
- `useLocation`: A hook from `react-router-dom` used to access the current location.
- `Header`: The header component of the application.
- `Footer`: The footer component of the application.
- `memo`: A function to memoize a component for performance optimization.

### Layout Component

The `Layout` component defines the structure of the main layout of the application.

#### Hooks and States

```jsx static
const location = useLocation();
```

- `location`: The current location object obtained using the `useLocation` hook. It contains information about the
  current URL pathname.

#### Checking Main Page

```jsx static
const isMainPage = location.pathname === '/';
```

- `isMainPage`: A boolean value indicating whether the current pathname corresponds to the main page (root path `/`).

#### Rendering

```jsx static
return (
	<div style={{ height: '100vh', position: 'absolute', width: '100%' }}>
		<Header />
		<Outlet />
		{isMainPage && <Footer />}
	</div>
);
```

- The `Header` component is rendered at the top of the layout.
- The `Outlet` component is used to render the nested routes defined in the parent route.
- The `Footer` component is conditionally rendered at the bottom of the layout if the current page is the main page.

The `style` property is used to set the layout's height to 100% of the viewport height and ensure it spans the entire
width.

### Export

```jsx static
export default memo(Layout);
```

- The `Layout` component is exported as a memoized component to optimize rendering performance."
