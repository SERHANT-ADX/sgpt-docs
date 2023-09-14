The `useGetAllListings` custom hook is designed to fetch a list of listings/rooms data, typically used in a React application. It utilizes the `@tanstack/react-query` library for data fetching and caching. This hook provides information about the loading status, fetched data, and potential errors while retrieving the listings.

### Usage
```javascript
import useGetAllListings from './useGetAllListings';

// Inside a functional component
const { listingsIsLoading, allListings, allListingsError } = useGetAllListings();
```

### Parameters
This custom hook doesn't take any parameters.

### Return Values
- `listingsIsLoading` (Boolean): Indicates whether the data is currently being fetched (true) or not (false).
- `allListings` (Array or null): An array containing the retrieved listings/rooms data or null if the data hasn't been fetched yet.
- `allListingsError` (Object or null): An error object containing details about any error that occurred during the data fetching process, or null if there were no errors.

### Functionality
1. **Importing Dependencies**: The hook starts by importing necessary dependencies like `toast` for displaying notifications, `RoomsAPI` for making API requests, and `@tanstack/react-query` for handling data fetching.

2. **Defining the Custom Hook**: The `useGetAllListings` function is defined, which will be used to fetch the listings data.

3. **Using `useQuery`**: Inside the custom hook, the `useQuery` hook from `@tanstack/react-query` is used to perform the actual data fetching. It takes an object with various properties:

    - `queryKey`: This specifies a unique key for this query. In this case, it's an array with a key named `'getListingsRooms'` and an object containing `filterOptions`, `regions`, and `showOnlyAgentsListings` set to default or null values.

    - `queryFn`: This is an async function that performs the actual data retrieval. It uses the `RoomsAPI.getRoomsPost` method to fetch room listings. It also applies filter options and other parameters as needed.

    - `onError`: This function handles any errors that might occur during the data fetching process. It displays an error notification using `toast.error` and logs the error to the console.

4. **Return Values**: The hook returns three values - `listingsIsLoading`, `allListings`, and `allListingsError`. These values can be used in a React component to handle loading states and display data or errors as needed.

### Example Usage
```jsx static
import useGetAllListings from './useGetAllListings';

function ListingsComponent() {
  const { listingsIsLoading, allListings, allListingsError } = useGetAllListings();

  if (listingsIsLoading) {
    return <div>Loading...</div>;
  }

  if (allListingsError) {
    return <div>Error: {allListingsError.message}</div>;
  }

  return (
    <div>
      {allListings.map((listing) => (
        <div key={listing.id}>{listing.name}</div>
      ))}
    </div>
  );
}

export default ListingsComponent;
```

In this example, the hook is used within a React component to handle the loading and error states and display the fetched data when available.
