The `FilterListingsChips` component is responsible for rendering filter chips that represent active filters on the main
page of your application. These chips provide a visual indication of the currently applied filters, making it easier for
users to understand their filter selections.

### Props:

- `regions` (Array): An array of selected regions used for filtering listings.
- `filterOptions` (Object): An object containing various filter options, where keys represent filter categories and
  values represent the selected filter value for that category.
- `filterChipsList` (Array): An array of filter fields, each containing information about the filter category (e.g., "
  city") and its label.
- `handleDeleteFilterField` (Function): A callback function invoked when a user clicks the delete icon on a filter chip
  to remove a filter.
- `isForMainPage` (Boolean, optional): A flag that indicates whether the component is used on the main page. It
  influences the component's styling.

### Usage:

The `FilterListingsChips` component is typically used within the main page of your application to display active
filters. You can include it like this:

```javascript static
<FilterListingsChips
  regions={regionsArray}
  filterOptions={filterOptionsObject}
  filterChipsList={filterChipsListArray}
  handleDeleteFilterField={handleDeleteFilter}
  isForMainPage={true}
/>
```

### Conditional Rendering:

The component includes a conditional check to determine whether to render filter chips based on the presence of active
filters. It evaluates whether there are selected regions or non-empty filter options:

```javascript static
if (!(regions?.length > 0 || Object.values(filterOptions || {}).filter((item) => !!item).length > 0)) {
  return null;
}
```

If there are no active filters, the component returns `null`, indicating that no filter chips should be displayed.

### Mapping and Rendering Filter Chips:

The core functionality of the component involves mapping over the `filterChipsList` and creating filter chips based on
the provided data. Each chip represents a filter field and its associated label. If a filter has a selected value, it
displays that value.

```javascript static
<Box sx={sx.chips}>
  {filterChipsList.map((filterField) => {
    const { city, field, label } = filterField;
    let valueWithFormat;
    if (city) {
      valueWithFormat = '';
    } else {
      valueWithFormat = typeof filterOptions[field] === 'number' ? ': ' + filterOptions[field] : '';
    }

    return (
      <Chip
        sx={sx.chipItem}
        key={label}
        label={`${label}${valueWithFormat}`}
        variant="outlined"
        onDelete={() => handleDeleteFilterField(field || filterField)}
      />
    );
  })}
</Box>
```

Here, the component iterates through `filterChipsList`, generating a chip for each filter field. The chip displays the
label of the filter field and, if applicable, the selected filter value. Users can remove a filter by clicking the
delete icon on a chip.

### Styling Adjustments:

The component also handles styling, with adjustments made based on the `isForMainPage` prop. For example, it applies
different padding styles to the chip container based on whether it's used on the main page or not. These adjustments
improve the component's visual integration into different parts of your application.

```javascript static
<Box
  sx={{
    ...sx.chipsContainer,
    ...(isForMainPage
      ? {
        padding: {
          xs: '0 20px 0 20px',
          lg: '0 110px 0 110px',
        },
      }
      : { padding: '20px 28px 20px 20px' }),
  }}
>
```