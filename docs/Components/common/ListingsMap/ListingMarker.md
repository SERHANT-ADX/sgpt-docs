The `ListingMarker` component is responsible for rendering markers on a Leaflet map that represent property listings.
These markers are used to visually indicate the location of property listings on the map. The component allows for
different marker icons based on whether a listing is selected or not.

### Props:

- `listing` (Object): An object containing information about the listing, including its address and coordinates.
- `isSelected` (Boolean, optional): A flag that indicates whether the listing is currently selected. It influences the
  appearance of the marker icon.

### Usage:

The `ListingMarker` component is typically used within a map component to display property listings. It can be included
like this:

```javascript static
<ListingMarker listing={listingData} isSelected={isSelected}/>
```

### Map Interaction:

The component leverages the `react-leaflet` library to interact with the Leaflet map. It uses the `useMap`
and `useMapEvent` hooks to access and interact with the map.

- `useMap`: This hook allows the component to access the map instance. It is used to set the marker icon size based on
  the map's zoom level.

- `useMapEvent`: This hook enables the component to listen for map events, specifically the 'zoom' event. When the map's
  zoom level changes, the component updates the marker icon size accordingly.

### Marker Icons:

The component defines two marker icons, `defaultIcon` and `activeIcon`, using the Leaflet library. These icons are used
to represent the markers on the map. They have different sizes based on the current zoom level of the map:

- `defaultIcon`: This icon is used for regular listings that are not selected. Its size is proportional to the map's
  zoom level.

- `activeIcon`: This icon is used for the currently selected listing. It is slightly larger than the `defaultIcon` and
  also scales with the map's zoom level.

### Marker Rendering:

The component renders a `Marker` from `react-leaflet` at the specified position on the map, determined by the listing's
latitude and longitude coordinates. The `icon` prop is used to set the marker's icon, with `activeIcon` being used
if `isSelected` is `true`, and `defaultIcon` otherwise.

Tooltip and Popup:

- `Tooltip`: A tooltip is displayed when hovering over the marker. It provides a brief description of the listing's
  address (`listing.UnparsedAddress`).

- `Popup`: A popup is displayed when clicking on the marker. It contains more detailed information about the listing,
  including the address and price (`detailedAddress`).

### Zoom-Level Dependent Sizing:

The size of the marker icons (`defaultIcon` and `activeIcon`) is dependent on the map's zoom level. The `useMapEvent`
hook is used to update the `zoom` state variable when the map's zoom level changes. This state variable is then used to
dynamically adjust the size of the icons, ensuring they are appropriately scaled based on the current map zoom level.