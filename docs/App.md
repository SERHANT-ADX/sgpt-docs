The `App` component serves as the entry point and main configuration hub for the entire application. It sets up
essential components and libraries to ensure a smooth user experience. Let's break down its structure and purpose:

### Import Statements

At the beginning of the file, various modules and components are imported, including styling files, router-related
modules, custom components, and utilities. These imports are essential for the `App` component's functionality.

All pages have dynamic imports for lazy loading and making the application faster:

```jsx static
const MainPageProviderLazy = lazy(() => import('./pages/MainPage/MainPageProvider'));
const CreateContentPageProviderLazy = lazy(() => import('./pages/CreateContentPage/CreateContentPageProvider'));
const ChatPageProviderLazy = lazy(() => import('./pages/ChatPage/ChatPageProvider'));
const LoginPageLazy = lazy(() => import('./pages/LoginPage/LoginPage'));
const EditingPhotosPageProviderLazy = lazy(() => import('./pages/EditingPhotosPage/EditingPhotosPageProvider'));
const ProfilePageProviderLazy = lazy(() => import('./pages/ProfilePage/ProfilePageProvider'));
const ListingItemPageProviderLazy = lazy(() => import('./pages/ListingItemPage/ListingItemPageProvider'));
```

### QueryClient Configuration

```jsx static
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnReconnect: true,
      retry: 3,
      keepPreviousData: true,
      staleTime: 10 * 1000,
      cacheTime: 3 * 60 * 1000,
    },
  },
});
```

The `queryClient` is initialized using the `QueryClient` constructor. This instance manages state and data fetching with
React Query. Default options control query behavior, caching, and retries.

### Router Configuration

```jsx static
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            hasErrorBoundary={true}
            errorElement={<MaintenancePage />}
            defer
            element={
                <Suspense
                    fallback={
                        <Loader
                            sx={{ height: 'calc(100vh)' }}
                            disableShrink={true}
                        />
                    }
                >
                    <LayoutProvider>
                        <Layout />
                    </LayoutProvider>
                </Suspense>
            }
        >
            <Route
                index
                element={
                    <MainPageProviderLazy>
                        <MainPage />
                    </MainPageProviderLazy>
                }
            />
            <Route
                path="create/:id"
                element={
                    <CreateContentPageProviderLazy>
                        <CreateContentPage />
                    </CreateContentPageProviderLazy>
                }
            />
            <Route
                path="login"
                element={<LoginPageLazy />}
            />
            <Route
                path="editing"
                element={
                    <EditingPhotosPageProviderLazy>
                        <EditingPhotosPage />
                    </EditingPhotosPageProviderLazy>
                }
            />
            <Route
                path="listing/:id"
                element={
                    <ListingItemPageProviderLazy>
                        <ListingItemPageRouteProvider />
                    </ListingItemPageProviderLazy>
                }
            />
            <Route
                path="chat/:id"
                element={
                    <ChatPageProviderLazy>
                        <ChatPage />
                    </ChatPageProviderLazy>
                }
            />
            <Route
                path="chat/"
                element={
                    <ChatPageProviderLazy>
                        <ChatPage />
                    </ChatPageProviderLazy>
                }
            />
            w
            <Route
                path="profile/"
                element={
                    <ProfilePageProviderLazy>
                        <ProfilePage />
                    </ProfilePageProviderLazy>
                }
            >
                <Route
                    index
                    element={<ProfileListings />}
                />
                <Route
                    path="images/"
                    element={<ProfileGeneratedImages />}
                />
                <Route
                    path="chats/"
                    element={<ProfileChats />}
                />
                <Route
                    path="listing/:id"
                    element={<ProfileListingOutletProvider />}
                />
                <Route
                    path="filters/"
                    element={<ProfileSavedFilters />}
                />
            </Route>
            <Route
                path="*"
                element={<NotFoundPage />}
            />
        </Route>,
    ),
);
```

The `router` is set up using `createBrowserRouter` and `createRoutesFromElements` from React Router. It defines the
routing structure of the app, including nested routes and error handling.

### App Component

The `App` component wraps the entire application, providing the foundation for its operation. It includes the following
components:

```jsx static
const App = () => (
  <div id="app">
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ThemeProvider>
  </div>
);
```

#### ThemeProvider

This component wraps the app, applying the custom theme from the `theme` object to all Material-UI components. It
ensures consistent styling throughout the app.

#### QueryClientProvider

The `QueryClientProvider` component provides the `queryClient` instance to the app. It allows components to manage data
fetching and state using React Query. The `client` prop passes the `queryClient`.

#### RouterProvider

The `RouterProvider` component supplies the `router` configuration to the app. It enables navigation between different
pages and components using React Router.

#### ReactQueryDevtools

`ReactQueryDevtools` enhances development by providing a UI for inspecting and debugging queries managed by React Query.
The `initialIsOpen` prop keeps the Devtools open by default.

### Conclusion

The `App` component plays a pivotal role in configuring the app's foundation. From styling to data management and
navigation, it ensures a cohesive and user-friendly experience. Understanding its structure and purpose is key to
building and maintaining a successful application.
