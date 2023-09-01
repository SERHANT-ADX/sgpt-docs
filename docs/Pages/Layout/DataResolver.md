The `DataResolver` component is a utility component that handles the different states of loading data, errors, and
successful data retrieval. It's used to conditionally render content based on the state of the data fetching process.

### Imports

```jsx static
import Loader from '../../components/UI/Loader/Loader';
import AppErrorPage from '../AppErrorPage/AppErrorPage';
import { memo } from 'react';
```

- `Loader`: The UI component responsible for rendering a loading indicator.
- `AppErrorPage`: A custom error page component for displaying application errors.
- `memo`: A function to memoize a component for performance optimization.

### DataResolver Component

The `DataResolver` component receives several props:

- `data`: The fetched data (if successful).
- `error`: An error object (if an error occurred).
- `loading`: A boolean indicating whether data is currently being loaded.
- `children`: The content to be rendered once the data is resolved.

#### Loading State

```jsx static
if (loading) {
	return <Loader />;
}
```

- If `loading` is true, the component renders the `Loader` component, indicating that data is currently being fetched.

#### Error State

```jsx static
if (error) {
	return <AppErrorPage appError={error} />;
}
```

- If `error` is present, the component renders the `AppErrorPage` component and passes the `error` object as a prop to
  display the error information.

#### Success State

```jsx static
return <>{typeof children === 'function' ? children(data) : children}</>;
```

- If neither `loading` nor `error` is true, the component renders its children. If `children` is a function, it's called
  with the `data` prop as an argument. Otherwise, the `children` are rendered as-is.

### Export

```jsx static
export default memo(DataResolver);
```

- The `DataResolver` component is exported as a memoized component to optimize rendering performance.
