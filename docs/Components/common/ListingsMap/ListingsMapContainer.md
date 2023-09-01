The `ListingsMapContainer` component is responsible for rendering and managing a Leaflet map displaying markers for
listings. It allows users to switch between different map styles and provides a control for selecting a baselayer.
Additionally, it supports displaying both standard listings and a selected listing with a distinctive marker.

### Props:

- `listings` (Array): An array of listing objects, each containing information about a property or listing.
- `selectedListingItem` (Object): Information about the currently selected listing item to be highlighted on the map.

### Usage:

The `ListingsMapContainer` component should be included within your application's component hierarchy to display a map
with listing markers. You can use it as follows:

```javascript static
<ListingsMapContainer listings={listingsData} selectedListingItem={selectedListing}/>
```

In this example, `listingsData` is an array of listing objects, and `selectedListing` is an object representing the
currently selected listing to be highlighted on the map.

### Map Styles:

The component supports different map styles, such as "default," "Alidade," and "Stadia." These styles are defined in
the `mapStyles` object at the beginning of the component. Users can switch between these styles using the LayersControl
provided by Leaflet.

### Local Storage:

The component uses the `useLocalStorage` hook to store and retrieve the selected map layer's name in local storage. This
allows the user's selected map style to persist across sessions.

### Map Features:

- `scrollWheelZoom`: Enables zooming in and out using the mouse scroll wheel.
- `wheelPxPerZoomLevel`: Specifies the speed of zooming with the mouse wheel.
- `center`: Sets the initial center coordinates of the map based on the selectedListingItem.
- `zoom`: Sets the initial zoom level of the map.
- `minZoom`: Specifies the minimum zoom level allowed for the map.

#### LayersControl:

The LayersControl component is provided by Leaflet and allows users to toggle between different map layers or styles. It
is positioned at the top right corner of the map.

#### LayersControl.BaseLayer:

This component represents each map style within the LayersControl. Users can select a map style by clicking on the
corresponding radio button.

#### ListingMarker:

The `ListingMarker` component is used to display markers on the map for each listing. It receives information about a
listing and an `isSelected` prop to determine whether the listing should have an active marker.

#### ListingMapControls:

The `ListingMapControls` component is responsible for handling changes in the map's baselayer. It listens for the '
baselayerchange' event and updates the selected map layer in the component's state. This control component allows users
to switch between different map styles.

#### Overall Purpose:

The `ListingsMapContainer` component provides an interactive map display for listings, with support for changing map
styles and highlighting a selected listing. It enhances the user experience by allowing users to explore property
listings visually on a map. Additionally, it remembers the user's preferred map style across sessions for a consistent
experience.