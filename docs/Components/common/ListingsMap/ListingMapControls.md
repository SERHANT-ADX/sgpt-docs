The `ListingMapControls` component is designed to work as a control component within the context of a Leaflet map in a
React application. It listens for a specific map event called 'baselayerchange' and invokes a callback function when
this event occurs. Its primary purpose is to handle changes in the map's baselayer and inform the parent component about
the selected layer.

### Props:

- `setSelectedLayer` (Function): A callback function that is called when the map's baselayer changes. It receives the
  name of the selected baselayer as an argument.

### Usage:

The `ListingMapControls` component is intended to be a child component of the `ListingsMapContainer` component or any
other parent component that manages the Leaflet map. It can be included in the component hierarchy as follows:

```javascript static
<ListingMapControls setSelectedLayer={handleSelectedLayerChange}/>
```

Here, `handleSelectedLayerChange` is a callback function defined in the parent component that will be called when the
baselayer changes.

### Map Event Handling:

The component uses the `useMapEvent` hook provided by `react-leaflet` to listen for the 'baselayerchange' event on the
map. When this event occurs, the component invokes the `setSelectedLayer` callback, passing the name of the selected
baselayer as an argument.

### Event Details:

- 'baselayerchange': This event is triggered when the baselayer of the map changes. The event handler, in this case,
  captures the new baselayer's name and provides it to the parent component for further processing.

Overall Purpose:

The `ListingMapControls` component serves as a bridge between the Leaflet map's event system and the parent component.
It ensures that changes to the map's baselayer are communicated to the parent component by invoking the provided
callback function. This component plays a crucial role in allowing the parent component to respond to baselayer changes
and update its state or perform any necessary actions in response to those changes.