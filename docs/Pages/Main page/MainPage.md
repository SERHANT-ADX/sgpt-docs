The `MainPage` component is responsible for displaying the main listings page. It fetches and displays listings data,
handles pagination, and provides filter options.

### Imports

```jsx static
import { Box, Button, Typography } from '@mui/material';
import RoomMainListItem from '../../components/MainPage/RoomMainListItem/RoomMainListItem';
import ChatGPTlogo from '../../assets/logos/ChatGPT_logo.svg';
import { sx } from './mainPage.sx';
import { useNavigate } from 'react-router-dom';
import MainPageListingsSkeleton from '../../components/Skeletons/MainPageListingsSkeleton';
import ListingFilters from '../../components/MainPage/ListingFilters/ListingFilters';
import { useMainPageProvider } from './MainPageProvider';
import { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '../../components/UI/Loader/Loader';
```

- `Box`, `Button`, `Typography`: UI components from MUI (Material-UI) library.
- `RoomMainListItem`: A component that represents an individual room listing.
- `ChatGPTlogo`: An image asset for the ChatGPT logo.
- `sx`: An object containing styles for the component using Emotion CSS.
- `useNavigate`: A hook from `react-router-dom` for navigating to different routes.
- `MainPageListingsSkeleton`: A component that displays skeleton loading UI for listings.
- `ListingFilters`: A component for filtering listings based on various criteria.
- `useMainPageProvider`: A custom hook for accessing context values from `MainPageProvider`.
- `memo`: Memoizes the component for performance optimization.
- `InfiniteScroll`: A component for implementing infinite scrolling behavior.
- `Loader`: A component that displays a loading spinner.

### MainPage Component

```jsx static
const MainPage = () => {
	//@@viewOn:hooks
	const {
		rooms = [],
		isFetching,
		regions,
		setRegions,
		totalListings,
		setCurrentPage,
		isFilterModalOpen,
		setIsFilterModalOpen,
	} = useMainPageProvider();

	const navigate = useNavigate();
	//@@viewOff:hooks

	//@@viewOn:handlers
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	//@@viewOff:handlers

	return (
		<>
			<ListingFilters
				isFilterModalOpen={isFilterModalOpen}
				setIsFilterModalOpen={setIsFilterModalOpen}
				regions={regions}
				setRegions={setRegions}
				isFetching={isFetching}
				isUsedInMainPage={true}
			/>
			{isFetching ? (
				<MainPageListingsSkeleton />
			) : (
				<Box
					sx={sx.container}
					id="scrollableDiv"
				>
					{/* ... */}
				</Box>
			)}
			<Button
				onClick={() => navigate('/chat')}
				sx={sx.chatGPTButton}
			>
				<img
					src={ChatGPTlogo}
					alt="ChatGPT"
				/>
			</Button>
		</>
	);
};

export default memo(MainPage);
```

- The `MainPage` component displays the main listings page, including filtering, pagination, and infinite scrolling.
- It uses the `useMainPageProvider` hook to access context values and actions provided by `MainPageProvider`.
- The `navigate` function from `useNavigate` is used to navigate to the chat route when the chat button is clicked.

### Scroll To Top Handler

```jsx static
const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

- `scrollToTop` is a handler function that scrolls the window to the top when the "Scroll top" button is clicked.

### Listing Filters Component

```jsx static
<ListingFilters
	isFilterModalOpen={isFilterModalOpen}
	setIsFilterModalOpen={setIsFilterModalOpen}
	regions={regions}
	setRegions={setRegions}
	isFetching={isFetching}
	isUsedInMainPage={true}
/>
```

- The `ListingFilters` component is rendered, allowing users to filter the displayed listings.
- It receives props such as `isFilterModalOpen`, `setIsFilterModalOpen`, `regions`, `setRegions`, `isFetching`,
  and `isUsedInMainPage`.

### Conditional Rendering

```jsx static
{
	isFetching ? (
		<MainPageListingsSkeleton />
	) : (
		<Box
			sx={sx.container}
			id="scrollableDiv"
		>
			{/* ... */}
		</Box>
	);
}
```

- If data is currently being fetched (`isFetching` is `true`), a skeleton loading UI (`MainPageListingsSkeleton`) is
  displayed.
- Otherwise, the actual listings content is displayed within a `Box` component.

### Infinite Scrolling

```jsx static
<InfiniteScroll
	key="infinite-scroll-main-page"
	loadMore={() => setCurrentPage((prev) => prev + 1)}
	initialLoad={false}
	hasMore={rooms.length < totalListings}
	threshold={400}
	useWindow={true}
	loader={
		<Loader
			key="infinite-scroll-loader"
			sx={{ height: '60px' }}
		/>
	}
>
	<Box sx={sx.roomsList}>
		{rooms.map((room) => {
			return (
				<RoomMainListItem
					room={room}
					key={room.Id}
				/>
			);
		})}
	</Box>
</InfiniteScroll>
```

- The `InfiniteScroll` component wraps the list of room listings to enable infinite scrolling behavior.
- `loadMore` is a function that gets called when more content needs to be loaded (triggered by scrolling).
- `initialLoad` is set to `false` to prevent automatic loading when the component mounts.
- `hasMore` determines whether there are more listings to load.
- `threshold` specifies the distance from the bottom at which new content should start loading.
- `useWindow` is set to `true` to make the infinite scrolling work with the window's scroll.
- The `loader` prop specifies a loading spinner to display while loading new content.

### ChatGPT Button

```jsx static
<Button
	onClick={() => navigate('/chat')}
	sx={sx.chatGPTButton}
>
	<img
		src={ChatGPTlogo}
		alt="ChatGPT"
	/>
</Button>
```

- The "ChatGPT" button allows users to navigate to the chat route.
- It displays the ChatGPT logo image (`ChatGPTlogo`) and triggers navigation when clicked.
