# datagrid-webcomponent

Datagrid Component created with wecomponents.

## Use

```html
<data-grid></data-grid>
```

## Properties

- `rows` - Array of data to display in the grid.
- `cols` - Array of columns to display in the grid.
- `activeFilters` - Active filters to display in the grid.
- `filter` - Object with data to filter the grid.

### Rows

The data is represented as an array that binds with the `key` property of the cols.

```js
[
  {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York",
  },
];
```

### Cols

The cols has the following properties:

- `key` - The key of the data or row.
- `label` - The label of the column.

```js
[
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "city",
    label: "City",
  },
];
```

### Filters

The filters is an object with has a property what is the key of the row and the value is the value to filter.

```js
{
  city: "new",
}
```

### Active Filters

The active Filters is a boolean that indicates if the filter is active.

## Example

```html
<script>
  const row = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      city: "New York",
    },
  ];

  const cols = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "age",
      label: "Age",
    },
    {
      key: "city",
      label: "City",
    },
  ];

  const filter = {
    city: "new",
  };
</script>

<data-grid
  rows="`${row}`"
  cols="`${cols}`"
  activeFilters
  filter="`${filter}`"
></data-grid>
```
